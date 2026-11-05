import type { Law } from '../data/law-types';
import { categories } from '../data/law-types';
import { characters } from '../data/characters';
import { lawAliases, type LawAlias } from '../data/law-aliases';

/**
 * 首页检索：把「读者会怎么问」翻译成「命中哪条法则」。
 *
 * 四步，顺序不能反：
 *   1. 归一化（全角转半角、去大小写、标点切词）
 *   2. 先把已知说法（别名表）从查询里吃掉，剩下的词才当自由词
 *   3. 自由词先过一遍虚词，再按语料库判定「这词到底有没有人写过」
 *   4. 每组都必须命中；一组都没剩（全是虚词）时退回二元组模糊匹配
 *
 * 第 3 步是防「空结果」的关键：读者爱写「同事一直问在吗」，
 * 「同事一直问」没人写过，硬要求它命中就一条都搜不出来。
 * 语料库里压根不存在的词直接丢掉，存在的词才当真。
 */

export interface SearchDoc {
  slug: string;
  order: number;
  title: string;
  summary: string;
  scene: string;
  body: string;
}

export interface SearchGroup {
  /** 这组从哪里来：别名表还是自由词。 */
  kind: 'phrase' | 'text';
  /** 任一术语命中即算这组通过。 */
  terms: string[];
  /** 别名组记着自己指向哪条，加分只给这条，不给「碰巧同词」的条目。 */
  slug?: string;
}

export interface SearchResult {
  doc: SearchDoc;
  score: number;
  /** 命中了几个别名组。同分时优先「读者这个说法确实指它」的条目。 */
  phraseHits: number;
  matched: boolean;
  position: number;
}

export const normalizeText = (value: string): string =>
  value.normalize('NFKC').toLocaleLowerCase('zh-CN');

export const stripHtml = (html?: string): string =>
  (html ?? '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

/** 标点当分隔符，不参与匹配。 */
const PUNCTUATION = /[\s，。！？、；：,.;:!?~～…·\-_/\\|（）()「」『』【】\[\]《》<>"'“”‘’]+/u;


const splitWords = (value: string): string[] => value.split(PUNCTUATION).filter(Boolean);

/** 检索字段。LawCard 与测试都从这里取，避免两处各拼一遍。 */
export function lawSearchFields(law: Law) {
  const category = categories.find((item) => item.id === law.category);
  const scene = [...(law.bad?.lines ?? []), ...(law.good?.lines ?? [])]
    .map((line) => `${line.character ? characters[line.character].name : line.name ?? ''} ${line.text}`)
    .join(' ');

  return {
    title: [law.title, law.englishTitle].join(' '),
    summary: law.summary,
    scene,
    // hero 导语短、且常含读者会搜的关键词；解释段整段进来会让首页体积翻三倍。
    body: [
      law.title,
      law.englishTitle,
      law.summary,
      category?.title ?? '',
      category?.description ?? '',
      scene,
      stripHtml(law.hero.leadHtml),
    ].join(' '),
  };
}

export function lawSearchText(law: Law): string {
  const fields = lawSearchFields(law);
  return normalizeText(Object.values(fields).join(' '));
}

/** 服务端把字段算好塞进页面，客户端不再拼字符串。 */
export function buildSearchDocs(laws: Law[]): SearchDoc[] {
  return laws.map((law) => {
    const fields = lawSearchFields(law);
    return {
      slug: law.slug,
      order: law.order,
      title: normalizeText(fields.title),
      summary: normalizeText(fields.summary),
      scene: normalizeText(fields.scene),
      body: normalizeText(fields.body),
    };
  });
}

const PREFIX =
  /^(?:请问一下|请问|请教一下|想问一下|我想问一下|我想问|我想知道|帮我看看|帮我|为什么|为啥|怎么才能|怎么样|怎么|如何|怎样|我应该|我该|应该|到底|究竟|是不是|能不能|要不要|可以|我)(?=\S)/u;
const SUFFIX =
  /(?:该怎么办|怎么办|怎么处理|该怎么说|怎么说|怎么做|怎么回|怎么回复|怎么回应|如何回复|如何回应|如何回答|好不好|可以吗|合适吗|行不行|呢|吗|啊|呀|吧|了)$/u;

/** 自由词里没有信息量的虚词，词首词尾都清一遍。 */
const NOISE_EDGE =
  /^(?:为什么|为啥|怎么才能|怎么样|怎么|如何|怎样|的|了|呢|吗|啊|呀|吧|哦|我|你|他|她|它|对方|别人|有人|大家|这个|那个|该|要|想|给|跟|和|与|在|是)+/u;
const NOISE_TAIL = /(?:的时候|的时候该|时|的|了|呢|吗|啊|呀|吧)$/u;
const NOISE_INFIX = /(?:一直|老是|总是|经常|又|还|就|都|也|大概|可能|到底|究竟|是不是|要不要|能不能|可不可以|怎么样|怎么办)/gu;

const stripNoise = (word: string): string =>
  word.replace(NOISE_INFIX, '').replace(NOISE_EDGE, '').replace(NOISE_TAIL, '').trim();

/**
 * 把「请问我该怎么拒绝同事啊」削成「拒绝同事」。
 * 只用于算「整串命中标题」的加分和兜底匹配；真正匹配走 groupQuery，不吃这一步，
 * 否则「在吗」会被削成「在」。
 *
 * 削到只剩虚词（「请问我该怎么办」）时返回空串：整句都在问怎么办，没有实指内容。
 */
export function questionCore(query: string): string {
  let core = normalizeText(query).replace(PUNCTUATION, ' ').trim();
  for (let round = 0; round < 3; round += 1) {
    const next = core.replace(PREFIX, '').trim().replace(SUFFIX, '').trim();
    if (next === core) break;
    core = next;
  }
  return stripNoise(core) ? core : '';
}

interface PhraseEntry {
  phrase: string;
  terms: string[];
  slug: string;
}

/**
 * 别名表拍平成「说法 -> 术语」的索引，按说法长度倒序。
 * 长的先匹配，「不想去聚餐」就不会被「聚餐」抢走。
 */
export function buildPhraseIndex(aliases: LawAlias[] = lawAliases): PhraseEntry[] {
  return aliases
    .flatMap((alias) =>
      alias.phrases.map((phrase) => ({
        phrase: normalizeText(phrase).replace(PUNCTUATION, ''),
        terms: alias.terms.map(normalizeText),
        slug: alias.slug,
      })),
    )
    .filter((entry) => entry.phrase.length > 0)
    .sort((a, b) => b.phrase.length - a.phrase.length);
}

/**
 * 别名匹配允许词之间夹空格（「在 吗」「拒绝 借钱」），
 * 但不允许夹别的字——夹了就是另一个说法。
 * 查询里的标点在进这一步之前已经被换成空格，所以只放行 \s。
 */
const phrasePattern = (phrase: string): RegExp =>
  new RegExp(
    [...phrase].map((char) => char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('\\s*'),
    'gu',
  );

export function groupQuery(query: string, index: PhraseEntry[] = buildPhraseIndex()): SearchGroup[] {
  // 注意：这里用原查询，不走 questionCore。削尾会把「在吗」变成「在」。
  const flat = normalizeText(query).replace(PUNCTUATION, ' ').trim();
  if (!flat) return [];

  const groups: SearchGroup[] = [];
  let rest = flat;

  for (const entry of index) {
    const pattern = phrasePattern(entry.phrase);
    pattern.lastIndex = 0;
    if (!pattern.test(rest)) continue;
    groups.push({ kind: 'phrase', terms: entry.terms, slug: entry.slug });
    pattern.lastIndex = 0;
    rest = rest.replace(pattern, ' ');
  }

  for (const word of splitWords(rest)) {
    const significant = stripNoise(word);
    if (significant) groups.push({ kind: 'text', terms: [significant] });
  }

  return groups;
}

const TERM_SCORE = { title: 100, summary: 55, scene: 35, body: 12 } as const;

function termScore(doc: SearchDoc, term: string): number {
  if (doc.title.includes(term)) return TERM_SCORE.title;
  if (doc.summary.includes(term)) return TERM_SCORE.summary;
  if (doc.scene.includes(term)) return TERM_SCORE.scene;
  if (doc.body.includes(term)) return TERM_SCORE.body;
  return 0;
}

const PHRASE_BONUS = 60;

function groupScore(doc: SearchDoc, group: SearchGroup): number {
  const best = group.terms.reduce((score, term) => Math.max(score, termScore(doc, term)), 0);
  // 加分只给别名表点名的那条。别的条目靠同一个词也能过组，
  // 但那不算「读者这个说法指它」，不该抢排序。
  return best > 0 && group.slug === doc.slug ? best + PHRASE_BONUS : best;
}

/** 「11」「#11」「第 11 条」直接定位，不用参与打分。 */
export function orderQuery(query: string): number | undefined {
  const match = normalizeText(query)
    .trim()
    .match(/^(?:#|第\s*)?(\d{1,2})(?:[\s]*条)?$/u);
  if (!match) return undefined;
  const order = Number(match[1]);
  return order > 0 ? order : undefined;
}

/** 语料库里没人写过的词，就别拿它卡结果。 */
const corpusHas = (docs: SearchDoc[], term: string): boolean =>
  docs.some((doc) => doc.body.includes(term));

/**
 * 自由词里没人写过的部分直接丢掉；别名组的术语由测试保证存在，不丢。
 * 不丢的话，「同事一直问在吗」会因为「同事一直问」搜不到任何东西。
 */
const keepUsefulGroups = (docs: SearchDoc[], groups: SearchGroup[]): SearchGroup[] =>
  groups.filter(
    (group) => group.kind === 'phrase' || group.terms.some((term) => corpusHas(docs, term)),
  );

/**
 * 兜底：整串在语料里都找不到时，退回二元组。
 * 「我早就说过」对不上「我早就说这个方向不行」的整串，
 * 但「早就」「说过」都还在，能捞回来。
 */
function bigramScore(doc: SearchDoc, core: string): number {
  if (!core) return 0;
  const words = splitWords(core).filter((word) => [...word].length >= 2);
  const grams = new Set<string>();
  for (const word of words) {
    const chars = [...word];
    for (let i = 0; i < chars.length - 1; i += 1) grams.add(chars[i] + chars[i + 1]);
  }
  if (grams.size === 0) return doc.body.includes(core) ? 40 : 0;

  let hits = 0;
  let titleHits = 0;
  for (const gram of grams) {
    if (doc.body.includes(gram)) hits += 1;
    if (doc.title.includes(gram)) titleHits += 1;
  }
  // 至少要盖住三分之一：中文不写空格，整句会变成一个词，
  // 卡一半的话「有人一直追问我要证据」这种长句一条都出不来。
  if (hits * 3 < grams.size) return 0;
  return hits * 12 + titleHits * 40;
}

export function searchLaws(
  docs: SearchDoc[],
  query: string,
  index: PhraseEntry[] = buildPhraseIndex(),
): SearchResult[] {
  const order = orderQuery(query);
  if (order !== undefined) {
    return docs
      .map((doc, position) => ({
        doc,
        position,
        phraseHits: 0,
        matched: doc.order === order,
        score: doc.order === order ? Number.MAX_SAFE_INTEGER : 0,
      }))
      .filter((item) => item.matched)
      .sort((a, b) => b.score - a.score || a.position - b.position);
  }

  const trimmed = query.trim();
  if (!trimmed) {
    return docs.map((doc, position) => ({ doc, position, phraseHits: 0, matched: true, score: 0 }));
  }

  const groups = keepUsefulGroups(docs, groupQuery(trimmed, index));
  const core = questionCore(trimmed).replace(PUNCTUATION, '');

  // 整句都在问「怎么办」（「请问我该怎么办」），没有实指内容：当空查询处理。
  if (groups.length === 0 && !core) {
    return docs.map((doc, position) => ({ doc, position, phraseHits: 0, matched: true, score: 0 }));
  }

  return docs
    .map((doc, position) => {
      if (groups.length === 0) {
        const score = bigramScore(doc, core);
        return { doc, position, phraseHits: 0, matched: score > 0, score };
      }

      const scores = groups.map((group) => groupScore(doc, group));
      const hits = scores.filter((score) => score > 0).length;
      const phraseHits = groups.filter(
        (group, i) => group.slug === doc.slug && scores[i] > 0,
      ).length;
      const matched = hits === groups.length;
      const exactBonus =
        core && core.length >= 2
          ? doc.title.includes(core)
            ? 140
            : doc.summary.includes(core)
              ? 60
              : 0
          : 0;
      return {
        doc,
        position,
        phraseHits,
        matched,
        score: scores.reduce((sum, score) => sum + score, 0) + exactBonus,
      };
    })
    .filter((item) => item.matched)
    .sort((a, b) => b.score - a.score || b.phraseHits - a.phraseHits || a.position - b.position);
}

/**
 * 严格匹配一条都不剩时，放宽成「盖住大部分词」。
 * 「有人一直追问我要证据」这种长句，同一条里凑不齐所有词，
 * 但命中一半的条目显然比空白页有用。放宽结果排在严格结果之后。
 */
export function searchLawsRelaxed(
  docs: SearchDoc[],
  query: string,
  index: PhraseEntry[] = buildPhraseIndex(),
): SearchResult[] {
  const strict = searchLaws(docs, query, index);
  if (strict.length > 0) return strict;

  const groups = keepUsefulGroups(docs, groupQuery(query, index));
  if (groups.length < 2) return strict;

  const need = Math.ceil(groups.length / 2);
  return docs
    .map((doc, position) => {
      const scores = groups.map((group) => groupScore(doc, group));
      const hits = scores.filter((score) => score > 0).length;
      return {
        doc,
        position,
        phraseHits: 0,
        matched: hits >= need,
        score: scores.reduce((sum, score) => sum + score, 0),
      };
    })
    .filter((item) => item.matched)
    .sort((a, b) => b.score - a.score || a.position - b.position);
}



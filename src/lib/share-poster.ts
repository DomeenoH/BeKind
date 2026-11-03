import type { ChatLine, Law } from '../data/law-types';
import { categories } from '../data/law-types';
import { site } from '../data/site';

/**
 * 分享卡的内容模型。
 *
 * 数据层只负责「取哪句话、怎么清洗」，一个字都不截：
 * 长度差异交给排版层的字号档位解决，按字数硬切会把句子切半。
 */

export type PosterMode = 'contrast' | 'statement';

export interface PosterExample {
  tone: 'bad' | 'good';
  label: string;
  text: string;
}

export interface PosterPoint {
  tone: 'bad' | 'good';
  label: string;
  text: string;
}

export interface PosterStatement {
  english: string;
  chinese: string;
  attribution: string;
  points: PosterPoint[];
}

export interface PosterContent {
  slug: string;
  order: number;
  title: string;
  englishTitle: string;
  summary: string;
  categoryLabel: string;
  indexCurrent: string;
  indexTotal: string;
  url: string;
  host: string;
  author: string;
  footerLine: string;
  mode: PosterMode;
  examples: PosterExample[];
  statement?: PosterStatement;
}

const AUTHOR = '多米诺';
const STATEMENT_AUTHOR = '威尔·惠顿';

const NAMED_ENTITIES: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
  hellip: '…',
  mdash: '—',
  ndash: '–',
  ldquo: '“',
  rdquo: '”',
  lsquo: '‘',
  rsquo: '’',
  middot: '·',
  bull: '•',
  times: '×',
  rarr: '→',
  laquo: '«',
  raquo: '»',
};

export function decodeEntities(text: string): string {
  return text.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z][a-zA-Z0-9]*);/g, (match, body: string) => {
    if (body.startsWith('#')) {
      const isHex = body[1] === 'x' || body[1] === 'X';
      const code = Number.parseInt(isHex ? body.slice(2) : body.slice(1), isHex ? 16 : 10);
      if (!Number.isFinite(code) || code <= 0 || code > 0x10ffff) return match;
      return String.fromCodePoint(code);
    }
    return NAMED_ENTITIES[body] ?? match;
  });
}

/** 只做一次实体解码 + 压空白；显式换行要留着，它是文案结构的一部分。 */
export function normalizeText(raw: string): string {
  const lines = decodeEntities(raw)
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .map((line) => line.replace(/[ \t\f\v\u00a0\u3000]+/g, ' ').trim());
  while (lines.length && !lines[0]) lines.shift();
  while (lines.length && !lines[lines.length - 1]) lines.pop();
  return lines.join('\n');
}

const stripTags = (html: string): string =>
  normalizeText(
    decodeEntities(
      html
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/<\/(p|div|li|h\d)>/gi, '\n')
        .replace(/<[^>]+>/g, ''),
    ),
  );

const renderedLine = (line: ChatLine) => stripTags(line.html ?? '');

const isNarration = (line: ChatLine) => {
  const text = line.text.trim();
  const rendered = renderedLine(line);
  if (line.rawHtml) return true;
  if (/^（.*(?:后|直到|过去|保持|没有人|线下偶遇)/.test(text)) return true;
  // 整句括号是舞台说明（「（没回）」），但 html 里有 [图片]/[语音] 占位时那是真实消息。
  if (/^（[\s\S]*）$/.test(text) && (!rendered || rendered === normalizeText(text))) return true;
  return false;
};

const sceneText = (lines: ChatLine[] = []) =>
  lines
    .filter((line) => line.text.trim() || renderedLine(line))
    .filter((line) => !isNarration(line))
    .map((line) => renderedLine(line) || normalizeText(line.text))
    .filter(Boolean);

function parseStatementPoints(specialHtml: string): PosterPoint[] {
  const points: PosterPoint[] = [];
  for (const match of specialHtml.matchAll(/<li[^>]*class="([^"]*)"[^>]*>([\s\S]*?)<\/li>/gi)) {
    const tone = /li-bad/i.test(match[1]) ? 'bad' : /li-good/i.test(match[1]) ? 'good' : null;
    if (!tone) continue;
    const strong = /<strong[^>]*>([\s\S]*?)<\/strong>/i.exec(match[2]);
    const label = strong ? stripTags(strong[1]) : tone === 'bad' ? '不要' : '要';
    const text = stripTags(strong ? match[2].replace(strong[0], '') : match[2]);
    if (text) points.push({ tone, label, text });
  }
  return points;
}

/**
 * 从「这是由威尔·惠顿（Will Wheaton）提出的定律。」里取作者名。
 * 用字符串索引而不是正则：中文全角括号进字符类时，个别解析器会误判。
 */
function parseAttribution(text: string): string {
  const at = text.indexOf('由');
  if (at < 0) return STATEMENT_AUTHOR;
  const tail = text.slice(at + 1).replace(/^\s+/, '');
  let end = tail.length;
  for (const stop of ['（', '(', '，', ',', '。', '\n', ' ']) {
    const index = tail.indexOf(stop);
    if (index >= 0 && index < end) end = index;
  }
  const name = tail.slice(0, end).trim();
  return name && name.length <= 16 ? name : STATEMENT_AUTHOR;
}

function parseStatement(law: Law): PosterStatement | null {
  const lead = law.hero?.leadHtml ?? '';
  const headings = Array.from(lead.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi))
    .map((match) => stripTags(match[1]))
    .filter(Boolean);
  const points = parseStatementPoints(law.specialHtml ?? '');
  const english = headings[0] ?? law.englishTitle;
  const chinese = headings[1] ?? law.summary;
  if (!english && !chinese && !points.length) return null;

  return {
    english,
    chinese,
    attribution: parseAttribution(stripTags(law.specialHtml ?? '')),
    points,
  };
}

export interface PosterContentOptions {
  url?: string;
  host?: string;
}

function hostOf(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return 'bk.0x0.cat';
  }
}

export function getSharePosterContent(
  law: Law,
  total: number,
  options: PosterContentOptions = {},
): PosterContent {
  const category = categories.find((entry) => entry.id === law.category);
  const url = options.url ?? `${site.url}/${law.slug}/`;
  const indexCurrent = String(law.order).padStart(2, '0');
  const indexTotal = String(total).padStart(2, '0');

  const base = {
    slug: law.slug,
    order: law.order,
    title: law.title,
    englishTitle: law.englishTitle,
    summary: normalizeText(law.summary),
    categoryLabel: category ? `${category.eyebrow} ${category.title}` : '',
    indexCurrent,
    indexTotal,
    url,
    host: options.host ?? hostOf(url),
    author: AUTHOR,
    footerLine: site.footerLine,
  } satisfies Omit<PosterContent, 'mode' | 'examples' | 'statement'>;

  const statement = law.layout === 'statement' ? parseStatement(law) : null;
  if (statement) {
    return { ...base, mode: 'statement', examples: [], statement };
  }

  const badLines = sceneText(law.bad?.lines);
  const goodLines = sceneText(law.good?.lines);
  const goodSet = new Set(goodLines);
  const badSet = new Set(badLines);
  // 取「只在一边出现」的那一句：两段相同的寒暄不是这条法则的现场。
  const badPick = badLines.find((line) => !goodSet.has(line)) ?? badLines[0] ?? '';
  const goodPick = goodLines.find((line) => !badSet.has(line)) ?? goodLines[0] ?? '';

  const examples: PosterExample[] = [];
  if (badPick) examples.push({ tone: 'bad', label: '别这样说', text: badPick });
  if (goodPick) examples.push({ tone: 'good', label: '这样说', text: goodPick });

  return { ...base, mode: 'contrast', examples };
}

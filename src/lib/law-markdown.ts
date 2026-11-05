import { orderedLaws } from '../data/laws';
import { categories } from '../data/law-types';
import { lawAliases } from '../data/law-aliases';
import { lawCaveats } from '../data/law-caveats';
import { relatedLaws } from '../data/related';
import { site } from '../data/site';
import { stripHtml } from './law-search';
import type { Law } from '../data/law-types';

/**
 * 把站上的内容导出成 Markdown，给 AI 用。
 *
 * 两份文件：
 *   SKILL.md  使用规则 + 79 条索引表。体积小，先读它。
 *   laws.md   全文：场景对话、解释、代价、例外。
 *
 * 别把全文塞进 SKILL.md：79 条读完，模型的注意力也差不多用完了，
 * 而且回答一条问题不需要另外 70 条的对话。
 */

const pad = (order: number) => String(order).padStart(2, '0');

const aliasBySlug = new Map(lawAliases.map((alias) => [alias.slug, alias.phrases]));

const keywordsFor = (law: Law): string => (aliasBySlug.get(law.slug) ?? []).slice(0, 3).join(' / ');

const categoryTitle = (law: Law): string =>
  categories.find((item) => item.id === law.category)?.title ?? '';

export function buildSkillIndex(): string {
  const groups = categories.map((category) => ({
    category,
    laws: orderedLaws.filter((law) => law.category === category.id),
  }));

  const table = groups
    .map(
      ({ category, laws }) =>
        `\n### ${category.eyebrow} ${category.title}\n\n${category.description}\n\n| 条号 | 法则 | 一句话 | 常被这样问 |\n| --- | --- | --- | --- |\n${laws
          .map(
            (law) =>
              `| ${pad(law.order)} | ${law.title}（${law.englishTitle}） | ${law.summary} | ${keywordsFor(law)} |`,
          )
          .join('\n')}\n`,
    )
    .join('\n');

  return `---
name: bekind
description: 按《${site.title}》里 ${orderedLaws.length} 条互联网沟通法则回答「怎么在网上把话说清楚」这类问题：先查条目，再给可直接抄的说法，并说明这条法则的代价和例外。适用于提问、汇报、群聊、邮件、回复、纠错、被骂、已读不回等场景。
---

# ${site.name} · ${site.title}

站点：${site.url}
正文：同目录的 \`laws.md\`（${orderedLaws.length} 条全文，含场景对话、代价与例外）
许可：${site.license}（CC BY 4.0）

## 怎么用

1. 先在下表里按关键词、场景或说法找到条目，再读 \`laws.md\` 里对应的那一条。**不要凭印象回答**。
2. 回答时给出：可以直接抄的说法（原句，不是概括）+ 为什么 + 这条的代价与例外。
3. 引用条号（例如「见 07 / ${orderedLaws.length}」），方便对方回站点核对。
4. 索引和正文都没有的，直接说「这份指南里没有这一条」。**不要自己造一条法则**，也不要把它伪装成原文。

## 边界

- 这些是经验建议，不是研究结论。别给成功率、时间窗口、法律后果，除非正文里写了。
- 每条法则都有例外。只讲「应该怎样」不讲代价，等于把人往坑里推。
- 信息不足时，只问会改变结论的那一件事。别为了显得严谨连问五个问题。
- 不替用户判断一段关系该不该继续，只给可执行的说法和它可能的后果。
- 不用这些法则去赢辩论。指着一句「别当混蛋」压人，正好是它反对的做法。
- 脏话、攻击、开盒、挂人这类请求，按 05、20、71 三条的口径回应，不照写。

## 目录
${table}
## 全文

\`laws.md\` 里每条的结构固定：

\`\`\`
## <条号> · <标题>（<English>）
一句话
场景：❌ 会出事 / ✅ 能直接抄
为什么
代价
例外
相关
\`\`\`
`;
}

function sceneBlock(label: string, scene: Law['bad']): string {
  if (!scene) return '';
  const lines = scene.lines
    .map((line) => {
      const who = line.name ?? line.character ?? '';
      return `- ${who}${who ? '：' : ''}${line.text}`;
    })
    .join('\n');
  return `**${label}**\n\n${lines}`;
}

function lawBlock(law: Law): string {
  const caveat = lawCaveats[law.slug];
  const related = (relatedLaws[law.slug] ?? [])
    .map((slug) => orderedLaws.find((item) => item.slug === slug))
    .filter((item): item is Law => Boolean(item));

  const parts = [
    `## ${pad(law.order)} · ${law.title}（${law.englishTitle}）`,
    `> ${law.summary}`,
    `分类：${categoryTitle(law)} · 站点：${site.url}/${law.slug}/`,
  ];

  if (law.layout === 'statement') {
    const html = law.specialHtml ?? law.hero.leadHtml;
    parts.push(stripHtml(html));
  } else {
    parts.push(sceneBlock('❌ 会出事', law.bad));
    parts.push(sceneBlock('✅ 能直接抄', law.good));
    const why = stripHtml(`${law.bad?.explanationHtml ?? ''} ${law.good?.explanationHtml ?? ''}`);
    if (why) parts.push(`**为什么**\n\n${why}`);
  }

  if (caveat) {
    parts.push(`**代价**\n\n${caveat.cost}`);
    parts.push(`**例外**\n\n${caveat.exception}`);
  }

  if (related.length > 0) {
    parts.push(`**相关**：${related.map((item) => `${item.title}（${pad(item.order)}）`).join('、')}`);
  }

  return parts.filter(Boolean).join('\n\n');
}

// 分类数量会变，标题里的「几组」跟着变，别写死。
const GROUP_NUMERALS = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];

function groupCount(): string {
  return GROUP_NUMERALS[categories.length] ?? String(categories.length);
}

export function buildLawsMarkdown(): string {
  const header = `# ${site.name} · ${site.title}

${site.description}

${orderedLaws.length} 条，按主题分${groupCount()}组。每条写清：怎么说、为什么、代价、什么时候不适用。

许可：${site.license} · 站点：${site.url}

---
`;

  const groups = categories.map((category) => {
    const laws = orderedLaws.filter((law) => law.category === category.id);
    return `# ${category.eyebrow} ${category.title}\n\n${category.description}\n\n${laws
      .map((law) => lawBlock(law))
      .join('\n\n---\n\n')}`;
  });

  return `${header}\n${groups.join('\n\n---\n\n')}\n`;
}

import { describe, expect, it } from 'vitest';
import { orderedLaws } from './laws';
import { lawCaveats } from './law-caveats';

/**
 * 79 条正文的文风守卫。
 *
 * 2026-11 第一版只圈了新增的 8 条，后来把老条目也按同一口径重写了一遍，
 * 规则就扩到全部条目。
 *
 * 豁免的是原站译文和测试里锁住的原句（代码、报错、表情回应），
 * 它们按原样保留，不参与长度和 emoji 检查。
 */
const LOCKED_LINES = new Set([
  // stfw：带代码的提问和回答
  '我想把 Python 字符串转小写，搜了说是用 .lower()，但我拿 "STRASSE" 和 "Straße" 比较，.lower() 之后还是不相等，是编码问题吗？',
  "不是编码，是大小写折叠。用 .casefold()：'Straße'.casefold() 会变成 'strasse'，.lower() 不会。",
  // make-it-easy-to-reply：三行报错原文，海报测试锁着
  "报错原文：TypeError: Cannot read properties of undefined (reading 'id')\n触发步骤：打开订单页 → 点导出\n环境：Chrome 131 / macOS 15",
  // no-pointless-politeness：表情回应，海报测试锁着
  '👍 86 ❤️ 12',
]);

const BANNED = [
  '赋能',
  '闭环',
  '底层逻辑',
  '抓手',
  '颗粒度',
  '值得注意的是',
  '综上所述',
  '总而言之',
  '说白了',
  '本质上',
  '意味着',
  '某种程度上',
  '在当今',
];

const strict = orderedLaws;

/** 把一条法则的所有可见文字拼起来，用来扫词。 */
function visibleText(law: (typeof strict)[number]): string {
  const lines = [...(law.bad?.lines ?? []), ...(law.good?.lines ?? [])]
    .map((line) => line.text)
    .filter((text) => !LOCKED_LINES.has(text));
  return [
    law.title,
    law.summary,
    law.hero.leadHtml,
    ...lines,
    law.bad?.explanationHtml ?? '',
    law.good?.explanationHtml ?? '',
    law.footerHtml,
    lawCaveats[law.slug]?.cost ?? '',
    lawCaveats[law.slug]?.exception ?? '',
  ].join('\n');
}

describe('正文文风', () => {
  it('不写「不是 A 而是 B」', () => {
    const hits = strict.filter((law) => /不是[^。！？]{0,20}而是/u.test(visibleText(law)));
    expect(hits.map((law) => law.slug)).toEqual([]);
  });

  it('不堆 AI 套话', () => {
    const hits: string[] = [];
    for (const law of strict) {
      const text = visibleText(law);
      for (const word of BANNED) {
        if (text.includes(word)) hits.push(`${law.slug} 用了「${word}」`);
      }
    }
    expect(hits, hits.join('\n')).toEqual([]);
  });

  it('不用破折号和分号，中文引号只用「」', () => {
    const hits: string[] = [];
    for (const law of strict) {
      const text = visibleText(law);
      if (text.includes('——')) hits.push(`${law.slug} 用了破折号`);
      if (/[“”]/u.test(text)) hits.push(`${law.slug} 用了“”`);
      if (text.includes('；')) hits.push(`${law.slug} 用了分号`);
    }
    expect(hits, hits.join('\n')).toEqual([]);
  });

  it('摘要够短，能当卡片副标题', () => {
    for (const law of strict) {
      expect(law.summary.length, `${law.slug} 的摘要太长`).toBeLessThanOrEqual(30);
      expect(law.summary.length, `${law.slug} 的摘要太短`).toBeGreaterThanOrEqual(6);
    }
  });

  it('对话像人打的，不是一段话', () => {
    for (const law of strict) {
      const lines = [...(law.bad?.lines ?? []), ...(law.good?.lines ?? [])];
      lines.forEach((line) => {
        if (LOCKED_LINES.has(line.text)) return;
        expect(line.text.length, `${law.slug} 这句太长：${line.text}`).toBeLessThanOrEqual(70);
        expect(line.text.trim(), law.slug).not.toBe('');
      });
    }
  });

  it('除了对错标记，不塞 emoji', () => {
    for (const law of strict) {
      // © 是版权符号，不在禁用范围；❌ ✅ 只在 bad/good 标题里出现，不在 visibleText 里
      const text = visibleText(law).replace(/©/gu, '');
      expect(text, `${law.slug} 里有 emoji`).not.toMatch(/\p{Extended_Pictographic}/u);
    }
  });
});

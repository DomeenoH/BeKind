import { describe, expect, it } from 'vitest';
import { orderedLaws } from './laws';
import { lawCaveats } from './law-caveats';

/**
 * 2026-11 增补的 8 条，按更严的口径写。
 *
 * 老条目里还留着「而是」三处、破折号二十几处，改动它们属于另一件事，
 * 所以这里只圈新增条目。以后新增的条目加进这个数组，规则自动套上。
 */
const STRICT_SLUGS = [
  'heard-vs-verified',
  'dont-pick-a-side',
  'accept-the-compliment',
  'praise-the-detail',
  'let-them-finish-the-good-news',
  'tentative-is-a-answer',
  'accepted-the-no',
  'ask-before-introducing',
];

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

const strict = STRICT_SLUGS.map((slug) => {
  const law = orderedLaws.find((entry) => entry.slug === slug);
  if (!law) throw new Error(`条目不在了：${slug}`);
  return law;
});

/** 把一条法则的所有可见文字拼起来，用来扫词。 */
function visibleText(law: (typeof strict)[number]): string {
  const lines = [...(law.bad?.lines ?? []), ...(law.good?.lines ?? [])].map((line) => line.text);
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

describe('新增条目的文风', () => {
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

  it('不用破折号，中文引号只用「」', () => {
    const hits: string[] = [];
    for (const law of strict) {
      const text = visibleText(law);
      if (text.includes('——')) hits.push(`${law.slug} 用了破折号`);
      if (/[“”]/u.test(text)) hits.push(`${law.slug} 用了“”`);
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

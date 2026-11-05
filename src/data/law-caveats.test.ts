import { describe, expect, it } from 'vitest';
import { lawCaveats } from './law-caveats';
import { orderedLaws } from './laws';

const entries = Object.entries(lawCaveats);

describe('代价与例外', () => {
  it('每条法则都有，且不多出孤儿条目', () => {
    const slugs = new Set(orderedLaws.map((law) => law.slug));
    const missing = orderedLaws.filter((law) => !lawCaveats[law.slug]).map((law) => law.slug);
    expect(missing, `这些法则还没有代价/例外：${missing.join(', ')}`).toEqual([]);

    const orphans = entries.filter(([slug]) => !slugs.has(slug)).map(([slug]) => slug);
    expect(orphans, `这些 slug 在法则表里不存在：${orphans.join(', ')}`).toEqual([]);
  });

  it('两段都要有实质内容，不能糊弄', () => {
    for (const [slug, caveat] of entries) {
      expect(caveat.cost.length, `${slug} 的代价太短`).toBeGreaterThanOrEqual(12);
      expect(caveat.exception.length, `${slug} 的例外太短`).toBeGreaterThanOrEqual(12);
      expect(caveat.cost.length, `${slug} 的代价太长`).toBeLessThanOrEqual(80);
      expect(caveat.exception.length, `${slug} 的例外太长`).toBeLessThanOrEqual(80);
      // 「视情况而定」这类话等于没写
      expect(caveat.exception).not.toMatch(/^(?:视情况|看情况|因人而异|具体问题具体分析)/);
    }
  });

  it('不出现「注意」「仅供参考」这类免责腔', () => {
    for (const [slug, caveat] of entries) {
      expect(caveat.cost, slug).not.toMatch(/^(?:注意|请|需要提醒)/);
      expect(caveat.exception, slug).not.toMatch(/^(?:注意|请|需要提醒)/);
    }
  });

  it('不用 emoji', () => {
    expect(JSON.stringify(lawCaveats)).not.toMatch(/\p{Extended_Pictographic}/u);
  });

  it('没有两条共用一个模板', () => {
    const costs = new Set(entries.map(([, caveat]) => caveat.cost));
    const exceptions = new Set(entries.map(([, caveat]) => caveat.exception));
    expect(costs.size).toBe(entries.length);
    expect(exceptions.size).toBe(entries.length);
  });
});

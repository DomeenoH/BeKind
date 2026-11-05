import { describe, expect, it } from 'vitest';
import { orderedLaws } from './laws';
import { situations } from './law-types';
import { lawSituations } from './law-situations';

const slugs = new Set(orderedLaws.map((law) => law.slug));
const ids = new Set(situations.map((item) => item.id));
const entries = Object.entries(lawSituations);

describe('场合标注', () => {
  it('只标真实存在的条目', () => {
    for (const [slug] of entries) {
      expect(slugs.has(slug), `多出来的 slug：${slug}`).toBe(true);
    }
  });

  it('只出现已登记的场合', () => {
    for (const [slug, list] of entries) {
      expect(list.length, `${slug} 标了空数组，要么删掉要么给个场合`).toBeGreaterThan(0);
      for (const id of list) {
        expect(ids.has(id), `${slug} 用了没登记的场合：${id}`).toBe(true);
      }
    }
  });

  it('同一条不重复标同一个场合', () => {
    for (const [slug, list] of entries) {
      expect(new Set(list).size, `${slug} 场合写重了`).toBe(list.length);
    }
  });

  // 每个筛选按钮点下去都得有东西。少于 8 条的场合说明这轴切得不对。
  it('每个场合至少覆盖 8 条', () => {
    for (const { id } of situations) {
      const count = entries.filter(([, list]) => list.includes(id)).length;
      expect(count, `${id} 只有 ${count} 条`).toBeGreaterThanOrEqual(8);
    }
  });

  // 场合是「往里收」，不是全集分类。认知偏差类本来就不挑地方，
  // 但如果过半都空着，说明标注偷懒了，筛选会大面积漏东西。
  it('留空的条目不超过四分之一', () => {
    const tagged = entries.length;
    expect(tagged / orderedLaws.length).toBeGreaterThanOrEqual(0.75);
  });

  it('单条最多挂两个场合', () => {
    for (const [slug, list] of entries) {
      expect(list.length, `${slug} 挂了 ${list.length} 个场合，筛选时会被当成万金油`).toBeLessThanOrEqual(2);
    }
  });
});

import { describe, expect, it } from 'vitest';
import { lawAliases } from './law-aliases';
import { orderedLaws } from './laws';
import { lawSearchText, normalizeText } from '../lib/law-search';

const bySlug = new Map(orderedLaws.map((law) => [law.slug, law]));

describe('检索别名表', () => {
  it('每条别名都指向存在的法则', () => {
    for (const alias of lawAliases) {
      expect(bySlug.has(alias.slug), `未知 slug：${alias.slug}`).toBe(true);
    }
  });

  it('每条法则至少有一个说法', () => {
    const covered = new Set(lawAliases.map((alias) => alias.slug));
    const missing = orderedLaws.filter((law) => !covered.has(law.slug)).map((law) => law.slug);
    expect(missing, `这些法则没有别名，读者搜口语说法会漏：${missing.join(', ')}`).toEqual([]);
  });

  it('terms 必须是正文里真实存在的子串', () => {
    const broken: string[] = [];
    for (const alias of lawAliases) {
      const law = bySlug.get(alias.slug);
      if (!law) continue;
      const text = lawSearchText(law);
      for (const term of alias.terms) {
        if (!text.includes(normalizeText(term))) {
          broken.push(`${alias.slug} 的 term「${term}」不在正文里`);
        }
      }
    }
    expect(broken, broken.join('\n')).toEqual([]);
  });

  it('同一说法不能指向两条法则', () => {
    const seen = new Map<string, string>();
    const conflicts: string[] = [];
    for (const alias of lawAliases) {
      for (const phrase of alias.phrases) {
        const key = normalizeText(phrase);
        const owner = seen.get(key);
        if (owner && owner !== alias.slug) {
          conflicts.push(`「${phrase}」同时指向 ${owner} 和 ${alias.slug}`);
        }
        seen.set(key, alias.slug);
      }
    }
    expect(conflicts, conflicts.join('\n')).toEqual([]);
  });

  it('短语不能空、不能重复堆在同一条里', () => {
    for (const alias of lawAliases) {
      expect(alias.phrases.length).toBeGreaterThan(0);
      expect(alias.terms.length).toBeGreaterThan(0);
      expect(new Set(alias.phrases.map(normalizeText)).size).toBe(alias.phrases.length);
    }
  });
});

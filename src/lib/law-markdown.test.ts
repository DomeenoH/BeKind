import { describe, expect, it } from 'vitest';
import { orderedLaws } from '../data/laws';
import { categories } from '../data/law-types';
import { buildLawsMarkdown, buildSkillIndex } from './law-markdown';

const skill = buildSkillIndex();
const laws = buildLawsMarkdown();

describe('Markdown 导出', () => {
  it('SKILL.md 带合法的 frontmatter', () => {
    expect(skill.startsWith('---\n')).toBe(true);
    expect(skill).toMatch(/\nname: bekind\n/);
    expect(skill).toMatch(/\ndescription: .+\n/);
    // description 是单行，换行会把 YAML 拆坏
    const front = skill.slice(4, skill.indexOf('\n---', 4));
    expect(front.split('\n').filter(Boolean).every((line) => /^[a-z]+: /.test(line))).toBe(true);
  });

  it('索引表里每条法则都出现一次', () => {
    for (const law of orderedLaws) {
      expect(skill, `缺 ${law.slug}`).toContain(`| ${String(law.order).padStart(2, '0')} |`);
    }
    const rows = skill.split('\n').filter((line) => /^\| \d\d \|/.test(line));
    expect(rows).toHaveLength(orderedLaws.length);
  });

  it('全文里每条法则都有标题、代价和例外', () => {
    for (const law of orderedLaws) {
      const heading = `## ${String(law.order).padStart(2, '0')} · ${law.title}`;
      expect(laws, `缺 ${law.slug}`).toContain(heading);
    }
    expect(laws.match(/\*\*代价\*\*/g)).toHaveLength(orderedLaws.length);
    expect(laws.match(/\*\*例外\*\*/g)).toHaveLength(orderedLaws.length);
  });

  it('不残留 HTML 标签', () => {
    expect(laws).not.toMatch(/<div|<span|<p>|<strong>/);
  });

  it('不出现空小节', () => {
    expect(laws).not.toMatch(/\*\*为什么\*\*\s*\n\s*\n\*\*/);
  });

  // 分类数量改过一次（三组 → 四组），标题里的数字写死过一次。
  it('抬头里的分组数量跟分类表一致', () => {
    const numerals = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    expect(laws).toContain(`按主题分${numerals[categories.length]}组`);
    for (const category of categories) {
      expect(laws).toContain(`# ${category.eyebrow} ${category.title}`);
    }
  });
});

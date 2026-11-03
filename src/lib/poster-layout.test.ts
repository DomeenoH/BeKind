import { describe, expect, it } from 'vitest';
import { orderedLaws } from '../data/laws';
import { getSharePosterContent } from './share-poster';
import {
  buildPlan,
  graphemes,
  posterMetrics,
  widthOf,
  wrapText,
  type MeasureFn,
  type PosterFormat,
} from './poster-layout';

// 近似真实字体度量：汉字 1em、拉丁 0.55em、空格 0.3em。
// 只用于验证「66 条都能落档、不越界」，真实换行在浏览器里由 canvas 量。
const measure: MeasureFn = (text, size, weight) => {
  let width = 0;
  for (const char of text) {
    if (/[\u3000-\u9fff\uf900-\ufaff\uff00-\uffef]/.test(char)) width += 1;
    else if (char === ' ') width += 0.3;
    else width += weight === 700 ? 0.58 : 0.55;
  }
  return width * size;
};

const formats: PosterFormat[] = ['portrait', 'square'];

describe('poster layout', () => {
  it('keeps every law inside the card for both formats', () => {
    orderedLaws.forEach((law) => {
      const content = getSharePosterContent(law, orderedLaws.length);
      formats.forEach((format) => {
        const plan = buildPlan(content, format, measure);
        const metrics = posterMetrics(format);
        const label = `${law.slug}:${format}`;

        expect(plan.title.size, label).toBeGreaterThanOrEqual(format === 'portrait' ? 40 : 34);
        expect(
          widthOf(plan.title.text, {
            maxWidth: 452,
            size: plan.title.size,
            weight: 700,
            measure,
            letterSpacingEm: -0.005,
          }),
          label,
        ).toBeLessThanOrEqual(452);

        if (plan.compare) {
          expect(plan.compare.blocks.length, label).toBe(2);
          expect(plan.compare.truncated, label).toBe(false);
          expect(plan.compare.bottom, label).toBeLessThanOrEqual(metrics.contentLimit + 0.5);
        }

        if (plan.statement) {
          expect(plan.statement.points.length, label).toBe(3);
          expect(plan.statement.bottom, label).toBeLessThanOrEqual(metrics.footerRuleY - 8);
        }
      });
    });
  });

  it('wraps long quotes without cutting words or starting with closing punctuation', () => {
    const lines = wrapText('这是一个很长的句子，里面包含（括号）和 English words。', {
      maxWidth: 120,
      size: 20,
      weight: 400,
      measure,
    });
    expect(lines.length).toBeGreaterThan(1);
    lines.forEach((line) => {
      expect(line.startsWith('，')).toBe(false);
      expect(line.startsWith('。')).toBe(false);
      expect(line.startsWith('）')).toBe(false);
    });
  });

  it('keeps explicit line breaks as hard breaks', () => {
    const lines = wrapText('第一段\n第二段\n第三段', {
      maxWidth: 400,
      size: 20,
      weight: 400,
      measure,
    });
    expect(lines).toEqual(['第一段', '第二段', '第三段']);
  });

  it('breaks an over-long token instead of overflowing', () => {
    const lines = wrapText('https://example.com/a/very/long/path/that/keeps/going/forever', {
      maxWidth: 160,
      size: 16,
      weight: 400,
      measure,
    });
    expect(lines.length).toBeGreaterThan(1);
    lines.forEach((line) => {
      expect(measure(line, 16, 400)).toBeLessThanOrEqual(160);
    });
  });

  it('does not leave a one-character last line', () => {
    const law = orderedLaws.find((entry) => entry.slug === 'straight-talk-is-not-rudeness');
    if (!law) throw new Error('Missing straight-talk fixture');
    const content = getSharePosterContent(law, orderedLaws.length);
    const good = content.examples.find((entry) => entry.tone === 'good');
    if (!good) throw new Error('Missing good example');

    const lines = wrapText(good.text, {
      maxWidth: 452,
      size: 24,
      weight: 700,
      measure,
      letterSpacingEm: 0.01,
    });
    expect(graphemes(lines[lines.length - 1]).length).toBeGreaterThanOrEqual(3);
  });
});

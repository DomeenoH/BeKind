import { describe, expect, it } from 'vitest';
import { orderedLaws } from '../data/laws';
import { getSharePosterContent } from './share-poster';

describe('share poster content', () => {
  it('uses the distinguishing scene content for the wrong/right comparison', () => {
    const law = orderedLaws.find((entry) => entry.slug === 'no-pointless-politeness');
    if (!law) throw new Error('Missing no-pointless-politeness fixture');

    const content = getSharePosterContent(law, orderedLaws.length);
    const bad = content.examples.find((entry) => entry.tone === 'bad');
    const good = content.examples.find((entry) => entry.tone === 'good');

    expect(bad?.text).toBe('收到');
    expect(good?.text).toBe('👍 86 ❤️ 12');
    expect(bad?.text).not.toContain('其他 48 个人');
  });

  it('keeps the whole sentence and its explicit line breaks', () => {
    const law = orderedLaws.find((entry) => entry.slug === 'make-it-easy-to-reply');
    if (!law) throw new Error('Missing make-it-easy-to-reply fixture');

    const good = getSharePosterContent(law, orderedLaws.length).examples.find(
      (entry) => entry.tone === 'good',
    );
    expect(good).toBeTruthy();
    const text = good!.text;

    // v1 会把这句 84 字之后切掉，把「点导出」留在结尾。
    expect(text).toBe(
      "报错原文：TypeError: Cannot read properties of undefined (reading 'id')\n" +
        '触发步骤：打开订单页 → 点导出\n环境：Chrome 131 / macOS 15',
    );
    expect(text.split('\n')).toHaveLength(3);
    expect(text.endsWith('…')).toBe(false);
  });

  it('never truncates a comparison example', () => {
    orderedLaws
      .filter((law) => law.layout === 'comparison')
      .forEach((law) => {
        const content = getSharePosterContent(law, orderedLaws.length);
        content.examples.forEach((example) => {
          expect(example.text.length, law.slug).toBeGreaterThan(0);
        });
      });
  });

  it('shows the rendered image placeholder instead of the stage direction', () => {
    const law = orderedLaws.find((entry) => entry.slug === 'make-it-easy-to-reply');
    if (!law) throw new Error('Missing make-it-easy-to-reply fixture');

    const bad = getSharePosterContent(law, orderedLaws.length).examples.find(
      (entry) => entry.tone === 'bad',
    );
    expect(bad?.text).toBe('[图片：翻拍的报错屏幕]');
    expect(bad?.text).not.toContain('倾斜的手机翻拍');
  });

  it('parses the statement law into english, chinese, author and three points', () => {
    const law = orderedLaws.find((entry) => entry.slug === 'wheatons-law');
    if (!law) throw new Error('Missing wheatons-law fixture');

    const content = getSharePosterContent(law, orderedLaws.length);

    expect(content.mode).toBe('statement');
    expect(content.statement?.english).toBe("Don't be a dick.");
    expect(content.statement?.chinese).toBe('别当混蛋。');
    expect(content.statement?.attribution).toBe('威尔·惠顿');

    const points = content.statement?.points ?? [];
    expect(points).toHaveLength(3);
    expect(points.map((point) => point.tone)).toEqual(['bad', 'bad', 'good']);
    expect(points.map((point) => point.label)).toEqual(['不要', '不要', '要']);
    expect(points[0].text).toBe('因为匿名就肆无忌惮地攻击他人。');
    expect(points[2].text).toBe('保持基本的礼貌和尊重。');
  });

  it('gives every law a category, an index and a host', () => {
    orderedLaws.forEach((law) => {
      const content = getSharePosterContent(law, orderedLaws.length);
      expect(content.categoryLabel, law.slug).toMatch(/^0\d .+/);
      expect(content.indexCurrent, law.slug).toMatch(/^\d{2}$/);
      expect(content.indexTotal).toBe(String(orderedLaws.length).padStart(2, '0'));
      expect(content.host, law.slug).toBe('bk.0x0.cat');
      expect(content.url, law.slug).toMatch(/^https:\/\/bk\.0x0\.cat\/.+\/$/);
      expect(content.author).toBe('多米诺');
      expect(content.footerLine.length).toBeGreaterThan(0);
      if (content.mode === 'contrast') {
        expect(content.examples.length, law.slug).toBeGreaterThan(0);
      } else {
        expect(content.statement?.points.length, law.slug).toBeGreaterThan(0);
      }
    });
  });

  it('keeps both sides for every comparison poster', () => {
    orderedLaws
      .filter((law) => law.layout === 'comparison')
      .forEach((law) => {
        const content = getSharePosterContent(law, orderedLaws.length);
        expect(content.mode, law.slug).toBe('contrast');
        expect(content.examples.map((entry) => entry.tone), law.slug).toEqual(['bad', 'good']);
        content.examples.forEach((entry) => expect(entry.text.trim(), law.slug).toBeTruthy());
      });
  });
});

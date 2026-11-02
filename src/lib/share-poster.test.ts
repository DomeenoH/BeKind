import { describe, expect, it } from 'vitest';
import { orderedLaws } from '../data/laws';
import { getSharePosterContent } from './share-poster';

describe('share poster content', () => {
  it('uses the distinguishing scene content for the wrong/right comparison', () => {
    const law = orderedLaws.find((entry) => entry.slug === 'no-pointless-politeness');
    if (!law) throw new Error('Missing no-pointless-politeness fixture');

    const content = getSharePosterContent(law, orderedLaws.length);

    expect(content.badExample).toBe('收到');
    expect(content.goodExample).toBe('👍 86 ❤️ 12');
    expect(content.badExample).not.toContain('其他 48 个人');
  });

  it('provides both examples for every comparison poster', () => {
    orderedLaws.filter((law) => law.layout === 'comparison').forEach((law) => {
      const content = getSharePosterContent(law, orderedLaws.length);
      expect(content.badExample, law.slug).toBeTruthy();
      expect(content.goodExample, law.slug).toBeTruthy();
      expect(content.indexLabel).toMatch(/^\d{2} \/ \d{2}$/);
      expect(content.indexLabel.endsWith(`/ ${orderedLaws.length}`)).toBe(true);
    });
  });

  it('splits the index into two non-empty parts for the poster layout', () => {
    orderedLaws.forEach((law) => {
      const { indexCurrent, indexTotal } = getSharePosterContent(law, orderedLaws.length);
      expect(indexCurrent, law.slug).toMatch(/^\d{2}$/);
      expect(indexTotal).toBe(String(orderedLaws.length).padStart(2, '0'));
    });
  });
});

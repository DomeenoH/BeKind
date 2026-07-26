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
      expect(content.indexLabel).toMatch(/^\d{2} \/ 30$/);
    });
  });
});

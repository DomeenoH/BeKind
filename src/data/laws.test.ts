import { describe, expect, it } from 'vitest';
import { characters, qqAvatarUrl } from './characters';
import { orderedLaws } from './laws';
import { relatedLaws } from './related';
import { lawReferences } from './references';
import { getChatLinePresentations } from '../lib/chat-scene';

describe('BeKind content registry', () => {
  it('keeps all 70 routes unique and ordered', () => {
    expect(orderedLaws).toHaveLength(70);
    expect(new Set(orderedLaws.map((law) => law.slug)).size).toBe(70);
    expect(orderedLaws.map((law) => law.order)).toEqual(Array.from({ length: 70 }, (_, index) => index + 1));
  });

  it('preserves the original comparison structure', () => {
    const comparisonLaws = orderedLaws.filter((law) => law.layout === 'comparison');
    expect(comparisonLaws).toHaveLength(69);

    comparisonLaws.forEach((law) => {
      expect(law.hero.titleHtml.length).toBeGreaterThan(0);
      expect(law.bad?.titleHtml).toContain('❌');
      expect(law.good?.titleHtml).toContain('✅');
      expect(law.bad?.lines.length).toBeGreaterThanOrEqual(2);
      expect(law.good?.lines.length).toBeGreaterThanOrEqual(2);
      expect(law.footerHtml.length).toBeGreaterThan(0);
    });

    const wheaton = orderedLaws.find((law) => law.slug === 'wheatons-law');
    expect(wheaton?.layout).toBe('statement');
    expect(wheaton?.hero.leadHtml).toContain("Don't be a dick.");
    expect(wheaton?.specialHtml).toContain('互联网黄金法则');
  });

  it('only references registered characters in scenes', () => {
    const characterIds = new Set(Object.keys(characters));

    orderedLaws.flatMap((law) => [...(law.bad?.lines ?? []), ...(law.good?.lines ?? [])]).forEach((line) => {
      if (line.character) expect(characterIds.has(line.character)).toBe(true);
    });
  });

  it('keeps Tail tied to the live QQ avatar source', () => {
    expect(characters.tail.qq).toBe('2033886359');
    expect(characters.tail.name).toBe('尾巴');
    expect(qqAvatarUrl(characters.tail.qq)).toBe('https://q1.qlogo.cn/g?b=qq&nk=2033886359&s=100');
    expect(orderedLaws.some((law) => [...(law.bad?.lines ?? []), ...(law.good?.lines ?? [])].some((line) => line.character === 'tail'))).toBe(true);
  });

  it('keeps the original no-hello and XY wording', () => {
    const noHello = orderedLaws[0];
    const xyProblem = orderedLaws[1];

    expect(noHello.hero.titleHtml).toBe('不要说<span id="strike">hello</span>');
    expect(noHello.bad?.lines.map((line) => line.text)).toEqual(['在？', '…？', '那个事在什么时候来的？', '哦，在 3 点 30 分。']);
    expect(noHello.good?.lines[0]?.text).toBe('您好，我想问一下那件事在什么时候来的？');
    expect(xyProblem.hero.leadHtml).toContain('他只想知道你<strong>哪里疼</strong>。');
    expect(xyProblem.good?.explanationHtml).toContain('我之所以想做 <strong>Y</strong>');
  });

  it('uses HTTPS for every extracted QQ avatar and excludes rewritten AI copy', () => {
    const content = JSON.stringify(orderedLaws);
    expect(content).not.toContain('http://q1.qlogo.cn');
    ['把话一次说够', '这样聊很费劲', '现在就能改', '说开一点'].forEach((phrase) => {
      expect(content).not.toContain(phrase);
    });
  });

  it('keeps system rows avatar-free and Cider on the outgoing side', () => {
    const law = orderedLaws.find((entry) => entry.slug === 'no-pointless-politeness');
    const badLines = getChatLinePresentations(law?.bad?.lines ?? []);
    const goodLines = getChatLinePresentations(law?.good?.lines ?? []);

    const cider = badLines.find(({ line }) => line.character === 'cider');
    const summary = badLines.find(({ line }) => line.name?.includes('其他 98 个人'));
    const reaction = goodLines.find(({ line }) => line.text.includes('👍 86'));

    expect(cider).toMatchObject({ isOutgoing: true, hasAvatar: true });
    expect(summary).toMatchObject({ isSystem: true, hasAvatar: false });
    expect(reaction).toMatchObject({ isSystem: true, hasAvatar: false });
  });

  it('drops legacy row decoration from character messages', () => {
    const law = orderedLaws.find((entry) => entry.slug === 'yak-shaving');
    const lines = getChatLinePresentations(law?.bad?.lines ?? []);
    const domino = lines.find(({ line }) => line.character === 'domino');

    expect(domino?.toneClass).toBeUndefined();
    expect(domino?.messageHtml).toBe('你不是说今天2点来接我吗？人呢？');
  });

  it('keeps tones semantic: no inline styles, no tone on character bubbles', () => {
    const allLines = orderedLaws.flatMap((law) => [...(law.bad?.lines ?? []), ...(law.good?.lines ?? [])]);

    allLines.forEach((line) => {
      expect(Object.keys(line), line.text).not.toContain('style');
      if (!line.tone) return;
      expect(line.character, line.text).toBeUndefined();
      expect(line.rawHtml, line.text).toBeUndefined();
      expect(line.html.startsWith('&nbsp;'), line.text).toBe(false);
    });
  });

  it('keeps hero effects on the entries that actually implement them', () => {
    const withEffect = orderedLaws.filter((law) => law.hero.effect);

    expect(withEffect.map((law) => `${law.slug}:${law.hero.effect}`)).toEqual([
      'no-hello:greeting-strike',
      'three-strikes:three-strikes-count',
      'reply-all:reply-all-echo',
      'one-message:one-message-split',
      'no-jargon:jargon-swap',
    ]);

    // no-hello 的划掉效果依赖标题里那个 #strike
    const noHello = orderedLaws.find((law) => law.slug === 'no-hello');
    expect(noHello?.hero.titleHtml).toContain('id="strike"');
  });

  it('only attaches figures to entries that actually render them', () => {
    const withVisual = orderedLaws.filter((law) => law.visual);

    expect(withVisual.map((law) => law.slug)).toEqual([
      'bike-shedding',
      'yak-shaving',
      'dunning-kruger',
      'fundamental-attribution-error',
      'survivorship-bias',
      'sunk-cost',
      'correlation-is-not-causation',
      'bystander-effect',
      'goodharts-law',
      'false-consensus',
    ]);

    withVisual.forEach((law) => {
      expect(law.layout, law.slug).toBe('comparison');
      expect(Boolean(law.bad && law.good), law.slug).toBe(true);
    });
  });

  it('names bot327 as 群友 in every visible scene', () => {
    const botLines = orderedLaws
      .flatMap((law) => [...(law.bad?.lines ?? []), ...(law.good?.lines ?? [])])
      .filter((line) => line.character === 'bot327');

    expect(botLines.length).toBeGreaterThan(0);
    expect(botLines.every((line) => line.name === '群友')).toBe(true);
  });

  it('only points related entries at existing laws', () => {
    const slugs = new Set(orderedLaws.map((law) => law.slug));

    Object.entries(relatedLaws).forEach(([slug, targets]) => {
      expect(slugs.has(slug), slug).toBe(true);
      expect(targets.length, slug).toBeGreaterThan(0);
      targets.forEach((target) => {
        expect(slugs.has(target), `${slug} → ${target}`).toBe(true);
        expect(target, `${slug} → ${target}`).not.toBe(slug);
      });
    });
  });

  it('keeps every reference label and https url', () => {
    Object.entries(lawReferences).forEach(([slug, references]) => {
      expect(references.length, slug).toBeGreaterThan(0);
      references.forEach((reference) => {
        expect(reference.label.length, slug).toBeGreaterThan(4);
        expect(reference.url.startsWith('https://'), `${slug} · ${reference.url}`).toBe(true);
      });
    });
  });
});

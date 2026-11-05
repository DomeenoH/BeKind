import { situations, type SituationId } from './law-types';

const ORDER = situations.map((item) => item.id);

/**
 * slug → 这条法则在哪些场合用得上。
 *
 * 和 related.ts / law-caveats.ts 一个套路：单独成表、按 slug 挂，不动 5000 行的 laws.ts。
 *
 * 判定标准只有一条：**换个场合，这条法则还成立吗？**
 *   - 成立 → 不标。别当混蛋、奥卡姆剃刀、沉没成本，放在哪儿都对，标了等于没标。
 *   - 不成立 / 说法要变 → 标上那个场合。
 *
 * 所以有二十来条是空的，这不是漏了。场合筛选是「往里收」，不是「全集分类」。
 */
export const lawSituations: Record<string, SituationId[]> = {
  'no-hello': ['dm'],
  'xy-problem': ['group', 'public'],
  'dont-ask-to-ask': ['dm'],
  'it-didnt-work': ['mail'],
  'smart-questions': ['group', 'public'],
  'no-pointless-politeness': ['dm', 'mail'],
  'cunninghams-law': ['public'],
  'bike-shedding': ['group'],
  'yak-shaving': ['mail'],
  'three-strikes': ['dm'],
  bluf: ['mail'],
  'sturgeons-law': ['public'],
  'greshams-law': ['public'],
  'assume-public': ['group', 'public'],
  'echo-chamber': ['public'],
  'online-disinhibition': ['public'],
  tldr: ['mail'],
  rtfm: ['group'],
  'hitchens-razor': ['public'],
  'poes-law': ['public'],
  'brandolinis-law': ['public'],
  stfw: ['group'],
  'denver-coder-9': ['public'],
  'no-urgent': ['dm', 'mail'],
  'context-collapse': ['dm', 'group'],
  'no-is-a-complete-sentence': ['dm'],
  'reply-all': ['mail'],
  'one-message': ['dm', 'group'],
  'lurk-moar': ['group'],
  'confirmation-bias': ['public'],
  steelmanning: ['public'],
  'bystander-effect': ['group'],
  'streisand-effect': ['public'],
  'eternal-september': ['group', 'public'],
  'dont-feed-the-trolls': ['public'],
  'no-jargon': ['group', 'public'],
  'correct-in-private': ['group', 'dm'],
  'observation-not-judgment': ['dm'],
  'ring-theory': ['dm'],
  'answer-then-explain': ['dm', 'mail'],
  'passive-aggressive-texting': ['dm'],
  // 当众说直话和私下说直话，杀伤力完全是两回事，所以这条挑场合。
  'straight-talk-is-not-rudeness': ['group'],
  'respect-bandwidth': ['group', 'mail'],
  'meaningful-title': ['mail'],
  'make-it-easy-to-reply': ['dm', 'mail'],
  'follow-up-after-solved': ['group', 'public'],
  'ask-in-public': ['group', 'public'],
  'dont-cry-bug': ['mail'],
  'dont-play-helpless': ['group', 'public'],
  'left-on-read': ['dm'],
  sealioning: ['public'],
  'dont-doxx': ['group', 'public'],
  'heard-vs-verified': ['group'],
  'accept-the-compliment': ['dm', 'group'],
  'tentative-is-a-answer': ['dm', 'mail'],
  'dont-pick-a-side': ['group'],
  'praise-the-detail': ['dm', 'group'],
  'accepted-the-no': ['dm', 'mail'],
  'ask-before-introducing': ['group'],
  'let-them-finish-the-good-news': ['dm', 'group'],
};

// 输出统一按 situations 表的顺序排。数据里怎么写都行，别让 DOM 上出现
// 「group dm」和「dm group」两种写法。
export function lawSituationsOf(slug: string): SituationId[] {
  const list = lawSituations[slug];
  if (!list) return [];
  return [...list].sort((a, b) => ORDER.indexOf(a) - ORDER.indexOf(b));
}

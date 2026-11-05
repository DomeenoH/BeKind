/**
 * slug → 相关条目。只放真正需要互相跳转的组，不做全站推荐。
 * 目标 slug 必须存在；laws.test.ts 会校验。
 */
export const relatedLaws: Record<string, string[]> = {
  bluf: ['tldr', 'answer-then-explain'],
  tldr: ['bluf', 'answer-then-explain'],
  'answer-then-explain': ['bluf', 'tldr'],

  'denver-coder-9': ['follow-up-after-solved', 'ask-in-public'],
  'follow-up-after-solved': ['denver-coder-9', 'ask-in-public'],
  'ask-in-public': ['denver-coder-9', 'follow-up-after-solved'],

  'no-pointless-politeness': ['one-message', 'respect-bandwidth'],
  'one-message': ['no-pointless-politeness', 'respect-bandwidth'],
  'respect-bandwidth': ['one-message', 'no-pointless-politeness', 'make-it-easy-to-reply'],
  'make-it-easy-to-reply': ['respect-bandwidth', 'one-message'],

  'smart-questions': ['rtfm', 'stfw', 'dont-play-helpless'],
  rtfm: ['stfw', 'smart-questions', 'dont-play-helpless'],
  stfw: ['rtfm', 'smart-questions'],
  'dont-play-helpless': ['smart-questions', 'rtfm', 'stfw'],

  'hanlons-razor': ['principle-of-charity', 'fundamental-attribution-error'],
  'principle-of-charity': ['hanlons-razor', 'steelmanning'],
  'fundamental-attribution-error': ['hanlons-razor', 'principle-of-charity'],

  'dont-ask-to-ask': ['it-didnt-work', 'dont-cry-bug'],
  'it-didnt-work': ['dont-ask-to-ask', 'dont-cry-bug'],
  'dont-cry-bug': ['it-didnt-work', 'dont-ask-to-ask'],

  'medium-is-the-message': ['media-richness', 'three-strikes'],
  'three-strikes': ['medium-is-the-message', 'media-richness'],
  'media-richness': ['medium-is-the-message', 'three-strikes', 'left-on-read'],

  'no-jargon': ['curse-of-knowledge', 'smart-questions'],
  'curse-of-knowledge': ['no-jargon', 'smart-questions'],

  'no-urgent': ['left-on-read', 'respect-bandwidth'],
  'left-on-read': ['no-urgent', 'respect-bandwidth', 'three-strikes'],

  'brandolinis-law': ['sealioning', 'hitchens-razor', 'dont-feed-the-trolls'],
  'hitchens-razor': ['sealioning', 'brandolinis-law'],
  'dont-feed-the-trolls': ['sealioning', 'brandolinis-law', 'dont-doxx'],
  sealioning: ['brandolinis-law', 'hitchens-razor', 'dont-feed-the-trolls'],

  'dont-doxx': ['dont-feed-the-trolls', 'correct-in-private', 'assume-public'],
  'correct-in-private': ['dont-doxx', 'ring-theory'],
  'assume-public': ['dont-doxx', 'correct-in-private'],
  // 2026-11 增补的 8 条。互相成组，别只往老条目上挂。
  'heard-vs-verified': ['dont-pick-a-side', 'assume-public', 'dont-doxx'],
  'dont-pick-a-side': ['heard-vs-verified', 'fundamental-attribution-error', 'dont-feed-the-trolls'],
  'accept-the-compliment': ['praise-the-detail', 'let-them-finish-the-good-news', 'straight-talk-is-not-rudeness'],
  'praise-the-detail': ['accept-the-compliment', 'let-them-finish-the-good-news', 'no-pointless-politeness'],
  'let-them-finish-the-good-news': ['accept-the-compliment', 'praise-the-detail', 'ring-theory'],
  'tentative-is-a-answer': ['no-is-a-complete-sentence', 'make-it-easy-to-reply', 'accepted-the-no'],
  'accepted-the-no': ['no-is-a-complete-sentence', 'tentative-is-a-answer', 'make-it-easy-to-reply'],
  'ask-before-introducing': ['assume-public', 'dont-doxx', 'heard-vs-verified'],
  // 补齐 2026-11 之前一直没挂关联的 37 条。按主题成组，互相指。
  // 提问与求助
  'no-hello': ['xy-problem', 'dont-ask-to-ask', 'one-message'],
  'xy-problem': ['no-hello', 'smart-questions', 'meaningful-title'],
  'meaningful-title': ['xy-problem', 'it-didnt-work', 'dont-cry-bug'],

  // 群体与规则
  'wheatons-law': ['online-disinhibition', 'dont-feed-the-trolls', 'assume-public'],
  'greshams-law': ['eternal-september', 'poes-law', 'dont-feed-the-trolls'],
  'poes-law': ['greshams-law', 'dont-feed-the-trolls', 'brandolinis-law'],
  'eternal-september': ['greshams-law', 'lurk-moar', 'online-disinhibition'],
  'online-disinhibition': ['wheatons-law', 'echo-chamber', 'poes-law'],
  'echo-chamber': ['false-consensus', 'confirmation-bias', 'online-disinhibition'],
  'sturgeons-law': ['brandolinis-law', 'greshams-law', 'poes-law'],

  // 认知偏误
  'confirmation-bias': ['echo-chamber', 'survivorship-bias', 'steelmanning'],
  'survivorship-bias': ['confirmation-bias', 'correlation-is-not-causation', 'dunning-kruger'],
  'correlation-is-not-causation': ['survivorship-bias', 'confirmation-bias', 'occams-razor'],
  'hindsight-bias': ['false-consensus', 'confirmation-bias', 'observation-not-judgment'],
  'false-consensus': ['hindsight-bias', 'echo-chamber', 'fundamental-attribution-error'],
  'dunning-kruger': ['occams-razor', 'curse-of-knowledge', 'steelmanning'],
  'occams-razor': ['hitchens-razor', 'dunning-kruger', 'correlation-is-not-causation'],
  'steelmanning': ['principle-of-charity', 'confirmation-bias', 'hitchens-razor'],
  'chestertons-fence': ['occams-razor', 'cunninghams-law', 'yak-shaving'],

  // 协作与流程
  'cunninghams-law': ['rubber-duck', 'chestertons-fence', 'ask-in-public'],
  'rubber-duck': ['cunninghams-law', 'dont-play-helpless', 'smart-questions'],
  'bike-shedding': ['yak-shaving', 'goodharts-law', 'sunk-cost'],
  'yak-shaving': ['bike-shedding', 'sunk-cost', 'goodharts-law'],
  'sunk-cost': ['yak-shaving', 'bike-shedding', 'goodharts-law'],
  'goodharts-law': ['survivorship-bias', 'correlation-is-not-causation', 'bike-shedding'],

  // 应答与语气
  'postels-law': ['principle-of-charity', 'grice-maxims', 'context-collapse'],
  'grice-maxims': ['context-collapse', 'medium-is-the-message', 'no-jargon'],
  'context-collapse': ['grice-maxims', 'medium-is-the-message', 'passive-aggressive-texting'],
  'no-is-a-complete-sentence': ['accepted-the-no', 'tentative-is-a-answer', 'reply-all'],
  'reply-all': ['one-message', 'respect-bandwidth', 'no-pointless-politeness'],
  'lurk-moar': ['eternal-september', 'assume-public', 'ask-in-public'],

  // 冲突与情绪
  'observation-not-judgment': ['dont-pick-a-side', 'fundamental-attribution-error', 'straight-talk-is-not-rudeness'],
  'ring-theory': ['let-them-finish-the-good-news', 'observation-not-judgment', 'correct-in-private'],
  'straight-talk-is-not-rudeness': ['no-pointless-politeness', 'observation-not-judgment', 'dont-feed-the-trolls'],
  'passive-aggressive-texting': ['straight-talk-is-not-rudeness', 'context-collapse', 'observation-not-judgment'],

  // 旁观与公共
  'bystander-effect': ['assume-public', 'dont-feed-the-trolls', 'greshams-law'],
  'streisand-effect': ['dont-doxx', 'assume-public', 'brandolinis-law'],
};

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
  'dont-feed-the-trolls': ['sealioning', 'brandolinis-law'],
  sealioning: ['brandolinis-law', 'hitchens-razor', 'dont-feed-the-trolls'],
};

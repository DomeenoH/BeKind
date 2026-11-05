import { describe, expect, it } from 'vitest';
import { orderedLaws } from '../data/laws';
import { buildSearchDocs, groupQuery, orderQuery, questionCore, searchLaws, searchLawsRelaxed } from './law-search';

const docs = buildSearchDocs(orderedLaws);

const top = (query: string) => searchLawsRelaxed(docs, query)[0]?.doc.slug;

describe('检索：读者会怎么问', () => {
  const cases: [string, string][] = [
    ['在吗', 'no-hello'],
    ['在吗？', 'no-hello'],
    ['同事一直问在吗', 'no-hello'],
    ['它挂了', 'it-didnt-work'],
    ['报错了怎么办', 'it-didnt-work'],
    ['已读不回', 'left-on-read'],
    ['对方看了消息不回', 'left-on-read'],
    ['回复全部', 'reply-all'],
    ['标题怎么写', 'meaningful-title'],
    ['开盒', 'dont-doxx'],
    ['说人话', 'no-jargon'],
    ['群里没人回', 'bystander-effect'],
    ['群里两个人吵架要不要管', 'bystander-effect'],
    ['怎么拒绝', 'no-is-a-complete-sentence'],
    ['不好意思拒绝领导', 'no-is-a-complete-sentence'],
    ['领导临时让我加班', 'no-is-a-complete-sentence'],
    ['为什么别人都不懂我说什么', 'curse-of-knowledge'],
    ['大家都这么说', 'false-consensus'],
    ['有人一直追问我要证据', 'sealioning'],
    ['发语音还是打字', 'medium-is-the-message'],
    ['回了个哦', 'passive-aggressive-texting'],
    ['沉没成本', 'sunk-cost'],
    ['我早就说过', 'hindsight-bias'],
    ['tldr', 'tldr'],
    ['ＴＬＤＲ', 'tldr'],
  ];

  for (const [query, slug] of cases) {
    it(`「${query}」先给 ${slug}`, () => {
      expect(top(query)).toBe(slug);
    });
  }
});

describe('检索：条号直达', () => {
  it('认得数字、井号和「第 N 条」', () => {
    expect(orderQuery('35')).toBe(35);
    expect(orderQuery('#71')).toBe(71);
    expect(orderQuery('第 12 条')).toBe(12);
    expect(orderQuery('第12条')).toBe(12);
    expect(orderQuery('2026')).toBeUndefined();
    expect(orderQuery('在吗')).toBeUndefined();
  });

  it('条号只返回那一条', () => {
    const result = searchLaws(docs, '71');
    expect(result).toHaveLength(1);
    expect(result[0].doc.slug).toBe('dont-doxx');
  });
});

describe('检索：边界', () => {
  it('空查询返回全部，且不打分', () => {
    const result = searchLaws(docs, '   ');
    expect(result).toHaveLength(orderedLaws.length);
    expect(result.every((item) => item.matched && item.score === 0)).toBe(true);
  });

  it('完全不相关的词宁可空着，也不硬凑', () => {
    expect(searchLawsRelaxed(docs, '量子色动力学胶子禁闭')).toEqual([]);
  });

  it('结果按分数倒序，且不重复', () => {
    const result = searchLawsRelaxed(docs, '消息不回');
    const scores = result.map((item) => item.score);
    expect([...scores].sort((a, b) => b - a)).toEqual(scores);
    expect(new Set(result.map((item) => item.doc.slug)).size).toBe(result.length);
  });

  it('别名组带着 slug，方便加分锚定', () => {
    const groups = groupQuery('已读不回');
    expect(groups.some((group) => group.kind === 'phrase' && group.slug === 'left-on-read')).toBe(true);
  });

  it('问句外壳会被削掉，但不误伤短语本身', () => {
    expect(questionCore('请问我该怎么办')).toBe('');
    expect(searchLawsRelaxed(docs, '请问我该怎么办')).toHaveLength(orderedLaws.length);
    expect(questionCore('怎么拒绝同事')).toBe('拒绝同事');
    // 「在吗」的尾字是「吗」，削成「在」就再也匹配不上别名表了
    expect(groupQuery('在吗')[0]?.slug).toBe('no-hello');
  });
});

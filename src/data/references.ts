/**
 * 每条法则的原始来源。只收可核对的一手材料或权威综述；
 * 百科链接留在 footerHtml 的「延伸阅读」里，不混进这里。
 */
export interface LawReference {
  label: string;
  url: string;
}

export const lawReferences: Record<string, LawReference[]> = {
  'wheatons-law': [
    { label: "Wil Wheaton, Happy Don't Be A Dick Day! (2007 PAX 回顾)", url: 'https://wilwheaton.net/?post_type=post&p=19' },
    { label: "Know Your Meme, Wheaton's Law", url: 'https://knowyourmeme.com/memes/wheatons-law' },
  ],
  'cunninghams-law': [
    { label: 'Ward Cunningham, WikiWikiWeb 与 Cunningham\'s Law 词条', url: 'https://en.wikipedia.org/wiki/Ward_Cunningham' },
    { label: 'Meta-Wiki, Cunningham\'s Law', url: 'https://meta.wikimedia.org/wiki/Cunningham%27s_Law' },
  ],
  'echo-chamber': [
    { label: 'Cass Sunstein, Republic.com (2001)', url: 'https://archive.org/details/republiccom00suns' },
    { label: 'Eli Pariser, The Filter Bubble (2011)', url: 'https://www.penguinrandomhouse.com/books/310306/the-filter-bubble-by-eli-pariser/' },
  ],
  'online-disinhibition': [
    { label: 'John Suler, The Online Disinhibition Effect (2004)', url: 'https://doi.org/10.1089/1094931041291295' },
  ],
  'dunning-kruger': [
    { label: 'Kruger & Dunning, Unskilled and Unaware of It (1999)', url: 'https://doi.org/10.1037/0022-3514.77.6.1121' },
    { label: 'The Dunning-Kruger graph that wasn\'t', url: 'https://tesseramag.com/category/science/dunning-kruger-graph-criticism' },
  ],
  'occams-razor': [
    { label: 'Stanford Encyclopedia of Philosophy, William of Ockham', url: 'https://plato.stanford.edu/entries/ockham/' },
  ],
  'postels-law': [
    { label: 'RFC 793, Transmission Control Protocol', url: 'https://www.rfc-editor.org/rfc/rfc793' },
  ],
  'greshams-law': [
    { label: 'George Selgin, Gresham\'s Law (EH.net)', url: 'https://eh.net/encyclopedia/greshams-law/' },
  ],
  'bystander-effect': [
    { label: 'Darley & Latané, Bystander Intervention in Emergencies (1968)', url: 'https://socialsci.libretexts.org/Courses/Johnson_County_Community_College/Research_Methods_in_Psychology_at_JCCC/08%3A_Experimental_Research/8.1%3A_Prelude_to_Experimental_Research' },
  ],
  stfw: [
    { label: 'Python 文档, str.casefold()', url: 'https://docs.python.org/3/library/stdtypes.html#str.casefold' },
    { label: 'Eric S. Raymond, How To Ask Questions The Smart Way（中文镜像）', url: 'https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way' },
  ],
  'no-pointless-politeness': [
    { label: 'RFC 1855, Netiquette Guidelines', url: 'https://www.rfc-editor.org/rfc/rfc1855' },
  ],
  'medium-is-the-message': [
    { label: 'Marshall McLuhan, Understanding Media (1964)', url: 'https://www.marshallmcluhan.com/' },
  ],
  'goodharts-law': [
    { label: 'Marilyn Strathern, Improving Ratings (1997)', url: 'https://doi.org/10.1017/S1062798700002660' },
  ],
  'dont-ask-to-ask': [
    { label: 'dontasktoask.com', url: 'https://dontasktoask.com' },
  ],
  'smart-questions': [
    { label: 'Eric S. Raymond, How To Ask Questions The Smart Way（中文镜像）', url: 'https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way' },
  ],
  'media-richness': [
    { label: 'Daft & Lengel, Organizational Information Requirements, Media Richness, and Structural Design (1986)', url: 'https://doi.org/10.1287/mnsc.32.5.554' },
    { label: 'AURA Lab, Media Richness Theory', url: 'https://aura-lab.siue.edu/theories/media-richness-theory?cat=org' },
  ],
  'curse-of-knowledge': [
    { label: 'Camerer, Loewenstein & Weber, The Curse of Knowledge in Economic Settings (1989)', url: 'https://doi.org/10.1086/261651' },
    { label: 'The Decision Lab, Curse of Knowledge', url: 'https://thedecisionlab.com/reference-guide/management/curse-of-knowledge' },
  ],
  'left-on-read': [
    { label: 'Barber & Santuzzi, Please Respond ASAP: Workplace Telepressure and Employee Recovery (2015)', url: 'https://doi.org/10.1037/a0038278' },
    { label: 'IOAtWork, Email Overload and Telepressure', url: 'https://www.ioatwork.com/email-overload-and-the-harmful-effects-of-telepressure/' },
  ],
  sealioning: [
    { label: 'David Malki, The Terrible Sea Lion (Wondermark #1062, 2014)', url: 'https://wondermark.com/c/1062/' },
    { label: 'Merriam-Webster, What is Sealioning?', url: 'https://www.merriam-webster.com/wordplay/sealioning-internet-trolling' },
  ],
  'dont-doxx': [
    { label: '《中华人民共和国个人信息保护法》第十条（国家法律法规数据库）', url: 'https://flk.npc.gov.cn/detail2.html?ZmY4MDgwODE3Yjg2MzYxODE2YjA0MjE2NGMwZTEwODc%3D' },
    { label: '《中华人民共和国刑法》第二百五十三条之一 侵犯公民个人信息罪（最高人民检察院）', url: 'https://www.spp.gov.cn/spp/zdgz/202103/t20210315_510893.shtml' },
  ],
};

import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import * as parse5 from 'parse5';

const categoryBySlug = {
  'no-hello': 'communication',
  'xy-problem': 'communication',
  'dont-ask-to-ask': 'communication',
  'it-didnt-work': 'communication',
  'wheatons-law': 'systems',
  'smart-questions': 'communication',
  'no-pointless-politeness': 'communication',
  'cunninghams-law': 'thinking',
  'rubber-duck': 'thinking',
  'bike-shedding': 'systems',
  'yak-shaving': 'systems',
  'hanlons-razor': 'thinking',
  'postels-law': 'communication',
  'three-strikes': 'communication',
  bluf: 'communication',
  'sturgeons-law': 'thinking',
  'greshams-law': 'systems',
  'assume-public': 'systems',
  'echo-chamber': 'systems',
  'online-disinhibition': 'systems',
  'dunning-kruger': 'thinking',
  tldr: 'communication',
  rtfm: 'communication',
  'occams-razor': 'thinking',
  'hitchens-razor': 'thinking',
  'poes-law': 'systems',
  'brandolinis-law': 'systems',
  stfw: 'communication',
  'denver-coder-9': 'communication',
  'no-urgent': 'communication',
};

const characterByQq = {
  '287887313': 'domino',
  '2992332948': 'cider',
  '2033886359': 'tail',
  '3272419793': 'bot327',
};

const displayNameByCharacter = {
  domino: '多米诺',
  cider: '西打',
  tail: '尾巴',
  bot327: '群友 bot',
};

function gitShow(path) {
  return execFileSync('git', ['show', `HEAD:${path}`], { encoding: 'utf8' });
}

function attr(node, name) {
  return node?.attrs?.find((item) => item.name === name)?.value;
}

function hasClass(node, className) {
  return (attr(node, 'class') ?? '').split(/\s+/).includes(className);
}

function descendants(node) {
  return node?.childNodes ?? [];
}

function findAll(node, predicate, result = []) {
  if (predicate(node)) result.push(node);
  for (const child of descendants(node)) findAll(child, predicate, result);
  return result;
}

function findFirst(node, predicate) {
  if (predicate(node)) return node;
  for (const child of descendants(node)) {
    const match = findFirst(child, predicate);
    if (match) return match;
  }
}

function byClass(node, className) {
  return findFirst(node, (candidate) => hasClass(candidate, className));
}

function text(node) {
  if (!node) return '';
  if (node.nodeName === '#text') return node.value;
  return descendants(node).map(text).join('');
}

function cleanText(node) {
  return text(node).replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
}

function innerHtml(node) {
  if (!node) return '';
  const fragment = { nodeName: '#document-fragment', childNodes: node.childNodes ?? [] };
  return parse5.serialize(fragment).trim().replaceAll('http://q1.qlogo.cn', 'https://q1.qlogo.cn');
}

function parseDocument(path) {
  return parse5.parse(gitShow(path));
}

function parseChatLines(example, slug, variant) {
  return findAll(example, (node) => hasClass(node, 'slack')).map((line, index) => {
    const image = findFirst(line, (node) => node.tagName === 'img');
    const avatarUrl = attr(image, 'src') ?? '';
    const qq = avatarUrl.match(/[?&]nk=(\d+)/)?.[1];
    const character = qq ? characterByQq[qq] : undefined;
    const message = byClass(line, 'slackmessage');

    if (!message) {
      return {
        text: cleanText(line),
        html: '',
        rawHtml: innerHtml(line),
        style: attr(line, 'style') || undefined,
      };
    }

    return {
      character,
      avatarUrl: character ? undefined : avatarUrl.replace('http://', 'https://') || undefined,
      name: character ? displayNameByCharacter[character] : cleanText(byClass(line, 'slackname')),
      time: cleanText(byClass(line, 'slacktime')) || undefined,
      text: cleanText(message),
      html: innerHtml(message),
      style: attr(line, 'style') || undefined,
    };
  });
}

function parseScene(container, slug, variant) {
  const left = byClass(container, 'sectionleft');
  const right = byClass(container, 'sectionright');
  const example = findFirst(left, (node) => hasClass(node, 'list-card') && hasClass(node, 'example'));
  const explanation = right ? byClass(right, 'list-card') : undefined;

  if (!left || !example) {
    throw new Error(`${slug} is missing the original ${variant} comparison structure`);
  }

  return {
    titleHtml: innerHtml(byClass(left, 'section-title')),
    lines: parseChatLines(example, slug, variant),
    explanationHtml: innerHtml(explanation),
  };
}

function parseIndex() {
  const document = parseDocument('index.html');
  return findAll(document, (node) => hasClass(node, 'home-card')).map((card, index) => {
    const href = attr(card, 'href') ?? '';
    const slug = href.split('/').filter(Boolean)[0];
    if (!slug || !categoryBySlug[slug]) throw new Error(`Unknown home card at position ${index + 1}`);

    return {
      slug,
      order: index + 1,
      category: categoryBySlug[slug],
      icon: cleanText(findFirst(card, (node) => node.tagName === 'h2')),
      title: cleanText(findFirst(card, (node) => node.tagName === 'h3')),
      englishTitle: cleanText(byClass(card, 'subtitle')),
      summary: cleanText(byClass(card, 'hover-text')),
    };
  });
}

const indexCards = parseIndex();
console.log(`Found ${indexCards.length} original home cards.`);

const laws = indexCards.map((card) => {
  console.log(`Reading ${card.slug}...`);
  const document = parseDocument(`${card.slug}/index.html`);
  const hero = byClass(document, 'hero');
  const bad = findFirst(document, (node) => hasClass(node, 'container') && hasClass(node, 'nonos'));
  const good = findFirst(document, (node) => hasClass(node, 'container') && hasClass(node, 'yepyep'));
  const footer = findFirst(document, (node) => node.tagName === 'footer');

  if (!hero || !footer) throw new Error(`${card.slug} is missing an original page section`);

  if (card.slug === 'wheatons-law') {
    const impact = byClass(hero, 'massive-impact');
    const special = findFirst(document, (node) => hasClass(node, 'list-card'));
    if (!impact || !special) throw new Error('wheatons-law is missing its original statement layout');

    return {
      ...card,
      layout: 'statement',
      hero: {
        titleHtml: innerHtml(byClass(hero, 'name')),
        subtitleHtml: innerHtml(byClass(hero, 'subtitle')),
        leadHtml: innerHtml(impact).replace('<div class="share-button-wrapper"></div>', ''),
      },
      specialHtml: innerHtml(special),
      footerHtml: innerHtml(footer),
    };
  }

  if (!bad || !good) throw new Error(`${card.slug} is missing its original comparison sections`);

  return {
    ...card,
    layout: 'comparison',
    hero: {
      titleHtml: innerHtml(byClass(hero, 'name')),
      subtitleHtml: innerHtml(byClass(hero, 'subtitle')),
      leadHtml: innerHtml(byClass(hero, 'lead')),
    },
    bad: parseScene(bad, card.slug, 'bad'),
    good: parseScene(good, card.slug, 'good'),
    footerHtml: innerHtml(footer),
  };
});

if (laws.length !== 30) throw new Error(`Expected 30 laws, found ${laws.length}`);

const output = `import type { Law } from './law-types';\n\nconst laws: Law[] = ${JSON.stringify(laws, null, 2)};\n\nexport const orderedLaws = laws.sort((a, b) => a.order - b.order);\n\nexport function getLaw(slug: string) {\n  return orderedLaws.find((law) => law.slug === slug);\n}\n`;

writeFileSync(new URL('../src/data/laws.ts', import.meta.url), output);

const compatibilityStyles = String.raw`
/* Astro compatibility and small corrections. The visual source remains HEAD:style.css. */
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  background: var(--background);
}

button,
input {
  font: inherit;
  letter-spacing: 0;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

:focus-visible {
  outline: 3px solid rgba(0, 122, 255, 0.3);
  outline-offset: 3px;
}

[hidden] {
  display: none !important;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

h1.name,
.section-title,
.home-body h1.name,
.home-body .lead,
.home-card h3,
.subtitle {
  letter-spacing: 0;
}

.home-search {
  width: min(360px, 100%);
  height: 46px;
  margin: 2rem auto 0;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--muted-foreground);
  background: rgba(255, 255, 255, 0.48);
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 23px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.025);
}

.home-search:focus-within {
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.12);
}

.home-search input {
  width: 100%;
  min-width: 0;
  color: var(--foreground);
  background: transparent;
  border: 0;
  outline: 0;
}

.home-search input::placeholder {
  color: var(--muted-foreground);
}

.empty-results {
  width: 100%;
  padding: 5rem 1rem;
  text-align: center;
  color: var(--muted-foreground);
}

.comparison-section {
  scroll-margin-top: 32px;
}

.nonos .section-title {
  color: #c83a32;
}

.yepyep .section-title {
  color: #237a45;
}

.nonos .explanation-card {
  border-top: 3px solid rgba(200, 58, 50, 0.42);
}

.yepyep .explanation-card {
  border-top: 3px solid rgba(35, 122, 69, 0.42);
}

.slack-copy {
  min-width: 0;
  flex: 1;
}

.slack-meta {
  min-height: 20px;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
}

.character-avatar,
.external-avatar {
  position: relative;
  width: 42px;
  height: 42px;
  flex: 0 0 42px;
  display: grid;
  place-items: center;
  overflow: hidden;
  border-radius: 50%;
  background: #e5e5ea;
  color: #616061;
  font-size: 14px;
  font-weight: 700;
}

.character-avatar img,
.external-avatar img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
  object-fit: cover;
}

.avatar-fallback {
  display: none;
}

.character-avatar.is-fallback img {
  display: none;
}

.character-avatar.is-fallback .avatar-fallback {
  display: grid;
  position: absolute;
  inset: 0;
  place-items: center;
}

.chat-line-raw:empty {
  display: none;
}

.statement-hero-container {
  min-height: auto;
}

.statement-impact {
  margin: 4rem 0;
}

.statement-content {
  max-width: 800px;
}

.statement-card {
  text-align: left;
}

.not-found-page {
  min-height: 80vh;
  display: grid;
  place-items: center;
}

.not-found-page .hero {
  margin: 0;
}

.not-found-page .share-button {
  margin-top: 2rem;
}

.list-card ol {
  margin: 0 0 1.5rem 1.5rem;
  color: #616061;
  font-size: 1rem;
  line-height: 1.65;
}

.share-root {
  margin-top: 2.5rem;
}

.share-actions {
  min-height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}

.share-feedback {
  min-width: 1px;
  color: #237a45;
  font-size: 0.875rem;
}

.share-button {
  text-decoration: none;
}

.share-button.is-success {
  color: #237a45;
}

.share-poster {
  position: fixed;
  top: 0;
  left: -10000px;
  width: 600px;
  height: 760px;
  padding: 48px 44px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #1d1d1f;
  background: #ffffff;
  text-align: center;
}

.poster-kicker {
  color: #86868b;
  font-size: 14px;
  font-weight: 600;
}

.poster-main h2 {
  margin: 0 0 12px;
  font-size: 58px;
  line-height: 1.15;
  font-weight: 800;
}

.poster-main span {
  color: #86868b;
  font-size: 20px;
}

.poster-main p {
  max-width: 430px;
  margin: 28px auto 0;
  color: #616061;
  font-size: 18px;
}

.poster-footer {
  width: 100%;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f9f9fb;
  border-radius: 20px;
  text-align: left;
}

.poster-footer div {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.poster-footer span {
  color: #86868b;
  font-size: 13px;
}

.poster-footer strong {
  color: #007aff;
  font-size: 16px;
}

.share-dialog {
  width: min(520px, calc(100% - 32px));
  max-height: calc(100vh - 32px);
  padding: 20px;
  overflow: auto;
  color: var(--foreground);
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.2);
}

.share-dialog::backdrop {
  background: rgba(0, 0, 0, 0.38);
  backdrop-filter: blur(8px);
}

.share-dialog-head,
.share-dialog-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.share-dialog-head p,
.share-dialog-head h2 {
  margin: 0;
}

.share-dialog-head p {
  color: var(--muted-foreground);
  font-size: 13px;
}

.share-dialog-head h2 {
  font-size: 20px;
}

.share-dialog > img {
  width: 100%;
  height: auto;
  margin: 18px 0;
  display: block;
}

.icon-button {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  flex: 0 0 36px;
  color: var(--foreground);
  background: rgba(0, 0, 0, 0.06);
  border: 0;
  border-radius: 50%;
  cursor: pointer;
}

.button-loader {
  width: 16px;
  height: 16px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .comparison-section .sections {
    width: 100%;
    height: auto;
    margin: 28px 0 0;
    float: none;
    display: block;
  }

  .comparison-section .sectionright {
    margin-top: 18px;
  }

  .comparison-section .list-card {
    border-radius: 20px;
  }
}

@media (max-width: 640px) {
  .home-body .home-hero {
    padding: 5.5rem 0 3.5rem;
  }

  .home-body h1.name {
    font-size: 2.5rem;
  }

  .home-body .lead {
    margin-top: 2rem;
    font-size: 1.75rem;
  }

  .home-body .home-card-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    padding: 0;
  }

  .home-card {
    min-height: 220px;
    padding: 2rem 1.5rem;
  }

  .home-card .hover-text {
    opacity: 1;
    max-height: 64px;
    margin-top: 0.8rem;
  }

  .slack .character-avatar,
  .slack .external-avatar {
    width: 32px;
    height: 32px;
    flex-basis: 32px;
  }

  .share-actions {
    gap: 8px;
  }

  .share-button {
    padding: 0.7rem 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;

writeFileSync(
  new URL('../src/styles/global.css', import.meta.url),
  `${gitShow('style.css').trim()}\n\n${compatibilityStyles.trim()}\n`,
);
console.log(`Restored ${laws.length} laws from the original HTML at HEAD.`);

import './style.css'

const PAGES = [
    { path: '/no-hello/', title: '别只说“你好”' },
    { path: '/xy-problem/', title: 'XY 问题' },
    { path: '/dont-ask-to-ask/', title: '拒绝谜语人' },
    { path: '/it-didnt-work/', title: '它挂了' },
    { path: '/wheatons-law/', title: '惠顿定律' },
    { path: '/smart-questions/', title: '提问的智慧' },
    { path: '/no-pointless-politeness/', title: '拒绝过度客套' },
    { path: '/cunninghams-law/', title: '坎宁安定律' },
    { path: '/rubber-duck/', title: '小黄鸭调试' },
    { path: '/bike-shedding/', title: '自行车棚效应' },
    { path: '/yak-shaving/', title: '剪牦牛毛' },
    { path: '/hanlons-razor/', title: '汉隆剃刀' },
    { path: '/postels-law/', title: '波斯特尔法则' },
    { path: '/three-strikes/', title: '三振出局' },
    { path: '/bluf/', title: 'BLUF 原则' },
    { path: '/sturgeons-law/', title: '斯特金定律' },
    { path: '/greshams-law/', title: '格雷舍姆法则' },
    { path: '/assume-public/', title: '假设公开原则' },
    { path: '/echo-chamber/', title: '回声室效应' },
    { path: '/online-disinhibition/', title: '在线解除抑制' },
    { path: '/dunning-kruger/', title: '邓宁-克鲁格效应' }
];

function normalizePath(path) {
    return path.endsWith('/') ? path : path + '/';
}

function injectNavigation() {
    const currentPath = normalizePath(window.location.pathname);
    if (currentPath === '/' || currentPath === '/index.html') return;

    const currentIndex = PAGES.findIndex(p => normalizePath(p.path) === currentPath);
    if (currentIndex === -1) return;

    const prevPage = PAGES[currentIndex - 1];
    const nextPage = PAGES[currentIndex + 1];

    const navContainer = document.createElement('div');
    navContainer.className = 'generated-nav container';

    // Use a card-like style matching the site's aesthetic
    navContainer.innerHTML = `
    <div class="nav-links">
      ${prevPage ? `
        <a href="${prevPage.path}" class="nav-item prev">
          <span class="nav-label">← 上一篇</span>
          <span class="nav-title">${prevPage.title}</span>
        </a>
      ` : '<div class="nav-item placeholder"></div>'}
      
      ${nextPage ? `
        <a href="${nextPage.path}" class="nav-item next">
          <span class="nav-label">下一篇 →</span>
          <span class="nav-title">${nextPage.title}</span>
        </a>
      ` : '<div class="nav-item placeholder"></div>'}
    </div>
  `;

    // Insert before the footer
    const footer = document.querySelector('footer');
    if (footer) {
        footer.parentNode.insertBefore(navContainer, footer);
    } else {
        document.body.appendChild(navContainer);
    }
}

document.addEventListener('DOMContentLoaded', injectNavigation);

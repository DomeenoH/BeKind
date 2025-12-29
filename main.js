import './style.css'
import html2canvas from 'html2canvas';

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

// --- Share Feature Logic ---
import QRCode from 'qrcode';

function setupShareFeature() {
  const wrapper = document.querySelector('.share-button-wrapper');
  if (!wrapper) return;

  // Clear existing content (like hardcoded buttons)
  wrapper.innerHTML = '';

  // Create container for buttons
  const btnContainer = document.createElement('div');
  btnContainer.className = 'share-actions';
  btnContainer.style.display = 'flex';
  btnContainer.style.gap = '12px';
  btnContainer.style.justifyContent = 'center';
  btnContainer.style.marginTop = '24px';

  // 1. Copy Link Button
  const copyLinkBtn = document.createElement('button');
  copyLinkBtn.className = 'share-button primary';
  copyLinkBtn.innerHTML = '<span class="icon">🔗</span> <span class="text">复制链接</span>';
  copyLinkBtn.onclick = () => handleCopyLink(copyLinkBtn);

  // 2. Share Image Button
  const shareImageBtn = document.createElement('button');
  shareImageBtn.className = 'share-button secondary';
  shareImageBtn.innerHTML = '<span class="icon">🖼️</span> <span class="text">生成卡片</span>';
  shareImageBtn.onclick = () => handleShareImage(shareImageBtn);

  btnContainer.appendChild(copyLinkBtn);
  btnContainer.appendChild(shareImageBtn);
  wrapper.appendChild(btnContainer);
}

function handleCopyLink(btn) {
  const title = document.title.split('|')[0].trim();
  const url = window.location.href;
  const text = `这个或许对你有帮助 → ${title}：${url}`;

  navigator.clipboard.writeText(text).then(() => {
    const originalHtml = btn.innerHTML;
    btn.classList.add('copied');
    btn.innerHTML = '<span class="icon">✓</span> <span class="text">已复制</span>';

    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = originalHtml;
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy text: ', err);
    alert('复制失败，请手动复制地址栏链接');
  });
}

function handleShareImage(btn) {
  btn.disabled = true;
  const originalText = btn.innerHTML;
  btn.innerHTML = '<span class="icon">⏳</span> <span class="text">生成中...</span>';

  // 1. Prepare Content Data
  let titleText = '';
  const h1 = document.querySelector('h1.name');

  // Special handling for no-hello animation
  if (window.location.pathname.includes('no-hello')) {
    titleText = '不要说“在吗”';
  } else if (h1) {
    titleText = h1.textContent.trim();
  } else {
    titleText = document.title.split('|')[0].trim();
  }

  const subtitleText = document.querySelector('.subtitle')?.textContent || '';
  const currentUrl = window.location.href;

  // 2. Build the Capture DOM
  const captureContainer = document.createElement('div');
  captureContainer.className = 'capture-card';
  Object.assign(captureContainer.style, {
    position: 'absolute',
    top: '0',
    left: '-9999px',
    width: '600px', // Fixed width for mobile-friendly ratio
    backgroundColor: '#ffffff',
    padding: '30px 40px',
    borderRadius: '0px',
    boxSizing: 'border-box',
    fontFamily: 'var(--font-sans)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    color: '#1d1d1f'
  });

  captureContainer.innerHTML = `
        <!-- Guiding Text -->
        <div style="
            font-size: 14px; 
            color: #86868b; 
            margin-bottom: 30px; 
            letter-spacing: 0.05em;
            text-transform: uppercase;
            font-weight: 600;
        ">
            这个或许对你有帮助
        </div>

        <!-- Main Content -->
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; margin-bottom: 40px; width: 100%;">
            <h1 style="
                font-size: 64px;
                margin: 0 0 15px 0; 
                line-height: 1.1;
                font-family: inherit;
                color: #1d1d1f;
            ">${titleText}</h1>
            <div style="
                font-size: 20px; 
                color: #86868b; 
                font-weight: 400;
            ">${subtitleText}</div>
        </div>

        <!-- Divider -->
        <div style="width: 100%; height: 1px; background: #f2f2f7; margin-bottom: 25px;"></div>

        <!-- Footer: QR & Link -->
        <div style="
            display: flex; 
            align-items: center; 
            justify-content: space-between; 
            width: 100%; 
            background: #f9f9fb; 
            padding: 20px 25px; 
            border-radius: 20px;
        ">
            <div style="text-align: left;">
                <div style="font-size: 13px; color: #86868b; margin-bottom: 6px;">扫描二维码查看详情</div>
                <div style="font-size: 16px; font-weight: 600; color: #007aff; word-break: break-all;">
                   ${window.location.hostname}
                </div>
            </div>
            <canvas id="share-qr" style="width: 70px; height: 70px;"></canvas>
        </div>
    `;

  document.body.appendChild(captureContainer);

  // 3. Generate QR Code
  const canvas = captureContainer.querySelector('#share-qr');
  QRCode.toCanvas(canvas, currentUrl, {
    width: 140, // High res for canvas
    margin: 0,
    color: {
      dark: '#1d1d1f',
      light: '#00000000'
    }
  }, (error) => {
    if (error) {
      console.error(error);
      cleanup();
      return;
    }

    // 4. Capture Image
    html2canvas(captureContainer, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff', // Ensure white bg
      logging: false
    }).then(canvas => {
      const dataUrl = canvas.toDataURL('image/png');
      showShareModal(dataUrl);
      cleanup();
    }).catch(err => {
      console.error('Screenshot failed:', err);
      cleanup();
    });
  });

  function cleanup() {
    document.body.removeChild(captureContainer);
    btn.disabled = false;
    btn.innerHTML = originalText;
  }
}

function showShareModal(imageUrl) {
  // Check if modal already exists
  let modal = document.querySelector('.share-modal-overlay');

  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'share-modal-overlay';
    modal.innerHTML = `
            <div class="share-modal-content">
                <button class="share-modal-close">×</button>
                <img src="" class="share-modal-img" alt="Share Card" />
                <div class="share-modal-hint">
                    长按图片保存或分享 <br>
                    <span style="font-size: 0.8em; opacity: 0.7;">(右键另存为)</span>
                </div>
            </div>
        `;
    document.body.appendChild(modal);

    // Close handlers
    const closeBtn = modal.querySelector('.share-modal-close');
    closeBtn.onclick = () => closeModal(modal);
    modal.onclick = (e) => {
      if (e.target === modal) closeModal(modal);
    };
  }

  // Update content and show
  const img = modal.querySelector('.share-modal-img');
  img.src = imageUrl;

  // Slight delay to allow CSS transitions to work if appending for first time
  requestAnimationFrame(() => {
    modal.classList.add('active');
  });
}

function closeModal(modal) {
  modal.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
  injectNavigation();
  setupShareFeature();
});

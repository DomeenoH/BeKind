const fs = require('fs');
const path = require('path');

// 1. 读取首页 index.html，提取所有 emoji 映射
// 格式: <a href="/pages/no-hello/" ...> ... <h2>👋</h2>
const homeHtmlPath = path.join(__dirname, 'index.html');
const homeContent = fs.readFileSync(homeHtmlPath, 'utf-8');

// 正则匹配 href 和 h2 中的 emoji
const linkPattern = /<a href="\/pages\/([^/"]+)\/"[^>]*>[\s\S]*?<h2>([\s\S]*?)<\/h2>/g;
const pageEmojis = {};

let match;
while ((match = linkPattern.exec(homeContent)) !== null) {
    const pageName = match[1];
    const emoji = match[2].trim();
    pageEmojis[pageName] = emoji;
}

console.log('Mapping found:', pageEmojis);

// 2. 遍历 sub-pages 更新 favicon
const pagesDir = path.join(__dirname, 'pages');
if (fs.existsSync(pagesDir)) {
    const dirs = fs.readdirSync(pagesDir);
    let updatedCount = 0;

    dirs.forEach(dir => {
        if (!pageEmojis[dir]) {
            console.warn(`⚠️  No emoji found for page: ${dir}`);
            return;
        }

        const htmlPath = path.join(pagesDir, dir, 'index.html');
        if (fs.existsSync(htmlPath)) {
            let content = fs.readFileSync(htmlPath, 'utf-8');
            const emoji = pageEmojis[dir];

            // 构建 SVG Data URI
            const favicon = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`;

            // 替换或添加 favicon
            // 匹配 <link rel="icon" ...>
            const faviconPattern = /<link rel="icon"[^>]*>/;

            if (faviconPattern.test(content)) {
                content = content.replace(faviconPattern, `<link rel="icon" href="${favicon}" />`);
            } else {
                // 如果没有 icon 标签，插入到 <head> 中
                content = content.replace('</head>', `    <link rel="icon" href="${favicon}" />\n</head>`);
            }

            fs.writeFileSync(htmlPath, content, 'utf-8');
            // console.log(`✅ Updated ${dir} with ${emoji}`);
            updatedCount++;
        }
    });
    console.log(`\n🎉 Success! Updated ${updatedCount} pages.`);
}

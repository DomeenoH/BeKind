# BeKind · 互联网沟通指北

50 条互联网沟通法则、思维剃刀和网络行为原则。多数法则配一段群聊：多米诺、西打、尾巴和群友把坏示范与可用说法演一遍，右侧跟一段解释。

线上地址：[bk.0x0.cat](https://bk.0x0.cat)

## 技术栈

Astro 纯静态输出，保留 `/no-hello/`、`/xy-problem/` 等原有 URL。没有前端框架、没有 CSS 框架、没有构建期数据请求；除了 QQ 头像与访问统计，页面不依赖第三方脚本。

## 项目结构

```text
src/
├── components/
│   ├── SiteHeader.astro    # 吸顶导航 + 随机一条
│   ├── SiteFooter.astro    # 页脚（full / minimal 两版）
│   ├── LawCard.astro       # 首页卡片，同时生成搜索索引
│   ├── CategorySection.astro
│   ├── LawGlyph.astro      # slug → lucide 图标的唯一映射处
│   ├── ChatScene.astro     # 坏示范 / 好示范场景
│   ├── CharacterAvatar.astro
│   └── ShareActions.astro  # 复制链接 + 生成分享卡
├── data/
│   ├── laws.ts             # 50 条法则的唯一内容源
│   ├── law-types.ts        # 类型与三个主题的定义
│   ├── law-icons.ts        # slug → 图标名（纯数据，可测）
│   ├── site.ts             # 站点级文案：主张、简介、角色、三步用法
│   └── characters.ts       # 角色姓名、QQ 号与实时头像地址
├── layouts/BaseLayout.astro
├── lib/                    # 聊天行归一化、分享卡内容
├── pages/                  # 首页、详情动态路由、404、sitemap.xml
└── styles/global.css       # 设计令牌 + 全部组件样式
```

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm test         # 数据与内容守卫
npm run build    # 产物在 dist/
```

## 改动内容时的规则

- **法则正文只改 `src/data/laws.ts`**，别在组件里拼文案。
- 每条法则需要 `title`、`englishTitle`、`summary`、`category`，以及 `bad` / `good` 两段场景（`layout: "statement"` 的例外，用 `specialHtml`）。
- 新增法则后要同步补三处：`order` 连续、`data/law-icons.ts` 里的图标名、`components/LawGlyph.astro` 里对应的 lucide 图标。
- 测试会拦住：路由数量与顺序、分类是否重复、图标映射是否存在、站点文案里是否混入 emoji。

## 视觉约定

- 「编辑部手册」：暖纸底 `#f5f4f0`、墨字 `#17171b`，只用两种语义色——错 `#b3412c`、对 `#2c6a4d`。
- 图标一律 lucide 线性图标，**不用 emoji 当 UI 图标**；聊天记录里的 emoji 属于内容，保留。
- 字重只用 400 / 500 / 600 / 700：中文系统字体没有 650 / 750 / 800，写中间值会触发合成加粗。
- 文案按 320px 最低宽度设计：单段引文 ≤16 个全角字，长句靠标点断，不靠浏览器折行。
- 卡片是白面 + 发丝边，不加投影；层级靠间距（22 / 6 / 14）和字号，不靠褪色。
- 解释段落不做成卡片，作为页边批注排在聊天记录右侧，窄屏自动堆叠。

## 角色与头像

| 角色 | QQ | 身份 |
| --- | --- | --- |
| 多米诺 | `287887313` | 站点作者 |
| 西打 | `2992332948` | 主要互动角色 |
| 尾巴 | `2033886359` | 咖啡车店长，furry 小狗 |
| 群友 | `3272419793` | bot |

头像走 `q1.qlogo.cn` 的 HTTPS 接口实时拉取，不入仓库；加载失败时回退到名字首字。

## SEO

- 每页输出 canonical、OG / Twitter 卡片与 JSON-LD（首页 `WebSite` + `ItemList`，详情页 `Article` + `BreadcrumbList`）。
- `/sitemap.xml` 与 `/robots.txt` 由构建生成，分享图是 `public/og.png`（1200×630）。

## 内容与授权

每篇法则在页面底部标注来源或延伸阅读。编排与译文采用 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)，代码采用 [MIT License](LICENSE)。

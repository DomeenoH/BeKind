# BeKind · 互联网沟通指北

79 条互联网沟通法则、思维剃刀和网络行为原则。多数法则配一段群聊：多米诺、西打、尾巴和群友把坏示范与可用说法演一遍，右侧跟一段解释。

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
│   ├── LawVisual.astro     # 示意图分发（VisualId → components/visuals/*）
│   ├── visuals/            # 每条一张手绘图，见下方「示意图」
│   ├── CharacterAvatar.astro
│   └── ShareActions.astro  # 复制链接 + 生成分享卡
├── data/
│   ├── laws.ts             # 66 条基础法则的唯一内容源
│   ├── laws-extra.ts       # 2026-11 增补的 5 条（order 67–71）
│   ├── laws-expand.ts      # 2026-11 第二批 8 条（order 72–79）
│   ├── related.ts          # slug → 相关条目（详情页底部渲染）
│   ├── references.ts       # slug → 一手来源（与页脚「延伸阅读」分开）
│   ├── law-caveats.ts      # slug → 代价 / 例外（详情页底部两块）
│   ├── law-aliases.ts      # 检索别名表：读者会怎么问 → 落到哪条
│   ├── law-situations.ts   # slug → 场合（群聊 / 私聊 / 邮件 / 公开平台）
│   ├── law-types.ts        # 类型与四个主题的定义
│   ├── law-icons.ts        # slug → 图标名（纯数据，可测）
│   ├── site.ts             # 站点级文案：主张、简介、角色、三步用法
│   └── characters.ts       # 角色姓名、QQ 号与实时头像地址
├── layouts/BaseLayout.astro
├── lib/                    # 聊天行归一化、检索、Markdown 导出、分享卡
├── pages/                  # 首页、详情动态路由、404、sitemap.xml、skill.md、laws.md
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

- **法则正文只改 `src/data/laws.ts`**（2026-11 之后的增补放 `laws-extra.ts`），别在组件里拼文案。
- 每条法则需要 `title`、`englishTitle`、`summary`、`category`，以及 `bad` / `good` 两段场景（`layout: "statement"` 的例外，用 `specialHtml`）。
- 新增法则后要同步补九处：`order` 连续、`data/law-icons.ts` 里的图标名、`components/LawGlyph.astro` 里对应的 lucide 图标、`data/related.ts` 的相关条目、`data/law-aliases.ts` 的别名、`data/law-caveats.ts` 的代价与例外、`data/law-situations.ts` 的场合（这条允许先留空，但别因为偷懒留空）、`laws.test.ts` 的条目数、`law-copy-style.test.ts` 的 `STRICT_SLUGS`。漏了会让测试直接挂，不会静默上线。
- 标题控制在 9 个字以内。分享卡的标题是单行、不换行，452px 上限在 40px 字号下只放得下 11 个字，再长会被 `poster-layout.test.ts` 拦下来。
- 首页卡片显示的是**分类内序号**，详情页显示的是全站序号（`06 / 79`）；两者不要混。
- 四个分类按「读者要做什么」切，不按「条目是什么」切：`clarity` 管怎么把信息说清，`relation` 管怎么不把关系弄僵，`thinking` 管推理站不站得住，`systems` 管群体怎么放大坏习惯。加新条目时先问「读者在什么处境下会需要它」，再决定挂哪一组。
- `communication` 在 2026-11 拆成了 `clarity` 和 `relation`。原来那一组吃了 40 条，占一半，因为把「信息组织」和「关系维护」混在一起了。别再把这两类合并回去。
- 测试会拦住：路由数量与顺序、分类是否重复、图标映射是否存在、相关条目是否指向存在的 slug、参考链接是否为 https、站点文案里是否混入 emoji。

## 检索

输入框不是 `includes`。链路在 `lib/law-search.ts`，四步：

1. **归一化**：`NFKC` 转半角、小写、标点当分隔符。
2. **吃掉已知说法**：`data/law-aliases.ts` 里的说法按长度倒序，先从查询里匹配掉。「借钱不还」不会拆成「借钱」去命中一堆无关条目。
3. **自由词过筛**：剩下的词先清虚词（一直 / 就是 / 怎么办），再按语料库判断——**没人写过的词直接丢掉**。否则「同事一直问在吗」会一条都搜不出来，因为「同事一直问」不在任何一条正文里。
4. **每组都要命中**：一组都凑不齐时退回二元组模糊匹配；严格结果为空且词组 ≥2 时放宽成「盖住一半」。

排序：标题 100 / 摘要 55 / 对话 35 / 正文 12，别名点名的那条再加 60，同分按别名命中数排。

其他行为：

- **条号直达**：`35`、`#35`、`第 35 条` 都只返回那一条；回车打开。
- **URL 状态**：查询写在 `?q=`，场合写在 `?s=`，刷新和分享都能还原。新搜索会清掉 `#law-` 锚点，否则锚点会把筛选顶回去。
- **组内排序**：卡片用 `style.order` 在分类内重排，不打断四个分组的结构。

## 场合筛选

搜索框下面那排 chips 是另一根轴：**这话是落在哪儿说的**。

| id | 标签 | 判定 |
| --- | --- | --- |
| `group` | 群聊 | 三人在场，说出来会被围观 |
| `dm` | 私聊 | 只有你和对方 |
| `mail` | 邮件 | 邮件、工单、正式书面 |
| `public` | 公开平台 | 论坛、评论区、社交媒体 |

和四个分类不重叠：分类讲主题，场合讲场景。所以是「往里收」的筛选，不是第二套导航。

标注在 `data/law-situations.ts`，按 slug 挂。判定标准只有一条：**换个场合，这条还成立吗？**

- 成立就不标。别当混蛋、奥卡姆剃刀、沉没成本放到哪儿都对，标了等于没标。所以有十九条是空的，这是有意的。
- 不成立才标。当众纠错和私下纠错是两条命，所以 `correct-in-private` 挂 `group` + `dm`。

测试兜底：slug 必须存在、场合必须登记过、单条最多两个（挂多了就成了万金油）、每个场合至少八条、留空不超过四分之一。

单选，点一下收起，点第二下还原。和搜索是交集——`?s=public&q=夸人` 同时生效。

加别名的方式：`phrases` 写读者会打的字，`terms` 写**正文里真实存在的子串**（`law-aliases.test.ts` 会逐条核对，写错就挂）。测试还有一份行为清单（`lib/law-search.test.ts`），每条都是「这个问法必须先给那条」。

## 代价与例外

`data/law-caveats.ts` 给每条法则配两句话：用错了会付什么代价、什么情况下这条不成立。

- 不进 `laws.ts`，和 `related.ts` / `references.ts` 一样按 slug 挂。
- 测试会拦：缺条、孤儿 slug、两段太短或太长、「视情况而定」这类等于没写的话、两条共用一个模板。
- 写的时候别写成免责声明。代价要具体到场景，例外要具体到能判断。

## 示意图

内容本身就是一张图的条目（邓宁-克鲁格、车棚效应、沉没成本等），不再套「坏示范 / 好示范 / 三条清单」，而是在两段场景之间插一张手绘图。

- 想给某条加图：在 `data/law-types.ts` 的 `VisualId` 里登记名字，在 `components/visuals/` 新建组件，在 `LawVisual.astro` 的注册表里挂上，最后在 `laws.ts` 里写 `visual: '<id>'`。测试会校验这个清单。
- 画布统一 **500×N**。这个宽度是被窄屏倒推出来的：文字随 SVG 等比缩放，画布越宽，手机上字号越小。500 在 320px 屏上还能读到 9px 左右，760 就只剩 5px。
- 不要给图加 `min-width` 或 `overflow-x`。卡片 `max-width: 600px` 居中，SVG 宽度 100%，窄屏直接等比缩，不出滚动条。
- 颜色一律走 `.viz-*` 类，不写行内 `fill`；SVG 文字用 `fill` 而不是 `color`。
- 图内标题用 `text-anchor` 把标签分到不同象限，别靠肉眼对位置——第一版「开悟之坡」就压在曲线上。

## 主标题动效

少数条目可以让主标题区演一遍法则本身。目前两条：

| 条目 | 效果 | 机制 |
| --- | --- | --- |
| no-hello | 标题里的 `hello` 被红笔划掉，再打进下一个语的问候 | 打字 + 划掉 |
| reply-all | 一封抄送三十人的邮件，「收到」一条条挤进来，最后只留一句 | 累积 + 收拢 |
| one-message | 五条碎句排开，末了并成一条完整的话 | 分裂 → 合并 |
| three-strikes | ①②③ 依次亮起，然后跳出「别再打字了」 | 计数 |
| no-jargon | 「对齐 / 颗粒度 / 闭环」标红，退场，换成「一起看细节，把这事收尾」 | 替换 |

除 no-hello 需要打字机脚本，其余四条都是纯 CSS 时间轴，不依赖 JS。

- 加一条：`data/law-types.ts` 的 `HeroEffectId` 登记 → `components/HeroEffect.astro` 加分支（标注 + 脚本）→ `laws.ts` 的 `hero.effect` 写 id。测试会锁这份清单。
- **入场动画别用 `forwards`**：它会把 `opacity` 锁死在终值，动画优先级高于普通声明，后续想靠加类改透明度会失效。用 `both` + `from` 起始帧。
- 元素默认状态要写成「没有 JS 也成立」的样子（`reply-all` 的默认是 15 颗全亮，没 JS 就是一堵墙），别默认 `opacity: 0`——那会在禁用脚本时留一条空白。
- `prefers-reduced-motion` 下直接给静止的终态，不做依次入场。

## 视觉约定

- 「编辑部手册」：暖纸底 `#f5f4f0`、墨字 `#17171b`，只用两种语义色——错 `#b3412c`、对 `#2c6a4d`。
- 图标一律 lucide 线性图标，**不用 emoji 当 UI 图标**；聊天记录里的 emoji 属于内容，保留。
- 字重只用 400 / 500 / 600 / 700：中文系统字体没有 650 / 750 / 800，写中间值会触发合成加粗。
- 文案按 320px 最低宽度设计：单段引文 ≤16 个全角字，长句靠标点断，不靠浏览器折行。
- 卡片是白面 + 发丝边，不加投影；层级靠间距（22 / 6 / 14）和字号，不靠褪色。
- 解释段落不做成卡片，作为页边批注排在聊天记录右侧，窄屏自动堆叠。
- 窄屏把多列改单列时写 `grid-template-columns: minmax(0, 1fr)`，不要单写 `1fr`。`1fr` 的隐式最小值是 `auto`，里面只要有 nowrap 的一排东西（比如 `reply-all` 的 `hero-echo` 气泡墙），就会把整列撑破、整页出横向滚动条。
- 同理，`repeat(auto-fill, minmax(292px, 1fr))` 这种写法在容器比 292 还窄时会硬撑出溢出。写成 `minmax(min(292px, 100%), 1fr)`，320px 屏才不会横着滚。

## 角色与头像

| 角色 | QQ | 身份 |
| --- | --- | --- |
| 多米诺 | `287887313` | 站点作者 |
| 西打 | `2992332948` | 主要互动角色 |
| 尾巴 | `2033886359` | 咖啡车店长，furry 小狗 |
| 群友 | `3272419793` | bot |

头像走 `q1.qlogo.cn` 的 HTTPS 接口实时拉取，不入仓库；加载失败时回退到名字首字。

## 给 AI 用

构建会同时产出两份 Markdown，内容是同一份 `laws.ts` 生成的，不手写：

| 路径 | 内容 | 大小 |
| --- | --- | --- |
| `/skill.md` | 使用规则 + 79 条索引表（含常被这样问的说法） | ~15 KB |
| `/laws.md` | 全文：场景对话、解释、代价、例外 | ~122 KB |

线上：`https://bk.0x0.cat/skill.md`、`https://bk.0x0.cat/laws.md`。

当 skill 装的话，两份放同一个目录（`SKILL.md` 用相对路径引用 `laws.md`）：

```bash
mkdir -p ~/.workbuddy/skills/bekind
curl -s https://bk.0x0.cat/skill.md > ~/.workbuddy/skills/bekind/SKILL.md
curl -s https://bk.0x0.cat/laws.md  > ~/.workbuddy/skills/bekind/laws.md
```

本地改完想验证：`npm run build` 后看 `dist/skill.md`、`dist/laws.md`。

## SEO

- 每页输出 canonical、OG / Twitter 卡片与 JSON-LD（首页 `WebSite` + `ItemList`，详情页 `Article` + `BreadcrumbList`）。
- `/sitemap.xml` 与 `/robots.txt` 由构建生成，分享图是 `public/og.png`（1200×630）。

## 内容与授权

每篇法则在页面底部标注来源或延伸阅读。编排与译文采用 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)，代码采用 [MIT License](LICENSE)。

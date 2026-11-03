# BeKind 内容审校与选题扩展报告

**审校对象**：`src/data/laws.ts`（66 条）、`law-types.ts`、`site.ts`、`components/visuals/*`（10 张图）、构建产物 `dist/`

**日期**：2026-11-03

**判定口径**：**修正**＝事实或概念错误，会被懂行读者抓住；**打磨**＝不影响理解但该改；**通过**＝无实质问题。

---

## 0. 结论摘要

1. 66 条中，**35 条通过、17 条需打磨、14 条需修正**。
2. 最严重的问题不是写错人名，而是**用错理论解释对的行为**：邓宁-克鲁格、麦克卢汉、回声室、奥卡姆剃刀这四条，图示/定义与例子分属两套理论。
3. 站点教人「验证来源」，但 **24 条只引 Wikipedia、2 条引 Know Your Meme、1 条没有来源**。来源层级和站点主张是反着的。
4. **6 组条目在讲同一件事**（先说结论、公开闭环、注意力成本、提问功课、善意解读、自我排查），首页按分类排列后重复感更明显。
5. 扩内容前要先修三个地基：**编号、动态计数、相关条目**。否则第 67 条加不进去。

---

## 1. 审校标准

| 维度 | 检查什么 |
| --- | --- |
| 事实 | 人名、年份、归属、术语、数字是否准确 |
| 概念 | 定义是该理论的原意，还是流行误读 |
| 贴合 | 例子是否真的演示了这条法则，而不是相邻的另一条 |
| 一致 | 同页内的数字、角色、时间线；跨页的编号、年份、来源 |
| 来源 | 是否能支撑正文，是否可查、可复核 |

---

## 2. 全局问题（先修这些，再谈新增）

### 2.1 编号断层

首页按 `category` 分组渲染，但卡片显示的是全局 `order`。于是「把话说清楚」组里会看到 01、02、03、04、06、07、13、14……读者会以为缺页。

- **建议**：卡片改显示分类内序号（`01 / 32`），或首页改回按 `order` 排；详情页保留 `06 / 66` 作为全站位置。二选一，不要两套混用。

### 2.2 年份三套

- 65 条页脚写 `© 2025`
- 站点页脚用 `site.year = 2026`
- `no-hello` 正文写「现在已经是 2025 年了」

- **建议**：正文去掉年份，改成「现在聊天和打电话是两回事」；页脚统一走 `site.year`；`Law` 增加 `updatedAt`，详情页显示「最后核对」。

### 2.3 来源层级

统计：Wikipedia 24 条、Know Your Meme 2 条、无来源 1 条（`dunning-kruger`）、「提问的智慧」6 条、RFC 1855 2 条。

问题不在于 Wikipedia 不能读，而在于**一个教确认偏误和幸存者偏差的站，自己拿百科条目当唯一依据**。读者一旦发现，整站的说服力会被反向消耗。

- **建议**：`Law` 增加 `references: { label, url, kind: 'primary' | 'secondary' | 'further' }[]`；页脚只显示 primary + 一条 further reading；百科统一降到 further reading。

### 2.4 图标映射（复核后撤销）

复核发现：`law-icons.ts` 里 `bluf`、`tldr`、`rtfm`、`stfw` 是**无引号 key**，上一轮脚本的正则漏读了这四行；实际 66 条全部有图标映射，`site.test.ts` 也已有「每个 slug 必须有图标」的测试。此条为误报，实现时未做任何图标补齐。

- **保留建议**：`getLawIconName()` 现在仍静默回退到 `Hand`，可以改成缺失时抛错，避免以后真漏了却看不出来。

### 2.5 `smart-questions` 空导语

`hero.leadHtml` 为空。构建产物里副标题 `</span>` 后直接是空白，再接右侧 `06 / 66`，首屏会留一块空洞。

- **建议**：补一句，例如「问问题不是把难题丢出去，是把你自己走到的那一步说清楚。」

### 2.6 emoji 当列表图标

19 个条目、共 125 处用 `🔎 📖 🧪` 这类 emoji 做列表符号；README 明确写「图标一律 lucide 线性图标，不用 emoji 当 UI 图标」。聊天记录里的 emoji 属于内容，可以留；**列表符号是 UI**。

- **建议**：统一换成 lucide 小图标或纯文本项目符号；测试加一条「explanationHtml 不以 emoji 开头」。

### 2.7 没有相关条目

66 条里有 6 组近义主题，但详情页没有「相关」区块。读者看完 BLUF，不会看到 TL;DR 和 Answer, Then Explain。

- **建议**：`Law` 增加 `related: string[]`，详情页底部渲染 3 条；先手工连下面第 4 节的 6 组。

### 2.8 「66」写死在多处

`site.ts` 的 `description`、`intro`、`eyebrow`，`laws.test.ts` 的 `66` 和 `65`，README。加第 67 条要改 6 个地方。

- **建议**：文案改用模板拼 `laws.length`；测试改读常量，不要写字面量。

### 2.9 「真实群聊」措辞

`site.description` 写「多数法则配一段真实群聊」，但场景是编排的。

- **建议**：改成「一段群聊」或「一段模拟群聊」。小事，但和站点气质有关。

---

## 3. 逐条审阅

### 3.1 总表

| # | 条目 | 判定 | 一句话 |
| --- | --- | --- | --- |
| 1 | no-hello | 打磨 | 正文年份过时；两处中文措辞不自然 |
| 2 | xy-problem | 打磨 | 解释里「大家都在推荐」与对话只有一人回复不符 |
| 3 | dont-ask-to-ask | 修正 | 讲的是「结构化报障」，不是「别问能不能问」 |
| 4 | it-didnt-work | 打磨 | HP 1020 是橙色 Attention 灯，不是红灯 |
| 5 | wheatons-law | 修正 | Wil Wheaton 拼成 Will；未提 2007 PAX 语境 |
| 6 | smart-questions | 打磨 | 导语为空；emoji 当列表图标 |
| 7 | no-pointless-politeness | 修正 | 48 人 / 100 人 / 300 人三套数字打架 |
| 8 | cunninghams-law | 修正 | 「维基百科的发明者」错；未提 McGeady 与本人否认 |
| 9 | rubber-duck | 通过 | — |
| 10 | bike-shedding | 打磨 | 「决策疲劳」不是 Parkinson 的解释 |
| 11 | yak-shaving | 通过 | — |
| 12 | hanlons-razor | 打磨 | 把「假设善意」当成汉隆剃刀的核心原则 |
| 13 | postels-law | 修正 | 「70% 以上信息来自非语言」是 7-38-55 的误用 |
| 14 | three-strikes | 打磨 | 规则说 3 条后打电话，好示范第 2 条就打了 |
| 15 | bluf | 打磨 | 来源写成不存在的「U.S. Military Communication Protocol」 |
| 16 | sturgeons-law | 通过 | — |
| 17 | greshams-law | 修正 | 格雷舍姆不是「发现者」；术语 1858 年才由 Macleod 命名 |
| 18 | assume-public | 打磨 | 「私密信息根本不应该通过网络传输」过于绝对 |
| 19 | echo-chamber | 修正 | 回声室归给 Pariser；正文写的是过滤气泡 |
| 20 | online-disinhibition | 修正 | solipsistic introjection 译成「把对方想象成非人类」 |
| 21 | dunning-kruger | 修正 | 四阶段曲线不是 1999 年论文；「越专业越谦虚」过度 |
| 22 | tldr | 通过 | — |
| 23 | rtfm | 通过 | — |
| 24 | occams-razor | 修正 | 「如无必要勿增实体」不是奥卡姆原话；「最简单往往正确」是误读 |
| 25 | hitchens-razor | 通过 | — |
| 26 | poes-law | 打磨 | 中文名「波定律」易读成 wave law；范围被泛化 |
| 27 | brandolinis-law | 通过 | — |
| 28 | stfw | 修正 | `.casefold()` 的例子在技术上不成立 |
| 29 | denver-coder-9 | 通过 | — |
| 30 | no-urgent | 通过 | — |
| 31 | principle-of-charity | 通过 | — |
| 32 | grice-maxims | 通过 | — |
| 33 | context-collapse | 通过 | — |
| 34 | medium-is-the-message | 修正 | 把麦克卢汉的媒介理论缩成「发语音不礼貌」 |
| 35 | no-is-a-complete-sentence | 打磨 | 出处归给 de Becker，实际最早 1958 年匿名 |
| 36 | reply-all | 通过 | — |
| 37 | one-message | 通过 | — |
| 38 | lurk-moar | 通过 | — |
| 39 | chestertons-fence | 通过 | — |
| 40 | fundamental-attribution-error | 通过 | — |
| 41 | confirmation-bias | 通过 | — |
| 42 | survivorship-bias | 通过 | 建议补 Wald 的名字，增强可信度 |
| 43 | sunk-cost | 通过 | — |
| 44 | correlation-is-not-causation | 通过 | — |
| 45 | steelmanning | 打磨 | 来源写「straw man 的反向做法」，二者不等价 |
| 46 | bystander-effect | 修正 | 图里「20 人时 28%」没有出处；实验是 85/62/31 |
| 47 | streisand-effect | 通过 | — |
| 48 | eternal-september | 打磨 | AOL 是持续涌入，不是「每月一批」 |
| 49 | goodharts-law | 修正 | 「指标变目标」是 Strathern 的概括，不是 Goodhart 原话 |
| 50 | dont-feed-the-trolls | 通过 | — |
| 51 | no-jargon | 通过 | — |
| 52 | correct-in-private | 打磨 | 正文说「没有出处」，页脚却引 Wikipedia |
| 53 | observation-not-judgment | 通过 | — |
| 54 | ring-theory | 通过 | — |
| 55 | straight-talk-is-not-rudeness | 通过 | — |
| 56 | answer-then-explain | 通过 | 与 15、22 重复，见第 4 节 |
| 57 | passive-aggressive-texting | 打磨 | 「加温度计」比喻不成立 |
| 58 | hindsight-bias | 通过 | — |
| 59 | false-consensus | 通过 | — |
| 60 | respect-bandwidth | 打磨 | 「网络礼仪第一条」与 Shea 的第 4 条冲突 |
| 61 | meaningful-title | 通过 | — |
| 62 | make-it-easy-to-reply | 通过 | — |
| 63 | follow-up-after-solved | 通过 | 与 29 重复，见第 4 节 |
| 64 | ask-in-public | 通过 | — |
| 65 | dont-cry-bug | 打磨 | 「大部分 bug 不是 bug」没有依据，改成「很多」 |
| 66 | dont-play-helpless | 通过 | — |

### 3.2 需要修正（14 条）

#### ① [5] wheatons-law — 人名拼写

- 原文：「这是由威尔·惠顿（**Will Wheaton**）提出的定律。」
- 问题：演员本名 **Wil Wheaton**，只有一个 l。这条 2007 年在 PAX 主题演讲中提出，原话是「Don't be a dick」；短语本身 1999 年已在使用，他让它流行，不是凭空发明。
- 改成：「这是威尔·惠顿（Wil Wheaton）2007 年在 PAX 游戏展主题演讲里提出的说法。原话只有一句：Don't be a dick.」
- 来源：wilwheaton.net 2007 年 PAX 回顾；Know Your Meme「Wheaton's Law」。

#### ② [8] cunninghams-law — 身份与归属

- 原文：「概念提出者：Ward Cunningham（**维基百科的发明者**）」
- 问题：Cunningham 发明的是 **wiki**（WikiWikiWeb，1995），不是维基百科；维基百科由 Jimmy Wales 与 Larry Sanger 于 2001 年创立。另外，「Cunningham's Law」这个名字是 **Steven McGeady** 起的，Cunningham 本人称它是一句「在互联网上自我繁殖的误引」，并说自己从未建议「发错误答案来提问」。
- 改成：「名字来自 Ward Cunningham（wiki 的发明者）。这个说法由 Steven McGeady 在 1980 年代的一次交谈后命名；Cunningham 本人否认自己提倡过这种做法。」
- **同时建议加一句边界**：故意发错信息会误导第三方、消耗信任，只适合低风险的「求推荐」场景，事后要自己纠正。
- 来源：Ward Cunningham 词条「Cunningham's Law」段；McGeady 2010 年 NYT 评论。

#### ③ [19] echo-chamber — 两个概念混用

- 原文：「概念提出者：Eli Pariser（《The Filter Bubble》作者）」
- 问题：**回声室**（echo chamber）作为媒体概念由 Cass Sunstein 在 2001 年《Republic.com》推广，核心是「人主动选择只听见自己的声音，并逐渐极化」；**过滤气泡**（filter bubble）才是 Pariser 2011 年的概念，核心是「算法在你不知情时替你过滤」。正文写的是算法推荐，标题挂的是回声室，出处挂的是 Pariser。
- 改成（二选一）：
  - **A**：标题改「过滤气泡 / Filter Bubble」，正文保留算法叙事，出处改 Pariser 2011。
  - **B**：标题保留「回声室」，正文改成「你自己选择了同温层 + 群体极化」，把算法段落降为「算法加速了它」，出处改 Sunstein 2001，Pariser 放延伸阅读。
- 另：「一半以上的人持相反观点」是编造的具体数字，改成「很多人持相反观点」。
- 来源：Sunstein《Republic.com》2001；Pariser《The Filter Bubble》2011；Nguyen 2020 对二者的区分。

#### ④ [20] online-disinhibition — 六大因素译错

- 原文：「🧠 想象力：把对方想象成**非人类**」
- 问题：Suler 2004 年的第四因素是 **solipsistic introjection**（唯我论内摄）：你听不到对方的声音，大脑会自动补一个语气和形象，聊久了像在跟自己说话。不是「把对方想象成非人类」。第五因素 **dissociative imagination** 才是「把网络当成另一个世界 / 游戏」。
- 改成：「🧠 脑内补全：看不见对方，你会自动补出他的语气和形象，越聊越像在跟自己说话。」
- 来源：Suler 2004, *The Online Disinhibition Effect*；UNODC 教学材料对六因素的中性概括。

#### ⑤ [21] dunning-kruger — 曲线不是论文里的

- 原文（图注/aria-label）：「自信在刚入门时冲到顶点，学到一半跌进谷底，之后缓慢回升……愚昧之巅 / 绝望之谷 / 开悟之坡」
- 问题：这条「四阶段曲线」是后来拼接的民间版本（「绝望之谷」来自 Kübler-Ross 式的变革曲线，「愚昧之巅」来自网络漫画），**不在 Kruger & Dunning 1999 年的论文里**。原论文画的是四个四分位组的「自评 vs 实际」两条线：最低组高估，最高组略微低估，中间组接近准确。
- 原文另有：「越无知的人越自信，越专业的人越谦虚」——后半句被放大。原文是「最高四分位略微低估自己的相对位置」，不等于「谦虚」。
- 改成：
  - 图注：「这是流行的四阶段示意，不是 1999 年论文的原图。原研究只比较了四个能力组的自评与实际得分。」
  - 导语：「能力最低的一组最容易高估自己；能力最高的一组会略微低估自己。差距在两端最大，中间最小。」
  - 加一条「这条本身也有争议」：Krueger & Mueller 2002、Gignac & Zajenkowski 2020 认为部分图案是回归到均值造成的统计假象。
- 来源：Kruger & Dunning 1999；Tessera「The Dunning-Kruger graph that wasn't」；Gignac & Zajenkowski 2020。

#### ⑥ [24] occams-razor — 两处都不是原意

- 原文：「如无必要，勿增实体。**最简单的解释往往正确**。」
- 问题一：`Entia non sunt multiplicanda praeter necessitatem` 不见于奥卡姆著作，是 John Punch 1639 年的表述；奥卡姆自己的说法接近「如无必要，勿假定繁多」。
- 问题二：奥卡姆剃刀不是「最简单的解释通常为真」，而是「在解释力相同的竞争假设里，选假设最少的那一个」。它不负责判断哪个假设为真。
- 改成：「如无必要，勿增假设。**解释力相同的时候，先选假设更少的那个**。」
- 图注/解释里「听到蹄声先想马」保留，但标注这是医学格言（horses, not zebras），不是奥卡姆本人的例子。
- 来源：Stanford Encyclopedia of Philosophy / Wikipedia「Occam's razor」历史段；John Punch 1639。

#### ⑦ [13] postels-law — 70% 是误传

- 原文：「面对面交流时，我们有 **70% 以上**的信息来自非语言渠道：语调、表情、肢体语言。」
- 问题：这是 Mehrabian 7-38-55 规则的误用。原实验只测了「表达喜欢/讨厌」这一种情境，7% 词语、38% 语调、55% 表情，不能外推成「所有沟通 70% 靠非语言」。写死一个百分比，会被传播学背景的读者当场指出。
- 改成：「面对面时，语调、表情和停顿会一起参与表达；文字把这些线索全切掉了。具体比例常被引用成 7-38-55，但那只是 Mehrabian 在特定情境下的实验结果，不能当通用公式。」
- 另：波斯特尔法则原本是协议实现原则（RFC 761/793），用于聊天语气是**类比**，建议在解释开头点明「借用到人际沟通」。
- 来源：Mehrabian & Ferris 1967；Mehrabian 1971；RFC 793。

#### ⑧ [17] greshams-law — 发现者与命名者

- 原文：「**经济学家格雷舍姆发现**：当两种货币并存时，劣币会驱逐良币……」；页脚「原始概念：Thomas Gresham (16 世纪经济学家)」
- 问题：Gresham 是 16 世纪英国商人/金融家，1558 年给伊丽莎白一世的信里观察到这个现象；「Gresham's Law」这个名字是 **Henry Dunning Macleod 1858 年**起的；类似观察早至 Aristophanes《 frogs》、Oresme、Copernicus。
- 改成：「这个现象在 1558 年由 Thomas Gresham 写给伊丽莎白一世的信里被明确记录；1858 年 Macleod 用他的名字命名。更早的类似观察可以追到 Aristophanes。」
- 另：互联网部分是**类比**，不是经济学定律本身，建议加「借用到内容生态」。
- 来源：EH.net「Gresham's Law」；Macleod 1858。

#### ⑨ [46] bystander-effect — 图里的数字没有出处

- 原文（aria-label）：「只有一个人在场时，有人出手的概率约 **85%**；在场人数越多，出手概率越低，**二十人时降到 28%**。」
- 问题：85% 对得上 Darley & Latané 1968 的「独自在场」组；但该实验只有三档：独自 85%、另有一人 62%、另有四人 31%。**「20 人 28%」不是这个实验的数据**，看起来是拼接或凭感觉画的。
- 改成：图改成三档 85% / 62% / 31%，标注「Darley & Latané 1968，癫痫发作实验」；如果想画连续曲线，就明确写「示意，非实测」。
- 另：导语「需要帮忙的人越多」有歧义（更多受害者？），改成「在场的人越多，出手的人越少」。
- 来源：Darley & Latané 1968, *Bystander Intervention in Emergencies*。

#### ⑩ [28] stfw — `.casefold()` 的例子不成立

- 原文：好示范「我处理**中文**的时候有些字符好像没变，是编码问题吗？」→「试试 `.casefold()`，它对 Unicode 支持更好。」
- 问题：汉字在 Unicode 里是 `Lo`（Other Letter），**没有大小写**，`.lower()` 不改变汉字是正确行为；`.casefold()` 也不会改变汉字。这个例子会让读者以为 casefold 能处理中文，是硬错。
- 改成：用德语 ß 或土耳其语 İ 举例——
  - 「我把 `STRASSE` 和 `Straße` 比较，`.lower()` 不相等。」
  - 「用 `.casefold()`：`'Straße'.casefold()` → `'strasse'`。它做的是大小写折叠，不是编码转换。」
- 来源：Python 官方文档 `str.casefold`；Unicode 大小写映射。

#### ⑪ [34] medium-is-the-message — 理论与例子不在一个层级

- 原文：「放到群聊里，它的意思很朴素：**媒介本身在传递态度**。发语音，是把整理信息的成本留给自己、把收听的负担丢给对方。」
- 问题：麦克卢汉「the medium is the message」的原意是：媒介本身会改变人的感知比例和社会组织尺度（印刷、电视、电报各自重塑社会），不是「发语音显得不体贴」。把一个媒介生态学命题缩成聊天礼仪，例子撑不起标题。
- 改成（二选一）：
  - **A**：保留麦克卢汉，正文先讲原意，再落一句「缩到群聊里：你选的那个介质，也在替你说一部分话」，例子只作为**推论**，不要当定义。
  - **B**：标题改「选对介质 / Channel Fit」，改用 **媒介丰富度理论**（Daft & Lengel 1986）作主线：任务越模糊，越需要反馈快、线索多的介质；然后把麦克卢汉放延伸阅读。
- 我更推荐 B：它和站点「给可抄的说法」的定位更一致，也顺手解决第 14 条「三振出局」的理论依据。
- 来源：McLuhan 1964；Daft & Lengel 1986。

#### ⑫ [3] dont-ask-to-ask — 正文讲的是另一条法则

- 原文：坏示范「投影仪坏了！救命！@多米诺」；解释「你需要提供的是最小可复现单元」。
- 问题：`dontasktoask.com` 的原意是「不要问『有人懂 X 吗』『我能问个问题吗』，直接把问题问出来」。本站正文教的是**结构化报障**（上下文/现象/尝试），这已经是第 4 条 `it-didnt-work` 的内容。标题、slug、正文三者对不上。
- 改成（二选一）：
  - **A（推荐）**：正文改成原意。坏示范：「有人懂投影仪吗？」→「302 会议室投影仪蓝屏，Mac 接 HDMI 无信号，有人遇到过吗？」；把「最小可复现单元」整段移到第 4 条。
  - **B**：标题改「别让求助变成谜语」，slug 保留但加一句「这条讲的是报障，不是 dontasktoask 原意」，避免懂行的读者觉得被糊弄。
- 另：好示范里「备用的 VGA 转接线」对 Mac 不自然（需要 USB-C 转 VGA），改成「USB-C 转 HDMI 转接头」。
- 来源：dontasktoask.com。

#### ⑬ [49] goodharts-law — 原话不是这句

- 原文：「**古德哈特的原话大意是**：当一个指标成为目标，它就不再是好指标。」
- 问题：Goodhart 1975 年的原话是「任何被观察到的统计规律，一旦被用于控制目的，就会倾向于崩塌」。今天流行的「When a measure becomes a target, it ceases to be a good measure」是 **Marilyn Strathern 1997 年**的概括，不是 Goodhart 原话。
- 改成：「古德哈特 1975 年的说法是：一个统计规律一旦被拿来当控制指标，就会开始失效。后来 Strathern 把它压缩成一句更好记的：当一个指标变成目标，它就不再是好指标。」
- 来源：Goodhart 1975；Strathern 1997, *Improving Ratings*。

#### ⑭ [7] no-pointless-politeness — 三套数字打架

- 原文：坏示范「（...以及其他 **48** 个人的收到）」；解释「在一个 **500** 人的群里……连续有 **100** 个人回复……后面进来的 **300** 个人」。
- 问题：48 + 2 = 50，不是 100；500 − 100 = 400，不是 300。三个数字互相对不上，而且是同一页里最显眼的位置。
- 改成：统一成一套——「500 人的群，通知发出后 100 多人回复『收到』，剩下 400 人里有很多再没看到那条更正」。坏示范的系统行改成「（...以及其他 98 个人的收到）」。
- 另：好示范的「👍 86 ❤️ 12」是表情回应，建议在解释里点明「用 reaction 代替文字回复」，否则读者会以为那是系统消息。

### 3.3 需要打磨（17 条）

| 条目 | 问题 | 建议 |
| --- | --- | --- |
| no-hello | 「现在已经是 2025 年了」；「那个事在什么时候来的」不自然 | 去年份；改成「那件事什么时候截止」 |
| xy-problem | 解释「大家都在热烈推荐软件」，对话里只有多米诺一人回复 | 补一条群友回复，或把「大家」改成「对方」 |
| it-didnt-work | HP 1020 面板是绿色 Ready + 橙色 Attention，不是红灯 | 不写死型号，改成「指示灯闪烁」 |
| smart-questions | 导语空；三个 emoji 列表符号 | 补导语；换图标 |
| bike-shedding | 把「决策疲劳」当成 Parkinson 琐碎定律的解释 | 标成「补充解释」，Parkinson 的原机制是「投入时间与金额成反比」 |
| hanlons-razor | 「假设善意是汉隆剃刀的核心原则」——两者不等价 | 改成「汉隆剃刀先排除疏忽/忙碌/能力不足；它不是无条件假设善意，反复发生仍要处理」 |
| three-strikes | 规则说「超过 3 条消息就打电话」，好示范第 2 条就打了 | 坏示范加到第 4 轮再切电话，让例子踩到阈值 |
| bluf | 来源写成不存在的「U.S. Military Communication Protocol」 | 改成「U.S. Army Regulation 25-50（AR 25-50）」 |
| assume-public | 「私密信息根本不应该通过网络传输」过于绝对 | 改成「不该通过不受控的渠道传输」 |
| poes-law | 「波定律」易读成 wave law；原意被泛化 | 改「坡定律」；补一句原意是「极端立场的模仿无法与真心区分」 |
| no-is-a-complete-sentence | 出处只写 Gavin de Becker，实际最早 1958 年匿名 | 改成「出处不明；1958 年已见于报纸，de Becker 与 Anne Lamott 都用过」 |
| steelmanning | 来源写「straw man 的反向做法」，二者不等价 | 改成「与稻草人相反的做法；可参考 Rapoport 规则」 |
| eternal-september | 「AOL 开始每月放一批新用户」 | 改成「1993 年 9 月起向用户开放 Usenet，涌入是持续的，不是每月一批」 |
| correct-in-private | 正文说「这条原则老得没有出处」，页脚却引 Wikipedia | 删引用，或改成「管理格言，无单一出处」 |
| passive-aggressive-texting | 「别再给它加温度计」比喻不成立 | 改成「别再让对方猜温度」或直接删 |
| respect-bandwidth | 「网络礼仪的第一条」与 Shea 的第 4 条冲突 | 改成「Shea 十条里的第四条」，或删「第一条」 |
| dont-cry-bug | 「大部分 bug 不是 bug」没有依据 | 改成「很多『bug』先要排除自己这一半」 |

---

## 4. 结构：六组重复主题

66 条里有 6 组在讲同一件事。不是说不能重复，而是**同一件事要有分工**，否则读者看完三条会觉得「怎么又是这个」。

| 组 | 条目 | 重叠点 | 建议 |
| --- | --- | --- | --- |
| 先说结论 | 15 BLUF / 22 TL;DR / 56 Answer, Then Explain | 都是「把结论放最前」 | 保留 15 作主条；22 专讲「长文摘要 + 折叠」；56 专讲「问答场景先给能/不能」；三条互链 |
| 公开闭环 | 29 DenverCoder9 / 63 Follow Up / 64 Ask in Public | 都是「解决后回来说一声」 | 29 讲「别留死胡同」；63 讲「补原因」；64 讲「问在明处」；合并 63 与 29 的正文，避免同例重复 |
| 注意力成本 | 7 客套 / 37 一条说完 / 60 带宽 / 62 易回复 | 都是「别让对方付成本」 | 7 讲群聊噪音；37 讲消息粒度；60 讲广播；62 讲信息格式；加一个「注意力成本」专题页 |
| 提问功课 | 6 提问的智慧 / 23 RTFM / 28 STFW / 66 别装小白 | 都来自 ESR，都是「先自己查」 | 合成一个「提问四步」系列，首页只留 6 作入口，其余作为子页 |
| 善意解读 | 12 汉隆 / 31 善意原则 / 40 基本归因 | 都是「别急着判人品」 | 12 讲「恶意 vs 疏忽」；31 讲「先把话还原成正常人会说的」；40 讲「环境 vs 人品」；互链 |
| 自我排查 | 3 谜语人 / 4 它挂了 / 65 别急着说 bug | 都是「报障前先排除自己」 | 3 修成原意后，与 4、65 的分工自然清楚：3 讲「直接问」，4 讲「报全信息」，65 讲「先排除自己」 |

**另外**：`smart-questions` 的搜索空状态提示写「换个词试试：在吗、提问、群聊、**已读不回**」，但站里没有「已读不回」条目；搜这个词只会命中 `no-urgent` 里的一句台词。这正好是第 5 节 B1 的入口。

---

## 5. 新增内容提案（四轮）

选题原则：**先补解释力，再补场景；每条都要能回答「它解释了现有条目解释不了的那一部分」**。不建议为了凑数把相邻概念再拆一条。

### 第一轮：补理论底座（解释「为什么这些规矩成立」）

#### A1 媒介丰富度 / Media Richness

- **主题**：不是「媒介即讯息」，是「任务和介质要匹配」。
- **要点**：
  - 介质按四个维度分丰富度：反馈速度、线索数量（语气/表情/肢体）、自然语言程度、个人化程度。
  - 任务分「不确定」（缺事实）和「模糊」（有多种解释）：缺事实用精简介质，模糊用丰富介质。
  - 群聊里最常见的错误不是「说不清楚」，是「用精简介质处理模糊任务」。
- **适用场景**：发语音前、约会议前、跨时区协作、向上汇报坏消息。
- **与现有条目**：替换或补强 #34；给 #14「三振出局」提供理论依据；和 #22 TL;DR 互链。
- **来源**：Daft & Lengel 1986, *Management Science* 32(5): 554–571；[AURA Lab 摘要](https://aura-lab.siue.edu/theories/media-richness-theory?cat=org)。

#### A2 知识诅咒 / Curse of Knowledge

- **主题**：你一旦知道，就很难想象「不知道」是什么感觉。
- **要点**：
  - Camerer、Loewenstein、Weber 1989 年命名；源头可追到 Robin Hogarth。
  - Newton 1990 的「敲歌者/听歌者」实验：敲的人以为一半人能猜中，实际 120 次里只中 3 次（2.5%）。
  - 后果：写文档默认读者懂、开会跳过前提、用缩写不解释。
- **适用场景**：写 onboarding 文档、给新人讲流程、跨专业协作、写产品说明。
- **与现有条目**：补 #51「说人话」和 #6「提问的智慧」；和 #21 邓宁-克鲁格区分——前者是「不知道自己的知识边界」，后者是「不知道自己的能力边界」。
- **来源**：[The Decision Lab](https://thedecisionlab.com/reference-guide/management/curse-of-knowledge)；Camerer et al. 1989, *Journal of Political Economy*；Newton 1990, Stanford 博士论文。

#### A3 面子与礼貌策略 / Face and Politeness

- **主题**：「在吗」不是废话，是在保护双方的面子。
- **要点**：
  - Brown & Levinson 1987：人有「积极面子」（想被认可）和「消极面子」（不想被强加）。
  - 请求、拒绝、纠正都是「面子威胁行为」；越可能威胁对方面子，人越倾向用暗示、铺垫、免责声明。
  - 这解释了为什么「直接说」对某些人像冒犯，而「绕」对另一些人像折磨。
- **适用场景**：跨文化团队、向上沟通、拒绝同事、给上级提反对意见。
- **与现有条目**：给 #1 no-hello、#3 dont-ask-to-ask、#35 no-is-a-complete-sentence、#54 ring-theory 提供统一解释；和 A4 互链。
- **来源**：Brown & Levinson 1987, *Politeness: Some Universals in Language Usage*；[MDX 综述 PDF](https://repository.mdx.ac.uk/download/63fdb152fed0911195038327c564d3bbb23c2988312ebfaa5952d6ac5a70a39f/340212/MGT4814%20VAN%20MEURS%20Multidisciplinary%20Perspectives.pdf)。

#### A4 Ask vs Guess Culture / 直问与暗示

- **主题**：有人默认「可以问，拒绝也没关系」，有人默认「没把握就别开口」。
- **要点**：
  - Andrea Donderi 2007 年在 Ask MetaFilter 的回帖里提出，2010 年《大西洋月刊》扩散。
  - Ask 文化：直接提请求，接受「不」；Guess 文化：先铺垫、试探，最好让对方主动提出。
  - 冲突点：Ask 觉得 Guess 阴阳怪气，Guess 觉得 Ask 强人所难。
- **适用场景**：跨地区/跨代际协作、亲密关系、请人帮忙、被请帮忙。
- **与现有条目**：补 #1、#3、#35、#54；和 A3 是「一体两面」：面子解释动机，Ask/Guess 解释策略差异。
- **来源**：[Ask vs Guess 综述](https://www.unshakablebeing.com/ask-vs-guess-culture/)；Donderi 2007 原帖；《大西洋月刊》2010。

#### A5 多元无知 / Pluralistic Ignorance

- **主题**：没人反对，不等于大家都同意。
- **要点**：
  - 定义：多数人私下不接受某个规范，却误以为多数人接受。
  - Prentice & Miller 1993 的普林斯顿饮酒研究：学生私下对酗酒的不适，低于他们以为的「平均学生」。
  - 群聊里的表现：没人说话 → 你以为大家默认 → 你也不说 → 沉默被当成共识。
- **适用场景**：群里没人反对、会议上没人提问、社区规则没人执行、投票前的气氛判断。
- **与现有条目**：补 #46 旁观者、#59 虚假共识、#19 回声室；和 #48 永恒九月同属「群体规模」主题。
- **来源**：Prentice & Miller 1993；[PMC 综述](https://pmc.ncbi.nlm.nih.gov/articles/PMC6345387/)。

### 第二轮：补群聊现场（中文互联网里天天发生、站里还没有的）

#### B1 已读不回 / 回复压力

- **主题**：已读是状态，不是承诺；但「必须秒回」的规范正在制造压力。
- **要点**：
  - 区分三件事：看到了、现在能回、愿意回。多数冲突是把「看到了」当成「应该回」。
  - Barber & Santuzzi 2015 的「职场通讯压力」（telepressure）：对快速回复的专注与冲动，和 burnout、睡眠质量下降相关。
  - 可操作：发消息时写明「不用现在回，今天之内就行」；需要即时回应就打电话；把「已读」从道德判断里拿出来。
- **适用场景**：工作群、跨时区、下班后、亲密关系里的「你怎么不回我」。
- **与现有条目**：直接补搜索提示里承诺的「已读不回」；和 #30 no-urgent、#60 带宽、#14 三振互链。
- **来源**：[IOAtWork 对 telepressure 的综述](https://www.ioatwork.com/email-overload-and-the-harmful-effects-of-telepressure/)；Barber & Santuzzi 2015, *Computers in Human Behavior*。

#### B2 群公告与回执设计

- **主题**：通知不是喊得大声，是让对方知道「要不要做、什么时候做、去哪做」。
- **要点**：
  - 三段式：对象（谁要动）+ 动作（做什么）+ 截止（什么时候）。
  - 回执机制：用 reaction/接龙替代「收到」刷屏；重要变更单独发一条，不要编辑原消息。
  - 置顶、群待办、@所有人 的使用边界：越少越有效。
- **适用场景**：活动通知、排班、团建、社群运营、公司群公告。
- **与现有条目**：补 #7 客套、#36 reply-all、#60 带宽；把「静默文化」从「别回复」升级成「怎么设计回执」。
- **来源**：RFC 1855 *Netiquette Guidelines*（[rfc-editor](https://www.rfc-editor.org/rfc/rfc1855)）；Shea《Netiquette》十条；AR 25-50 的 BLUF 规范。

#### B3 阿比林悖论 / Abilene Paradox

- **主题**：一群人一致同意去做一件谁都不想做的事。
- **要点**：
  - Jerry Harvey 1974 年的寓言：一家人在 40℃ 天开车去 Abilene 吃饭，每个人都以为别人想去。
  - 与 groupthink 的区别：groupthink 是无意识的趋同；阿比林悖论是**有意识地**隐瞒自己的反对。
  - 解法：决策前问一句「我们是真的都想这样，还是只是在客气？」
- **适用场景**：会议拍板、团建选址、群里「大家都行」、婚礼/聚会安排。
- **与现有条目**：补 #59 虚假共识、#46 旁观者；和 A5 多元无知是「个体版 / 群体版」。
- **来源**：Harvey 1974, *The Abilene Paradox: The Management of Agreement*；[Cognitive Biases Academy 中文条目](https://cognitivebiases.academy/zh/abilene-paradox)。

#### B4 公开挂人与开盒的边界

- **主题**：公开曝光是放大器，不是正义的快捷键。
- **要点**：
  - 三种不同的事：指出具体错误（可公开）、评价一个人（尽量私下）、曝光隐私信息（不应做）。
  - 公开挂人的不可逆：截图会脱离上下文，二次传播由不得你。
  - 开盒（doxxing）不是「监督」，是把私人信息变成公共武器；平台规则与法律都不站在这一边。
- **适用场景**：消费维权、群内冲突、看到别人被挂、自己想「发出来让大家评评理」。
- **与现有条目**：补 #18 假设公开、#47 斯特赖桑德、#52 私下纠错；这条是它们的「硬边界」。
- **来源**：本站 #18/#52 的现有论证；平台社区规则；中国《个人信息保护法》。
- **提醒**：这条涉及法律与平台政策，建议上线前做一次合规复核，不要写成法律建议。

### 第三轮：补坏论证识别（解释「对方在干什么」）

#### C1 海狮式纠缠 / Sealioning

- **主题**：用礼貌的追问，把对方耗到失态。
- **要点**：
  - 特征：反复要求证据、假装不懂、语气始终客气、问题常常已经回答过。
  - 目的不是求真，是让你疲惫或发火，再截图证明「你看，他不讲理」。
  - 应对：给一次来源，重复追问就停止；把结论留给旁观者，不留给对方。
- **适用场景**：评论区、群聊、公开讨论、被陌生人 @。
- **与现有条目**：补 #27 布兰多里尼、#50 别喂 troll；和 #25 希钦斯剃刀是「一体两面」：一个要求举证，一个防止举证被滥用。
- **来源**：David Malki, *Wondermark* #1062（2014-09-19）；[Merriam-Webster](https://www.merriam-webster.com/wordplay/sealioning-internet-trolling)。

#### C2 吉什疾驰 / Gish Gallop

- **主题**：不是论点强，是论点太多。
- **要点**：
  - 一次抛出大量半真半假的说法，让对方在有限时间里无法逐条反驳。
  - 每条反驳的成本远高于提出的成本，和布兰多里尼定律同构。
  - 应对：不追每一条，挑最弱的一条打穿；或直接指出「这是 Gish gallop」。
- **适用场景**：辩论、会议、评论区长文、被人用「十个问题」压住。
- **与现有条目**：补 #27；和 C1 同属「用数量/流程消耗你」。
- **来源**：Eugenie Scott 1994 年命名；[Gish gallop 综述](https://www.wikiwand.com/en/Gish_gallop)。

#### C3 堡垒与庭院 / Motte-and-Bailey

- **主题**：提出一个大胆主张，被质疑时退回一个无害版本，风头过了再拿出来。
- **要点**：
  - Bailey：真正想主张的、有争议的那句；Motte：被追问时退守的、几乎无人反对的那句。
  - 识别信号：「我只是说……」「我没说……」「从技术上讲……」——尤其在被打中之后。
  - 应对：把两个版本并排写出来，问「你主张的是哪一句？」
- **适用场景**：观点攻防、产品宣传、学术争论、群里的「我不是那个意思」。
- **与现有条目**：补 #45 steelmanning、#31 善意原则；是「坏论证识别」里的高阶条目。
- **来源**：Nicholas Shackel 2005, *The Vacuity of Postmodernist Methodology*；[Futility Closet 摘要](https://www.futilitycloset.com/2023/11/21/the-motte-and-bailey-fallacy/)。

#### C4 标题问号定律 / Betteridge's Law

- **主题**：标题以问号结尾，答案多半是「不」。
- **要点**：
  - 如果答案是「是」，媒体会直接写成陈述句；写成问句是为了不承担责任。
  - 不适用于开放式问题（「接下来会发生什么？」），只适用于是非问句。
  - 对读者的用法：看到问号标题，先降低预期，再找正文里的原始来源。
- **适用场景**：刷新闻、看公众号、判断「震惊体」、做信息筛选。
- **与现有条目**：补 #16 斯特金、#17 格雷舍姆；是「内容筛选」三件套里最轻的一条。
- **来源**：Ian Betteridge 2009；[Betteridge's law 综述](https://www.wikiwand.com/en/articles/Betteridge%27s_law_of_headlines)。

### 第四轮：补平台与时代（解释「环境怎么变了」）

#### D1 平台劣化 / Enshittification

- **主题**：平台先讨好用户，再讨好商家，最后把两边都榨干。
- **要点**：
  - Cory Doctorow 2023 年提出；2023 年美国方言学会年度词汇。
  - 三步：对用户好 → 为用户好而虐待用户（转向广告主）→ 虐待广告主（把价值收回自己）。
  - 对普通人的意义：你感觉「怎么越来越难用」不是错觉，是激励结构变了。
- **适用场景**：选择平台、做产品决策、解释「为什么搜索/信息流越来越差」。
- **与现有条目**：补 #17 格雷舍姆、#19 回声室、#48 永恒九月；把「平台会放大坏习惯」升级成「平台会主动变坏」。
- **来源**：Doctorow 2023, *Pluralistic*；[美国方言学会 2023 年度词汇公告](https://americandialect.org/2023-word-of-the-year-is-enshittification/)。

#### D2 AI 泔水 / AI Slop

- **主题**：AI 让「看起来像内容的东西」变得几乎零成本。
- **要点**：
  - 定义：低质量、批量生产、以获取流量或利润为目的的 AI 生成内容。
  - 三个特征：表面像样、投入极低、可无限复制。
  - 后果：验证成本被转嫁给读者；「看起来对」和「真的对」越来越难分。
- **适用场景**：刷到「AI 味」文章、做内容采购、判断搜索结果、自己用 AI 写东西的边界。
- **与现有条目**：补 #16 斯特金、#17 格雷舍姆；和 #21 邓宁-克鲁格形成「内容版」。
- **来源**：Simon Willison 2024 年推广该词；[AI slop 综述](https://www.wikiwand.com/en/AI_slop)；澎湃新闻《AI 泔水正批量复制「感动」》。

#### D3 注意力经济 / Attention Economy

- **主题**：信息越丰富，注意力越稀缺。
- **要点**：
  - Herbert Simon 1971：信息的富足造成注意力的匮乏；信息消耗的是接收者的注意力。
  - 平台商业模式把「停留时长」当目标，于是通知、红点、自动播放都在争同一块资源。
  - 对个人的用法：把「不回」当成一种配置，而不是失礼。
- **适用场景**：通知设计、群管理、个人注意力管理、解释「为什么刷不完」。
- **与现有条目**：给 #60 带宽提供理论底座；和 #7、#37、#62 组成「注意力成本」专题。
- **来源**：Simon 1971, *Designing Organizations for an Information-Rich World*；[宾州州立摘录](https://sites.psu.edu/digitalshred?p=1716)。

#### D4 邓巴数 / Dunbar's Number

- **主题**：群能维持多少「熟人」，大概有个上限；但 150 不是硬指标。
- **要点**：
  - Dunbar 1992/1993：灵长类新皮层比例与群体规模相关，外推到人约 150。
  - 2021 年 Lindenfors 等重分析：置信区间极宽（约 4–520），不能当精确上限。
  - 可用的部分：关系分层（3–5 / 15 / 50 / 150）是稳定的；具体数字是启发式，不是定律。
- **适用场景**：社群运营、群规模设计、解释「500 人群为什么必然失序」。
- **与现有条目**：补 #48 永恒九月、#46 旁观者；和 #59 虚假共识互链。
- **来源**：Dunbar 1992；Lindenfors et al. 2021；[Tessera 综述](https://tesseramag.com/category/relationships/dunbars-number-150-friends)。

---

## 6. 不建议新增的选题

这些概念看起来很适合本站，但会把错误带进来。**反而可以做成一条「不要引用这些数字」的条目**。

| 选题 | 为什么不要 |
| --- | --- |
| 学习金字塔（听 5%、读 10%……） | 数字没有原始研究，来源不可查 |
| 7-38-55 沟通法则 | 只适用于 Mehrabian 的特定情绪实验，不能外推（本报告 3.2 ⑦ 已在修） |
| 邓宁-克鲁格「四阶段」 | 民间拼接，不在 1999 年论文里（3.2 ⑤） |
| 破窗效应 | 作为警务政策争议极大，且常被误用到社区管理 |
| 一万小时定律 | Gladwell 对 Ericsson 研究的通俗化，原文强调「刻意练习」而非时长 |
| 左右脑型 / VAK 学习风格 | 没有神经科学依据 |
| 「注意力只有 8 秒」 | 没有可靠来源，常见于营销文 |

---

## 7. 落地顺序

**第一周（只修不改结构）**

1. 修 14 条「修正」：Wil Wheaton、Cunningham、回声室、Suler、DK 曲线、奥卡姆、70%、Gresham、旁观者数字、casefold、麦克卢汉、dont-ask-to-ask、Goodhart、群聊数字。
2. 补 `smart-questions` 导语；统一 `©` 年份；去掉 no-hello 的 2025。
3. 复核图标映射（已确认 66 条齐全；`site.test.ts` 已有覆盖，无需补）。

**第二周（结构）**

4. 卡片编号改分类内序号，或首页改按 order 排。
5. 加 `related` 字段与「相关条目」区块，先连 6 组。
6. 加 `references` 字段，先把 24 条 Wikipedia 来源降级、补 primary source。
7. 把 `site.ts` 的 66 改成动态计数。

**第三周起（新增）**

8. 先做 A1 媒介丰富度、A2 知识诅咒、B1 已读不回、C1 海狮式纠缠。这四条分别补「介质选择」「解释成本」「回复压力」「坏论证识别」四个空洞，和现有条目的重叠最小。
9. 每加一条，同步：`order`、图标、`related`、测试计数、首页计数。
10. B4（挂人/开盒）先做合规复核，不放进首批。

---

## 8. 主要来源

- Wheaton's Law：wilwheaton.net 2007 PAX 回顾；Know Your Meme。
- Cunningham's Law：Ward Cunningham 词条；Steven McGeady 2010 年 NYT 评论。
- Echo chamber / filter bubble：Sunstein《Republic.com》2001；Pariser《The Filter Bubble》2011。
- Online disinhibition：Suler 2004；UNODC 教学材料。
- Dunning-Kruger：Kruger & Dunning 1999；Tessera 对「四阶段曲线」的考据；Gignac & Zajenkowski 2020。
- Occam's razor：Wikipedia/SEP 历史段；John Punch 1639。
- Mehrabian 7-38-55：Mehrabian & Ferris 1967；Mehrabian 1971。
- Gresham's Law：EH.net, George Selgin；Macleod 1858。
- Bystander effect：Darley & Latané 1968。
- Goodhart's Law：Goodhart 1975；Strathern 1997。
- Media richness：Daft & Lengel 1986。
- Curse of knowledge：Camerer, Loewenstein & Weber 1989；Newton 1990。
- Politeness：Brown & Levinson 1987。
- Ask vs Guess：Andrea Donderi 2007；《大西洋月刊》2010。
- Pluralistic ignorance：Prentice & Miller 1993。
- Telepressure：Barber & Santuzzi 2015。
- Abilene paradox：Harvey 1974。
- Sealioning：Wondermark #1062（2014）；Merriam-Webster。
- Gish gallop：Eugenie Scott 1994。
- Motte-and-bailey：Shackel 2005。
- Betteridge's law：Ian Betteridge 2009。
- Enshittification：Doctorow 2023；American Dialect Society。
- AI slop：Simon Willison 2024；Wikipedia；澎湃新闻。
- Attention economy：Herbert Simon 1971。
- Dunbar's number：Dunbar 1992；Lindenfors et al. 2021。

---

## 9. 实施记录（2026-11-03）

本节记录报告落地后站点实际发生的变化；上面的审校结论仍按原始 66 条计。

**内容修正**
- 14 条「修正」全部落地：Wil Wheaton、Cunningham、回声室/过滤气泡、Suler 六因素、DK 曲线与过度表述、奥卡姆、7-38-55、Gresham、旁观者数字、`.casefold()`、麦克卢汉、dont-ask-to-ask、Goodhart、客套条数字。
- 17 条「打磨」落地：no-hello 年份、XY「大家」、HP 指示灯、smart-questions 导语、Parkinson 机制、汉隆/善意、三振阈值、BLUF 来源、assume-public 措辞、坡定律、No 的出处、steelman 来源、永恒九月、私下纠错出处、标点比喻、带宽条「第一条」、bug 条「大部分」。
- `dont-ask-to-ask` 重写为原意（先举手再提问），`three-strikes` 好示范补到第 4 轮才切电话。
- 旁观者图改为 Darley & Latané 1968 的 85/62/31 三档；DK 图保留四阶段示意，但明确标注「流行示意 · 非原图」。

**结构**
- 首页卡片改为分类内序号（01/35、01/17、01/18），详情页保留全站序号（06/70）。
- 新增 `related.ts` 与「相关条目」区块，连通 6 组近义主题。
- 新增 `references.ts` 与「参考」区块；24 条 Wikipedia 页脚改为「延伸阅读」，不再冒充一手来源。
- 页脚 `© 2025` 改为 `© {{YEAR}}` 占位，详情页用 `site.year` 替换；`no-hello` 正文去年份。
- `site.ts` 的 66 改为 `orderedLaws.length`，新增条目不再需要改文案。
- `site.description` 的「真实群聊」改为「群聊」。

**新增 4 条**
- `media-richness` 选对介质 / Media Richness
- `curse-of-knowledge` 知识的诅咒 / Curse of Knowledge
- `left-on-read` 已读不回 / Left on Read
- `sealioning` 海狮式纠缠 / Sealioning

**验证**
- `npm test`：34 passed。
- `npm run build`：72 pages（70 条 + 首页 + 404）。
- 构建产物检查：无 `{{YEAR}}` 残留、无 `© 2025`；新页面相关/参考区块正常；首页计数 35/17/18。
- 上线：commit `772320e`，Pages run `41602247961` success；线上 `bk.0x0.cat` 回读通过。

**遗留**
- 19 个条目、125 处 emoji 列表符号尚未批量替换为文本/图标（涉及内容语气，建议逐条判断，不做全局替换）。
- B4「公开挂人/开盒」涉及法律与平台政策，未纳入首批。
- `getLawIconName()` 仍静默回退 `Hand`，可改为抛错。

---

> 本报告的事实核查以公开可查资料为准；涉及法律与平台政策的条目（B4）建议上线前另行合规复核。

# BeKind · 互联网沟通指北

BeKind 收录 30 条互联网沟通法则、思维剃刀和网络行为原则。每篇内容都从一段具体群聊开始，由多米诺、西打、尾巴和其他 bot 把坏示范与可用说法演出来。

线上地址：[bk.0x0.cat](https://bk.0x0.cat)

## 项目结构

项目使用 Astro 生成纯静态页面，保留 `/no-hello/`、`/xy-problem/` 等原有 URL，并由 GitHub Pages 发布。

```text
src/
├── components/       # 法则卡片、群聊场景、头像与分享卡
├── data/
│   ├── characters.ts # 角色姓名、QQ 号与实时头像地址
│   └── laws.ts       # 30 条法则的内容真源
├── layouts/          # 站点公共布局与 SEO 元信息
├── pages/            # 首页、详情动态路由与 404
└── styles/           # 全站视觉系统
```

## 本地开发

```bash
npm install
npm run dev
```

默认地址为 `http://localhost:4321`。

## 验证

```bash
npm test
npm run build
```

测试会检查路由数量、顺序、内容完整性、角色引用和尾巴的 QQ 身份。构建产物输出到 `dist/`。

## 角色与头像

| 角色 | QQ | 身份 |
| --- | --- | --- |
| 多米诺 | `287887313` | 站点作者 |
| 西打 | `2992332948` | 主要互动角色 |
| 尾巴 | `2033886359` | coffee truck IP，furry 小狗 |

头像通过 `q1.qlogo.cn` 的 HTTPS 接口实时获取，不保存到仓库。角色更换 QQ 头像后，页面会继续拉取当前头像。

## 内容与授权

每篇法则都在页面底部标注来源或延伸阅读。编排与译文采用 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)，代码采用 [MIT License](LICENSE)。

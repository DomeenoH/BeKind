import type { Law } from './law-types';

const laws: Law[] = [
  {
    "slug": "no-hello",
    "order": 1,
    "category": "communication",
    "icon": "👋",
    "title": "别只说“你好”",
    "englishTitle": "No Hello",
    "summary": "有事儿直接说事儿，别问在吗。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "不要说<span id=\"strike\">hello</span>",
      "subtitleHtml": "不要在聊天时问：\"在吗？\"",
      "leadHtml": "想象一下别人接通你的电话时，你问 ：\"在吗？\"<br>\n                    然后等待对方回应…🤦"
    },
    "bad": {
      "titleHtml": "❌ 不要这样做",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "2:15 下午",
          "text": "在？",
          "html": "在？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "2:19 下午",
          "text": "…？",
          "html": "…？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "2:20 下午",
          "text": "那个事在什么时候来的？",
          "html": "那个事在什么时候来的？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "2:20 下午",
          "text": "哦，在 3 点 30 分。",
          "html": "哦，在 3 点 30 分。"
        }
      ],
      "explanationHtml": "<div>\n                        <p>\n                            请注意，这个场景中西打本可以提前几分钟得到答案，也不必让多米诺等待，而多米诺本来可以立刻开始思考这个问题。\n                        </p>\n                        <p>\n                            人们这样做通常是出于礼貌，避免像面对面或者打电话时候那样唐突地直接提出请求。但现在已经是2025年了，聊天方式也和以前完全不同。对于绝大多数人来说，打字比说话慢得多。所以尽管你的初衷是好的，\n                            <strong>而实际上你只是在让对方等待</strong>\n                            你说出自己问题，这是非常没有效率的（某种意义上有些烦人）。\n                        </p>\n                        <p>类似的场景有：</p>\n                        <ul>\n                            <li>\"你好，在吗？\"</li>\n                            <li>\"在，有事直接问。\"</li>\n                            <li>\"你有时间吗？\"</li>\n                            <li>\"有\"</li>\n                            <li>\"忙吗？\"</li>\n                            <li>等等</li>\n                        </ul>\n                        <p>\n                            <strong style=\"font-weight: bold;\">请直接问问题！</strong> 😫\n                        </p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 试着这样做",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "2:15 下午",
          "text": "您好，我想问一下那件事在什么时候来的？",
          "html": "您好，我想问一下那件事在什么时候来的？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "2:15 下午",
          "text": "您好，在 3 点 30 分。",
          "html": "您好，在 3 点 30 分。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "2:15 下午",
          "text": "回见！",
          "html": "回见！"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "2:16 下午",
          "text": "👌 没问题",
          "html": "👌 没问题"
        }
      ],
      "explanationHtml": "<div>\n                        <p>\n                            如果你觉得很直接地说 \"嗨\"\n                            并问一个问题有些唐突，可以适当地在你的消息前面加上一些寒暄。\n                        </p>\n                        <p>例如：</p>\n                        <ul>\n                            <li>\"嗨老铁，你咋样了？还有你知道那个事儿什么时候截止吗？\"</li>\n                            <li>\"还可以，咱们可以抽空聊聊。: )\"</li>\n                            <li>\"行，如果你不忙，能帮忙更新一下 NFR 吗？\"</li>\n                            <li>等等</li>\n                        </ul>\n                        <p>\n                            这也许看起来很繁琐，但在你得到开头的寒暄的回复之前问你关心的问题，也能够做到\n                            <strong>延时沟通</strong>\n                            。如果对方不在，而你在他们回来之前就离开了，他们仍然可以回答你的问题，而不只是盯着\"在吗？\"感到不知所措。\n                        </p>\n                        <p>当你做到了这些，大家都会开心！🎉</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明他们很想帮你（或者这只是个自动回复），但你的“在吗”让他们不知从何答起。\n            </p>\n            <p>\n                本页面魔改自 <a href=\"https://nohello.net/zh-cn/\">nohello.net</a> ，基于\n                <a href=\"https://web.archive.org/web/20131127020115/http://www.nohello.com/\">nohello.com</a>\n                制作。头像取自多米诺和他对象。 原项目于 <a href=\"https://github.com/nohello-net/site\">GitHub</a>开源。\n            </p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "xy-problem",
    "order": 2,
    "category": "communication",
    "icon": "📐",
    "title": "XY 问题",
    "englishTitle": "The XY Problem",
    "summary": "别问怎么修路，先告诉我你想去哪。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "XY 问题",
      "subtitleHtml": "The XY Problem",
      "leadHtml": "医生不需要知道你是怎么查百度的，<br>\n                    他只想知道你<strong>哪里疼</strong>。"
    },
    "bad": {
      "titleHtml": "❌ 陷入 \"Y\" 的泥沼",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:00",
          "text": "怎么把 Mac 屏幕截图里的文字变成 Word 文档？",
          "html": "怎么把 Mac 屏幕截图里的文字变成 Word 文档？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:01",
          "text": "你需要 OCR 软件... 但你为什么要截图？",
          "html": "你需要 OCR 软件... 但你为什么要截图？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:05",
          "text": "我想把客户发来的合同里的一段话复制出来。",
          "html": "我想把客户发来的合同里的一段话复制出来。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:06",
          "text": "🤦‍♂️ 客户发你的不是 PDF 吗？直接用鼠标选中文本复制不就行了！",
          "html": "🤦‍♂️ 客户发你的不是 PDF 吗？直接用鼠标选中文本复制不就行了！"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">由于 \"隧道视野\" 导致的迷路</h3>\n                        <p>\n                            你是否曾经为了解决一个问题，花了一整天研究一个极其复杂的歪门邪道，最后发现只要换个思路甚至什么都不用做就能搞定？\n                        </p>\n                        <p>\n                            这就是典型的 <strong>XY 问题迷宫</strong>。\n                        </p>\n                        <ul>\n                            <li><strong>X</strong> 是你真正想达到的目标（比如：复制合同文字）。</li>\n                            <li><strong>Y</strong> 是你自己想出的、可能并不靠谱的解决方案（比如：截图再识别）。</li>\n                        </ul>\n                        <p>\n                            当你问别人“哪款截图识别软件最好用”时，大家都在热烈推荐软件，却没人告诉其实<strong>直接复制粘贴就行了。</strong>\n                        </p>\n                        <p>\n                            我们往往陷入对自己初步方案 (Y) 的执着，而忘记了我们最初的目标 (X) 可能有更优解。\n                        </p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 露出原本的 \"X\"",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:00",
          "text": "我想把客户合同里的一段话弄出来 (X)，但我刚才想截图再识别 (Y) 好像很麻烦，有没有更快的办法？",
          "html": "我想把客户合同里的一段话弄出来 (X)，但我刚才想截图再识别 (Y) 好像很麻烦，有没有更快的办法？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:01",
          "text": "如果是 PDF，通常可以直接选中文本复制的。如果不行，发我看看。",
          "html": "如果是 PDF，通常可以直接选中文本复制的。如果不行，发我看看。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:02",
          "text": "试了一下，真的可以复制！我傻了。谢了！",
          "html": "试了一下，真的可以复制！我傻了。谢了！"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">如何走出迷宫？</h3>\n                        <p>\n                            在提问时，永远包含 <strong>更宏大的图景 (The Bigger Picture)</strong>。\n                        </p>\n                        <p>\n                            你可以问 Y，因为那是你思考的成果，但在结尾务必加上一句：\n                        </p>\n                        <blockquote style=\"border-left: 4px solid var(--primary); padding-left: 1rem; color: var(--foreground);\">\n                            “我之所以想做 <strong>Y</strong>，是因为我想解决 <strong>X</strong> 问题。如果有更好的办法解决 X，请务必告诉我。”\n                        </blockquote>\n                        <p>\n                            把自己从“解决难题”的执念中释放出来，你会发现世界其实 <strong style=\"color: var(--primary);\">很开阔</strong>。🌍\n                        </p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到某人发了这个链接，说明他们很想帮你解决 <strong>X</strong>，而不是陪你在 <strong>Y</strong> 的迷宫里绕圈子。\n            </p>\n            <p>Inspired by <a href=\"https://xyproblem.info\">xyproblem.info</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "dont-ask-to-ask",
    "order": 3,
    "category": "communication",
    "icon": "🙋",
    "title": "拒绝谜语人",
    "englishTitle": "Don't Ask to Ask",
    "summary": "直接问问题，别问\"我能不能问问题\"。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "拒绝谜语人",
      "subtitleHtml": "Efficiency Hints",
      "leadHtml": "如果你不能在三句话内说清楚问题，<br>\n                    你可能还没有<strong>想清楚</strong>问题。"
    },
    "bad": {
      "titleHtml": "❌ 犯罪现场调查",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "14:00",
          "text": "投影仪坏了！救命！@多米诺",
          "html": "投影仪坏了！救命！@多米诺"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "14:05",
          "text": "... 哪个会议室的？怎么坏了？不亮了还是没信号？线插好了吗？",
          "html": "... 哪个会议室的？怎么坏了？不亮了还是没信号？线插好了吗？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "14:06",
          "text": "[一张模糊也看不清线插在哪里的照片.jpg]",
          "html": "[一张模糊也看不清线插在哪里的照片.jpg]"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "14:07",
          "text": "😰 血压上来了... 我这就过去（又要爬三层楼）",
          "html": "😰 血压上来了... 我这就过去（又要爬三层楼）"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">把车钥匙扔给技师</h3>\n                        <p>\n                            这就好比你去修车店，把钥匙扔给技师说：<strong>“它坏了。”</strong> 然后转身就走。\n                        </p>\n                        <p>\n                            技师需要试驾、检查引擎、检查轮胎、排除电瓶问题... 你把自己也不懂的混乱，原封不动地抛给了别人。这是一种<strong>“负向工作的传递”</strong>。\n                        </p>\n                        <p>\n                            前者是 <strong style=\"color: #ef4444;\">“谜语人”</strong>，后者是 <strong style=\"color: #22c55e;\">“协作伙伴”</strong>。\n                        </p>\n                        <p>\n                            你需要提供的是 <strong style=\"background: rgba(255,255,0,0.2); padding: 0 4px;\">“最小可复现单元” (Minimal\n                                Reproducible Example)</strong>。你把问题打包得越好，别人拆包（解决）的速度就越快。\n                        </p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 结构化思维",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "14:00",
          "text": "多米诺，302 会议室的投影仪只有蓝屏，连不上我的 Mac。",
          "html": "多米诺，302 会议室的投影仪只有蓝屏，连不上我的 Mac。"
        },
        {
          "text": "[图片: HDMI接口.jpg]",
          "html": "",
          "rawHtml": "<!-- Spacer to align with text (Avatar 42px) -->\n                        <div style=\"width: 42px; height: 42px; flex-shrink: 0;\"></div>\n                        <!-- 模拟一张清晰的连线照片 -->\n                        <div class=\"chat-image-placeholder\">\n                            [图片: HDMI接口.jpg]\n                        </div>"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "14:00",
          "text": "我试过拔插 HDMI 线了，也换了同事的电脑试过，都不行。是不是线坏了？",
          "html": "我试过拔插 HDMI 线了，也换了同事的电脑试过，都不行。是不是线坏了？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "14:01",
          "text": "大概率是。柜子里有一根备用的 VGA 转接线，你先应付一下，我马上带根新线过去。",
          "html": "大概率是。柜子里有一根备用的 VGA 转接线，你先应付一下，我马上带根新线过去。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">提供线索，而非谜语</h3>\n                        <p>\n                            如果你对技师说：<strong>“当时速超过 80，踩刹车时，左前轮有异响。”</strong>\n                        </p>\n                        <p>\n                            技师只需要：<strong>检查左前轮刹车片</strong>。\n                        </p>\n                        <p>高质量的求助通常包含三个要素：</p>\n                        <ol>\n                            <li><strong>上下文 (Context)</strong>：地点？设备？你在干嘛？</li>\n                            <li><strong>现象 (Phenomenon)</strong>：具体的报错、蓝屏、异响。</li>\n                            <li><strong>尝试 (Attempt)</strong>：你已经试过什么方法了？（避免别人让你重启一遍）</li>\n                        </ol>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明他们很想帮你修好投影仪（或者其他东西），但是你的描述让他们<strong>无从下手</strong>。\n            </p>\n            <p>Inspired by <a href=\"https://dontasktoask.com\">dontasktoask.com</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "it-didnt-work",
    "order": 4,
    "category": "communication",
    "icon": "💥",
    "title": "它挂了",
    "englishTitle": "It Didn't Work",
    "summary": "“坏了”不是 Bug 报告，请提供细节。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "它挂了",
      "subtitleHtml": "It Didn't Work",
      "leadHtml": "“这东西坏了”<br>不是一个 Bug 报告"
    },
    "bad": {
      "titleHtml": "❌ 不要这样做",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "16:00",
          "text": "打印机坏了。",
          "html": "打印机坏了。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "16:05",
          "text": "怎么坏了？",
          "html": "怎么坏了？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "16:06",
          "text": "就打不出来。",
          "html": "就打不出来。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "16:07",
          "text": "有亮红灯吗？屏幕上有提示吗？",
          "html": "有亮红灯吗？屏幕上有提示吗？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "16:10",
          "text": "没注意，反正就是没反应。",
          "html": "没注意，反正就是没反应。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">医生治不好“我病了”</h3>\n                        <p>\n                            你可以告诉医生“我病了”，但如果只说这一句，医生也治不好你。<br>\n                            你需要说哪里疼、什么时候开始疼的、吃过什么东西。\n                        </p>\n                        <p>程序/设备也是一样。技术人员没有读心术，也没有透视眼。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 试着这样做",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "16:00",
          "text": "打印机打不出来。型号 HP 1020，按打印键后听到咔咔两声，然后红灯一直闪烁。纸盒里有纸。",
          "html": "打印机打不出来。型号 HP 1020，按打印键后听到咔咔两声，然后红灯一直闪烁。纸盒里有纸。"
        },
        {
          "text": "[图片: 打印机红灯.jpg]",
          "html": "",
          "rawHtml": "<!-- Spacer to align with text -->\n                        <div style=\"width: 42px; height: 42px; flex-shrink: 0;\"></div>\n                        <div class=\"chat-image-placeholder\">\n                            [图片: 打印机红灯.jpg]\n                        </div>"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "16:01",
          "text": "哦，这是卡纸了，把后盖打开抽出来就行。",
          "html": "哦，这是卡纸了，把后盖打开抽出来就行。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0; margin-bottom: 1.5rem;\">完美的 Bug 报告清单</h3>\n                        <ul style=\"list-style: none; padding-left: 0; margin: 0;\">\n                            <li class=\"li-good\" style=\"margin-bottom: 16px;\">\n                                <strong>你做了什么？</strong><br>\n                                <span style=\"color: var(--muted-foreground); font-size: 0.875rem;\">操作步骤</span>\n                            </li>\n                            <li class=\"li-good\" style=\"margin-bottom: 16px;\">\n                                <strong>发生了什么？</strong><br>\n                                <span style=\"color: var(--muted-foreground); font-size: 0.875rem;\">实际现象</span>\n                            </li>\n                            <li class=\"li-good\" style=\"margin-bottom: 16px;\">\n                                <strong>你期望发生什么？</strong><br>\n                                <span style=\"color: var(--muted-foreground); font-size: 0.875rem;\">预期结果</span>\n                            </li>\n                            <li class=\"li-good\" style=\"margin-bottom: 0;\">\n                                <strong>环境信息</strong><br>\n                                <span style=\"color: var(--muted-foreground); font-size: 0.875rem;\">型号, 版本, 报错信息</span>\n                            </li>\n                        </ul>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明你的 Bug 报告可能有点... <strong>“抽象”</strong>。\n            </p>\n            <p>Inspired by <a href=\"https://itdidnt.work\">itdidnt.work</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "wheatons-law",
    "order": 5,
    "category": "systems",
    "icon": "🦄",
    "title": "惠顿定律",
    "englishTitle": "Wheaton's Law",
    "summary": "别当混蛋 (Don't be a dick)。",
    "layout": "statement",
    "hero": {
      "titleHtml": "惠顿定律",
      "subtitleHtml": "Wheaton's Law",
      "leadHtml": "<h2 style=\"font-size: clamp(3rem, 15vw, 8rem); line-height: 1; font-weight: 900; letter-spacing: -0.02em; color: var(--destructive); margin: 0; text-transform: uppercase;\">\n                    Don't be a dick.\n                </h2>\n                <h2 style=\"font-size: clamp(2rem, 10vw, 5rem); line-height: 1.2; font-weight: 900; margin: 1rem 0 0 0; color: var(--foreground);\">\n                    别当混蛋。\n                </h2>\n\n                "
    },
    "specialHtml": "<div>\n                <h3 style=\"margin-top:0\">互联网黄金法则</h3>\n                <p>\n                    这是由威尔·惠顿（Will Wheaton）提出的定律，虽然简单粗暴，但却是维护良好社区氛围的基石。\n                </p>\n                <div style=\"padding: 20px; background: #eef0f7; border-radius: 8px; margin: 20px 0;\">\n                    <ul><br><br>\n                        <li class=\"li-bad\"><strong>不要</strong> 因为匿名就肆无忌惮地攻击他人。</li><br>\n                        <li class=\"li-bad\"><strong>不要</strong> 嘲笑新手，每个人都是从零开始的。</li><br>\n                        <li class=\"li-good\"><strong>要</strong> 保持基本的礼貌和尊重。</li>\n                    </ul>\n                </div>\n                <p>无论是网络游戏还是职场沟通，只有大家都遵守这个准则，世界才会变得美好一点。</p>\n            </div>",
    "footerHtml": "<p>\n            这不是非常严重的事情，所以请不要对送你来看这个网站的人\n            <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n        </p>\n        <p>\n            如果你看到这个链接，说明......其实也没什么，就只是希望大家能友善一点。\n        </p>\n        <p>Source: <a href=\"https://knowyourmeme.com/memes/wheatons-law\">Know Your Meme</a></p>\n        <p>\n            <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n        </p>"
  },
  {
    "slug": "smart-questions",
    "order": 6,
    "category": "communication",
    "icon": "💡",
    "title": "提问的智慧",
    "englishTitle": "Smart Questions",
    "summary": "提问前先自己尝试解决，尊重他人的时间。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "提问的智慧",
      "subtitleHtml": "How To Ask Questions The Smart Way",
      "leadHtml": ""
    },
    "bad": {
      "titleHtml": "❌ 愚蠢的提问",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:00",
          "text": "我的电脑好卡！谁能帮帮我？急急急！",
          "html": "我的电脑好卡！谁能帮帮我？急急急！"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:05",
          "text": "... (未读忽略)",
          "html": "... (未读忽略)"
        }
      ],
      "explanationHtml": "<div>\n                    <h3 style=\"margin-top:0\">提问之前</h3>\n                    <p>当你向他人求助时，请确保你已经尽了自己的努力：</p>\n                    <ul style=\"list-style: none; padding-left: 10px;\">\n                        <li>🔎 搜过 Google / 百度了吗？</li>\n                        <li>📖 读过说明书了吗？</li>\n                        <li>🧪 自己尝试过重启 / 复现了吗？</li>\n                    </ul>\n                </div>"
    },
    "good": {
      "titleHtml": "✅ 聪明的提问",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:00",
          "text": "我的笔记本（Win10, 8G内存）最近打开 Chrome 时非常卡。尝试过重启和清理垃圾，但只要开超过 10 个网页就卡死。请问是内存不够吗？需不需要加内存条？",
          "html": "我的笔记本（Win10, 8G内存）最近打开 Chrome 时非常卡。尝试过重启和清理垃圾，但只要开超过 10\n                        个网页就卡死。请问是内存不够吗？需不需要加内存条？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:05",
          "text": "8G 确实有点勉强，建议加到 16G 或者关掉不用的插件。",
          "html": "8G 确实有点勉强，建议加到 16G 或者关掉不用的插件。"
        }
      ],
      "explanationHtml": ""
    },
    "footerHtml": "<p>\n            这不是非常严重的事情，所以请不要对送你来看这个网站的人\n            <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n        </p>\n        <p>\n            如果你看到这个链接，说明你的提问方式可能会让解答者感到<strong>困惑</strong>，建议先读读这份指南，这能帮你更快得到答案。\n        </p>\n        <p>Based on <a href=\"https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way\">Eric S. Raymond's\n                Guide</a></p>\n        <p>\n            <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n        </p>"
  },
  {
    "slug": "no-pointless-politeness",
    "order": 7,
    "category": "communication",
    "icon": "🤫",
    "title": "拒绝过度客套",
    "englishTitle": "Signal vs Noise",
    "summary": "别让礼貌的废话淹没了真正的信息。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "拒绝过度客套",
      "subtitleHtml": "Signal vs Noise",
      "leadHtml": "你的“谢谢大佬”，<br>\n                    可能正在把有用的信息<strong>挤出屏幕</strong>。"
    },
    "bad": {
      "titleHtml": "❌ 制造噪音",
      "lines": [
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:00",
          "text": "@所有人 明天团建的大巴车牌号是：京A·88888，早上 8 点准时出发。",
          "html": "@所有人 明天团建的大巴车牌号是：京A·88888，早上 8 点准时出发。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:01",
          "text": "收到",
          "html": "收到"
        },
        {
          "avatarUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
          "name": "同事A",
          "time": "10:01",
          "text": "收到",
          "html": "收到"
        },
        {
          "avatarUrl": "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka",
          "name": "同事B",
          "time": "10:02",
          "text": "OK",
          "html": "OK"
        },
        {
          "name": "（...以及其他 48 个人的收到）",
          "time": "...",
          "text": "...",
          "html": "..."
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:05",
          "text": "（被顶上去的更正消息）对了，集合地点改到南门了！！别去北门！",
          "html": "（被顶上去的更正消息）对了，集合地点改到南门了！！别去北门！"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">信号与噪声</h3>\n                        <p>\n                            在一个 500 人的群里，当管理员发布了一条重要通知后，连续有 100 个人回复“收到”、“好的”、“Thanks”。\n                        </p>\n                        <p>\n                            此时，真正重要的<strong>补充通知</strong>（比如地点变更），已经被顶到了屏幕最上方。这意味着后面进来的 300 个人，根本看不到那条更正，只会去错误的地点。\n                        </p>\n                        <p>\n                            在面对面的晚宴上，鞠躬和寒暄是必要的<strong>润滑剂</strong>。但在高密度的信息流（群聊、Issue、论坛）中，每一行像素都是昂贵的 <strong style=\"color: #ef4444;\">屏幕地产</strong>。\n                        </p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 优雅的反馈",
      "lines": [
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:00",
          "text": "@所有人 明天团建的大巴车牌号是：京A·88888，早上 8 点准时出发。",
          "html": "@所有人 明天团建的大巴车牌号是：京A·88888，早上 8 点准时出发。"
        },
        {
          "name": "",
          "text": "👍 86 ❤️ 12",
          "html": "👍 86 &nbsp; ❤️ 12"
        },
        {
          "text": "（群里保持了安静，直到...）",
          "html": "",
          "rawHtml": "<span class=\"slackname\">（群里保持了安静，直到...）</span>\n                        <br>"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:05",
          "text": "❗️ 紧急更正：集合地点改到南门了！",
          "html": "❗️ 紧急更正：集合地点改到南门了！"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">静默的赞赏</h3>\n                        <p>\n                            高效的社区有着独特的<strong>“静默文化”</strong>：\n                        </p>\n                        <ul>\n                            <li><strong>点赞 / 表情回应</strong> 代表“收到”或“谢谢”。</li>\n                            <li><strong>引用回复</strong> 代表针对性讨论。</li>\n                        </ul>\n                        <p>\n                            不说话，往往就是最高的赞赏。它意味着沟通顺利结束，信道重新回归宁静，等待下一个有价值的信号（比如紧急变更）出现。\n                        </p>\n                        <p>\n                            把屏幕留给更有价值的信息，而不是你的队形。\n                        </p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明群里的“队形”已经<strong>严重影响了信息的传递</strong>。\n            </p>\n            <p>Inspired by <a href=\"https://github.com/torvalds\">Linus Torvalds' Attitude</a> (Sort of...)</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "cunninghams-law",
    "order": 8,
    "category": "thinking",
    "icon": "🎣",
    "title": "坎宁安定律",
    "englishTitle": "Cunningham's Law",
    "summary": "想得到正确答案？不如先发一个错误的。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "坎宁安定律",
      "subtitleHtml": "Cunningham's Law",
      "leadHtml": "在互联网上获得正确答案的最好方法，<br>\n                    不是提问，而是发布一个错误的答案。"
    },
    "bad": {
      "titleHtml": "❌ 普通提问",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:30 上午",
          "text": "请问大家，北京有什么好吃的烤鸭店推荐吗？",
          "html": "请问大家，北京有什么好吃的烤鸭店推荐吗？"
        },
        {
          "name": "",
          "text": "（一个小时过去了...）",
          "html": "（一个小时过去了...）",
          "style": "opacity: 0.5; text-align: center; padding: 20px;"
        },
        {
          "name": "",
          "text": "（没有人回复）",
          "html": "（没有人回复）",
          "style": "opacity: 0.5; text-align: center; padding: 20px;"
        }
      ],
      "explanationHtml": "<div>\n                        <p>\n                            这是一个完全合理的问题，但问题在于：<strong>它太开放了</strong>。\n                        </p>\n                        <p>\n                            人们在面对开放性问题时，往往会产生\"决策疲劳\"——需要在脑海中筛选太多选项，最后干脆放弃回答。而且，回答一个主观问题需要承担被反驳的风险，很多人不愿意冒这个险。\n                        </p>\n                        <p>\n                            结果就是：你的问题石沉大海，无人问津。😔\n                        </p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 坎宁安式提问",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:30 上午",
          "text": "全聚德是北京最好吃的烤鸭，不接受反驳。",
          "html": "全聚德是北京最好吃的烤鸭，不接受反驳。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:31 上午",
          "text": "笑死，全聚德就是给游客吃的！真正懂行的去大董或者四季民福。",
          "html": "笑死，全聚德就是给游客吃的！真正懂行的去大董或者四季民福。"
        },
        {
          "character": "tail",
          "name": "尾巴",
          "time": "10:32 上午",
          "text": "大董也就那样，性价比不高。我推荐便宜坊，酥皮烤鸭一绝。",
          "html": "大董也就那样，性价比不高。我推荐便宜坊，酥皮烤鸭一绝。"
        },
        {
          "character": "bot327",
          "name": "群友",
          "time": "10:33 上午",
          "text": "你们都out了，现在流行京味斋，环境好价格也实惠。",
          "html": "你们都out了，现在流行京味斋，环境好价格也实惠。"
        }
      ],
      "explanationHtml": "<div>\n                        <p>\n                            <strong>五分钟内，你就收获了一份详尽的烤鸭推荐清单。</strong>\n                        </p>\n                        <p>\n                            这就是坎宁安定律的魔力：人类天生有一种<strong>纠正错误的冲动</strong>。当我们看到一个尚未被回答的问题时，我们可能会冷漠地划过；但当我们看到一个<strong>显而易见的\"错误\"</strong>时，我们忍不住想要纠正它，以展示自己的博学。\n                        </p>\n                        <p>\n                            这个技巧在以下场景特别有效：\n                        </p>\n                        <ul>\n                            <li>想获得主观推荐（餐厅、电影、书籍）</li>\n                            <li>想了解某个领域的最佳实践</li>\n                            <li>想激发社群讨论</li>\n                        </ul>\n                        <p>\n                            <strong>当然，请善意使用，不要故意传播错误信息。😉</strong>\n                        </p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，可能是希望你能用一种<strong>\"特殊\"</strong>的方式来获得（或提供）正确答案。\n            </p>\n            <p>概念提出者：Ward Cunningham（维基百科的发明者）</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "rubber-duck",
    "order": 9,
    "category": "thinking",
    "icon": "🦆",
    "title": "小黄鸭调试",
    "englishTitle": "Rubber Duck",
    "summary": "向你的桌角（或鸭子）解释问题，答案往往就在嘴边。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "小黄鸭调试法",
      "subtitleHtml": "Rubber Duck Debugging",
      "leadHtml": "当你卡住的时候，<br>\n                    试着向一只鸭子解释你的问题。🦆"
    },
    "bad": {
      "titleHtml": "❌ 不要这样做",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "3:15 下午",
          "text": "多米诺！这个 PPT 导出总是出错，你快来帮我看看！",
          "html": "多米诺！这个 PPT 导出总是出错，你快来帮我看看！"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "3:16 下午",
          "text": "什么错误？具体是哪一步？",
          "html": "什么错误？具体是哪一步？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "3:17 下午",
          "text": "就是我点导出，然后选 PDF...",
          "html": "就是我点导出，然后选 PDF..."
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "3:17 下午",
          "text": "等等，我好像选错格式了，应该选\"可编辑的 PDF\"... 好了解决了🙏",
          "html": "等等，我好像选错格式了，应该选\"可编辑的 PDF\"... 好了解决了🙏"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "3:18 下午",
          "text": "...我还没说话呢",
          "html": "...我还没说话呢"
        }
      ],
      "explanationHtml": "<div>\n                        <p>\n                            请注意，在这个场景中，西打其实<strong>并不需要多米诺的帮助</strong>。他只是在向别人解释问题的过程中，自己发现了答案。\n                        </p>\n                        <p>\n                            这种情况非常常见：我们的大脑在独自思考时会\"跳跃\"，忽略一些看似显而易见的细节。但当我们试图向别人解释时，我们被迫<strong>放慢速度、理清逻辑</strong>，于是那些被忽略的细节就浮出水面了。\n                        </p>\n                        <p>\n                            问题在于：<strong>你打断了别人</strong>。多米诺的工作被中断了，而他其实什么也没做。\n                        </p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 试着这样做",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "3:15 下午",
          "text": "（对着桌上的小黄鸭）好，让我跟你说一下这个问题...",
          "html": "（对着桌上的小黄鸭）好，让我跟你说一下这个问题..."
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "3:15 下午",
          "text": "我要导出 PPT 成 PDF，我点了导出按钮，然后选择格式...",
          "html": "我要导出 PPT 成 PDF，我点了导出按钮，然后选择格式..."
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "3:16 下午",
          "text": "等等，格式！我选的格式不对！",
          "html": "等等，格式！我选的格式不对！"
        },
        {
          "name": "小黄鸭",
          "time": "永远在线",
          "text": "嘎。（这不就结了）",
          "html": "嘎。（这不就结了）"
        }
      ],
      "explanationHtml": "<div>\n                        <p>\n                            <strong>小黄鸭调试法</strong>的精髓在于：你不需要一个真正能给你答案的人，你只需要一个<strong>倾听者</strong>来迫使你理清自己的思路。\n                        </p>\n                        <p>这个\"倾听者\"可以是：</p>\n                        <ul>\n                            <li>一只橡皮小黄鸭（经典）</li>\n                            <li>你的桌角、咖啡杯、绿植</li>\n                            <li>一个空白的聊天窗口（写下问题但不发送）</li>\n                            <li>甚至是你自己（大声朗读问题）</li>\n                        </ul>\n                        <p>\n                            这样做的好处是：你<strong>不打扰任何人</strong>，同时还能高效地解决问题。这就是为什么很多程序员的桌上都放着一只小黄鸭。\n                        </p>\n                        <p><strong>下次卡住的时候，先问问你的鸭子吧！🦆</strong></p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明你可能需要先跟你的桌角（或者小黄鸭）把问题<strong>大声朗读一遍</strong>，然后再来求助。\n            </p>\n            <p>Inspired by <a href=\"https://pragprog.com/\">The Pragmatic Programmer</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "bike-shedding",
    "order": 10,
    "category": "systems",
    "icon": "🚲",
    "title": "自行车棚效应",
    "englishTitle": "Bike Shedding",
    "summary": "别为了鸡毛蒜皮的小事浪费团队的宝贵时间。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "自行车棚效应",
      "subtitleHtml": "Parkinson's Law of Triviality",
      "leadHtml": "人们花在琐事上的时间，<br>\n                    往往远超过重要的事情。"
    },
    "bad": {
      "titleHtml": "❌ 典型症状",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "2:00 下午",
          "text": "好，第一项议程：明年战略规划，预算500万。大家有什么意见？",
          "html": "好，第一项议程：明年战略规划，预算500万。大家有什么意见？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "2:01 下午",
          "text": "没意见，通过。",
          "html": "没意见，通过。"
        },
        {
          "name": "",
          "text": "（5分钟后，会议进入下一项）",
          "html": "（5分钟后，会议进入下一项）",
          "style": "opacity: 0.7;"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "2:06 下午",
          "text": "第二项：年会伴手礼的袋子选什么颜色？",
          "html": "第二项：年会伴手礼的袋子选什么颜色？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "2:06 下午",
          "text": "红色喜庆！",
          "html": "红色喜庆！"
        },
        {
          "character": "tail",
          "name": "尾巴",
          "time": "2:07 下午",
          "text": "不行，红色太俗了，金色更大气！",
          "html": "不行，红色太俗了，金色更大气！"
        },
        {
          "character": "bot327",
          "name": "群友",
          "time": "2:08 下午",
          "text": "我觉得深蓝色比较高端...",
          "html": "我觉得深蓝色比较高端..."
        },
        {
          "name": "",
          "text": "（2小时后，仍在讨论袋子颜色...）",
          "html": "（2小时后，仍在讨论袋子颜色...）",
          "style": "opacity: 0.7;"
        }
      ],
      "explanationHtml": "<div>\n                        <p>\n                            <strong>经典案例：</strong>委员会审批核电站计划时，大家因为不懂而迅速通过；但审批员工自行车棚时，却争论不休——因为每个人都\"懂\"自行车棚。\n                        </p>\n                        <p>\n                            这就是<strong>帕金森琐碎定律</strong>：人们倾向于在自己能理解的小事上投入不成比例的时间和精力，而对真正重要（但复杂）的事情一笔带过。\n                        </p>\n                        <p>\n                            <strong>原因分析：</strong>\n                        </p>\n                        <ul>\n                            <li>🧠 <strong>认知舒适区：</strong>小事容易理解，发言不会出错</li>\n                            <li>👀 <strong>刷存在感：</strong>大事上不敢说话，小事上可以表现</li>\n                            <li>⚖️ <strong>决策疲劳：</strong>大事太复杂，干脆放弃思考</li>\n                        </ul>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 如何避免",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "2:00 下午",
          "text": "第一项议程：明年战略规划。这是核心议题，请各部门负责人在会前准备好意见。我们会花45分钟详细讨论。",
          "html": "第一项议程：明年战略规划。这是核心议题，请各部门负责人在会前准备好意见。我们会花45分钟详细讨论。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "2:45 下午",
          "text": "第二项：年会伴手礼。行政部已经初选了3个方案，请大家5分钟内投票选择。超时未投票视为弃权。",
          "html": "第二项：年会伴手礼。行政部已经初选了3个方案，请大家5分钟内投票选择。超时未投票视为弃权。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "2:48 下午",
          "text": "投A方案，会议结束！",
          "html": "投A方案，会议结束！"
        }
      ],
      "explanationHtml": "<div>\n                        <p>\n                            <strong>应对策略：</strong>\n                        </p>\n                        <ul>\n                            <li>📋 <strong>设置时间限制：</strong>为每个议题分配固定时间，小事不超过5分钟</li>\n                            <li>🎯 <strong>区分议题权重：</strong>明确标注\"重要/一般\"，引导大家把精力放在对的地方</li>\n                            <li>📊 <strong>提供有限选项：</strong>不要问\"选什么颜色\"，而是问\"A还是B\"</li>\n                            <li>🚫 <strong>勇于打断：</strong>当讨论偏离主题时，及时拉回来</li>\n                        </ul>\n                        <p>\n                            <strong>记住：不要让自行车棚的颜色耽误了核电站的建设。⚡</strong>\n                        </p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明大家可能正在为了<strong>袋子的颜色</strong>而耽误了<strong>核电站的建设</strong>。\n            </p>\n            <p>概念提出者：C. Northcote Parkinson</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "yak-shaving",
    "order": 11,
    "category": "systems",
    "icon": "🐂",
    "title": "剪牦牛毛",
    "englishTitle": "Yak Shaving",
    "summary": "别为了煮面条而跑去修车，时刻记得你的初心。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "剪牦牛毛",
      "subtitleHtml": "Yak Shaving",
      "leadHtml": "本来想去倒垃圾，<br>\n                    最后却在山上给牦牛剪毛。🐂"
    },
    "bad": {
      "titleHtml": "❌ 典型症状",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "12:00",
          "text": "肚子饿了，煮碗面吧。",
          "html": "肚子饿了，煮碗面吧。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "12:01",
          "text": "没葱了，出门买点葱。",
          "html": "没葱了，出门买点葱。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "12:05",
          "text": "车钥匙呢？翻翻抽屉...",
          "html": "车钥匙呢？翻翻抽屉..."
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "12:10",
          "text": "咦？我高中的毕业相册！看两眼...",
          "html": "咦？我高中的毕业相册！看两眼..."
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "2:30 下午",
          "text": "哈哈哈这张照片好搞笑...",
          "html": "哈哈哈这张照片好搞笑..."
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "2:35 下午",
          "text": "你不是说今天2点来接我吗？人呢？",
          "html": "&nbsp;&nbsp;你不是说今天2点来接我吗？人呢？",
          "style": "background: #ffebee; border-left: 4px solid #f44336;"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "2:35 下午",
          "text": "完了... 我到底要干嘛来着？对了，煮面。面呢？葱呢？钥匙呢？！",
          "html": "&nbsp;&nbsp;完了... 我到底要干嘛来着？对了，煮面。面呢？葱呢？钥匙呢？！"
        }
      ],
      "explanationHtml": "<div>\n                        <p>\n                            <strong>\"剪牦牛毛\"</strong>的名字来源于这样一个场景：你想做A，但做A之前要先做B，做B之前要先做C...\n                            最后你发现自己在山上给一只牦牛剪毛——而你已经完全忘了最初想做什么。\n                        </p>\n                        <p>\n                            这是一种<strong>递归式任务陷阱</strong>：每一步看起来都是\"合理\"的前置任务，但无数\"合理\"的前置任务叠加起来，就变成了一条无限延伸的兔子洞。\n                        </p>\n                        <p>\n                            <strong>为什么会发生？</strong>\n                        </p>\n                        <ul>\n                            <li>🧠 <strong>注意力转移：</strong>新事物总比手头的任务更有趣</li>\n                            <li>🎯 <strong>目标模糊：</strong>没有明确的终点，容易迷失</li>\n                            <li>⏱️ <strong>低估时间：</strong>\"看两眼\"往往变成\"看两小时\"</li>\n                        </ul>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 如何避免",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "12:00",
          "text": "肚子饿了，煮碗面吧。【终极目标：吃面】",
          "html": "肚子饿了，煮碗面吧。【终极目标：吃面】"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "12:01",
          "text": "没葱了。等等，我是要吃面，不是要做米其林三星料理。没葱也能吃。",
          "html": "没葱了。等等，我是要吃面，不是要做米其林三星料理。没葱也能吃。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "12:10",
          "text": "面煮好了！🍜 吃完再想别的事。",
          "html": "面煮好了！🍜 吃完再想别的事。"
        }
      ],
      "explanationHtml": "<div>\n                        <p>\n                            <strong>核心原则：时刻记住你的终极目标 (End Goal)。</strong>\n                        </p>\n                        <p>\n                            每当你发现自己偏离轨道时，问自己：\n                        </p>\n                        <ul>\n                            <li>❓ 这件事真的是必须的吗？</li>\n                            <li>❓ 我能不能先完成主线任务，再回来处理这个？</li>\n                            <li>❓ 我现在做的事，跟我最初的目标有什么关系？</li>\n                        </ul>\n                        <p>\n                            <strong>实用技巧：</strong>\n                        </p>\n                        <ul>\n                            <li>📝 <strong>写下目标：</strong>在便签上写下\"我现在要做X\"，贴在显眼的地方</li>\n                            <li>⏰ <strong>设置闹钟：</strong>每30分钟检查一次自己是否还在正轨</li>\n                            <li>🚫 <strong>学会说\"稍后\"：</strong>发现有趣的岔路？记下来，之后再探索</li>\n                        </ul>\n                        <p>\n                            <strong>别让牦牛毛耽误了你的午餐。🐂❌</strong>\n                        </p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明你虽然看起来很忙，但似乎已经离<strong>最初的目标</strong>十万八千里了。\n            </p>\n            <p>Source: <a href=\"http://catb.org/jargon/html/Y/yak-shaving.html\">Jargon File</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "hanlons-razor",
    "order": 12,
    "category": "thinking",
    "icon": "🪒",
    "title": "汉隆剃刀",
    "englishTitle": "Hanlon's Razor",
    "summary": "能解释为愚蠢的，就不要解释为恶意。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "汉隆剃刀",
      "subtitleHtml": "Hanlon's Razor",
      "leadHtml": "能解释为愚蠢或忙碌的，<br>\n                    就不要解释为恶意。"
    },
    "bad": {
      "titleHtml": "❌ 阴谋论思维",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "9:30 上午",
          "text": "今天在电梯里跟多米诺打招呼，他居然没理我！",
          "html": "今天在电梯里跟多米诺打招呼，他居然没理我！"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "9:35 上午",
          "text": "他肯定是对我有意见，是不是因为上次开会我反驳了他？",
          "html": "他肯定是对我有意见，是不是因为上次开会我反驳了他？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:00 上午",
          "text": "他是不是在背后说我坏话？想给我穿小鞋？",
          "html": "他是不是在背后说我坏话？想给我穿小鞋？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "11:00 上午",
          "text": "我要不要先下手为强，在老板面前给他上点眼药？",
          "html": "我要不要先下手为强，在老板面前给他上点眼药？"
        },
        {
          "name": "真相",
          "time": "其实是...",
          "text": "多米诺只是忘带眼镜了，根本没看清是谁。而且他在想晚上吃什么。",
          "html": "&nbsp;&nbsp;多米诺只是忘带眼镜了，根本没看清是谁。而且他在想晚上吃什么。",
          "style": "background: #fffbe6; border-left: 4px solid #ffd700;"
        }
      ],
      "explanationHtml": "<div>\n                        <p>\n                            我们的大脑天生有一种<strong>\"负面偏见\"</strong>：当事情出错时，我们倾向于假设最坏的情况。这是进化留给我们的生存本能——在原始社会，假设别人可能要伤害你是明智的。\n                        </p>\n                        <p>\n                            但在现代社会，这种思维模式会让我们：\n                        </p>\n                        <ul>\n                            <li>😰 <strong>焦虑：</strong>无端揣测别人的意图</li>\n                            <li>😤 <strong>愤怒：</strong>对莫须有的\"恶意\"生气</li>\n                            <li>🔥 <strong>冲突：</strong>基于误解做出过激反应</li>\n                        </ul>\n                        <p>\n                            最后往往发现：对方根本没想那么多，只是单纯的<strong>疏忽、忙碌、或者犯傻</strong>。\n                        </p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 假设善意",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "9:30 上午",
          "text": "今天在电梯里跟多米诺打招呼，他没理我。有点奇怪。",
          "html": "今天在电梯里跟多米诺打招呼，他没理我。有点奇怪。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "9:31 上午",
          "text": "不过他可能没看到我？或者在想事情？算了，不纠结了。",
          "html": "不过他可能没看到我？或者在想事情？算了，不纠结了。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "9:35 上午",
          "text": "@多米诺 早啊！刚才电梯里是你吗？我还以为我认错人了 😂",
          "html": "@多米诺 早啊！刚才电梯里是你吗？我还以为我认错人了 😂"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "9:36 上午",
          "text": "哈哈是我！抱歉没看到你，我今天忘带眼镜了，眼前一片模糊 😅",
          "html": "哈哈是我！抱歉没看到你，我今天忘带眼镜了，眼前一片模糊 😅"
        }
      ],
      "explanationHtml": "<div>\n                        <p>\n                            <strong>\"假设善意\"(Assume Good Intent)</strong> 是汉隆剃刀的核心原则：\n                        </p>\n                        <p>\n                            当别人的行为让你不舒服时，先假设他们<strong>不是故意的</strong>。大多数情况下，你会发现真相是：\n                        </p>\n                        <ul>\n                            <li>😴 他们太忙/太累了</li>\n                            <li>🤔 他们没注意到</li>\n                            <li>🙈 他们单纯地犯傻了</li>\n                            <li>📱 他们在玩手机没听到</li>\n                        </ul>\n                        <p>\n                            这样做的好处：\n                        </p>\n                        <ul>\n                            <li>💆 <strong>内心平静：</strong>不再被假想的敌意折磨</li>\n                            <li>🤝 <strong>关系改善：</strong>避免因误解产生冲突</li>\n                            <li>🎯 <strong>专注：</strong>把精力放在真正重要的事情上</li>\n                        </ul>\n                        <p>\n                            <strong>当然，如果同样的事情反复发生，那就需要认真谈谈了。但第一次？先假设善意。</strong>\n                        </p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方可能并没有恶意，只是<strong>太忙、太累、或者单纯的犯傻了</strong>。\n            </p>\n            <p>概念提出者：Robert J. Hanlon</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "postels-law",
    "order": 13,
    "category": "communication",
    "icon": "💬",
    "title": "波斯特尔法则",
    "englishTitle": "Postel's Law",
    "summary": "发消息时谨慎，收消息时宽容。文字不带情绪。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "波斯特尔法则",
      "subtitleHtml": "Postel's Law / 文字不带情绪",
      "leadHtml": "发消息时要谨慎清晰，<br>\n                    收消息时要宽容理解。"
    },
    "bad": {
      "titleHtml": "❌ 脑补过度",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:00 上午",
          "text": "多米诺，下午那个方案你看了吗？",
          "html": "多米诺，下午那个方案你看了吗？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:30 上午",
          "text": "哦",
          "html": "哦"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:31 上午",
          "text": "\"哦\"？就一个\"哦\"？他是不是不满意？还是在敷衍我？",
          "html": "\"哦\"？就一个\"哦\"？他是不是不满意？还是在敷衍我？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:35 上午",
          "text": "完了，他肯定觉得方案很烂。我要不要重做？",
          "html": "完了，他肯定觉得方案很烂。我要不要重做？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "11:00 上午",
          "text": "我是不是哪里得罪他了？最近他是不是对我有意见？",
          "html": "我是不是哪里得罪他了？最近他是不是对我有意见？"
        },
        {
          "name": "真相",
          "time": "其实是...",
          "text": "多米诺只是在开会，随手回了个\"哦\"表示\"收到了一会儿看\"。",
          "html": "&nbsp;&nbsp;多米诺只是在开会，随手回了个\"哦\"表示\"收到了一会儿看\"。",
          "style": "background: #fffbe6; border-left: 4px solid #ffd700;"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">文字天生缺失情绪</h3>\n                        <p>\n                            面对面交流时，我们有<strong>70%以上的信息</strong>来自非语言渠道：语调、表情、肢体语言。但在文字聊天中，这些全部消失了。\n                        </p>\n                        <p>\n                            同一句话，不同的人会读出完全不同的情绪：\n                        </p>\n                        <ul>\n                            <li>😐 \"好的\" → 你觉得是冷漠，对方可能只是在忙</li>\n                            <li>😤 \"行吧\" → 你觉得是敷衍，对方可能真的觉得\"行\"</li>\n                            <li>🤔 \"...\" → 你觉得是无语，对方可能只是在思考</li>\n                            <li>😬 \"😊\" → 你觉得是嘲讽，对方可能真的在笑</li>\n                        </ul>\n                        <p>\n                            <strong>这就是为什么互联网上充满误解和冲突。</strong>\n                        </p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 双向校验",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:00 上午",
          "text": "多米诺，下午那个方案你看了吗？不急，有空回复就行～",
          "html": "多米诺，下午那个方案你看了吗？不急，有空回复就行～"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:30 上午",
          "text": "看到了！正在开会，晚点细看后给你反馈 👍",
          "html": "看到了！正在开会，晚点细看后给你反馈 👍"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:31 上午",
          "text": "好的，辛苦！🙏",
          "html": "好的，辛苦！🙏"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">波斯特尔法则</h3>\n                        <p>\n                            互联网先驱 Jon Postel 提出的鲁棒性原则：\n                        </p>\n                        <blockquote style=\"border-left: 4px solid var(--primary); padding-left: 1rem; color: var(--foreground); font-style: italic;\">\n                            \"Be conservative in what you send, be liberal in what you accept.\"<br>\n                            <strong>发送时保守谨慎，接收时宽容大度。</strong>\n                        </blockquote>\n                        <p><strong>发消息时：</strong></p>\n                        <ul>\n                            <li>📝 表达清晰，避免歧义</li>\n                            <li>😊 使用表情符号传递情绪</li>\n                            <li>💬 加上语气词（\"好的～\"而不是\"好的\"）</li>\n                        </ul>\n                        <p><strong>收消息时：</strong></p>\n                        <ul>\n                            <li>🤝 假设对方是善意的</li>\n                            <li>❓ 不确定时直接问清楚</li>\n                            <li>🧘 别脑补太多剧情</li>\n                        </ul>\n                        <p>\n                            <strong>记住：在你脑补出一部宫斗剧之前，对方可能只是在上厕所。🚽</strong>\n                        </p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方可能只是在忙，那个<strong>\"哦\"</strong>真的只是\"收到\"的意思。\n            </p>\n            <p>Named after: Jon Postel (RFC 793)</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "three-strikes",
    "order": 14,
    "category": "communication",
    "icon": "📞",
    "title": "三振出局",
    "englishTitle": "Three Strikes",
    "summary": "来回超过3条消息还说不清？直接打电话。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "三振出局",
      "subtitleHtml": "Three Strikes and You Call",
      "leadHtml": "来回超过三条消息还说不清？<br>\n                    直接打电话。📞"
    },
    "bad": {
      "titleHtml": "❌ 无限循环",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "2:00 下午",
          "text": "那个东西你处理一下？",
          "html": "那个东西你处理一下？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "2:05 下午",
          "text": "哪个东西？",
          "html": "哪个东西？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "2:10 下午",
          "text": "就上次那个",
          "html": "就上次那个"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "2:15 下午",
          "text": "上次哪个？我们上次讨论了好几个事",
          "html": "上次哪个？我们上次讨论了好几个事"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "2:20 下午",
          "text": "就是周三开会说的那个啊",
          "html": "就是周三开会说的那个啊"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "2:25 下午",
          "text": "周三开会说的哪个？合同还是报价单？",
          "html": "周三开会说的哪个？合同还是报价单？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "2:30 下午",
          "text": "不是那个，是另一个",
          "html": "不是那个，是另一个"
        },
        {
          "name": "",
          "text": "（30分钟过去了，问题还没搞清楚...）",
          "html": "（30分钟过去了，问题还没搞清楚...）",
          "style": "opacity: 0.7; text-align: center; padding: 20px;"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">文字沟通的局限</h3>\n                        <p>\n                            文字聊天非常适合<strong>简单、明确的信息传递</strong>，但当问题变得复杂或模糊时，它会变成效率杀手。\n                        </p>\n                        <p>\n                            <strong>问题所在：</strong>\n                        </p>\n                        <ul>\n                            <li>⏰ <strong>延迟：</strong>每条消息都要等回复，耗时成倍增加</li>\n                            <li>🧩 <strong>碎片化：</strong>上下文不断丢失，需要反复确认</li>\n                            <li>🤯 <strong>误解积累：</strong>每次文字交换都可能引入新的歧义</li>\n                        </ul>\n                        <p>\n                            一个3分钟的电话能解决的问题，用文字可能要折腾30分钟。\n                        </p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 三振出局",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "2:00 下午",
          "text": "那个东西你处理一下？",
          "html": "那个东西你处理一下？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "2:05 下午",
          "text": "哪个东西？",
          "html": "哪个东西？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "2:10 下午",
          "text": "等等，我直接打给你说清楚，2分钟就行",
          "html": "等等，我直接打给你说清楚，2分钟就行"
        },
        {
          "name": "语音通话",
          "time": "2:11 - 2:14",
          "text": "通话时长 3分钟，问题已解决 ✅",
          "html": "&nbsp;&nbsp;通话时长 3分钟，问题已解决 ✅",
          "style": "background: #e8f5e9; border-left: 4px solid #4caf50;"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">三振出局法则</h3>\n                        <p>\n                            <strong>规则很简单：</strong>如果一个问题来回<strong>超过3条消息</strong>还说不清楚，就应该切换到实时沟通。\n                        </p>\n                        <p><strong>实时沟通的优势：</strong></p>\n                        <ul>\n                            <li>🎯 <strong>即时反馈：</strong>可以立刻澄清误解</li>\n                            <li>🗣️ <strong>语调信息：</strong>听到对方的语气，减少误读</li>\n                            <li>⚡ <strong>效率提升：</strong>复杂问题几分钟搞定</li>\n                        </ul>\n                        <p><strong>适用场景：</strong></p>\n                        <ul>\n                            <li>📋 共享上下文的事务讨论</li>\n                            <li>🤔 需要来回确认的模糊问题</li>\n                            <li>💥 紧急情况或冲突化解</li>\n                        </ul>\n                        <p>\n                            <strong>别让键盘成为效率的敌人。该打电话时就打电话。📱</strong>\n                        </p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明来回打字已经说不清楚了，<strong>不如直接打个电话</strong>。\n            </p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "bluf",
    "order": 15,
    "category": "communication",
    "icon": "📌",
    "title": "BLUF 原则",
    "englishTitle": "Bottom Line Up Front",
    "summary": "先说结论，再说细节。别写悬疑小说。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "BLUF 原则",
      "subtitleHtml": "Bottom Line Up Front",
      "leadHtml": "先说结论，再说细节。<br>\n                    别让人猜你的重点。"
    },
    "bad": {
      "titleHtml": "❌ 铺垫大师",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "9:00 上午",
          "text": "多米诺，今天上午我去了一趟市中心...",
          "html": "多米诺，今天上午我去了一趟市中心..."
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "9:01 上午",
          "text": "本来想坐地铁的，但是那条线在维修",
          "html": "本来想坐地铁的，但是那条线在维修"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "9:02 上午",
          "text": "所以我打了个车，但是路上堵了好久",
          "html": "所以我打了个车，但是路上堵了好久"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "9:03 上午",
          "text": "然后我到那边发现门关着",
          "html": "然后我到那边发现门关着"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "9:04 上午",
          "text": "问了保安才知道...",
          "html": "问了保安才知道..."
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "9:05 上午",
          "text": "兄弟，你到底想说什么？😅",
          "html": "兄弟，你到底想说什么？😅"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "9:06 上午",
          "text": "哦对，明天开会改到下午3点。",
          "html": "哦对，明天开会改到下午3点。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">时间是宝贵的</h3>\n                        <p>\n                            人们在阅读时，注意力是<strong>逐渐衰减</strong>的。如果重点藏在最后，很多人根本看不到那里。\n                        </p>\n                        <p>\n                            <strong>常见问题：</strong>\n                        </p>\n                        <ul>\n                            <li>📜 <strong>流水账叙事：</strong>按时间顺序讲完所有细节</li>\n                            <li>🎭 <strong>悬念铺垫：</strong>像写小说一样吊人胃口</li>\n                            <li>🤐 <strong>怕太直接：</strong>觉得先说结论不礼貌</li>\n                        </ul>\n                        <p>\n                            结果是：你说了5分钟，对方还不知道你在说啥。\n                        </p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ BLUF 原则",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "9:00 上午",
          "text": "明天开会改到下午3点。",
          "html": "明天开会改到下午3点。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "9:00 上午",
          "text": "原因：会议室被临时占用了。我今天去现场确认过了。",
          "html": "原因：会议室被临时占用了。我今天去现场确认过了。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "9:01 上午",
          "text": "收到，已更新日程 👍",
          "html": "收到，已更新日程 👍"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">军事级沟通效率</h3>\n                        <p>\n                            <strong>BLUF</strong> (Bottom Line Up Front) 是军事和商业沟通中的黄金法则：\n                        </p>\n                        <blockquote style=\"border-left: 4px solid var(--primary); padding-left: 1rem; color: var(--foreground);\">\n                            <strong>先说结论 → 再说原因 → 最后补充细节</strong>\n                        </blockquote>\n                        <p><strong>消息结构模板：</strong></p>\n                        <ol>\n                            <li>📌 <strong>结论/请求：</strong>你要告诉对方的核心信息</li>\n                            <li>🔍 <strong>原因/背景：</strong>为什么会这样（简要）</li>\n                            <li>📎 <strong>细节/附件：</strong>需要的话再补充（可选）</li>\n                        </ol>\n                        <p><strong>好处：</strong></p>\n                        <ul>\n                            <li>⚡ 对方3秒内就知道重点</li>\n                            <li>📱 即使只看到第一行也能明白</li>\n                            <li>🗂️ 方便后续搜索和归档</li>\n                        </ul>\n                        <p>\n                            <strong>别写悬疑小说，写结论。</strong>\n                        </p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方可能正在等你<strong>直接说重点</strong>。\n            </p>\n            <p>Source: U.S. Military Communication Protocol</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "sturgeons-law",
    "order": 16,
    "category": "thinking",
    "icon": "🗑️",
    "title": "斯特金定律",
    "englishTitle": "Sturgeon's Law",
    "summary": "90%的东西都是垃圾，学会筛选。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "斯特金定律",
      "subtitleHtml": "Sturgeon's Law",
      "leadHtml": "90% 的东西都是垃圾。<br>\n                    这不是悲观，这是现实。"
    },
    "bad": {
      "titleHtml": "❌ 信息焦虑",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:00 上午",
          "text": "这篇文章说咖啡对身体好，要多喝",
          "html": "这篇文章说咖啡对身体好，要多喝"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:30 上午",
          "text": "这篇文章说咖啡对心脏不好，要少喝",
          "html": "这篇文章说咖啡对心脏不好，要少喝"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "11:00 上午",
          "text": "这个评论说第一篇是对的，有100个赞",
          "html": "这个评论说第一篇是对的，有100个赞"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "11:30 上午",
          "text": "那个评论说第二篇是对的，有200个赞",
          "html": "那个评论说第二篇是对的，有200个赞"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "12:00 中午",
          "text": "我到底还能不能喝咖啡了？！😵",
          "html": "我到底还能不能喝咖啡了？！😵"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">信息爆炸时代的陷阱</h3>\n                        <p>\n                            互联网让每个人都能发声，但这也意味着<strong>噪音远远超过信号</strong>。\n                        </p>\n                        <p>\n                            <strong>问题所在：</strong>\n                        </p>\n                        <ul>\n                            <li>📢 <strong>人人都能发言：</strong>专家和键盘侠享有同等曝光</li>\n                            <li>🎭 <strong>情绪驱动传播：</strong>极端观点比理性观点更容易传播</li>\n                            <li>💰 <strong>流量为王：</strong>为了点击量，标题党横行</li>\n                        </ul>\n                        <p>\n                            如果你认真对待每一条信息，你会被淹没在垃圾海洋里。\n                        </p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 学会筛选",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:00 上午",
          "text": "又看到一篇\"震惊！XXX竟然...\"的文章",
          "html": "又看到一篇\"震惊！XXX竟然...\"的文章"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:01 上午",
          "text": "等等，先检查一下：来源是谁？有没有引用原始研究？",
          "html": "等等，先检查一下：来源是谁？有没有引用原始研究？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:02 上午",
          "text": "没有可信来源，直接划走。我的时间比这更值钱。",
          "html": "没有可信来源，直接划走。我的时间比这更值钱。"
        },
        {
          "name": "心态",
          "time": "平和",
          "text": "节省了30分钟，内心毫无波动 😌",
          "html": "&nbsp;&nbsp;节省了30分钟，内心毫无波动 😌",
          "style": "background: #e8f5e9; border-left: 4px solid #4caf50;"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">斯特金定律</h3>\n                        <p>\n                            科幻作家西奥多·斯特金在1957年提出：\n                        </p>\n                        <blockquote style=\"border-left: 4px solid var(--primary); padding-left: 1rem; color: var(--foreground); font-style: italic;\">\n                            \"Ninety percent of everything is crud.\"<br>\n                            <strong>90% 的东西都是垃圾。</strong>\n                        </blockquote>\n                        <p><strong>如何应对：</strong></p>\n                        <ul>\n                            <li>🔍 <strong>质疑来源：</strong>谁说的？有什么资质？</li>\n                            <li>📊 <strong>查找原始数据：</strong>有没有引用可验证的研究？</li>\n                            <li>⏳ <strong>等待共识：</strong>一条信息被多个独立来源确认了吗？</li>\n                            <li>🗑️ <strong>敢于忽略：</strong>大部分内容不值得你的时间</li>\n                        </ul>\n                        <p><strong>记住：</strong></p>\n                        <p>\n                            互联网上的评论、建议、\"专家观点\"——大部分质量堪忧。你的注意力是有限的，<strong>别浪费在垃圾上</strong>。\n                        </p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方希望你<strong>不要把每条网上的评论都当回事</strong>。\n            </p>\n            <p>提出者：Theodore Sturgeon (1957)</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "greshams-law",
    "order": 17,
    "category": "systems",
    "icon": "📉",
    "title": "格雷舍姆法则",
    "englishTitle": "Gresham's Law",
    "summary": "劣质内容驱逐优质内容，别喂养标题党。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "格雷舍姆法则",
      "subtitleHtml": "Gresham's Law (网络版)",
      "leadHtml": "劣质内容驱逐优质内容。<br>\n                    标题党永远比深度文章更火。🔥"
    },
    "bad": {
      "titleHtml": "❌ 流量至上",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "深度分析",
          "text": "《关于人工智能发展趋势的系统性分析与未来展望》",
          "html": "《关于人工智能发展趋势的系统性分析与未来展望》"
        },
        {
          "name": "",
          "text": "阅读量：2,341 | 点赞：89",
          "html": "阅读量：2,341 | 点赞：89",
          "style": "opacity: 0.5; text-align: center; padding: 15px;"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "标题党",
          "text": "《震惊！AI要取代程序员了！百万人将失业！》",
          "html": "《震惊！AI要取代程序员了！百万人将失业！》"
        },
        {
          "name": "",
          "text": "阅读量：1,234,567 | 点赞：98,765",
          "html": "阅读量：1,234,567 | 点赞：98,765",
          "style": "opacity: 0.5; text-align: center; padding: 15px;"
        },
        {
          "name": "结果",
          "time": "悲剧",
          "text": "深度作者心灰意冷，转行写标题党了...",
          "html": "&nbsp;&nbsp;深度作者心灰意冷，转行写标题党了...",
          "style": "background: #ffebee; border-left: 4px solid #f44336;"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">劣币驱逐良币</h3>\n                        <p>\n                            经济学家格雷舍姆发现：当两种货币并存时，<strong>劣币会驱逐良币</strong>——人们会把好钱藏起来，把劣质货币花出去。\n                        </p>\n                        <p>\n                            <strong>在互联网上，同样的逻辑在运作：</strong>\n                        </p>\n                        <ul>\n                            <li>🎭 <strong>算法偏好：</strong>点击率高的内容获得更多曝光</li>\n                            <li>😱 <strong>情绪优先：</strong>愤怒、恐惧比理性更容易传播</li>\n                            <li>⏱️ <strong>注意力稀缺：</strong>标题党3秒抓住眼球，深度文章需要30分钟</li>\n                        </ul>\n                        <p>\n                            最终，创作者被迫向流量妥协，<strong>优质内容逐渐消失</strong>。\n                        </p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 主动寻找优质内容",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "行动",
          "text": "取消关注了一批标题党账号",
          "html": "取消关注了一批标题党账号"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "行动",
          "text": "订阅了几个专业领域的newsletter",
          "html": "订阅了几个专业领域的newsletter"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "行动",
          "text": "给写深度内容的创作者点赞、打赏、转发",
          "html": "给写深度内容的创作者点赞、打赏、转发"
        },
        {
          "name": "结果",
          "time": "改变",
          "text": "信息质量提升，焦虑减少，思考深度增加",
          "html": "&nbsp;&nbsp;信息质量提升，焦虑减少，思考深度增加",
          "style": "background: #e8f5e9; border-left: 4px solid #4caf50;"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">用行动投票</h3>\n                        <p>\n                            算法是根据你的行为来推荐内容的。<strong>你点击什么，就会看到更多什么。</strong>\n                        </p>\n                        <p><strong>你可以做的事：</strong></p>\n                        <ul>\n                            <li>🚫 <strong>不点击标题党：</strong>即使好奇也忍住</li>\n                            <li>⭐ <strong>主动寻找优质来源：</strong>订阅、收藏、书签</li>\n                            <li>💪 <strong>支持好内容：</strong>点赞、评论、付费</li>\n                            <li>📵 <strong>减少刷信息流：</strong>主动搜索取代被动接收</li>\n                        </ul>\n                        <p><strong>记住：</strong></p>\n                        <p>\n                            每一次点击都是一次投票。你的注意力决定了什么内容能活下来。<strong>别用你的点击喂养垃圾。</strong>\n                        </p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方希望你能<strong>支持优质内容，远离标题党</strong>。\n            </p>\n            <p>原始概念：Thomas Gresham (16世纪经济学家)</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "assume-public",
    "order": 18,
    "category": "systems",
    "icon": "🔓",
    "title": "假设公开原则",
    "englishTitle": "Assume Public",
    "summary": "假设你发的一切都会被永久保存、被所有人看到。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "假设公开原则",
      "subtitleHtml": "Assume Everything is Public",
      "leadHtml": "在网上发的任何东西，<br>\n                    都要假设它会被永久保存、被所有人看到。"
    },
    "bad": {
      "titleHtml": "❌ 侥幸心理",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "私聊",
          "text": "老板真是个傻X，今天又在会上说那些蠢话",
          "html": "老板真是个傻X，今天又在会上说那些蠢话"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "私聊",
          "text": "哈哈哈确实 😂",
          "html": "哈哈哈确实 😂"
        },
        {
          "name": "",
          "text": "（三个月后...）",
          "html": "（三个月后...）",
          "style": "opacity: 0.7; text-align: center; padding: 15px;"
        },
        {
          "character": "tail",
          "name": "尾巴",
          "time": "正式邮件",
          "text": "西打，请到我办公室来一趟。有人举报你在内部沟通中使用不当言论...",
          "html": "&nbsp;&nbsp;西打，请到我办公室来一趟。有人举报你在内部沟通中使用不当言论...",
          "style": "background: #ffebee; border-left: 4px solid #f44336;"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "崩溃",
          "text": "完了... 那条消息被截图了...",
          "html": "&nbsp;&nbsp;完了... 那条消息被截图了..."
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">互联网没有橡皮擦</h3>\n                        <p>\n                            很多人以为：\n                        </p>\n                        <ul>\n                            <li>💬 \"私聊没关系，只有我们俩看得到\"</li>\n                            <li>🗑️ \"删掉就好了，谁会记得\"</li>\n                            <li>🎭 \"匿名账号，查不到是我\"</li>\n                            <li>🔒 \"仅好友可见，安全的\"</li>\n                        </ul>\n                        <p>\n                            <strong>现实是：</strong>\n                        </p>\n                        <ul>\n                            <li>📸 私聊可以被截图</li>\n                            <li>💾 删除的内容可能早被人保存</li>\n                            <li>🔍 匿名账号可能被关联分析</li>\n                            <li>👥 好友可能会转发</li>\n                        </ul>\n                        <p>\n                            <strong>互联网有记忆，而且记忆力惊人。</strong>\n                        </p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 公告栏测试",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "发送前",
          "text": "我想吐槽老板...",
          "html": "我想吐槽老板..."
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "暂停",
          "text": "等等，如果这条消息被贴到公司公告栏上，我会怎样？",
          "html": "等等，如果这条消息被贴到公司公告栏上，我会怎样？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "决定",
          "text": "还是算了吧。有意见当面说，或者私下喝咖啡聊。",
          "html": "还是算了吧。有意见当面说，或者私下喝咖啡聊。"
        },
        {
          "name": "结果",
          "time": "安全",
          "text": "避免了一场潜在的职业危机",
          "html": "&nbsp;&nbsp;避免了一场潜在的职业危机",
          "style": "background: #e8f5e9; border-left: 4px solid #4caf50;"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">发送前的终极检验</h3>\n                        <p>\n                            在点击发送之前，问自己：\n                        </p>\n                        <blockquote style=\"border-left: 4px solid var(--primary); padding-left: 1rem; color: var(--foreground); font-style: italic;\">\n                            \"如果这条消息被贴到公司公告栏 / 发到我妈的微信群 / 上了热搜...<br>\n                            <strong>我会后悔吗？</strong>\"\n                        </blockquote>\n                        <p><strong>安全准则：</strong></p>\n                        <ul>\n                            <li>😤 <strong>情绪激动时：</strong>写完存草稿，第二天再决定</li>\n                            <li>🗣️ <strong>敏感话题：</strong>线下说，别留痕迹</li>\n                            <li>🔐 <strong>私密信息：</strong>根本不应该通过网络传输</li>\n                            <li>👤 <strong>评判他人：</strong>假设对方会看到这条</li>\n                        </ul>\n                        <p>\n                            <strong>记住：互联网上没有真正的\"私聊\"。只有\"还没被公开\"的对话。</strong>\n                        </p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方希望你<strong>在发送之前再想一想</strong>。\n            </p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "echo-chamber",
    "order": 19,
    "category": "systems",
    "icon": "🫧",
    "title": "回声室效应",
    "englishTitle": "Echo Chamber",
    "summary": "算法只给你看你想看的，跳出信息茧房。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "回声室效应",
      "subtitleHtml": "Echo Chamber / 信息茧房",
      "leadHtml": "算法只给你看你想看的，<br>\n                    让你误以为全世界都这么想。🫧"
    },
    "bad": {
      "titleHtml": "❌ 困在茧房里",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "刷手机",
          "text": "又刷到一个支持X观点的视频，说得太对了！",
          "html": "又刷到一个支持X观点的视频，说得太对了！"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "继续刷",
          "text": "评论区也都是支持X的，看来大家都这么想",
          "html": "评论区也都是支持X的，看来大家都这么想"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "自信满满",
          "text": "X观点是社会共识，反对的人都是少数极端分子",
          "html": "X观点是社会共识，反对的人都是少数极端分子"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "现实世界",
          "text": "其实一半以上的人持相反观点，只是算法没推给你...",
          "html": "其实一半以上的人持相反观点，只是算法没推给你..."
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "震惊",
          "text": "啊？不可能吧？我每天看的明明都是...",
          "html": "啊？不可能吧？我每天看的明明都是..."
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">算法创造的平行世界</h3>\n                        <p>\n                            社交媒体和推荐系统的目标是<strong>最大化你的停留时间</strong>。最有效的方法？给你看你喜欢的东西。\n                        </p>\n                        <p>\n                            <strong>结果是：</strong>\n                        </p>\n                        <ul>\n                            <li>🔄 <strong>自我强化：</strong>你看什么，就会看到更多类似的</li>\n                            <li>🚫 <strong>异见消失：</strong>反对观点被算法屏蔽</li>\n                            <li>📢 <strong>极化加剧：</strong>你以为的\"主流\"只是你的圈子</li>\n                        </ul>\n                        <p>\n                            你和持不同观点的人，可能在同一个平台上，却看着<strong>完全不同的\"现实\"</strong>。\n                        </p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 主动戳破泡泡",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "意识到",
          "text": "等等，我最近只看到一种声音，会不会是算法在作怪？",
          "html": "等等，我最近只看到一种声音，会不会是算法在作怪？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "行动",
          "text": "主动搜索相反观点，看看他们怎么想的",
          "html": "主动搜索相反观点，看看他们怎么想的"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "发现",
          "text": "原来对方也有道理，只是角度不同",
          "html": "原来对方也有道理，只是角度不同"
        },
        {
          "name": "结果",
          "time": "成长",
          "text": "世界观更加立体，讨论问题时更加理性",
          "html": "&nbsp;&nbsp;世界观更加立体，讨论问题时更加理性",
          "style": "background: #e8f5e9; border-left: 4px solid #4caf50;"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">突破信息茧房</h3>\n                        <p>\n                            <strong>警惕信号：</strong>\n                        </p>\n                        <ul>\n                            <li>🚩 你很久没看到反对观点了</li>\n                            <li>🚩 你觉得\"所有人\"都这么想</li>\n                            <li>🚩 持不同观点的人在你眼里都是\"蠢货\"</li>\n                        </ul>\n                        <p><strong>突破方法：</strong></p>\n                        <ul>\n                            <li>🔍 <strong>主动搜索反面观点：</strong>别等算法喂给你</li>\n                            <li>👥 <strong>接触不同圈子的人：</strong>线下比线上更容易</li>\n                            <li>📰 <strong>关注多元信息源：</strong>不同立场的媒体都看看</li>\n                            <li>🤔 <strong>练习钢铁人论证：</strong>尝试用最强的逻辑为对方辩护</li>\n                        </ul>\n                        <p>\n                            <strong>记住：如果你从未遇到让你不舒服的观点，说明你已经被困在茧房里了。</strong>\n                        </p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方希望你<strong>跳出自己的信息泡泡</strong>，听听不同的声音。\n            </p>\n            <p>概念提出者：Eli Pariser (《The Filter Bubble》作者)</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "online-disinhibition",
    "order": 20,
    "category": "systems",
    "icon": "🎭",
    "title": "在线解除抑制",
    "englishTitle": "Online Disinhibition",
    "summary": "如果当面说会怎样？别做键盘侠。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "在线解除抑制效应",
      "subtitleHtml": "Online Disinhibition Effect",
      "leadHtml": "人们在网上比现实中<br>\n                    更容易表达攻击性或过度亲密的言论。🎭"
    },
    "bad": {
      "titleHtml": "❌ 键盘侠现象",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "评论区",
          "text": "你这种人就不配活着！滚出互联网！",
          "html": "你这种人就不配活着！滚出互联网！"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "继续喷",
          "text": "脑残！智障！废物！",
          "html": "脑残！智障！废物！"
        },
        {
          "name": "",
          "text": "（线下偶遇...）",
          "html": "（线下偶遇...）",
          "style": "opacity: 0.7; text-align: center; padding: 15px;"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "现实中",
          "text": "你好，请问你就是网上那位吗？",
          "html": "你好，请问你就是网上那位吗？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "现实中",
          "text": "啊... 那个... 我开玩笑的... 不好意思...",
          "html": "啊... 那个... 我开玩笑的... 不好意思..."
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">屏幕背后的\"勇气\"</h3>\n                        <p>\n                            心理学家 John Suler 发现，人们在网上会做出现实中绝不会做的事。这被称为<strong>\"在线解除抑制效应\"</strong>。\n                        </p>\n                        <p>\n                            <strong>六大原因：</strong>\n                        </p>\n                        <ul>\n                            <li>🎭 <strong>匿名性：</strong>\"他们不知道我是谁\"</li>\n                            <li>👻 <strong>隐身性：</strong>看不到对方的表情</li>\n                            <li>⏳ <strong>异步性：</strong>不用立刻面对反应</li>\n                            <li>🧠 <strong>想象力：</strong>把对方想象成非人类</li>\n                            <li>🎮 <strong>游戏感：</strong>觉得网络不是\"真实\"的</li>\n                            <li>⚖️ <strong>平等感：</strong>在网上谁都可以挑战权威</li>\n                        </ul>\n                        <p>\n                            这些因素叠加，让人<strong>失去了正常的社交抑制</strong>。\n                        </p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 当面检验法",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "准备回复",
          "text": "这人说的也太蠢了，我要骂他...",
          "html": "这人说的也太蠢了，我要骂他..."
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "暂停",
          "text": "等等，如果这个人就站在我面前，我会这么说吗？",
          "html": "等等，如果这个人就站在我面前，我会这么说吗？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "反思",
          "text": "不会... 当面说这种话太过分了",
          "html": "不会... 当面说这种话太过分了"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "理性回复",
          "text": "我不同意你的观点，理由是...（平和地表达不同意见）",
          "html": "我不同意你的观点，理由是...（平和地表达不同意见）"
        },
        {
          "name": "结果",
          "time": "文明",
          "text": "讨论继续，双方都学到了新东西",
          "html": "&nbsp;&nbsp;讨论继续，双方都学到了新东西",
          "style": "background: #e8f5e9; border-left: 4px solid #4caf50;"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">发送前的自检</h3>\n                        <p>\n                            在点击发送之前，问自己：\n                        </p>\n                        <blockquote style=\"border-left: 4px solid var(--primary); padding-left: 1rem; color: var(--foreground); font-style: italic;\">\n                            \"如果这个人就站在我面前，<br>\n                            <strong>我会当面这么说吗？</strong>\"\n                        </blockquote>\n                        <p><strong>保持理性的技巧：</strong></p>\n                        <ul>\n                            <li>👤 <strong>想象对方是真人：</strong>有家人、有感受、有故事</li>\n                            <li>⏰ <strong>等待冷却：</strong>生气时写完先存着，10分钟后再发</li>\n                            <li>📖 <strong>对事不对人：</strong>批评观点可以，攻击人格不行</li>\n                            <li>🪞 <strong>换位思考：</strong>如果别人这样对你说，你什么感受？</li>\n                        </ul>\n                        <p>\n                            <strong>记住：屏幕那边是一个真实的人，不是一个NPC。</strong>\n                        </p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方希望你<strong>在发言之前想象一下当面说会怎样</strong>。\n            </p>\n            <p>提出者：John Suler (《The Psychology of Cyberspace》)</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "dunning-kruger",
    "order": 21,
    "category": "thinking",
    "icon": "🤡",
    "title": "邓宁-克鲁格效应",
    "englishTitle": "Dunning-Kruger",
    "summary": "越无知越自信，越专业越谦虚。别和杠精争论。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "邓宁-克鲁格效应",
      "subtitleHtml": "Dunning-Kruger Effect",
      "leadHtml": "越无知的人越自信，<br>\n                    越专业的人越谦虚。🤡"
    },
    "bad": {
      "titleHtml": "❌ 愚昧山峰",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "技术群",
          "text": "这代码写得太垃圾了，让我来教你们什么叫真正的架构！",
          "html": "这代码写得太垃圾了，让我来教你们什么叫真正的架构！"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "技术群",
          "text": "请问你有多少年开发经验？",
          "html": "请问你有多少年开发经验？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "技术群",
          "text": "我上周刚学完一个网课，但我已经懂了，你们这些老程序员思维太陈旧了！",
          "html": "我上周刚学完一个网课，但我已经懂了，你们这些老程序员思维太陈旧了！"
        },
        {
          "character": "tail",
          "name": "尾巴",
          "time": "技术群",
          "text": "（沉默，懒得回应）",
          "html": "（沉默，懒得回应）"
        },
        {
          "name": "真相",
          "time": "研究表明",
          "text": "能力越差的人，越高估自己；能力越强的人，越低估自己。",
          "html": "&nbsp;&nbsp;能力越差的人，越高估自己；能力越强的人，越低估自己。",
          "style": "background: #fffbe6; border-left: 4px solid #ffd700;"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">愚昧之巅与绝望之谷</h3>\n                        <p>\n                            心理学家邓宁和克鲁格发现一个讽刺的现象：\n                        </p>\n                        <ul>\n                            <li>🏔️ <strong>愚昧之巅：</strong>刚学了点皮毛的人，自信心爆棚</li>\n                            <li>📉 <strong>绝望之谷：</strong>学到一定程度后，发现自己啥也不懂</li>\n                            <li>📈 <strong>开悟之坡：</strong>慢慢积累，自信重建，但更加谦虚</li>\n                        </ul>\n                        <p>\n                            <strong>为什么网上杠精那么多？</strong>\n                        </p>\n                        <ul>\n                            <li>🎤 不懂的人最敢发言（因为不知道自己不懂）</li>\n                            <li>🤐 真正的专家往往保持沉默（因为知道问题的复杂性）</li>\n                            <li>📢 结果：最响亮的声音往往最不靠谱</li>\n                        </ul>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 保持谦逊",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "学习中",
          "text": "我觉得这个方案是对的，但我可能遗漏了什么...",
          "html": "我觉得这个方案是对的，但我可能遗漏了什么..."
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "讨论区",
          "text": "我的理解是这样，但我是新手，请大家指正～",
          "html": "我的理解是这样，但我是新手，请大家指正～"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "讨论区",
          "text": "思路不错！补充一点：在生产环境中还需要考虑XXX...",
          "html": "思路不错！补充一点：在生产环境中还需要考虑XXX..."
        },
        {
          "name": "结果",
          "time": "成长",
          "text": "谦虚的态度让西打获得了真正有价值的反馈",
          "html": "&nbsp;&nbsp;谦虚的态度让西打获得了真正有价值的反馈",
          "style": "background: #e8f5e9; border-left: 4px solid #4caf50;"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">如何应对</h3>\n                        <p><strong>对自己：</strong></p>\n                        <ul>\n                            <li>🪞 <strong>警惕过度自信：</strong>越觉得自己懂，越要警惕</li>\n                            <li>📚 <strong>持续学习：</strong>真正的专家从不停止学习</li>\n                            <li>🙏 <strong>承认无知：</strong>\"我不知道\"是最有智慧的话之一</li>\n                        </ul>\n                        <p><strong>对他人：</strong></p>\n                        <ul>\n                            <li>🔇 <strong>少和杠精争论：</strong>他们不知道自己不知道</li>\n                            <li>👀 <strong>关注沉默的专家：</strong>最懂的人往往话最少</li>\n                            <li>📊 <strong>验证来源：</strong>别被自信的语气忽悠了</li>\n                        </ul>\n                        <blockquote style=\"border-left: 4px solid var(--primary); padding-left: 1rem; color: var(--foreground); font-style: italic;\">\n                            \"The more you know, the more you realize you don't know.\"<br>\n                            <strong>— 亚里士多德（据传）</strong>\n                        </blockquote>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方希望你<strong>在发表强烈观点之前，先确认自己真的懂</strong>。\n            </p>\n            <p>提出者：David Dunning &amp; Justin Kruger (1999)</p>\n            <p>\n                本站点内容由 <a href=\"/\">互联网沟通指北</a> 提供。\n            </p>"
  },
  {
    "slug": "tldr",
    "order": 22,
    "category": "communication",
    "icon": "📝",
    "title": "太长不看",
    "englishTitle": "TL;DR",
    "summary": "先给个摘要，尊重读者时间。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "TL;DR",
      "subtitleHtml": "Too Long; Didn't Read",
      "leadHtml": "太长不看。<br>\n                    请先给个摘要。"
    },
    "bad": {
      "titleHtml": "❌ 信息轰炸",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "2:30 下午",
          "text": "@全体成员 关于这个项目，我想说几点...",
          "html": "@全体成员 关于这个项目，我想说几点..."
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "2:31 下午",
          "text": "[发送了一条 2000 字的消息，包含项目背景、历史演变、技术细节、个人感想、未来展望...]",
          "html": "[发送了一条 2000 字的消息，包含项目背景、历史演变、技术细节、个人感想、未来展望...]"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "2:45 下午",
          "text": "所以...你到底想说什么？🤔",
          "html": "所以...你到底想说什么？🤔"
        },
        {
          "character": "tail",
          "name": "尾巴",
          "time": "3:00 下午",
          "text": "太长了，等我有空再看吧...",
          "html": "太长了，等我有空再看吧..."
        },
        {
          "name": "结果",
          "time": "没人看完",
          "text": "重要信息被埋没在文字海洋里，无人响应。",
          "html": "&nbsp;&nbsp;重要信息被埋没在文字海洋里，无人响应。",
          "style": "background: #fff0f0; border-left: 4px solid #ff6b6b;"
        }
      ],
      "explanationHtml": "<div>\n                        <p>在信息过载的时代，<strong>注意力是最稀缺的资源</strong>。</p>\n                        <ul>\n                            <li>😴 <strong>读者疲劳：</strong>大多数人根本不会读完</li>\n                            <li>🎯 <strong>重点丢失：</strong>关键信息被淹没</li>\n                            <li>🔕 <strong>无人响应：</strong>最终被忽略</li>\n                        </ul>\n                        <p><strong>TL;DR</strong> 原本是读者的抱怨，现在已成为写作者的责任。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 先说结论",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "2:30 下午",
          "text": "TL;DR：下周三上线新版本，需要各位周一前完成测试。",
          "html": "<strong>TL;DR：下周三上线新版本，需要各位周一前完成测试。</strong>"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "2:31 下午",
          "text": "详情：[展开查看完整背景和技术细节...]",
          "html": "详情：[展开查看完整背景和技术细节...]"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "2:32 下午",
          "text": "收到！周一前搞定 👍",
          "html": "收到！周一前搞定 👍"
        }
      ],
      "explanationHtml": "<div>\n                        <p><strong>TL;DR 写作法则：</strong></p>\n                        <ul>\n                            <li>📌 <strong>开头给摘要：</strong>一两句话概括核心要点</li>\n                            <li>🎯 <strong>明确行动项：</strong>读者需要做什么？什么时候？</li>\n                            <li>📂 <strong>详情可折叠：</strong>让感兴趣的人自行展开</li>\n                        </ul>\n                    </div>"
    },
    "footerHtml": "<p>如果你看到这个链接，说明对方希望<strong>你能尊重大家的时间，先给个摘要</strong>。</p>\n            <p>概念来源：互联网俚语，约2000年代初</p>\n            <p><a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025</p>"
  },
  {
    "slug": "rtfm",
    "order": 23,
    "category": "communication",
    "icon": "📖",
    "title": "读该死的手册",
    "englishTitle": "RTFM",
    "summary": "提问之前，请先查阅文档。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "RTFM",
      "subtitleHtml": "Read The F***ing Manual",
      "leadHtml": "在提问之前，<br>\n                    请先查阅文档。"
    },
    "bad": {
      "titleHtml": "❌ 伸手党",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:00 上午",
          "text": "这个软件怎么安装啊？",
          "html": "这个软件怎么安装啊？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:05 上午",
          "text": "官网有安装教程，你看过吗？",
          "html": "官网有安装教程，你看过吗？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:06 上午",
          "text": "没有，太长了不想看。你直接告诉我怎么弄呗？",
          "html": "没有，太长了不想看。你直接告诉我怎么弄呗？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:30 上午",
          "text": "怎么配置环境变量？为什么运行报错？",
          "html": "怎么配置环境变量？为什么运行报错？"
        },
        {
          "name": "多米诺",
          "time": "11:00 上午",
          "text": "RTFM! 文档里写得清清楚楚！",
          "html": "&nbsp;&nbsp;RTFM! 文档里写得清清楚楚！",
          "style": "background: #fff0f0; border-left: 4px solid #ff6b6b;"
        }
      ],
      "explanationHtml": "<div>\n                        <p><strong>RTFM</strong> = \"Read The F***ing Manual\"，读那该死的手册。</p>\n                        <ul>\n                            <li>📚 <strong>文档存在的意义：</strong>作者花时间写文档，就是为了回答常见问题</li>\n                            <li>⏰ <strong>尊重他人时间：</strong>别人不是你的私人助教</li>\n                            <li>🔄 <strong>重复问题：</strong>这些问题已被问过无数次</li>\n                        </ul>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 先读后问",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:00 上午",
          "text": "我按照官方文档第3步操作，但出现了这个错误：[截图]",
          "html": "我按照官方文档第3步操作，但出现了这个错误：[截图]"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:01 上午",
          "text": "我Google了这个错误，试了Stack Overflow上的方案但没解决。环境是 macOS 14 + Node 20。",
          "html": "我Google了这个错误，试了Stack Overflow上的方案但没解决。环境是 macOS 14 + Node 20。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:10 上午",
          "text": "这是个已知问题！文档没更新，你需要加个参数 --legacy-peer-deps 👍",
          "html": "这是个已知问题！文档没更新，你需要加个参数 --legacy-peer-deps 👍"
        }
      ],
      "explanationHtml": "<div>\n                        <p><strong>提问前的自检清单：</strong></p>\n                        <ul>\n                            <li>📖 读过官方文档了吗？</li>\n                            <li>🔍 Google/搜索引擎查过了吗？</li>\n                            <li>❓ 看过 FAQ 了吗？</li>\n                        </ul>\n                        <p><strong>这样提问，你会得到更快、更好的帮助。</strong></p>\n                    </div>"
    },
    "footerHtml": "<p>如果你看到这个链接，说明对方希望<strong>你能先尝试自己找答案</strong>。</p>\n            <p>概念来源：黑客文化，1979年</p>\n            <p><a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025</p>"
  },
  {
    "slug": "occams-razor",
    "order": 24,
    "category": "thinking",
    "icon": "🪒",
    "title": "奥卡姆剃刀",
    "englishTitle": "Occam's Razor",
    "summary": "如无必要，勿增实体。最简单的解释往往正确。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "奥卡姆剃刀",
      "subtitleHtml": "Occam's Razor",
      "leadHtml": "如无必要，勿增实体。<br>\n                    最简单的解释往往是正确的。"
    },
    "bad": {
      "titleHtml": "❌ 过度复杂化",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "下午 3:00",
          "text": "网站挂了！肯定是被黑客攻击了！",
          "html": "网站挂了！肯定是被黑客攻击了！"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "下午 3:05",
          "text": "是不是竞争对手搞的？还是内部有人泄露了服务器密码？",
          "html": "是不是竞争对手搞的？还是内部有人泄露了服务器密码？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "下午 3:10",
          "text": "我要报警！！！",
          "html": "我要报警！！！"
        },
        {
          "name": "多米诺",
          "time": "下午 3:15",
          "text": "兄弟，你SSL证书过期了。",
          "html": "&nbsp;&nbsp;兄弟，你SSL证书过期了。",
          "style": "background: #fffbe6; border-left: 4px solid #ffd700;"
        }
      ],
      "explanationHtml": "<div>\n                        <p><strong>奥卡姆剃刀</strong>是最古老、最强大的思维工具之一：</p>\n                        <blockquote style=\"border-left: 3px solid #666; padding-left: 1rem; margin: 1rem 0; font-style: italic;\">\n                            如无必要，勿增实体。\n                        </blockquote>\n                        <ul>\n                            <li>🔮 不要假设阴谋论，先检查简单错误</li>\n                            <li>🧩 不要引入不必要的变量</li>\n                            <li>🎯 从最可能的原因开始排查</li>\n                        </ul>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 从简单开始",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "下午 2:00",
          "text": "我的电脑突然没声音了！",
          "html": "我的电脑突然没声音了！"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "下午 2:01",
          "text": "先检查一下：静音开关是不是按了？",
          "html": "先检查一下：静音开关是不是按了？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "下午 2:03",
          "text": "好了，谢谢 😅",
          "html": "好了，谢谢 😅"
        }
      ],
      "explanationHtml": "<div>\n                        <p><strong>奥卡姆剃刀的实践应用：</strong></p>\n                        <ul>\n                            <li>🔧 <strong>Debug：</strong>先检查最常见的错误（typo、配置、重启）</li>\n                            <li>📧 <strong>沟通：</strong>对方没回复？可能只是忙</li>\n                            <li>🏥 <strong>医学：</strong>\"听到蹄声先想马，不要想斑马\"</li>\n                        </ul>\n                        <p><strong>记住：愚蠢和疏忽造成的问题，远比恶意多得多。</strong></p>\n                    </div>"
    },
    "footerHtml": "<p>如果你看到这个链接，说明对方希望<strong>你能从最简单的可能性开始考虑</strong>。</p>\n            <p>概念提出者：William of Ockham，约1287–1347</p>\n            <p><a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025</p>"
  },
  {
    "slug": "hitchens-razor",
    "order": 25,
    "category": "thinking",
    "icon": "⚔️",
    "title": "希钦斯剃刀",
    "englishTitle": "Hitchens's Razor",
    "summary": "无证据提出的主张，可以无证据驳回。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "希钦斯剃刀",
      "subtitleHtml": "Hitchens's Razor",
      "leadHtml": "无证据提出的主张，<br>\n                    可以无证据驳回。"
    },
    "bad": {
      "titleHtml": "❌ 无端指控",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "晚上 8:00",
          "text": "这个产品肯定是抄袭的！",
          "html": "这个产品肯定是抄袭的！"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "晚上 8:05",
          "text": "有什么证据吗？",
          "html": "有什么证据吗？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "晚上 8:06",
          "text": "你要证据干嘛？你去证明他没抄袭啊！",
          "html": "你要证据干嘛？你去证明他没抄袭啊！"
        },
        {
          "name": "问题",
          "time": "举证责任倒置",
          "text": "提出主张的人有责任提供证据，而不是要求别人证明其不存在。",
          "html": "&nbsp;&nbsp;提出主张的人有责任提供证据，而不是要求别人证明其不存在。",
          "style": "background: #fff0f0; border-left: 4px solid #ff6b6b;"
        }
      ],
      "explanationHtml": "<div>\n                        <p><strong>希钦斯剃刀</strong>由克里斯托弗·希钦斯提出：</p>\n                        <blockquote style=\"border-left: 3px solid #666; padding-left: 1rem; margin: 1rem 0; font-style: italic;\">\n                            无证据提出的主张，可以无证据驳回。\n                        </blockquote>\n                        <ul>\n                            <li>⚖️ <strong>举证责任：</strong>谁主张，谁举证</li>\n                            <li>🛡️ <strong>保护自己：</strong>你没有义务反驳空洞的指控</li>\n                            <li>🧹 <strong>清除噪音：</strong>无证据的言论不值得认真对待</li>\n                        </ul>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 有理有据",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "晚上 8:00",
          "text": "我发现这两个产品有相似之处，以下是对比截图：",
          "html": "我发现这两个产品有相似之处，以下是对比截图："
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "晚上 8:01",
          "text": "[功能对比图] [时间线分析]",
          "html": "[功能对比图] [时间线分析]"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "晚上 8:10",
          "text": "感谢提供证据！这样我们可以理性讨论了。",
          "html": "感谢提供证据！这样我们可以理性讨论了。"
        }
      ],
      "explanationHtml": "<div>\n                        <p><strong>如何运用希钦斯剃刀：</strong></p>\n                        <ul>\n                            <li>🎯 <strong>提出主张时：</strong>附上证据</li>\n                            <li>🛡️ <strong>面对指控时：</strong>礼貌地要求对方提供证据</li>\n                            <li>🚮 <strong>无证据时：</strong>直接无视，不必浪费精力反驳</li>\n                        </ul>\n                        <p><strong>记住：真正有理的人不怕拿出证据。</strong></p>\n                    </div>"
    },
    "footerHtml": "<p>如果你看到这个链接，说明对方希望<strong>你能提供证据支持观点</strong>。</p>\n            <p>概念提出者：Christopher Hitchens，1949–2011</p>\n            <p><a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025</p>"
  },
  {
    "slug": "poes-law",
    "order": 26,
    "category": "systems",
    "icon": "🎭",
    "title": "波定律",
    "englishTitle": "Poe's Law",
    "summary": "没有表情符号，讽刺与真话难以区分。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "波定律",
      "subtitleHtml": "Poe's Law",
      "leadHtml": "没有明显的表情符号，<br>\n                    讽刺与真话难以区分。"
    },
    "bad": {
      "titleHtml": "❌ 误解发生",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "下午 3:00",
          "text": "地球当然是平的，你们这些人就是被洗脑了",
          "html": "地球当然是平的，你们这些人就是被洗脑了"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "下午 3:05",
          "text": "什么？？你是认真的吗？？",
          "html": "什么？？你是认真的吗？？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "下午 3:07",
          "text": "......我在玩梗啊，你不会真以为我是地平论者吧？",
          "html": "......我在玩梗啊，你不会真以为我是地平论者吧？"
        },
        {
          "name": "波定律",
          "time": "生效了",
          "text": "没有表情或 /s 标记，讽刺和极端观点完全无法区分。",
          "html": "&nbsp;&nbsp;没有表情或 /s 标记，讽刺和极端观点完全无法区分。",
          "style": "background: #fffbe6; border-left: 4px solid #ffd700;"
        }
      ],
      "explanationHtml": "<div>\n                        <p><strong>波定律</strong>由 Nathan Poe 于 2005 年提出：</p>\n                        <p>在文字交流中，<strong>讽刺与真话难以区分</strong>。</p>\n                        <ul>\n                            <li>🎭 没有语气、表情，读者无法判断意图</li>\n                            <li>🌐 互联网上真的有各种极端观点</li>\n                            <li>🤷 你以为的玩笑，别人可能当真</li>\n                        </ul>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 清晰表达",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "下午 3:00",
          "text": "地球当然是平的 😂 /s",
          "html": "地球当然是平的 😂 /s"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "下午 3:01",
          "text": "哈哈哈，差点被你骗到 🤣",
          "html": "哈哈哈，差点被你骗到 🤣"
        }
      ],
      "explanationHtml": "<div>\n                        <p><strong>如何避免波定律：</strong></p>\n                        <ul>\n                            <li>😂 使用表情符号表明语气</li>\n                            <li>📝 使用 <code>/s</code> 标记讽刺</li>\n                            <li>🐶 加个狗头保命</li>\n                            <li>🤔 不确定时先问清楚</li>\n                        </ul>\n                        <p><strong>在互联网上，被误解是常态。清晰表达是对所有人的尊重。</strong></p>\n                    </div>"
    },
    "footerHtml": "<p>如果你看到这个链接，说明对方希望<strong>提醒你：你的话可能被误解了</strong>。</p>\n            <p>概念提出者：Nathan Poe，2005</p>\n            <p><a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025</p>"
  },
  {
    "slug": "brandolinis-law",
    "order": 27,
    "category": "systems",
    "icon": "💩",
    "title": "布兰多里尼定律",
    "englishTitle": "Brandolini's Law",
    "summary": "反驳胡说八道的能量是制造它的十倍。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "布兰多里尼定律",
      "subtitleHtml": "Brandolini's Law",
      "leadHtml": "反驳胡说八道所需的能量，<br>\n                    是制造它的十倍。"
    },
    "bad": {
      "titleHtml": "❌ 辟谣的悲剧",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "上午 10:00",
          "text": "震惊！科学家证实喝水致癌！快转发给家人！",
          "html": "震惊！科学家证实喝水致癌！快转发给家人！"
        },
        {
          "character": "tail",
          "name": "尾巴",
          "time": "上午 10:01",
          "text": "天啊！已转发！！",
          "html": "天啊！已转发！！"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "下午 3:00",
          "text": "[花了5小时写了一篇3000字的辟谣文章，引用12篇论文]",
          "html": "[花了5小时写了一篇3000字的辟谣文章，引用12篇论文]"
        },
        {
          "name": "结果",
          "text": "谣言10万+，辟谣文阅读量：203",
          "html": "&nbsp;&nbsp;谣言10万+，辟谣文阅读量：203",
          "style": "background: #fff0f0; border-left: 4px solid #ff6b6b;"
        }
      ],
      "explanationHtml": "<div>\n                        <p><strong>布兰多里尼定律</strong>（又称\"胡说八道不对称原则\"）：</p>\n                        <blockquote style=\"border-left: 3px solid #666; padding-left: 1rem; margin: 1rem 0; font-style: italic;\">\n                            反驳胡说八道所需的能量，是制造它的十倍。\n                        </blockquote>\n                        <ul>\n                            <li>💩 制造谣言：5秒</li>\n                            <li>📚 反驳谣言：5小时</li>\n                            <li>📢 谣言传播：10万+</li>\n                            <li>🔇 辟谣传播：203</li>\n                        </ul>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 聪明应对",
      "lines": [
        {
          "character": "domino",
          "name": "多米诺",
          "time": "上午 10:05",
          "text": "请问有原始论文链接吗？哪位科学家？发表在哪里？",
          "html": "请问有原始论文链接吗？哪位科学家？发表在哪里？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "上午 10:10",
          "text": "......（沉默）",
          "html": "......（沉默）"
        }
      ],
      "explanationHtml": "<div>\n                        <p><strong>面对胡说八道的策略：</strong></p>\n                        <ul>\n                            <li>❓ <strong>要求来源：</strong>让对方先自证</li>\n                            <li>🚫 <strong>不喂流量：</strong>别帮谣言传播</li>\n                            <li>🎯 <strong>挑选战场：</strong>不是每个都值得反驳</li>\n                            <li>🔗 <strong>复用资源：</strong>引用已有的辟谣</li>\n                        </ul>\n                        <p><strong>记住：你的时间和精力是有限的。</strong></p>\n                    </div>"
    },
    "footerHtml": "<p>如果你看到这个链接，说明对方在提醒你<strong>不要浪费精力反驳低质量言论</strong>。</p>\n            <p>概念提出者：Alberto Brandolini，2013</p>\n            <p><a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025</p>"
  },
  {
    "slug": "stfw",
    "order": 28,
    "category": "communication",
    "icon": "🌏",
    "title": "善用搜索",
    "englishTitle": "STFW",
    "summary": "遇事不决，先问谷歌。必应也是你的好朋友。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "善用搜索",
      "subtitleHtml": "Search The Fucking Web",
      "leadHtml": "遇事不决，先问谷歌。<br>\n                    必应也是你的好朋友。"
    },
    "bad": {
      "titleHtml": "❌ 伸手党的一天",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:00",
          "text": "Python 里怎么把字符串转成小写？",
          "html": "Python 里怎么把字符串转成小写？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:01",
          "text": "...",
          "html": "..."
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:02",
          "text": "这种问题谷歌搜一下第一条就是答案。",
          "html": "这种问题谷歌搜一下第一条就是答案。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">搜索引擎比人更耐心</h3>\n                        <p>\n                            互联网上 90% 的基础问题都已经有了现成的答案。当你问一个直接能搜到的问题时，你在浪费两个人的时间：你的（等待回复）和对方的（打字回复）。\n                        </p>\n                        <p>\n                            <strong>STFW</strong> 是 <strong>RTFM</strong> (Read The Fucking Manual) 的年轻亲戚。这不仅是礼貌，更是效率。\n                        </p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 站在巨人的肩膀上",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:00",
          "text": "我想把 Python 字符串转小写，搜了说是用 .lower()，但我处理中文的时候有些字符好像没变，是编码问题吗？",
          "html": "我想把 Python 字符串转小写，搜了说是用\n                            <code>.lower()</code>，但我处理中文的时候有些字符好像没变，是编码问题吗？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:05",
          "text": "中文大小写转换比较特殊，试试 .casefold()，它对 Unicode 支持更好。",
          "html": "中文大小写转换比较特殊，试试 <code>.casefold()</code>，它对 Unicode 支持更好。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">展示你的尝试</h3>\n                        <p>\n                            当你说 \"我搜过 XXX 但没找到答案\" 时，你赢得了尊重。这表明你不是来\"白嫖\"知识的，而是遇到了真正的困难。\n                        </p>\n                        <blockquote style=\"border-left: 4px solid var(--primary); padding-left: 1rem; color: var(--foreground);\">\n                            “授人以鱼不如授人以渔，但前提是你得自己带鱼竿。”\n                        </blockquote>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到某人发了这个链接，说明你的问题其实 <strong>你自己能解决</strong>，只要你愿意动动手指。\n            </p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "denver-coder-9",
    "order": 29,
    "category": "communication",
    "icon": "🦕",
    "title": "别做始乱终弃的人",
    "englishTitle": "Who is DenverCoder9?",
    "summary": "找到了答案？请把它写出来。别做那个只留下一句“已解决”的混蛋。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "别做始乱终弃的人",
      "subtitleHtml": "Who is DenverCoder9?",
      "leadHtml": "找到了答案？请把它写出来。<br>\n                    别做那个只留下一句“已解决”的混蛋。"
    },
    "bad": {
      "titleHtml": "❌ 为后来者挖的坑",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "2003年5月",
          "text": "我的显卡驱动报错 Error 4096，有人遇到过吗？",
          "html": "我的显卡驱动报错 Error 4096，有人遇到过吗？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "2003年5月",
          "text": "没事了，我自己搞定了！",
          "html": "没事了，我自己搞定了！"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "2025年",
          "text": "怎么搞定的？！楼主你说啊！我现在的报错跟你一模一样！🤬",
          "html": "怎么搞定的？！楼主你说啊！我现在的报错跟你一模一样！🤬"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">互联网上的幽灵</h3>\n                        <p>\n                            这种行为被称为 <strong>DenverCoder9</strong>（源自 <a href=\"https://xkcd.com/979/\" target=\"_blank\">xkcd 979</a>）。\n                        </p>\n                        <p>\n                            你是那个在黑暗中摸索出路的人，请不要把梯子撤走。当你留下一句\"已解决\"却不给方案时，你就在互联网上创造了一个死胡同。\n                        </p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 留下希望的火种",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:00",
          "text": "我的显卡驱动报错 Error 4096，有人遇到过吗？",
          "html": "我的显卡驱动报错 Error 4096，有人遇到过吗？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:30",
          "text": "更新：解决了。需要在 BIOS 里把 Fast Boot 关掉，并降级驱动到 v4.2。希望这对后来人有用。",
          "html": "更新：解决了。需要在 BIOS 里把 Fast Boot 关掉，并降级驱动到 v4.2。希望这对后来人有用。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">完美的闭环</h3>\n                        <p>\n                            分享你的解决方案。即使只是简单的几句话，也可能拯救几年后另一个在深夜崩溃的灵魂。\n                        </p>\n                        <blockquote style=\"border-left: 4px solid var(--primary); padding-left: 1rem; color: var(--foreground);\">\n                            “今天你踩过的坑，填上它，明天就是别人的路。”\n                        </blockquote>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，可能是因为你刚刚解决了问题，但忘记了<strong>告诉世界你是怎么做到的</strong>。\n            </p>\n            <p>Inspired by <a href=\"https://xkcd.com/979/\" target=\"_blank\">xkcd</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "no-urgent",
    "order": 30,
    "category": "communication",
    "icon": "🚨",
    "title": "拒绝“紧急”",
    "englishTitle": "No \"Urgent\"",
    "summary": "你的紧急情况不是我的紧急情况。标题写“救命”只会让你被忽略。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "拒绝“紧急”",
      "subtitleHtml": "Your Emergency ≠ My Emergency",
      "leadHtml": "你的计划不周不是我的紧急危机。<br>\n                    标题写“救命”只会让你更快被忽略。"
    },
    "bad": {
      "titleHtml": "❌ 狼来了",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:00",
          "text": "救命啊！！！大佬救我！！！服务器炸了！急急急在线等！！！😭😭😭",
          "html": "救命啊！！！大佬救我！！！服务器炸了！急急急在线等！！！😭😭😭"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:05",
          "text": "(已读不回)",
          "html": "(已读不回)"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">廉价的求救</h3>\n                        <p>\n                            \"紧急\"、\"跪求\"、\"救命\" 这些词在技术社区里是噪音。当你在标题里大喊大叫时，你传达的信息是：<strong>我认为我的时间比你的时间更值钱</strong>。\n                        </p>\n                        <p>\n                            真正的专家会优先处理描述清晰、哪怕不带任何感叹号的问题，而会本能地屏蔽那些充满情绪化词汇的标题。\n                        </p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 冷静的专业素养",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:00",
          "text": "[生产环境] 数据库连接池耗尽导致 502 错误，附 Error Log",
          "html": "<strong>[生产环境]</strong> 数据库连接池耗尽导致 502 错误，附 Error Log"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:02",
          "text": "看日志像是死锁了，检查一下事务隔离级别。",
          "html": "看日志像是死锁了，检查一下事务隔离级别。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">标题即摘要</h3>\n                        <p>\n                            好标题遵循 <strong>\"目标 - 差异\"</strong> 模式。告诉大家坏了什么（显卡），以及哪里不对劲（冒烟了），而不是你有多焦虑。\n                        </p>\n                        <blockquote style=\"border-left: 4px solid var(--primary); padding-left: 1rem; color: var(--foreground);\">\n                            “如果你真的很急，付费咨询是表达诚意的最好方式。”\n                        </blockquote>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明你的 <strong>“紧急”</strong> 只是因为你 <strong>计划不周</strong>，或者你试图用情绪绑架他人。\n            </p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  }
];

export const orderedLaws = laws.sort((a, b) => a.order - b.order);

export function getLaw(slug: string) {
  return orderedLaws.find((law) => law.slug === slug);
}

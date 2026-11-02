import type { Law } from './law-types';

const laws: Law[] = [
  {
    "slug": "no-hello",
    "order": 1,
    "category": "communication",
    "title": "别只说“你好”",
    "englishTitle": "No Hello",
    "summary": "有事儿直接说事儿，别问在吗。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "不要说<span id=\"strike\">hello</span>",
      "subtitleHtml": "不要在聊天时问：「在吗？」",
      "leadHtml": "想象一下别人接通你的电话时，你问<span class=\"nowrap\">「在吗？」</span>，然后等着对方回应…🤦",
      "effect": "greeting-strike",
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
      "explanationHtml": "<div>\n                        <p>\n                            请注意，这个场景中西打本可以提前几分钟得到答案，也不必让多米诺等待，而多米诺本来可以立刻开始思考这个问题。\n                        </p>\n                        <p>\n                            人们这样做通常是出于礼貌，避免像面对面或者打电话时候那样唐突地直接提出请求。但现在已经是2025年了，聊天方式也和以前完全不同。对于绝大多数人来说，打字比说话慢得多。所以尽管你的初衷是好的，\n                            <strong>实际上你只是在让对方等待</strong>。你说出自己的问题，本来一句话就能解决，现在却要多花两个来回，这非常没有效率，某种意义上也有些烦人。\n                        </p>\n                        <p>类似的场景有：</p>\n                        <ul>\n                            <li>\"你好，在吗？\"</li>\n                            <li>\"在，有事直接问。\"</li>\n                            <li>\"你有时间吗？\"</li>\n                            <li>\"有\"</li>\n                            <li>\"忙吗？\"</li>\n                            <li>等等</li>\n                        </ul>\n                        <p>\n                            <strong style=\"font-weight: bold;\">请直接问问题！</strong> 😫\n                        </p>\n                    </div>"
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
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">把车钥匙扔给技师</h3>\n                        <p>\n                            这就好比你去修车店，把钥匙扔给技师说：<strong>“它坏了。”</strong> 然后转身就走。\n                        </p>\n                        <p>\n                            技师需要试驾、检查引擎、检查轮胎、排除电瓶问题... 你把自己也不懂的混乱，原封不动地抛给了别人。这是一种<strong>“负向工作的传递”</strong>。\n                        </p>\n                        <p>\n                            你需要提供的是 <strong style=\"background: rgba(255,255,0,0.2); padding: 0 4px;\">“最小可复现单元” (Minimal\n                                Reproducible Example)</strong>。你把问题打包得越好，别人拆包（解决）的速度就越快。\n                        </p>\n                    </div>"
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
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">医生治不好“我病了”</h3>\n                        <p>\n                            你可以告诉医生“我病了”，但如果只说这一句，医生也治不好你。<br>\n                            你需要说哪里疼、什么时候开始疼的、吃过什么东西。\n                        </p>\n                        <p>程序/设备也是一样。技术人员没有读心术。</p>\n                    </div>"
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
    "title": "惠顿定律",
    "englishTitle": "Wheaton's Law",
    "summary": "别当混蛋 (Don't be a dick)。",
    "layout": "statement",
    "hero": {
      "titleHtml": "惠顿定律",
      "subtitleHtml": "Wheaton's Law",
      "leadHtml": "<h2 style=\"font-size: clamp(3rem, 15vw, 8rem); line-height: 1; font-weight: 900; letter-spacing: -0.02em; color: var(--destructive); margin: 0; text-transform: uppercase;\">\n                    Don't be a dick.\n                </h2>\n                <h2 style=\"font-size: clamp(2rem, 10vw, 5rem); line-height: 1.2; font-weight: 900; margin: 1rem 0 0 0; color: var(--foreground);\">\n                    别当混蛋。\n                </h2>\n\n                "
    },
    "specialHtml": "<div>\n                <h3 style=\"margin-top:0\">互联网黄金法则</h3>\n                <p>\n                    这是由威尔·惠顿（Will Wheaton）提出的定律。\n                </p>\n                <div class=\"callout\">\n                    <ul>\n                        <li class=\"li-bad\"><strong>不要</strong> 因为匿名就肆无忌惮地攻击他人。</li>\n                        <li class=\"li-bad\"><strong>不要</strong> 嘲笑新手，每个人都是从零开始的。</li>\n                        <li class=\"li-good\"><strong>要</strong> 保持基本的礼貌和尊重。</li>\n                    </ul>\n                </div>\n            </div>",
    "footerHtml": "<p>\n            这不是非常严重的事情，所以请不要对送你来看这个网站的人\n            <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n        </p>\n        <p>\n            如果你看到这个链接，说明......其实也没什么，就只是希望大家能友善一点。\n        </p>\n        <p>Source: <a href=\"https://knowyourmeme.com/memes/wheatons-law\">Know Your Meme</a></p>\n        <p>\n            <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n        </p>"
  },
  {
    "slug": "smart-questions",
    "order": 6,
    "category": "communication",
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
      "explanationHtml": "<div>\n                    <h3 style=\"margin-top:0\">好提问的三个要素</h3>\n                    <ul style=\"list-style: none; padding-left: 10px;\">\n                        <li>环境：系统、版本、硬件配置。</li>\n                        <li>现象：做了什么操作，出现什么结果。</li>\n                        <li>已尝试：试过哪些办法，分别是什么反应。</li>\n                    </ul>\n                </div>"
    },
    "footerHtml": "<p>\n            这不是非常严重的事情，所以请不要对送你来看这个网站的人\n            <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n        </p>\n        <p>\n            如果你看到这个链接，说明你的提问方式可能会让解答者感到<strong>困惑</strong>，建议先读读这份指南，这能帮你更快得到答案。\n        </p>\n        <p>Based on <a href=\"https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way\">Eric S. Raymond's\n                Guide</a></p>\n        <p>\n            <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n        </p>"
  },
  {
    "slug": "no-pointless-politeness",
    "order": 7,
    "category": "communication",
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
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">信号与噪声</h3>\n                        <p>\n                            在一个 500 人的群里，当管理员发布了一条重要通知后，连续有 100 个人回复“收到”、“好的”、“Thanks”。\n                        </p>\n                        <p>\n                            此时，真正重要的<strong>补充通知</strong>（比如地点变更），已经被顶到了屏幕最上方。这意味着后面进来的 300 个人，根本看不到那条更正，只会去错误的地点。\n                        </p>\n                        <p>\n                            在面对面的晚宴上，鞠躬和寒暄是必要的<strong>润滑剂</strong>。但在高密度的信息流（群聊、Issue、论坛）中，每一行像素都是昂贵的 <strong style=\"color: var(--bad);\">屏幕地产</strong>。\n                        </p>\n                    </div>"
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
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">静默的赞赏</h3>\n                        <p>\n                            高效的社区有着独特的<strong>“静默文化”</strong>：\n                        </p>\n                        <ul>\n                            <li><strong>点赞 / 表情回应</strong> 代表“收到”或“谢谢”。</li>\n                            <li><strong>引用回复</strong> 代表针对性讨论。</li>\n                        </ul>\n                        <p>\n                            沉默意味着沟通顺利结束，信道重新回归宁静，等待下一个有价值的信号（比如紧急变更）出现。\n                        </p>\n                        <p>\n                            把屏幕留给更有价值的信息，而不是你的队形。\n                        </p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明群里的“队形”已经<strong>严重影响了信息的传递</strong>。\n            </p>\n            <p>Inspired by <a href=\"https://github.com/torvalds\">Linus Torvalds' Attitude</a> (Sort of...)</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "cunninghams-law",
    "order": 8,
    "category": "thinking",
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
          "tone": "meta"
        },
        {
          "name": "",
          "text": "（没有人回复）",
          "html": "（没有人回复）",
          "tone": "meta"
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
      "explanationHtml": "<div>\n                        <p>\n                            <strong>五分钟内，你就收获了一份详尽的烤鸭推荐清单。</strong>\n                        </p>\n                        <p>\n                            人类天生有一种<strong>纠正错误的冲动</strong>。当我们看到一个尚未被回答的问题时，我们可能会冷漠地划过；但当我们看到一个<strong>显而易见的\"错误\"</strong>时，我们忍不住想要纠正它，以展示自己的博学。\n                        </p>\n                        <p>\n                            这个技巧在以下场景特别有效：\n                        </p>\n                        <ul>\n                            <li>想获得主观推荐（餐厅、电影、书籍）</li>\n                            <li>想了解某个领域的最佳实践</li>\n                            <li>想激发社群讨论</li>\n                        </ul>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，可能是希望你能用一种<strong>\"特殊\"</strong>的方式来获得（或提供）正确答案。\n            </p>\n            <p>概念提出者：Ward Cunningham（维基百科的发明者）</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "rubber-duck",
    "order": 9,
    "category": "thinking",
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
      "explanationHtml": "<div>\n                        <p>\n                            西打<strong>并不需要多米诺的帮助</strong>。他只是在向别人解释问题的过程中，自己发现了答案。\n                        </p>\n                        <p>\n                            这种情况非常常见：我们的大脑在独自思考时会\"跳跃\"，忽略一些看似显而易见的细节。但当我们试图向别人解释时，我们被迫<strong>放慢速度、理清逻辑</strong>，于是那些被忽略的细节就浮出水面了。\n                        </p>\n                        <p>\n                            问题在于：<strong>你打断了别人</strong>。多米诺的工作被中断了，而他其实什么也没做。\n                        </p>\n                    </div>"
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
    "title": "自行车棚效应",
    "englishTitle": "Bike Shedding",
    "summary": "别为了鸡毛蒜皮的小事浪费团队的宝贵时间。",
    "layout": "comparison",
    "visual": "bikeshed-bars",
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
          "tone": "meta"
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
          "tone": "meta"
        }
      ],
      "explanationHtml": "<div>\n                        <p>\n                            <strong>经典案例：</strong>委员会审批核电站计划时，大家因为不懂而迅速通过；但审批员工自行车棚时，却争论不休——因为每个人都\"懂\"自行车棚。\n                        </p>\n                        <p>\n                            这就是<strong>帕金森琐碎定律</strong>：人们倾向于在自己能理解的小事上投入不成比例的时间和精力，而对真正重要（但复杂）的事情一笔带过。\n                        </p>\n                        <ul>\n                            <li>🧠 <strong>认知舒适区：</strong>小事容易理解，发言不会出错</li>\n                            <li>👀 <strong>刷存在感：</strong>大事上不敢说话，小事上可以表现</li>\n                            <li>⚖️ <strong>决策疲劳：</strong>大事太复杂，干脆放弃思考</li>\n                        </ul>\n                    </div>"
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
      "explanationHtml": "<div>\n                        <ul>\n                            <li>📋 <strong>设置时间限制：</strong>为每个议题分配固定时间，小事不超过5分钟</li>\n                            <li>🎯 <strong>区分议题权重：</strong>明确标注\"重要/一般\"，引导大家把精力放在对的地方</li>\n                            <li>📊 <strong>提供有限选项：</strong>不要问\"选什么颜色\"，而是问\"A还是B\"</li>\n                        </ul>\n                        \n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明大家可能正在为了<strong>袋子的颜色</strong>而耽误了<strong>核电站的建设</strong>。\n            </p>\n            <p>概念提出者：C. Northcote Parkinson</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "yak-shaving",
    "order": 11,
    "category": "systems",
    "title": "剪牦牛毛",
    "englishTitle": "Yak Shaving",
    "summary": "别为了煮面条而跑去修车，时刻记得你的初心。",
    "layout": "comparison",
    "visual": "yak-shaving-chain",
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
          "html": "你不是说今天2点来接我吗？人呢？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "2:35 下午",
          "text": "完了... 我到底要干嘛来着？对了，煮面。面呢？葱呢？钥匙呢？！",
          "html": "完了... 我到底要干嘛来着？对了，煮面。面呢？葱呢？钥匙呢？！"
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
      "explanationHtml": "<div>\n                        \n                        <p>\n                            每当你发现自己偏离轨道时，问自己：\n                        </p>\n                        <ul>\n                            <li>❓ 这件事真的是必须的吗？</li>\n                            <li>❓ 我能不能先完成主线任务，再回来处理这个？</li>\n                            <li>❓ 我现在做的事，跟我最初的目标有什么关系？</li>\n                        </ul>\n                        <p>\n                            <strong>实用技巧：</strong>\n                        </p>\n                        <ul>\n                            <li>📝 <strong>写下目标：</strong>在便签上写下\"我现在要做X\"，贴在显眼的地方</li>\n                            <li>⏰ <strong>设置闹钟：</strong>每30分钟检查一次自己是否还在正轨</li>\n                            <li>🚫 <strong>学会说\"稍后\"：</strong>发现有趣的岔路？记下来，之后再探索</li>\n                        </ul>\n                        \n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明你虽然看起来很忙，但似乎已经离<strong>最初的目标</strong>十万八千里了。\n            </p>\n            <p>Source: <a href=\"http://catb.org/jargon/html/Y/yak-shaving.html\">Jargon File</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "hanlons-razor",
    "order": 12,
    "category": "thinking",
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
          "html": "多米诺只是忘带眼镜了，根本没看清是谁。而且他在想晚上吃什么。",
          "tone": "aside"
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
      "explanationHtml": "<div>\n                        <p>\n                            <strong>\"假设善意\"(Assume Good Intent)</strong> 是汉隆剃刀的核心原则：\n                        </p>\n                        <p>\n                            当别人的行为让你不舒服时，先假设他们<strong>不是故意的</strong>。大多数情况下，你会发现真相是：\n                        </p>\n                        <ul>\n                            <li>😴 他们太忙/太累了</li>\n                            <li>🤔 他们没注意到</li>\n                            <li>🙈 他们单纯地犯傻了</li>\n                            <li>📱 他们在玩手机没听到</li>\n                        </ul>\n                        <p>\n                            <strong>当然，如果同样的事情反复发生，那就需要认真谈谈了。但第一次？先假设善意。</strong>\n                        </p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方可能并没有恶意，只是<strong>太忙、太累、或者单纯的犯傻了</strong>。\n            </p>\n            <p>概念提出者：Robert J. Hanlon</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "postels-law",
    "order": 13,
    "category": "communication",
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
          "html": "多米诺只是在开会，随手回了个\"哦\"表示\"收到了一会儿看\"。",
          "tone": "aside"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">文字天生缺失情绪</h3>\n                        <p>\n                            面对面交流时，我们有<strong>70%以上的信息</strong>来自非语言渠道：语调、表情、肢体语言。但在文字聊天中，这些全部消失了。\n                        </p>\n                        <p>\n                            同一句话，不同的人会读出完全不同的情绪：\n                        </p>\n                        <ul>\n                            <li>😐 \"好的\" → 你觉得是冷漠，对方可能只是在忙</li>\n                            <li>😤 \"行吧\" → 你觉得是敷衍，对方可能真的觉得\"行\"</li>\n                            <li>🤔 \"...\" → 你觉得是无语，对方可能只是在思考</li>\n                            <li>😬 \"😊\" → 你觉得是嘲讽，对方可能真的在笑</li>\n                        </ul>\n                    </div>"
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
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">波斯特尔法则</h3>\n                        <p>\n                            互联网先驱 Jon Postel 提出的鲁棒性原则：\n                        </p>\n                        <blockquote style=\"border-left: 4px solid var(--primary); padding-left: 1rem; color: var(--foreground); font-style: italic;\">\n                            \"Be conservative in what you send, be liberal in what you accept.\"<br>\n                            <strong>发送时保守谨慎，接收时宽容大度。</strong>\n                        </blockquote>\n                        <p><strong>发消息时：</strong></p>\n                        <ul>\n                            <li>📝 表达清晰，避免歧义</li>\n                            <li>😊 使用表情符号传递情绪</li>\n                            <li>💬 加上语气词（\"好的～\"而不是\"好的\"）</li>\n                        </ul>\n                        <p><strong>收消息时：</strong></p>\n                        <ul>\n                            <li>🤝 假设对方是善意的</li>\n                            <li>❓ 不确定时直接问清楚</li>\n                            <li>🧘 别脑补太多剧情</li>\n                        </ul>\n                        \n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方可能只是在忙，那个<strong>\"哦\"</strong>真的只是\"收到\"的意思。\n            </p>\n            <p>Named after: Jon Postel (RFC 793)</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "three-strikes",
    "order": 14,
    "category": "communication",
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
          "tone": "meta"
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
          "text": "通话时长 3分钟，问题已解决",
          "html": "通话时长 3分钟，问题已解决",
          "tone": "good"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">三振出局法则</h3>\n                        <p>\n                            <strong>规则很简单：</strong>如果一个问题来回<strong>超过3条消息</strong>还说不清楚，就应该切换到实时沟通。\n                        </p>\n                        <p><strong>实时沟通的优势：</strong></p>\n                        <ul>\n                            <li>🎯 <strong>即时反馈：</strong>可以立刻澄清误解</li>\n                            <li>🗣️ <strong>语调信息：</strong>听到对方的语气，减少误读</li>\n                            <li>⚡ <strong>效率提升：</strong>复杂问题几分钟搞定</li>\n                        </ul>\n                        <p>\n                            <strong>别让键盘成为效率的敌人。该打电话时就打电话。📱</strong>\n                        </p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明来回打字已经说不清楚了，<strong>不如直接打个电话</strong>。\n            </p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "bluf",
    "order": 15,
    "category": "communication",
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
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">军事级沟通效率</h3>\n                        <p>\n                            <strong>BLUF</strong> (Bottom Line Up Front) 是军事和商业沟通中的黄金法则：\n                        </p>\n                        <blockquote style=\"border-left: 4px solid var(--primary); padding-left: 1rem; color: var(--foreground);\">\n                            <strong>先说结论 → 再说原因 → 最后补充细节</strong>\n                        </blockquote>\n                        <p><strong>消息结构模板：</strong></p>\n                        <ol>\n                            <li>📌 <strong>结论/请求：</strong>你要告诉对方的核心信息</li>\n                            <li>🔍 <strong>原因/背景：</strong>为什么会这样（简要）</li>\n                            <li>📎 <strong>细节/附件：</strong>需要的话再补充（可选）</li>\n                        </ol>\n                        <p>\n                            <strong>别写悬疑小说，写结论。</strong>\n                        </p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方可能正在等你<strong>直接说重点</strong>。\n            </p>\n            <p>Source: U.S. Military Communication Protocol</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "sturgeons-law",
    "order": 16,
    "category": "thinking",
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
          "text": "节省了30分钟，内心毫无波动",
          "html": "节省了30分钟，内心毫无波动",
          "tone": "good"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">斯特金定律</h3>\n                        <p>\n                            科幻作家西奥多·斯特金在1957年提出：\n                        </p>\n                        <blockquote style=\"border-left: 4px solid var(--primary); padding-left: 1rem; color: var(--foreground); font-style: italic;\">\n                            \"Ninety percent of everything is crud.\"<br>\n                            <strong>90% 的东西都是垃圾。</strong>\n                        </blockquote>\n                        <p><strong>如何应对：</strong></p>\n                        <ul>\n                            <li>🔍 <strong>质疑来源：</strong>谁说的？有什么资质？</li>\n                            <li>📊 <strong>查找原始数据：</strong>有没有引用可验证的研究？</li>\n                            <li>⏳ <strong>等待共识：</strong>一条信息被多个独立来源确认了吗？</li>\n                            <li>🗑️ <strong>敢于忽略：</strong>大部分内容不值得你的时间</li>\n                        </ul>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方希望你<strong>不要把每条网上的评论都当回事</strong>。\n            </p>\n            <p>提出者：Theodore Sturgeon (1957)</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "greshams-law",
    "order": 17,
    "category": "systems",
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
          "tone": "meta"
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
          "tone": "meta"
        },
        {
          "name": "结果",
          "time": "悲剧",
          "text": "深度作者心灰意冷，转行写标题党了...",
          "html": "深度作者心灰意冷，转行写标题党了...",
          "tone": "bad"
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
          "html": "信息质量提升，焦虑减少，思考深度增加",
          "tone": "good"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">用行动投票</h3>\n                        <p>\n                            算法是根据你的行为来推荐内容的。<strong>你点击什么，就会看到更多什么。</strong>\n                        </p>\n                        <p><strong>你可以做的事：</strong></p>\n                        <ul>\n                            <li>🚫 <strong>不点击标题党：</strong>即使好奇也忍住</li>\n                            <li>⭐ <strong>主动寻找优质来源：</strong>订阅、收藏、书签</li>\n                            <li>💪 <strong>支持好内容：</strong>点赞、评论、付费</li>\n                            <li>📵 <strong>减少刷信息流：</strong>主动搜索取代被动接收</li>\n                        </ul>\n                        <p>每一次点击都是一次投票。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方希望你能<strong>支持优质内容，远离标题党</strong>。\n            </p>\n            <p>原始概念：Thomas Gresham (16世纪经济学家)</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "assume-public",
    "order": 18,
    "category": "systems",
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
          "tone": "meta"
        },
        {
          "character": "tail",
          "name": "尾巴",
          "time": "正式邮件",
          "text": "西打，请到我办公室来一趟。有人举报你在内部沟通中使用不当言论...",
          "html": "西打，请到我办公室来一趟。有人举报你在内部沟通中使用不当言论..."
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "崩溃",
          "text": "完了... 那条消息被截图了...",
          "html": "完了... 那条消息被截图了..."
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
          "html": "避免了一场潜在的职业危机",
          "tone": "good"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">发送前的终极检验</h3>\n                        <p>\n                            在点击发送之前，问自己：\n                        </p>\n                        <blockquote style=\"border-left: 4px solid var(--primary); padding-left: 1rem; color: var(--foreground); font-style: italic;\">\n                            \"如果这条消息被贴到公司公告栏 / 发到我妈的微信群 / 上了热搜...<br>\n                            <strong>我会后悔吗？</strong>\"\n                        </blockquote>\n                        <ul>\n                            <li>😤 <strong>情绪激动时：</strong>写完存草稿，第二天再决定</li>\n                            <li>🗣️ <strong>敏感话题：</strong>线下说，别留痕迹</li>\n                            <li>🔐 <strong>私密信息：</strong>根本不应该通过网络传输</li>\n                        </ul>\n                        \n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方希望你<strong>在发送之前再想一想</strong>。\n            </p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "echo-chamber",
    "order": 19,
    "category": "systems",
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
          "html": "世界观更加立体，讨论问题时更加理性",
          "tone": "good"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">突破信息茧房</h3>\n                        <p>\n                            <strong>警惕信号：</strong>\n                        </p>\n                        <ul>\n                            <li>🚩 你很久没看到反对观点了</li>\n                            <li>🚩 你觉得\"所有人\"都这么想</li>\n                            <li>🚩 持不同观点的人在你眼里都是\"蠢货\"</li>\n                        </ul>\n                        <ul>\n                            <li>🔍 <strong>主动搜索反面观点：</strong>别等算法喂给你</li>\n                            <li>👥 <strong>接触不同圈子的人：</strong>线下比线上更容易</li>\n                            <li>📰 <strong>关注多元信息源：</strong>不同立场的媒体都看看</li>\n                        </ul>\n                        \n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方希望你<strong>跳出自己的信息泡泡</strong>，听听不同的声音。\n            </p>\n            <p>概念提出者：Eli Pariser (《The Filter Bubble》作者)</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "online-disinhibition",
    "order": 20,
    "category": "systems",
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
          "tone": "meta"
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
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">屏幕背后的\"勇气\"</h3>\n                        <p>\n                            心理学家 John Suler 发现，人们在网上会做出现实中绝不会做的事。这被称为<strong>\"在线解除抑制效应\"</strong>。\n                        </p>\n                        <p>\n                            <strong>六大原因：</strong>\n                        </p>\n                        <ul>\n                            <li>🎭 <strong>匿名性：</strong>\"他们不知道我是谁\"</li>\n                            <li>👻 <strong>隐身性：</strong>看不到对方的表情</li>\n                            <li>⏳ <strong>异步性：</strong>不用立刻面对反应</li>\n                            <li>🧠 <strong>想象力：</strong>把对方想象成非人类</li>\n                            <li>🎮 <strong>游戏感：</strong>觉得网络不是\"真实\"的</li>\n                            <li>⚖️ <strong>平等感：</strong>在网上谁都可以挑战权威</li>\n                        </ul>\n                    </div>"
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
          "html": "讨论继续，双方都学到了新东西",
          "tone": "good"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">发送前的自检</h3>\n                        <p>\n                            在点击发送之前，问自己：\n                        </p>\n                        <blockquote style=\"border-left: 4px solid var(--primary); padding-left: 1rem; color: var(--foreground); font-style: italic;\">\n                            \"如果这个人就站在我面前，<br>\n                            <strong>我会当面这么说吗？</strong>\"\n                        </blockquote>\n                        <ul>\n                            <li>👤 <strong>想象对方是真人：</strong>有家人、有感受、有故事</li>\n                            <li>⏰ <strong>等待冷却：</strong>生气时写完先存着，10分钟后再发</li>\n                            <li>📖 <strong>对事不对人：</strong>批评观点可以，攻击人格不行</li>\n                        </ul>\n                        \n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方希望你<strong>在发言之前想象一下当面说会怎样</strong>。\n            </p>\n            <p>提出者：John Suler (《The Psychology of Cyberspace》)</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "dunning-kruger",
    "order": 21,
    "category": "thinking",
    "title": "邓宁-克鲁格效应",
    "englishTitle": "Dunning-Kruger",
    "summary": "越无知越自信，越专业越谦虚。别和杠精争论。",
    "layout": "comparison",
    "visual": "dunning-kruger-curve",
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
          "html": "能力越差的人，越高估自己；能力越强的人，越低估自己。",
          "tone": "aside"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">为什么网上杠精那么多</h3>\n                        <p>邓宁和克鲁格发现：能力越差的人越容易高估自己，能力越强的人越容易低估自己。</p>\n                        <p>所以最响的声音常常最不靠谱——不懂的人不知道自己不懂，懂的人知道这件事有多复杂。</p>\n                    </div>"
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
          "html": "谦虚的态度让西打获得了真正有价值的反馈",
          "tone": "good"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">如何应对</h3>\n                        <p><strong>对自己：</strong></p>\n                        <ul>\n                            <li>🪞 <strong>警惕过度自信：</strong>越觉得自己懂，越要警惕</li>\n                            <li>🙏 <strong>承认无知：</strong>\"我不知道\"是最有智慧的话之一</li>\n                        </ul>\n                        <p><strong>对他人：</strong></p>\n                        <ul>\n                            <li>🔇 <strong>少和杠精争论：</strong>他们不知道自己不知道</li>\n                            <li>👀 <strong>关注沉默的专家：</strong>最懂的人往往话最少</li>\n                            <li>📊 <strong>验证来源：</strong>别被自信的语气忽悠了</li>\n                        </ul>\n                        <blockquote style=\"border-left: 4px solid var(--primary); padding-left: 1rem; color: var(--foreground); font-style: italic;\">\n                            \"The more you know, the more you realize you don't know.\"<br>\n                            <strong>— 亚里士多德（据传）</strong>\n                        </blockquote>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方希望你<strong>在发表强烈观点之前，先确认自己真的懂</strong>。\n            </p>\n            <p>提出者：David Dunning &amp; Justin Kruger (1999)</p>\n            <p>\n                本站点内容由 <a href=\"/\">互联网沟通指北</a> 提供。\n            </p>"
  },
  {
    "slug": "tldr",
    "order": 22,
    "category": "communication",
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
          "html": "重要信息被埋没在文字海洋里，无人响应。",
          "tone": "bad"
        }
      ],
      "explanationHtml": "<div>\n                        <ul>\n                            <li>😴 <strong>读者疲劳：</strong>大多数人根本不会读完</li>\n                            <li>🎯 <strong>重点丢失：</strong>关键信息被淹没</li>\n                            <li>🔕 <strong>无人响应：</strong>最终被忽略</li>\n                        </ul>\n                        <p><strong>TL;DR</strong> 原本是读者的抱怨，现在已成为写作者的责任。</p>\n                    </div>"
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
          "html": "RTFM! 文档里写得清清楚楚！",
          "tone": "bad"
        }
      ],
      "explanationHtml": "<div>\n                        <p><strong>RTFM</strong> = \"Read The F***ing Manual\"，读那该死的手册。</p>\n                        <p>手册里没写的，就轮到 <a href=\"/stfw/\">STFW</a> 了：先去搜。</p>\n                        <ul>\n                            <li>📚 <strong>文档存在的意义：</strong>作者花时间写文档，就是为了回答常见问题</li>\n                            <li>⏰ <strong>尊重他人时间：</strong>别人不是你的私人助教</li>\n                            <li>🔄 <strong>重复问题：</strong>这些问题已被问过无数次</li>\n                        </ul>\n                    </div>"
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
          "html": "兄弟，你SSL证书过期了。",
          "tone": "aside"
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
      "explanationHtml": "<div>\n                        <p><strong>奥卡姆剃刀的实践应用：</strong></p>\n                        <ul>\n                            <li>🔧 <strong>Debug：</strong>先检查最常见的错误（typo、配置、重启）</li>\n                            <li>📧 <strong>沟通：</strong>对方没回复？可能只是忙</li>\n                            <li>🏥 <strong>医学：</strong>\"听到蹄声先想马，不要想斑马\"</li>\n                        </ul>\n                        \n                    </div>"
    },
    "footerHtml": "<p>如果你看到这个链接，说明对方希望<strong>你能从最简单的可能性开始考虑</strong>。</p>\n            <p>概念提出者：William of Ockham，约1287–1347</p>\n            <p><a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025</p>"
  },
  {
    "slug": "hitchens-razor",
    "order": 25,
    "category": "thinking",
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
          "html": "提出主张的人有责任提供证据，而不是要求别人证明其不存在。",
          "tone": "bad"
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
      "explanationHtml": "<div>\n                        <p><strong>如何运用希钦斯剃刀：</strong></p>\n                        <ul>\n                            <li>🎯 <strong>提出主张时：</strong>附上证据</li>\n                            <li>🛡️ <strong>面对指控时：</strong>礼貌地要求对方提供证据</li>\n                            <li>🚮 <strong>无证据时：</strong>直接无视，不必浪费精力反驳</li>\n                        </ul>\n                        \n                    </div>"
    },
    "footerHtml": "<p>如果你看到这个链接，说明对方希望<strong>你能提供证据支持观点</strong>。</p>\n            <p>概念提出者：Christopher Hitchens，1949–2011</p>\n            <p><a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025</p>"
  },
  {
    "slug": "poes-law",
    "order": 26,
    "category": "systems",
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
          "html": "没有表情或 /s 标记，讽刺和极端观点完全无法区分。",
          "tone": "aside"
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
      "explanationHtml": "<div>\n                        <p><strong>如何避免波定律：</strong></p>\n                        <ul>\n                            <li>😂 使用表情符号表明语气</li>\n                            <li>📝 使用 <code>/s</code> 标记讽刺</li>\n                            <li>🐶 加个狗头保命</li>\n                            <li>🤔 不确定时先问清楚</li>\n                        </ul>\n                    </div>"
    },
    "footerHtml": "<p>如果你看到这个链接，说明对方希望<strong>提醒你：你的话可能被误解了</strong>。</p>\n            <p>概念提出者：Nathan Poe，2005</p>\n            <p><a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025</p>"
  },
  {
    "slug": "brandolinis-law",
    "order": 27,
    "category": "systems",
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
          "html": "谣言10万+，辟谣文阅读量：203",
          "tone": "bad"
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
      "explanationHtml": "<div>\n                        <p><strong>面对胡说八道的策略：</strong></p>\n                        <ul>\n                            <li>❓ <strong>要求来源：</strong>让对方先自证</li>\n                            <li>🚫 <strong>不喂流量：</strong>别帮谣言传播</li>\n                            <li>🎯 <strong>挑选战场：</strong>不是每个都值得反驳</li>\n                            <li>🔗 <strong>复用资源：</strong>引用已有的辟谣</li>\n                        </ul>\n                    </div>"
    },
    "footerHtml": "<p>如果你看到这个链接，说明对方在提醒你<strong>不要浪费精力反驳低质量言论</strong>。</p>\n            <p>概念提出者：Alberto Brandolini，2013</p>\n            <p><a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025</p>"
  },
  {
    "slug": "stfw",
    "order": 28,
    "category": "communication",
    "title": "善用搜索",
    "englishTitle": "STFW",
    "summary": "遇事不决，先问谷歌。必应也是你的好朋友。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "善用搜索",
      "subtitleHtml": "Search The F***ing Web",
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
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">搜索引擎比人更耐心</h3>\n                        <p>\n                            互联网上 90% 的基础问题都已经有了现成的答案。当你问一个直接能搜到的问题时，你在浪费两个人的时间：你的（等待回复）和对方的（打字回复）。\n                        </p>\n                        <p>\n                            <strong>STFW</strong> 是 <a href=\"/rtfm/\"><strong>RTFM</strong></a>（Read The F***ing Manual）的年轻亲戚：一个查网页，一个翻手册，都是让你先自己动手。这不仅是礼貌，更是效率。\n                        </p>\n                    </div>"
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
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">廉价的求救</h3>\n                        <p>\n                            \"紧急\"、\"跪求\"、\"救命\" 这些词在技术社区里是噪音。当你在标题里大喊大叫时，你传达的信息是：<strong>我认为我的时间比你的时间更值钱</strong>。\n                        </p>\n                        <p>\n                            描述清楚的问题，更容易被回答。\n                        </p>\n                    </div>"
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
  },
  {
    "slug": "principle-of-charity",
    "order": 31,
    "category": "communication",
    "title": "善意原则",
    "englishTitle": "Principle of Charity",
    "summary": "先按最讲得通的方式理解对方，再决定要不要反驳。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "善意原则",
      "subtitleHtml": "Principle of Charity",
      "leadHtml": "读到一句让你上火的话时，先假设对方不是傻子。<br>\n                    大多数时候，这个假设是对的。"
    },
    "bad": {
      "titleHtml": "❌ 先假定对方蠢",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "14:02",
          "text": "他说「这个方案还能再优化」，意思就是我做得很烂呗。",
          "html": "他说「这个方案还能再优化」，意思就是我做得很烂呗。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "14:04",
          "text": "他原话是这么说的？",
          "html": "他原话是这么说的？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "14:04",
          "text": "差不多，反正就是挑刺。",
          "html": "差不多，反正就是挑刺。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "14:05",
          "text": "「还能再优化」也可能是指方向对、细节还能改。你先按最坏的意思理解了。",
          "html": "「还能再优化」也可能是指方向对、细节还能改。你先按最坏的意思理解了。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">默认解释权</h3>\n                        <p>同一句话可以有很多种读法。屏幕后面看不见表情、听不见语气，人天然会往最坏的方向补全。</p>\n                        <p>善意原则不是让你当老好人，是让你在反驳之前，先把对方的话还原成一个「正常人会说的话」。还原不了，再问一句。</p>\n                        <blockquote style=\"border-left: 4px solid var(--primary); padding-left: 1rem;\">“在把对方判成傻子之前，先试着让他的话成立一次。”</blockquote>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 先补全，再回应",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "14:02",
          "text": "他说方案还能优化，我不太确定是指方向还是细节。",
          "html": "他说方案还能优化，我不太确定是指方向还是细节。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "14:03",
          "text": "直接问呗：你指的是结构还是措辞？",
          "html": "直接问呗：你指的是结构还是措辞？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "14:06",
          "text": "问了，他说是措辞。我白气一场。",
          "html": "问了，他说是措辞。我白气一场。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">一句话的成本</h3>\n                        <p>把「他什么意思」换成「你指的是哪一块」，成本是一句话，收益是不用在心里演三集电视剧。</p>\n                        <p>善意原则真正省下的，是你自己的情绪开销。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人希望你先别急着把话往坏处读。</p>\n            <p>Source: <a href=\"https://en.wikipedia.org/wiki/Principle_of_charity\">Wikipedia · Principle of charity</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "grice-maxims",
    "order": 32,
    "category": "communication",
    "title": "格莱斯准则",
    "englishTitle": "Grice's Maxims",
    "summary": "说话四条：够量、真实、相关、清楚。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "格莱斯准则",
      "subtitleHtml": "Grice's Maxims",
      "leadHtml": "沟通不是文学创作。<br>\n                    对方需要的是信息，不是你的修辞。"
    },
    "bad": {
      "titleHtml": "❌ 四条全踩",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:12",
          "text": "关于昨天那个事，我这边有一些不太成熟的想法，可能也不一定对，就是随便说说，你要是有空我们可以找个时间聊一下，当然你不方便也没关系。",
          "html": "关于昨天那个事，我这边有一些不太成熟的想法，可能也不一定对，就是随便说说，你要是有空我们可以找个时间聊一下，当然你不方便也没关系。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:13",
          "text": "……所以是什么事？",
          "html": "……所以是什么事？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:13",
          "text": "就是那个报价。",
          "html": "就是那个报价。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:14",
          "text": "报价怎么了？",
          "html": "报价怎么了？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:14",
          "text": "哦，我还没算。",
          "html": "哦，我还没算。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">四条准则</h3>\n                        <ul>\n                            <li>量：该说的说完，别挤牙膏。</li>\n                            <li>质：不确定的标出来，别混着说。</li>\n                            <li>关系：别答非所问。</li>\n                            <li>方式：别绕，别用三个从句说一个词。</li>\n                        </ul>\n                        <p>格莱斯（H. P. Grice）把「合作对话」拆成这四条。它们不是礼貌规范，是让对话能继续下去的最低条件。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 三句话说完",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:12",
          "text": "报价我还没算完，缺两个人的工时。今天下班前给你，可以吗？",
          "html": "报价我还没算完，缺两个人的工时。今天下班前给你，可以吗？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:13",
          "text": "可以。缺谁的我这有。",
          "html": "可以。缺谁的我这有。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:13",
          "text": "那就齐了，谢谢。",
          "html": "那就齐了，谢谢。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">省下的是对方的理解成本</h3>\n                        <p>「不太成熟的想法」「随便说说」这类前缀，看起来是谦虚，实际是把不确定性转嫁给对方。</p>\n                        <p>真有不确定，就说不确定在哪一段。对方要的是坐标，不是氛围。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明你的消息里信息太少、修辞太多。</p>\n            <p>Source: <a href=\"https://en.wikipedia.org/wiki/Cooperative_principle\">Wikipedia · Cooperative principle</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "context-collapse",
    "order": 33,
    "category": "communication",
    "title": "语境崩塌",
    "englishTitle": "Context Collapse",
    "summary": "私聊的话进了群，意思就变了。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "语境崩塌",
      "subtitleHtml": "Context Collapse",
      "leadHtml": "同一句话，在两个人的对话框里和在五百人的群里，<br>\n                    是两句不同的话。"
    },
    "bad": {
      "titleHtml": "❌ 一键转发",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "21:30",
          "text": "（把和尾巴的私聊截图发到群里）",
          "html": "<span style=\"opacity:.75\">[图片：与尾巴的聊天记录]</span>"
        },
        {
          "character": "bot327",
          "name": "群友",
          "time": "21:31",
          "text": "哈哈哈哈原来你是这么想的",
          "html": "哈哈哈哈原来你是这么想的"
        },
        {
          "character": "tail",
          "name": "尾巴",
          "time": "21:32",
          "text": "……那段是我跟你私下说的。",
          "html": "……那段是我跟你私下说的。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "21:32",
          "text": "我就发个乐子。",
          "html": "我就发个乐子。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">受众变了，话就变了</h3>\n                        <p>语境崩塌（context collapse）说的是：原本只对一小群人说的话，被放到另一群人面前，听话的人变了，含义也跟着变。</p>\n                        <p>截图尤其危险。它连语气、前后文、你当时的状态一起切掉，只留下最容易被误读的那一段。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 发之前问一句",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "21:28",
          "text": "这段对话挺有意思，我能发群里吗？",
          "html": "这段对话挺有意思，我能发群里吗？"
        },
        {
          "character": "tail",
          "name": "尾巴",
          "time": "21:29",
          "text": "别发原话，你可以说「有人吐槽过这个」，别带我名字。",
          "html": "别发原话，你可以说「有人吐槽过这个」，别带我名字。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "21:30",
          "text": "行，那我改一下。",
          "html": "行，那我改一下。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">转发前的三秒</h3>\n                        <p>问一句、去掉名字、去掉能定位到人的细节——三步做完再发，基本不会出事。</p>\n                        <p>私聊的默认设置是私密，不是素材库。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人提醒你：这段话的听众变了。</p>\n            <p>Source: <a href=\"https://en.wikipedia.org/wiki/Context_collapse\">Wikipedia · Context collapse</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "medium-is-the-message",
    "order": 34,
    "category": "communication",
    "title": "媒介即讯息",
    "englishTitle": "The Medium Is the Message",
    "summary": "用语音、文字还是电话，本身就在说话。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "媒介即讯息",
      "subtitleHtml": "The Medium Is the Message",
      "leadHtml": "你选择怎么发，<br>\n                    和你发了什么一样重要。"
    },
    "bad": {
      "titleHtml": "❌ 用最省事的方式",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "15:20",
          "text": "（60 秒语音）",
          "html": "<span style=\"opacity:.75\">[语音 60″]</span>"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "15:20",
          "text": "（58 秒语音）",
          "html": "<span style=\"opacity:.75\">[语音 58″]</span>"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "15:21",
          "text": "（60 秒语音）",
          "html": "<span style=\"opacity:.75\">[语音 60″]</span>"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "15:24",
          "text": "我在开会，能不能打字。",
          "html": "我在开会，能不能打字。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "15:24",
          "text": "打字太慢了。",
          "html": "打字太慢了。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">方便留给了谁</h3>\n                        <p>放到群聊里，它的意思很朴素：媒介本身在传递态度。</p>\n                        <p>发语音，是把整理信息的成本留给自己、把收听的负担丢给对方。公放不方便、听不清要重听、没法搜索——这些都不是发送者承担。</p>\n                        <blockquote style=\"border-left: 4px solid var(--primary); padding-left: 1rem;\">“语音不是更快，只是对你更快。”</blockquote>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 按对方的场景选",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "15:20",
          "text": "方便语音吗？大概两分钟，讲报价的事。",
          "html": "方便语音吗？大概两分钟，讲报价的事。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "15:21",
          "text": "在开会，打字吧。",
          "html": "在开会，打字吧。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "15:22",
          "text": "行，我列成三条发你。",
          "html": "行，我列成三条发你。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">先问一句介质</h3>\n                        <p>紧急的事打电话，复杂的事发文字，需要反复确认的事发文档。选错介质，内容再好也传不到。</p>\n                        <p>如果必须发语音，先问一句「方便听吗」，成本两秒。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明你选的那个发送方式，给对方添了活。</p>\n            <p>Source: <a href=\"https://en.wikipedia.org/wiki/The_medium_is_the_message\">Wikipedia · The medium is the message</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "no-is-a-complete-sentence",
    "order": 35,
    "category": "communication",
    "title": "拒绝不需要理由",
    "englishTitle": "No Is a Complete Sentence",
    "summary": "「不」就是完整的回答。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "拒绝不需要理由",
      "subtitleHtml": "No Is a Complete Sentence",
      "leadHtml": "不想去、不想帮、不想借，<br>\n                    都可以直接说不。"
    },
    "bad": {
      "titleHtml": "❌ 编一个理由",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "19:40",
          "text": "周末来帮忙搬个家呗？",
          "html": "周末来帮忙搬个家呗？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "19:42",
          "text": "这周有点忙，可能……要看情况，也不一定，我到时候再说？",
          "html": "这周有点忙，可能……要看情况，也不一定，我到时候再说？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "19:42",
          "text": "那我算你来了啊。",
          "html": "那我算你来了啊。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "19:43",
          "text": "……",
          "html": "……"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">模糊的拒绝会被当成同意</h3>\n                        <p>「看情况」「再说吧」在对方听来常常等于「有机会」。你以为留了余地，对方收到的是希望。</p>\n                        <p>编理由还有个副作用：对方会帮你解决那个理由。「忙？那我换个时间。」于是你还得再编一个。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 直接说不",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "19:40",
          "text": "周末来帮忙搬个家呗？",
          "html": "周末来帮忙搬个家呗？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "19:41",
          "text": "这周不去了，我想歇一天。",
          "html": "这周不去了，我想歇一天。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "19:41",
          "text": "行，那下次。",
          "html": "行，那下次。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">不解释，也不亏欠</h3>\n                        <p>拒绝不需要罪行陈述。给出一个明确的「不」，比给一个随时会被推翻的理由更尊重对方。</p>\n                        <p>如果关系够近，可以补一句你能做什么：「这周不行，下周三可以帮你拉一趟。」做不到就别补。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人希望你别再用「再看吧」拖着。</p>\n            <p>Source: Gavin de Becker《The Gift of Fear》</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "reply-all",
    "order": 36,
    "category": "communication",
    "title": "别回复全部",
    "englishTitle": "Reply All",
    "summary": "收件人列表不是观众席。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "别回复全部",
      "subtitleHtml": "Reply All",
      "leadHtml": "一封抄送了三十人的邮件，<br>\n                    不需要三十一句「收到」。",
      "effect": "reply-all-echo",
    },
    "bad": {
      "titleHtml": "❌ 全员收到",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "09:02",
          "text": "（回复全部）收到，谢谢！",
          "html": "（回复全部）收到，谢谢！"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "09:03",
          "text": "（回复全部）好的，收到。",
          "html": "（回复全部）好的，收到。"
        },
        {
          "character": "tail",
          "name": "尾巴",
          "time": "09:04",
          "text": "（回复全部）收到。",
          "html": "（回复全部）收到。"
        },
        {
          "character": "bot327",
          "name": "群友",
          "time": "09:04",
          "text": "（回复全部）我也收到了。",
          "html": "（回复全部）我也收到了。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">每个人都在替所有人付成本</h3>\n                        <p>一次「回复全部」，是给列表里每个人多一条通知。三十人的列表，一轮寒暄就是三十条。</p>\n                        <p>更糟的是，真正需要看到的信息会被淹掉。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 只回该回的人",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "09:02",
          "text": "（只回发件人）收到，周四前给你初稿。",
          "html": "（只回发件人）收到，周四前给你初稿。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "09:03",
          "text": "（只在原邮件里补充）工时我更新在附件第三页了。",
          "html": "（只在原邮件里补充）工时我更新在附件第三页了。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">两个按钮的区别</h3>\n                        <p>「回复」是给发件人的，「回复全部」是给所有人的。发之前看一眼收件人栏，多花一秒。</p>\n                        <p>需要让所有人知道的进展，改原文档或发一条汇总，而不是让三十个人各自回一句。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明那封邮件里已经有太多「收到」了。</p>\n            <p>Source: <a href=\"https://www.rfc-editor.org/rfc/rfc1855\">RFC 1855 · Netiquette Guidelines</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "one-message",
    "order": 37,
    "category": "communication",
    "title": "一条说完",
    "englishTitle": "One Message, Please",
    "summary": "把一句话拆成十条，是让别人等你连载。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "一条说完",
      "subtitleHtml": "One Message, Please",
      "leadHtml": "聊天框不是弹幕。<br>\n                    一句话能说完的，别发七条。"
    },
    "bad": {
      "titleHtml": "❌ 连载式发言",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "11:02",
          "text": "在吗",
          "html": "在吗"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "11:02",
          "text": "有个事",
          "html": "有个事"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "11:03",
          "text": "就是那个",
          "html": "就是那个"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "11:03",
          "text": "算了",
          "html": "算了"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "11:04",
          "text": "其实也没什么",
          "html": "其实也没什么"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "11:05",
          "text": "……你一次说完。",
          "html": "……你一次说完。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">通知也是打扰</h3>\n                        <p>每条消息都是一次提醒。七条消息，就是七次打断对方正在做的事。</p>\n                        <p>而且连载式发言会把一句话的意思拆散，对方要等你发完才能判断这事急不急。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 一条打包",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "11:02",
          "text": "有个事想确认：周五的场地我们几点到？我这边要订车，今天得定。",
          "html": "有个事想确认：周五的场地我们几点到？我这边要订车，今天得定。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "11:03",
          "text": "两点，我先到。",
          "html": "两点，我先到。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "11:03",
          "text": "好，那我订一点半的。",
          "html": "好，那我订一点半的。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">先想完，再发</h3>\n                        <p>发之前在心里过一遍：对方要回什么、需要哪些信息、急不急。三样齐了，一条发完。</p>\n                        <p>真需要分开发的长内容，用序号标出来，让对方知道还有几条。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明你刚才发了六条只有标点没有信息的话。</p>\n            <p>Source: <a href=\"https://www.rfc-editor.org/rfc/rfc1855\">RFC 1855 · Netiquette Guidelines</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "lurk-moar",
    "order": 38,
    "category": "communication",
    "title": "先潜水，再发言",
    "englishTitle": "Lurk Moar",
    "summary": "进新群先看三天，比自我介绍有用。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "先潜水，再发言",
      "subtitleHtml": "Lurk Moar",
      "leadHtml": "每个群都有自己的规矩，<br>\n                    而规矩从来不写在群公告里。"
    },
    "bad": {
      "titleHtml": "❌ 进来就开麦",
      "lines": [
        {
          "character": "bot327",
          "name": "群友",
          "time": "10:01",
          "text": "（新成员）大家好，我这有个项目想推一下，扫码进群领资料。",
          "html": "<span style=\"opacity:.75\">[图片：二维码海报]</span>"
        },
        {
          "character": "tail",
          "name": "尾巴",
          "time": "10:02",
          "text": "……这是咖啡车的老客群。",
          "html": "……这是咖啡车的老客群。"
        },
        {
          "character": "bot327",
          "name": "群友",
          "time": "10:02",
          "text": "一样的一样的，都是人脉。",
          "html": "一样的一样的，都是人脉。"
        },
        {
          "name": "系统提示",
          "time": "10:03",
          "text": "「群友」已被移出群聊",
          "html": "「群友」已被移出群聊"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">先读空气，再说话</h3>\n                        <p>「Lurk moar」是早期论坛的黑话：先潜水，多看，别急着发言。它不是歧视新人，是让新人先拿到这个群的上下文。</p>\n                        <p>群的规模、关系、话题边界、玩笑尺度，都藏在历史消息里。跳过这一步，你说的每句话都可能踩在别人脚上。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 先看，再开口",
      "lines": [
        {
          "character": "bot327",
          "name": "群友",
          "time": "10:01",
          "text": "前两天看大家在聊豆子，我常去城南那家烘得偏深，不知道是不是一个路子。",
          "html": "前两天看大家在聊豆子，我常去城南那家烘得偏深，不知道是不是一个路子。"
        },
        {
          "character": "tail",
          "name": "尾巴",
          "time": "10:03",
          "text": "那家我也去过，深烘做得稳。",
          "html": "那家我也去过，深烘做得稳。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:04",
          "text": "欢迎，正好缺个喝深烘的。",
          "html": "欢迎，正好缺个喝深烘的。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">潜水不是消失</h3>\n                        <p>看三天，找到这个群在聊什么、谁在说话、什么话有人接。然后用一个具体的话题进场，比十行自我介绍有用。</p>\n                        <p>这条对老成员也成立：换了个群，就重新潜一次。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人建议你先看看别人怎么说话。</p>\n            <p>Source: <a href=\"https://knowyourmeme.com/memes/lurk-moar\">Know Your Meme · Lurk Moar</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "chestertons-fence",
    "order": 39,
    "category": "thinking",
    "title": "切斯特顿栅栏",
    "englishTitle": "Chesterton's Fence",
    "summary": "看不懂为什么有这道栅栏，先别拆。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "切斯特顿栅栏",
      "subtitleHtml": "Chesterton's Fence",
      "leadHtml": "遇到一条莫名其妙的规矩时，<br>\n                    先假设它是为某个你没看见的问题存在的。"
    },
    "bad": {
      "titleHtml": "❌ 先删了再说",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "09:40",
          "text": "这个审批流程太蠢了，三步呢，我直接跳过了。",
          "html": "这个审批流程太蠢了，三步呢，我直接跳过了。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "09:42",
          "text": "你知道这三步分别在拦什么吗？",
          "html": "你知道这三步分别在拦什么吗？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "09:42",
          "text": "不知道，但看起来很冗余。",
          "html": "不知道，但看起来很冗余。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "09:44",
          "text": "第三步是财务复核。上个月刚有人跳过，多付了八千。",
          "html": "第三步是财务复核。上个月刚有人跳过，多付了八千。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">先理解，再改革</h3>\n                        <p>切斯特顿的原话大意是：看到路上有一道栅栏，如果你不知道为什么有它，就别急着拆。等你弄明白它拦的是什么，再决定拆不拆。</p>\n                        <p>很多「冗余」的规则，是用一次事故换来的。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 先问它拦什么",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "09:40",
          "text": "这个流程三步，我想砍掉第二步，先确认一下它在拦什么。",
          "html": "这个流程三步，我想砍掉第二步，先确认一下它在拦什么。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "09:42",
          "text": "第二步在拦重复付款，去年出过两次。",
          "html": "第二步在拦重复付款，去年出过两次。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "09:44",
          "text": "那留着，我把第一步和第三步合并。",
          "html": "那留着，我把第一步和第三步合并。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">改革的前提是解释得清</h3>\n                        <p>能说清「它防的是什么、现在还需不需要」，才有资格动它。</p>\n                        <p>说不清就别拆。这不是保守，是不拿别人的事故当自己的学费。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明你想拆的东西，别人还靠它挡着事。</p>\n            <p>Source: <a href=\"https://en.wikipedia.org/wiki/Wikipedia:Chesterton%27s_fence\">Wikipedia · Chesterton's fence</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "fundamental-attribution-error",
    "order": 40,
    "category": "thinking",
    "title": "基本归因错误",
    "englishTitle": "Fundamental Attribution Error",
    "summary": "他迟到是人品，我迟到是堵车。",
    "layout": "comparison",
    "visual": "attribution-grid",
    "hero": {
      "titleHtml": "基本归因错误",
      "subtitleHtml": "Fundamental Attribution Error",
      "leadHtml": "别人出错，你怪他这个人；<br>\n                    自己出错，你怪当时的情况。"
    },
    "bad": {
      "titleHtml": "❌ 直接判人品",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:12",
          "text": "他又迟到了，这人就是不靠谱。",
          "html": "他又迟到了，这人就是不靠谱。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:13",
          "text": "他上次迟到是什么原因？",
          "html": "他上次迟到是什么原因？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:13",
          "text": "不知道，反正经常迟。",
          "html": "不知道，反正经常迟。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:14",
          "text": "你上周迟到那次，是因为地铁故障吧。",
          "html": "你上周迟到那次，是因为地铁故障吧。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:14",
          "text": "那不一样。",
          "html": "那不一样。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">两套解释系统</h3>\n                        <p>解释别人的行为，我们倾向归因于人品；解释自己的，倾向归因于环境。这就是基本归因错误。</p>\n                        <p>它有个副作用：一旦把人判成「不靠谱」，后面他做什么你都会往这个方向看。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 先问情况",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:12",
          "text": "他又迟到了，是不是路上出什么事了？",
          "html": "他又迟到了，是不是路上出什么事了？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:13",
          "text": "刚问了，孩子学校临时开会。",
          "html": "刚问了，孩子学校临时开会。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:14",
          "text": "那没事，我把开始时间往后挪十分钟。",
          "html": "那没事，我把开始时间往后挪十分钟。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">换成环境解释，一次就好</h3>\n                        <p>不需要你变得宽容，只需要在判人品之前，先问一句「他遇到什么了」。</p>\n                        <p>大多数时候，答案是堵车、孩子、身体不舒服——和你自己迟到时的理由差不多。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人觉得你把人看得太坏了。</p>\n            <p>Source: <a href=\"https://en.wikipedia.org/wiki/Fundamental_attribution_error\">Wikipedia · Fundamental attribution error</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "confirmation-bias",
    "order": 41,
    "category": "thinking",
    "title": "确认偏误",
    "englishTitle": "Confirmation Bias",
    "summary": "你搜的不是答案，是证据。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "确认偏误",
      "subtitleHtml": "Confirmation Bias",
      "leadHtml": "一旦有了结论，<br>\n                    你就会只找支持它的东西。"
    },
    "bad": {
      "titleHtml": "❌ 只搜支持自己的",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "16:20",
          "text": "我查了，这家店确实不行，差评一堆。",
          "html": "我查了，这家店确实不行，差评一堆。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "16:21",
          "text": "你怎么查的？",
          "html": "你怎么查的？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "16:21",
          "text": "搜「某某店 差评」。",
          "html": "搜「某某店 差评」。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "16:22",
          "text": "……你搜「某某店 好评」试试。",
          "html": "……你搜「某某店 好评」试试。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">搜索词就是结论</h3>\n                        <p>搜索框里加上「差评」两个字，你就已经排除了另一半世界。这不是查证，是找队友。</p>\n                        <p>确认偏误最难察觉的地方在于：你确实查了，也确实看到了证据，只是你只看了想要的那一半。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 两边都搜",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "16:20",
          "text": "我搜了这家店的差评和好评，差评集中在等位，好评集中在出品。",
          "html": "我搜了这家店的差评和好评，差评集中在等位，好评集中在出品。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "16:21",
          "text": "那看你能不能接受等位。",
          "html": "那看你能不能接受等位。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "16:22",
          "text": "能，那我订了。",
          "html": "能，那我订了。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">主动找反例</h3>\n                        <p>一个简单的自检：如果搜出来的全是支持你的，那说明你搜错了。</p>\n                        <p>更好的做法是先写结论，再去找能推翻它的证据。找不到，才算站得住。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明你的证据只有一半。</p>\n            <p>Source: <a href=\"https://en.wikipedia.org/wiki/Confirmation_bias\">Wikipedia · Confirmation bias</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "survivorship-bias",
    "order": 42,
    "category": "thinking",
    "title": "幸存者偏差",
    "englishTitle": "Survivorship Bias",
    "summary": "你只看见活下来的那些。",
    "layout": "comparison",
    "visual": "survivorship-funnel",
    "hero": {
      "titleHtml": "幸存者偏差",
      "subtitleHtml": "Survivorship Bias",
      "leadHtml": "成功者写的经验，<br>\n                    失败者没机会反驳。"
    },
    "bad": {
      "titleHtml": "❌ 只看成功的",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "20:10",
          "text": "我看了十个做到百万粉的账号，都是日更，所以日更就能起来。",
          "html": "我看了十个做到百万粉的账号，都是日更，所以日更就能起来。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "20:11",
          "text": "日更但没起来的，你看了几个？",
          "html": "日更但没起来的，你看了几个？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "20:11",
          "text": "……没看，也搜不到。",
          "html": "……没看，也搜不到。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">看不见的样本</h3>\n                        <p>二战时统计飞机弹孔，一度建议加固弹孔最密的地方——直到有人指出，那些是飞回来的飞机，被打中要害的根本没回来。</p>\n                        <p>互联网上的成功学，几乎全是飞回来的飞机。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 先找分母",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "20:10",
          "text": "我找了十个起来的账号，也问了三个日更一年没起来的，差别在选题不在频率。",
          "html": "我找了十个起来的账号，也问了三个日更一年没起来的，差别在选题不在频率。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "20:12",
          "text": "那结论就清楚了。",
          "html": "那结论就清楚了。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">先问分母</h3>\n                        <p>看到「他们都是这么做的」，先问一句：这么做的人里，有多少没成？</p>\n                        <p>找不到分母，这条经验就只能当故事听。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人提醒你：失败者不在你的样本里。</p>\n            <p>Source: <a href=\"https://en.wikipedia.org/wiki/Survivorship_bias\">Wikipedia · Survivorship bias</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "sunk-cost",
    "order": 43,
    "category": "thinking",
    "title": "沉没成本",
    "englishTitle": "Sunk Cost Fallacy",
    "summary": "已经投入这么多，不代表要接着投入。",
    "layout": "comparison",
    "visual": "sunk-cost-bars",
    "hero": {
      "titleHtml": "沉没成本",
      "subtitleHtml": "Sunk Cost Fallacy",
      "leadHtml": "决定要不要继续，<br>\n                    只看接下来值不值。"
    },
    "bad": {
      "titleHtml": "❌ 因为已经投入",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "15:10",
          "text": "这个项目做了四个月了，虽然现在看没什么用，但都做这么久了……",
          "html": "这个项目做了四个月了，虽然现在看没什么用，但都做这么久了……"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "15:11",
          "text": "如果今天从零开始，你还会做吗？",
          "html": "如果今天从零开始，你还会做吗？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "15:11",
          "text": "不会。",
          "html": "不会。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "15:12",
          "text": "那四个月已经花掉了，接着做只会再花四个月。",
          "html": "那四个月已经花掉了，接着做只会再花四个月。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">过去的投入收不回来</h3>\n                        <p>沉没成本的意思是：已经付出、无法收回的成本。它不该影响你接下来的决定。</p>\n                        <p>但人厌恶「浪费」，于是用继续投入来证明之前没白费——结果浪费得更多。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 只看未来",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "15:10",
          "text": "这项目从零评估的话我不会做，所以停了。",
          "html": "这项目从零评估的话我不会做，所以停了。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "15:11",
          "text": "那四个月白费了？",
          "html": "那四个月白费了？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "15:12",
          "text": "换来了一个结论：这条路不通。比再花四个月便宜。",
          "html": "换来了一个结论：这条路不通。比再花四个月便宜。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">换个问法</h3>\n                        <p>「如果今天从零开始，我还会选它吗？」——这个问题能把沉没成本从决策里摘出去。</p>\n                        <p>答案是不会，就停。已经花掉的时间和钱，不会因为你继续而回来。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人想让你别再为过去买单。</p>\n            <p>Source: <a href=\"https://en.wikipedia.org/wiki/Sunk_cost\">Wikipedia · Sunk cost</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "correlation-is-not-causation",
    "order": 44,
    "category": "thinking",
    "title": "相关不是因果",
    "englishTitle": "Correlation ≠ Causation",
    "summary": "两件事一起发生，不代表一件导致另一件。",
    "layout": "comparison",
    "visual": "correlation-panels",
    "hero": {
      "titleHtml": "相关不是因果",
      "subtitleHtml": "Correlation ≠ Causation",
      "leadHtml": "冰淇淋卖得多的时候溺水也多，<br>\n                    但冰淇淋不杀人。"
    },
    "bad": {
      "titleHtml": "❌ 看见一起发生就下结论",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "14:20",
          "text": "数据显示，用了我们插件的用户留存更高，所以插件提升了留存。",
          "html": "数据显示，用了我们插件的用户留存更高，所以插件提升了留存。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "14:21",
          "text": "也可能是留存高的人更愿意装插件。",
          "html": "也可能是留存高的人更愿意装插件。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "14:21",
          "text": "……有区别吗？",
          "html": "……有区别吗？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "14:22",
          "text": "有。一个是插件让人留下，一个是留下的人才装插件。",
          "html": "有。一个是插件让人留下，一个是留下的人才装插件。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">第三种可能</h3>\n                        <p>两件事相关，至少有四种解释：A 导致 B、B 导致 A、C 同时导致 A 和 B、纯属巧合。</p>\n                        <p>只看见相关就下因果结论，是把最省事的解释当成了唯一解释。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 先排除反向",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "14:20",
          "text": "插件用户留存高，但装插件的人本来就更活跃。我做个分组对照再下结论。",
          "html": "插件用户留存高，但装插件的人本来就更活跃。我做个分组对照再下结论。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "14:22",
          "text": "对，先看同活跃度的人里，装和不装有没有差别。",
          "html": "对，先看同活跃度的人里，装和不装有没有差别。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">怎么验证</h3>\n                        <p>能做对照就做对照；不能，至少问三句：会不会是反过来？有没有第三个因素？样本是不是自己挑的？</p>\n                        <p>相关性是线索，不是结论。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人要你先把「同时发生」和「因为所以」分开。</p>\n            <p>Source: <a href=\"https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation\">Wikipedia · Correlation does not imply causation</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "steelmanning",
    "order": 45,
    "category": "thinking",
    "title": "先搭最强版本",
    "englishTitle": "Steelmanning",
    "summary": "反驳之前，先把对方的话说到他自己点头。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "先搭最强版本",
      "subtitleHtml": "Steelmanning",
      "leadHtml": "打倒一个稻草人很容易，<br>\n                    但那不叫赢。"
    },
    "bad": {
      "titleHtml": "❌ 先曲解再打倒",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "11:30",
          "text": "他居然说远程办公效率低，意思就是我们在家都在摸鱼呗。",
          "html": "他居然说远程办公效率低，意思就是我们在家都在摸鱼呗。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "11:31",
          "text": "他原话是「新人远程带教成本高」。",
          "html": "他原话是「新人远程带教成本高」。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "11:31",
          "text": "那不还是一个意思。",
          "html": "那不还是一个意思。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "11:32",
          "text": "差很多。他说的是带新人，不是所有人。",
          "html": "差很多。他说的是带新人，不是所有人。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">稻草人最好打</h3>\n                        <p>把对方的观点换成一个人人都会反对的版本，再狠狠驳倒——这叫稻草人谬误。赢的是嘴，输的是讨论。</p>\n                        <p>更常见的是无意的：你记得的是自己愤怒时理解的那版。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 复述到对方点头",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "11:30",
          "text": "我理解你担心的是新人远程没人带、容易掉队，对吗？",
          "html": "我理解你担心的是新人远程没人带、容易掉队，对吗？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "11:31",
          "text": "对，主要是前三个月。",
          "html": "对，主要是前三个月。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "11:32",
          "text": "那可以只对新人要求每周到岗两天，其他人不变。",
          "html": "那可以只对新人要求每周到岗两天，其他人不变。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "11:33",
          "text": "这个我能接受。",
          "html": "这个我能接受。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">一句话自检</h3>\n                        <p>反驳前先说：「你的意思是……对吗？」对方点头了，你才有资格反驳。</p>\n                        <p>复述不准，说明你还没听懂，而不是对方没道理。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明你打的可能是一个自己扎的稻草人。</p>\n            <p>Source: <a href=\"https://en.wikipedia.org/wiki/Straw_man\">Wikipedia · Straw man（Steelman 是其反向做法）</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "bystander-effect",
    "order": 46,
    "category": "systems",
    "title": "旁观者效应",
    "englishTitle": "Bystander Effect",
    "summary": "群里没人回，不是没人看见。",
    "layout": "comparison",
    "visual": "bystander-curve",
    "hero": {
      "titleHtml": "旁观者效应",
      "subtitleHtml": "Bystander Effect",
      "leadHtml": "需要帮忙的人越多，<br>\n                    出手的人越少。"
    },
    "bad": {
      "titleHtml": "❌ 对一群人喊救命",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:02",
          "text": "有人能帮我看下这个报错吗？急！",
          "html": "有人能帮我看下这个报错吗？急！"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "12:10",
          "text": "（两小时后）还在吗",
          "html": "（两小时后）还在吗"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "09:30",
          "text": "（第二天）算了，我自己弄好了。",
          "html": "（第二天）算了，我自己弄好了。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "09:41",
          "text": "……我刚看到。",
          "html": "……我刚看到。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">责任被稀释</h3>\n                        <p>在场的人越多，每个人越觉得「别人会管」。这不是冷漠，是责任被分摊后的自然结果。</p>\n                        <p>群里的「有人能帮忙吗」，把选择权交给了所有人，也就等于没交给任何人。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 指名，给期限",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:02",
          "text": "@多米诺 这个报错卡了两小时，方便的时候帮我看一眼？今天下班前要交。",
          "html": "@多米诺 这个报错卡了两小时，方便的时候帮我看一眼？今天下班前要交。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:05",
          "text": "发我看下日志。",
          "html": "发我看下日志。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:05",
          "text": "在这，第 42 行。",
          "html": "在这，第 42 行。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">把「有人」换成名字</h3>\n                        <p>指名、说清要什么、给一个时间范围。三件事做完，帮忙的人就从「所有人」变成了「一个人」。</p>\n                        <p>被指名的人可以拒绝，但至少他知道这事在等他。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明你喊的那句「有人吗」，没人觉得自己是该回的那个。</p>\n            <p>Source: <a href=\"https://en.wikipedia.org/wiki/Bystander_effect\">Wikipedia · Bystander effect</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "streisand-effect",
    "order": 47,
    "category": "systems",
    "title": "斯特赖桑德效应",
    "englishTitle": "The Streisand Effect",
    "summary": "越删，越有人存。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "斯特赖桑德效应",
      "subtitleHtml": "The Streisand Effect",
      "leadHtml": "想让一件事消失，<br>\n                    最好的办法通常不是删它。"
    },
    "bad": {
      "titleHtml": "❌ 一删了之",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "18:20",
          "text": "有人把咱们那张图发网上了，我让平台全删了。",
          "html": "有人把咱们那张图发网上了，我让平台全删了。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "18:21",
          "text": "删之前有多少人看到？",
          "html": "删之前有多少人看到？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "18:21",
          "text": "几十个吧。",
          "html": "几十个吧。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "18:22",
          "text": "现在呢？",
          "html": "现在呢？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "18:40",
          "text": "……涨到两万了，都在传「被删的那张图」。",
          "html": "……涨到两万了，都在传「被删的那张图」。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">删除本身是新闻</h3>\n                        <p>芭芭拉·斯特赖桑德当年起诉摄影师，想让自己的豪宅照片消失，结果照片被下载了几十万次。</p>\n                        <p>删除动作会告诉所有人：这里有东西值得看。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 先算传播账",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "18:20",
          "text": "那张图现在几十个人看到，删了可能反而扩散。我先联系发帖人改掉关键信息。",
          "html": "那张图现在几十个人看到，删了可能反而扩散。我先联系发帖人改掉关键信息。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "18:22",
          "text": "对，能私下解决就别公开处理。",
          "html": "对，能私下解决就别公开处理。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">先问三个数</h3>\n                        <p>现在多少人看到？删了会不会被当成新闻？有没有更小的处理方式——改信息、下沉、私下沟通？</p>\n                        <p>三个数算完再决定动不动手。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明「删掉」这个动作本身，正在帮它传播。</p>\n            <p>Source: <a href=\"https://en.wikipedia.org/wiki/Streisand_effect\">Wikipedia · Streisand effect</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "eternal-september",
    "order": 48,
    "category": "systems",
    "title": "永恒九月",
    "englishTitle": "Eternal September",
    "summary": "人一多，规矩就自动稀释。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "永恒九月",
      "subtitleHtml": "Eternal September",
      "leadHtml": "一个社区的文化，<br>\n                    经不起每天都是新人。"
    },
    "bad": {
      "titleHtml": "❌ 只抱怨「以前不是这样」",
      "lines": [
        {
          "character": "tail",
          "name": "尾巴",
          "time": "21:10",
          "text": "这群越来越没法看了，全是广告和复读。",
          "html": "这群越来越没法看了，全是广告和复读。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "21:11",
          "text": "上个月进了多少人？",
          "html": "上个月进了多少人？"
        },
        {
          "character": "tail",
          "name": "尾巴",
          "time": "21:11",
          "text": "两百多吧，做活动拉来的。",
          "html": "两百多吧，做活动拉来的。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "21:12",
          "text": "那没办法，两百个新人进来，规矩就要重学两百遍。",
          "html": "那没办法，两百个新人进来，规矩就要重学两百遍。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">九月不会结束</h3>\n                        <p>1993 年 9 月，AOL 开始每月放一批新用户进 Usenet。老用户原本每年只需应付一次「九月新人潮」，从那以后，每天都是九月。</p>\n                        <p>社区不是被某个人搞坏的，是被规模搞坏的。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 把规矩做成机制",
      "lines": [
        {
          "character": "tail",
          "name": "尾巴",
          "time": "21:10",
          "text": "我想把发广告的直接踢，再置顶一条群规。",
          "html": "我想把发广告的直接踢，再置顶一条群规。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "21:11",
          "text": "再找个老成员做新人引导，进群自动发一遍。",
          "html": "再找个老成员做新人引导，进群自动发一遍。"
        },
        {
          "character": "tail",
          "name": "尾巴",
          "time": "21:12",
          "text": "行，这周弄。",
          "html": "行，这周弄。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">靠机制，不靠记性</h3>\n                        <p>规模上来之后，靠老成员一个个提醒是撑不住的。把规矩变成入群流程、自动回复、可见的置顶。</p>\n                        <p>文化要靠机制维护，不能靠怀旧。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明这个群正在经历它的第九月。</p>\n            <p>Source: <a href=\"https://en.wikipedia.org/wiki/Eternal_September\">Wikipedia · Eternal September</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "goodharts-law",
    "order": 49,
    "category": "systems",
    "title": "古德哈特定律",
    "englishTitle": "Goodhart's Law",
    "summary": "指标变成目标，就不再是好指标。",
    "layout": "comparison",
    "visual": "goodhart-divergence",
    "hero": {
      "titleHtml": "古德哈特定律",
      "subtitleHtml": "Goodhart's Law",
      "leadHtml": "一旦用数字考核，<br>\n                    数字就会开始骗人。"
    },
    "bad": {
      "titleHtml": "❌ 拿指标当目标",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "17:30",
          "text": "客服考核改成「回复条数」，这周数据翻倍了。",
          "html": "客服考核改成「回复条数」，这周数据翻倍了。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "17:31",
          "text": "用户满意度呢？",
          "html": "用户满意度呢？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "17:31",
          "text": "……降了。大家都在发「您好」「稍等」凑条数。",
          "html": "……降了。大家都在发「您好」「稍等」凑条数。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "17:32",
          "text": "意料之中。",
          "html": "意料之中。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">被测量的事物会变形</h3>\n                        <p>古德哈特的原话大意是：当一个指标成为目标，它就不再是好指标。</p>\n                        <p>因为人会优化指标本身，而不是指标想衡量的那件事。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 指标成对",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "17:30",
          "text": "改成「一次解决率」加「平均对话轮次」，两个一起看。",
          "html": "改成「一次解决率」加「平均对话轮次」，两个一起看。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "17:31",
          "text": "再加个抽查，防止为了少轮次敷衍。",
          "html": "再加个抽查，防止为了少轮次敷衍。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "17:32",
          "text": "行，先跑一个月。",
          "html": "行，先跑一个月。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">别让一个数说了算</h3>\n                        <p>至少配一个反向指标：速度快了看质量，量大了看投诉。指标成对，才有刹车。</p>\n                        <p>别忘了：数字是代理，不是目的。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人发现你们的数字在骗人。</p>\n            <p>Source: <a href=\"https://en.wikipedia.org/wiki/Goodhart%27s_law\">Wikipedia · Goodhart's law</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "dont-feed-the-trolls",
    "order": 50,
    "category": "systems",
    "title": "别喂 troll",
    "englishTitle": "Don't Feed the Trolls",
    "summary": "回应就是奖励。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "别喂 troll",
      "subtitleHtml": "Don't Feed the Trolls",
      "leadHtml": "有些人不是来讨论的，<br>\n                    是来看你上钩的。"
    },
    "bad": {
      "titleHtml": "❌ 认真对线",
      "lines": [
        {
          "character": "bot327",
          "name": "群友",
          "time": "22:10",
          "text": "你们这行不就是敲几行字收钱吗？",
          "html": "你们这行不就是敲几行字收钱吗？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "22:11",
          "text": "你懂什么？你知道我们一个项目要做多少事吗？",
          "html": "你懂什么？你知道我们一个项目要做多少事吗？"
        },
        {
          "character": "bot327",
          "name": "群友",
          "time": "22:11",
          "text": "急了急了。",
          "html": "急了急了。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "22:12",
          "text": "……",
          "html": "……"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "22:13",
          "text": "你回他一句，他就多一条素材。",
          "html": "你回他一句，他就多一条素材。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">他要的是反应</h3>\n                        <p>Troll 的目标不是说服你，是让你花时间、动情绪，然后截图。</p>\n                        <p>你的愤怒是这场对话唯一的产出，而它归属于对方。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 不接",
      "lines": [
        {
          "character": "bot327",
          "name": "群友",
          "time": "22:10",
          "text": "你们这行不就是敲几行字收钱吗？",
          "html": "你们这行不就是敲几行字收钱吗？"
        },
        {
          "name": "系统提示",
          "time": "22:11",
          "text": "「群友」已被移出会话",
          "html": "「群友」已被移出会话"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "22:12",
          "text": "处理得对。",
          "html": "处理得对。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">三个动作</h3>\n                        <p>不回复、不转发、必要时拉黑或交给管理员。对方拿不到反应，这场戏就演不下去。</p>\n                        <p>如果必须回应，只回应给旁观者看，一句话说完就走，别进入第二轮。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人建议你别再回了。</p>\n            <p>Source: <a href=\"https://en.wikipedia.org/wiki/Don%27t_feed_the_troll\">Wikipedia · Don't feed the troll</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "no-jargon",
    "order": 51,
    "category": "communication",
    "title": "说人话",
    "englishTitle": "No Jargon",
    "summary": "缩写和黑话，是把人挡在门外的门禁。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "说人话",
      "subtitleHtml": "No Jargon",
      "leadHtml": "你省下的几个字，<br>\n                    是对方花半小时查的资料。"
    },
    "bad": {
      "titleHtml": "❌ 用黑话划地盘",
      "lines": [
        {
          "character": "bot327",
          "name": "群友",
          "time": "10:20",
          "text": "这个需求 yyds，先 sync 一下再拉齐，ROI 很高。",
          "html": "这个需求 yyds，先 sync 一下再拉齐，ROI 很高。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:21",
          "text": "……什么叫拉齐？",
          "html": "……什么叫拉齐？"
        },
        {
          "character": "bot327",
          "name": "群友",
          "time": "10:21",
          "text": "这都不知道？",
          "html": "这都不知道？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:22",
          "text": "（不再回复）",
          "html": "（不再回复）"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">黑话的两个功能</h3>\n                        <p>黑话的第一个功能是识别同类，第二个功能是把不是同类的人挡在外面。在团队里用它，等于给新人加了一道门禁。</p>\n                        <p>更麻烦的是，看不懂的人往往不会问——问一次被嘲笑，就会一直沉默。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 第一次出现给全称",
      "lines": [
        {
          "character": "bot327",
          "name": "群友",
          "time": "10:20",
          "text": "这个功能次日留存 62%（第二天还会回来用的用户比例），先同步进度再对齐目标，投入产出比很高。",
          "html": "这个功能次日留存 62%（第二天还会回来用的用户比例），先同步进度再对齐目标，投入产出比很高。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:21",
          "text": "懂了，那先把进度发我。",
          "html": "懂了，那先把进度发我。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">一句话的成本</h3>\n                        <p>第一次出现时给全称或一句解释，后面再缩写。成本是几个字，收益是整个群里没人需要猜。</p>\n                        <p>如果这个词连你自己都要想一下，那就别用。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人被你的缩写卡住了，又不好意思问。</p>\n            <p>Source: <a href=\"https://github.com/itorr/nbnhhsh\">itorr/nbnhhsh ·「能不能好好说话？」</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "correct-in-private",
    "order": 52,
    "category": "communication",
    "title": "私下纠错",
    "englishTitle": "Correct in Private",
    "summary": "当众指出错误，赢了道理，输了人。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "私下纠错",
      "subtitleHtml": "Correct in Private",
      "leadHtml": "纠正的目的是让对方改，<br>\n                    不是让所有人看见他错。"
    },
    "bad": {
      "titleHtml": "❌ 群里当场点名",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "15:02",
          "text": "@多米诺 你这个数据错了，第三行明显不对。",
          "html": "@多米诺 你这个数据错了，第三行明显不对。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "15:04",
          "text": "我核对一下。",
          "html": "我核对一下。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "15:06",
          "text": "不用核对了，就是错了。",
          "html": "不用核对了，就是错了。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "15:20",
          "text": "（之后在群里再没发过言）",
          "html": "（之后在群里再没发过言）"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">公开纠错的两笔账</h3>\n                        <p>第一笔是对方的：被当众指出错误，人会先处理面子，再处理问题。</p>\n                        <p>第二笔是你自己的：群里其他人看到的是一个随时会点名的人，以后发言都会先掂量。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 私下说，公开只补结论",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "15:02",
          "text": "（私聊）第三行那个数好像和上周的口径不一样，你核一下？",
          "html": "（私聊）第三行那个数好像和上周的口径不一样，你核一下？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "15:08",
          "text": "确实错了，我改。",
          "html": "确实错了，我改。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "15:12",
          "text": "（群里）数据更新了一版，以这个为准。",
          "html": "（群里）数据更新了一版，以这个为准。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">表扬公开，批评私下</h3>\n                        <p>这条原则老得没有出处，但一直有效：公开的赞美会扩散，公开的批评只会留下伤口。</p>\n                        <p>如果错误影响到了所有人，公开只补「结论变了」，不补「谁错了」。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人宁愿私聊跟你说，也不想在群里让你下不来台。</p>\n            <p>Source: <a href=\"https://en.wikipedia.org/wiki/Netiquette\">Wikipedia · Netiquette（Virginia Shea）</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "observation-not-judgment",
    "order": 53,
    "category": "communication",
    "title": "说事实，不说评价",
    "englishTitle": "Observation, Not Judgment",
    "summary": "「你总是拖」是判决，「晚了两天」是事实。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "说事实，不说评价",
      "subtitleHtml": "Observation, Not Judgment",
      "leadHtml": "评价让人防御，<br>\n                    事实才让人能改。"
    },
    "bad": {
      "titleHtml": "❌ 先给人下定义",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "11:10",
          "text": "你做事总是拖，太不负责了。",
          "html": "你做事总是拖，太不负责了。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "11:11",
          "text": "我哪里总是拖？上个月我都是提前交的。",
          "html": "我哪里总是拖？上个月我都是提前交的。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "11:11",
          "text": "这次就是拖了啊。",
          "html": "这次就是拖了啊。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "11:12",
          "text": "那你直接说这次晚了就行，别说我总是。",
          "html": "那你直接说这次晚了就行，别说我总是。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">「总是」是个好靶子</h3>\n                        <p>一旦用「总是」「从来不」下定义，对方就有了一个完美的反驳靶子：只要找出一个反例，你的整句话就作废了。</p>\n                        <p>而真正想讨论的那个问题，反而没人再提。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 说清楚发生了什么",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "11:10",
          "text": "这版比约定晚了两天，我这边排期被顶掉了。下次能提前说一声吗？",
          "html": "这版比约定晚了两天，我这边排期被顶掉了。下次能提前说一声吗？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "11:12",
          "text": "可以，这次是我没同步。",
          "html": "可以，这次是我没同步。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">观察、感受、需要、请求</h3>\n                        <p>非暴力沟通把这四步拆得很清楚：先说观察到的事实，再说你的感受，然后说需要，最后提一个具体请求。</p>\n                        <p>第一步最容易跳过，也最值钱——把评价换成事实，对方就没得反驳，只能谈事。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人希望你把「你总是」换成「这一次」。</p>\n            <p>Source: <a href=\"https://en.wikipedia.org/wiki/Nonviolent_Communication\">Wikipedia · Nonviolent Communication</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "ring-theory",
    "order": 54,
    "category": "communication",
    "title": "先给耳朵，再给方案",
    "englishTitle": "Ring Theory",
    "summary": "诉苦的人要的是听众，不是项目经理。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "先给耳朵，再给方案",
      "subtitleHtml": "Ring Theory",
      "leadHtml": "安慰的方向是从外向内，<br>\n                    抱怨的方向是从内向外。"
    },
    "bad": {
      "titleHtml": "❌ 上来就解决问题",
      "lines": [
        {
          "character": "tail",
          "name": "尾巴",
          "time": "23:10",
          "text": "今天站了十个小时，人都傻了。",
          "html": "今天站了十个小时，人都傻了。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "23:11",
          "text": "你应该买个按摩椅，再配个筋膜枪，我发你链接。",
          "html": "你应该买个按摩椅，再配个筋膜枪，我发你链接。"
        },
        {
          "character": "tail",
          "name": "尾巴",
          "time": "23:12",
          "text": "……我就是想吐槽一下。",
          "html": "……我就是想吐槽一下。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "23:12",
          "text": "那你早说啊。",
          "html": "那你早说啊。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">他要的不是清单</h3>\n                        <p>倾诉的人通常知道该怎么办，只是需要有人听见。你一上来给方案，等于告诉他「你的情绪不重要，问题才重要」。</p>\n                        <p>更糟的是那句「那你早说啊」——把没听懂的责任推回给对方。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 先问要哪一种",
      "lines": [
        {
          "character": "tail",
          "name": "尾巴",
          "time": "23:10",
          "text": "今天站了十个小时，人都傻了。",
          "html": "今天站了十个小时，人都傻了。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "23:11",
          "text": "听着就累。要我陪你骂两句，还是一起想办法？",
          "html": "听着就累。要我陪你骂两句，还是一起想办法？"
        },
        {
          "character": "tail",
          "name": "尾巴",
          "time": "23:12",
          "text": "先骂两句。",
          "html": "先骂两句。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "23:12",
          "text": "那你先说，今天谁惹你了。",
          "html": "那你先说，今天谁惹你了。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">comfort in, dump out</h3>\n                        <p>苏珊·西尔克的环形理论：把当事人放在圆心，安慰只能向内给，情绪只能向外倒。</p>\n                        <p>放到日常也一样——先确认对方要的是耳朵还是方案，一句话就能省掉一场误会。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人现在只想被听见，不想被指导。</p>\n            <p>Source: <a href=\"https://en.wikipedia.org/wiki/Ring_theory_(psychology)\">Wikipedia · Ring theory（Susan Silk）</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "straight-talk-is-not-rudeness",
    "order": 55,
    "category": "communication",
    "title": "说话直不是免死金牌",
    "englishTitle": "Straight Talk Is Not Rudeness",
    "summary": "直接是指内容，不是指态度。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "说话直不是免死金牌",
      "subtitleHtml": "Straight Talk Is Not Rudeness",
      "leadHtml": "「我说话直，你别介意」<br>\n                    通常是「我准备冒犯你，你负责消化」。"
    },
    "bad": {
      "titleHtml": "❌ 用坦率包装失礼",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "16:40",
          "text": "我说话直啊，你这方案挺烂的。",
          "html": "我说话直啊，你这方案挺烂的。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "16:41",
          "text": "哪里烂？",
          "html": "哪里烂？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "16:41",
          "text": "就是感觉不行，说不上来。",
          "html": "就是感觉不行，说不上来。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "16:42",
          "text": "那你这不是直，是没想清楚。",
          "html": "那你这不是直，是没想清楚。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">直接不等于粗鲁</h3>\n                        <p>「我说话直」这句话的作用，是提前给对方派一个任务：接住你的情绪，还不许生气。</p>\n                        <p>真正的直接，是内容不含糊，态度不伤人。说不上哪里不行，那只是感觉，不是意见。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 具体，且给出方向",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "16:40",
          "text": "这版我觉得不行，问题在第二部分的论证：结论有了，但没有数据支撑。",
          "html": "这版我觉得不行，问题在第二部分的论证：结论有了，但没有数据支撑。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "16:42",
          "text": "那块我确实没写，下午补。",
          "html": "那块我确实没写，下午补。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "16:42",
          "text": "补完发我，我再看一遍。",
          "html": "补完发我，我再看一遍。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">关心个人，直接挑战</h3>\n                        <p>Radical Candor 把反馈分成四格：既关心又直接，才是坦诚；只直接不关心，只是让人难受的攻击。</p>\n                        <p>判断标准很简单：这句话是为了让对方变好，还是为了让你自己说爽。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明你的「直」让别人只收到了刺。</p>\n            <p>Source: <a href=\"https://www.radicalcandor.com/\">Radical Candor · Kim Scott</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "answer-then-explain",
    "order": 56,
    "category": "communication",
    "title": "先回答，再解释",
    "englishTitle": "Answer, Then Explain",
    "summary": "别人问能不能，先给能或不能。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "先回答，再解释",
      "subtitleHtml": "Answer, Then Explain",
      "leadHtml": "对方问的是结论，<br>\n                    你给的是背景。"
    },
    "bad": {
      "titleHtml": "❌ 先说三分钟背景",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "09:30",
          "text": "周五能上线吗？",
          "html": "周五能上线吗？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "09:33",
          "text": "这个版本我们改了登录流程，还加了新的权限模型，测试那边最近人手也不够，前端还有两个 bug 在修，另外服务器扩容要等采购……",
          "html": "这个版本我们改了登录流程，还加了新的权限模型，测试那边最近人手也不够，前端还有两个 bug 在修，另外服务器扩容要等采购……"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "09:34",
          "text": "所以能还是不能？",
          "html": "所以能还是不能？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "09:34",
          "text": "不能。",
          "html": "不能。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">结论被埋掉了</h3>\n                        <p>你说了很多真话，但对方要的只有一个字。他得听完整段才能拿到答案，中间还得自己判断哪句是结论。</p>\n                        <p>更常见的结果是：他没听完，就按「应该能」去安排了。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 结论先行",
      "lines": [
        {
          "character": "domino",
          "name": "多米诺",
          "time": "09:31",
          "text": "不能，缺一轮回归测试。",
          "html": "不能，缺一轮回归测试。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "09:31",
          "text": "原因是权限模型昨天才合并，测试要两天。最快下周三。",
          "html": "原因是权限模型昨天才合并，测试要两天。最快下周三。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "09:32",
          "text": "行，我按周三排。",
          "html": "行，我按周三排。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">倒金字塔</h3>\n                        <p>新闻写作的倒金字塔：最重要的结论放最前，细节按重要性递减。读者随时可以停，停在哪一层都不影响他知道结论。</p>\n                        <p>聊天比读报更容易中断，所以这条更适用。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明对方听了半天，还没听到你的答案。</p>\n            <p>Source: <a href=\"https://en.wikipedia.org/wiki/Inverted_pyramid_(journalism)\">Wikipedia · Inverted pyramid</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "passive-aggressive-texting",
    "order": 57,
    "category": "communication",
    "title": "别用标点甩脸色",
    "englishTitle": "Passive-Aggressive Texting",
    "summary": "「哦」「行吧」「。」都是关门的声音。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "别用标点甩脸色",
      "subtitleHtml": "Passive-Aggressive Texting",
      "leadHtml": "文字没有语气，<br>\n                    标点就成了语气。"
    },
    "bad": {
      "titleHtml": "❌ 让人猜你的情绪",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "20:10",
          "text": "晚上一起吃饭吗？",
          "html": "晚上一起吃饭吗？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "20:12",
          "text": "行吧。",
          "html": "行吧。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "20:12",
          "text": "你是不想去吗？",
          "html": "你是不想去吗？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "20:13",
          "text": "没事。",
          "html": "没事。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "20:14",
          "text": "……",
          "html": "……"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">被动攻击的性价比</h3>\n                        <p>不直说不满，用姿态让对方不舒服——这招很有效，因为对方只能猜，而猜错的责任在他。</p>\n                        <p>代价是：问题一次也没被说出口，但情绪已经发过一轮了。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 把不满说成句子",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "20:10",
          "text": "晚上一起吃饭吗？",
          "html": "晚上一起吃饭吗？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "20:12",
          "text": "今天不太想出门，改周末行吗？",
          "html": "今天不太想出门，改周末行吗？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "20:12",
          "text": "行，那周末。",
          "html": "行，那周末。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">一句话换一场猜谜</h3>\n                        <p>「行吧」「哦」「随便」不是回答，是让对方做阅读理解。</p>\n                        <p>真不想去就说不想去，真不高兴就说不高兴在哪。文字已经够冷了，别再给它加温度计。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人没读懂你的「哦」。</p>\n            <p>Source: <a href=\"https://en.wikipedia.org/wiki/Passive-aggressive_behavior\">Wikipedia · Passive-aggressive behavior</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "hindsight-bias",
    "order": 58,
    "category": "thinking",
    "title": "我早说过",
    "englishTitle": "Hindsight Bias",
    "summary": "事情发生后，一切看起来都显而易见。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "我早说过",
      "subtitleHtml": "Hindsight Bias",
      "leadHtml": "「早就告诉过你」<br>\n                    除了证明你聪明，不解决任何问题。"
    },
    "bad": {
      "titleHtml": "❌ 用结果审判过程",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "18:20",
          "text": "项目黄了。",
          "html": "项目黄了。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "18:21",
          "text": "我早就说这个方向不行。",
          "html": "我早就说这个方向不行。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "18:21",
          "text": "当时你只说了「再看看」。",
          "html": "当时你只说了「再看看」。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "18:22",
          "text": "那我也是这个意思。",
          "html": "那我也是这个意思。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">记忆会帮你改答案</h3>\n                        <p>知道结果之后，人会高估自己当初预测到的可能性。你没说过的话，回忆里会变成「我当时就觉得」。</p>\n                        <p>复盘如果建立在改过的记忆上，只会得出一个结论：我果然是对的。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 回到当时的信息",
      "lines": [
        {
          "character": "domino",
          "name": "多米诺",
          "time": "18:21",
          "text": "现在看，当时的判断依据里漏了获客成本。下次先补这一块。",
          "html": "现在看，当时的判断依据里漏了获客成本。下次先补这一块。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "18:22",
          "text": "同意，那会儿我们只看了留存。",
          "html": "同意，那会儿我们只看了留存。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">复盘看过程，不看结果</h3>\n                        <p>好复盘只问两件事：当时掌握了什么信息？在那些信息下，这个决定合理吗？</p>\n                        <p>决定合理但结果不好，是运气；决定不合理但结果好，是隐患。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人在提醒你：别用结果改写记忆。</p>\n            <p>Source: <a href=\"https://en.wikipedia.org/wiki/Hindsight_bias\">Wikipedia · Hindsight bias</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "false-consensus",
    "order": 59,
    "category": "thinking",
    "title": "大家都这么觉得",
    "englishTitle": "False Consensus Effect",
    "summary": "「大家」通常只是「我和我旁边的两个人」。",
    "layout": "comparison",
    "visual": "false-consensus-dots",
    "hero": {
      "titleHtml": "大家都这么觉得",
      "subtitleHtml": "False Consensus Effect",
      "leadHtml": "把自己的判断当成共识，<br>\n                    是最省事的说服方式。"
    },
    "bad": {
      "titleHtml": "❌ 用「大家」压人",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "14:10",
          "text": "大家都觉得这个方案不行。",
          "html": "大家都觉得这个方案不行。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "14:11",
          "text": "大家是谁？",
          "html": "大家是谁？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "14:11",
          "text": "就……大家都这么说的。",
          "html": "就……大家都这么说的。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "14:12",
          "text": "我问了五个人，三个说没看过方案。",
          "html": "我问了五个人，三个说没看过方案。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">「大家」是个虚数</h3>\n                        <p>虚假共识效应：人倾向于高估别人跟自己观点一致的程度，因为身边最常接触的就是跟自己像的人。</p>\n                        <p>说「大家」的时候，你通常只数了自己和两个同事。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 数人头，说来源",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "14:10",
          "text": "我问了三个用这个功能的人，两个说找不到入口。",
          "html": "我问了三个用这个功能的人，两个说找不到入口。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "14:11",
          "text": "那入口得改。另外三个是谁，我一起问问。",
          "html": "那入口得改。另外三个是谁，我一起问问。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">把「大家」换成数字</h3>\n                        <p>几个人、什么范围、怎么问的——三样说清楚，「大家」才有分量。</p>\n                        <p>说不清就别用这个词。它听起来像共识，实际只是音量。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人想让你把「大家」换成具体的人。</p>\n            <p>Source: <a href=\"https://en.wikipedia.org/wiki/False_consensus_effect\">Wikipedia · False consensus effect</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "respect-bandwidth",
    "order": 60,
    "category": "systems",
    "title": "别浪费别人的注意力",
    "englishTitle": "Respect Bandwidth",
    "summary": "转发、刷屏、连环 @，成本都由别人付。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "别浪费别人的注意力",
      "subtitleHtml": "Respect Bandwidth",
      "leadHtml": "网络礼仪的第一条不是礼貌，<br>\n                    是别占用别人的时间。"
    },
    "bad": {
      "titleHtml": "❌ 把群当网盘",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "09:10",
          "text": "（连发 9 张长图）",
          "html": "<span style=\"opacity:.75\">[图片 ×9]</span>"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "09:11",
          "text": "（60 秒语音）",
          "html": "<span style=\"opacity:.75\">[语音 60″]</span>"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "09:12",
          "text": "@所有人 大家看一下，很重要。",
          "html": "@所有人 大家看一下，很重要。"
        },
        {
          "character": "tail",
          "name": "尾巴",
          "time": "09:40",
          "text": "看到第九张才找到重点。",
          "html": "看到第九张才找到重点。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">带宽是别人的</h3>\n                        <p>你发出去的每一张图、每一条语音，占用的都是收的人的时间、流量和注意力。</p>\n                        <p>「很重要」这三个字不产生信息，只产生压力。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 摘要 + 链接 + 要什么",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "09:10",
          "text": "这周的排班有三处调整，都在文档第二页，需要各组今晚确认。",
          "html": "这周的排班有三处调整，都在文档第二页，需要各组今晚确认。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "09:10",
          "text": "文档：内部链接",
          "html": "文档：内部链接"
        },
        {
          "character": "tail",
          "name": "尾巴",
          "time": "09:12",
          "text": "收到，我们组没问题。",
          "html": "收到，我们组没问题。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">三段式</h3>\n                        <p>说了什么、去哪看、要对方做什么——三句话把一件事交代完，剩下的人可以选择什么时候看。</p>\n                        <p>Virginia Shea 的 Netiquette 十条里，有一条就是「尊重他人的时间和带宽」。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明你刚占用了别人一分钟，而对方只需要十秒。</p>\n            <p>Source: <a href=\"https://en.wikipedia.org/wiki/Netiquette\">Wikipedia · Netiquette（Virginia Shea）</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "meaningful-title",
    "order": 61,
    "category": "communication",
    "title": "标题写症状",
    "englishTitle": "Meaningful Title",
    "summary": "「求助」两个字，等于没写标题。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "标题写症状",
      "subtitleHtml": "Meaningful Title",
      "leadHtml": "别人是靠标题决定要不要点开的，<br>\n                    不是靠你的诚意。"
    },
    "bad": {
      "titleHtml": "❌ 标题只有情绪",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:02",
          "text": "【求助】大佬们救命！！",
          "html": "【求助】大佬们救命！！"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:12",
          "text": "……什么方面的？",
          "html": "……什么方面的？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:13",
          "text": "就那个报错。",
          "html": "就那个报错。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:40",
          "text": "（没有点开）",
          "html": "（没有点开）"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">标题是检索入口</h3>\n                        <p>群里、论坛里、工单系统里，别人都是先扫标题再决定要不要花时间。「救命」只说明你急，不说明你遇到了什么。</p>\n                        <p>而且事后想搜答案的人也搜不到它。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 环境 + 动作 + 结果",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:02",
          "text": "Vite 5 构建报 EACCES: permission denied，改了 node_modules 权限还是不行",
          "html": "Vite 5 构建报 EACCES: permission denied，改了 node_modules 权限还是不行"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:06",
          "text": "这个我遇到过，看下 npm 缓存目录的属主。",
          "html": "这个我遇到过，看下 npm 缓存目录的属主。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">三段式标题</h3>\n                        <p>环境（Vite 5）、动作（构建）、结果（EACCES 报错）——三段写全，懂的人一眼就知道自己会不会。</p>\n                        <p>标题里不要写「紧急」「在线等」，那些是情绪，不是信息。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明你的标题让别人没法判断该不该点开。</p>\n            <p>Source: <a href=\"https://github.com/DomeenoH/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md\">提问的智慧 · 使用有意义且描述明确的标题</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "make-it-easy-to-reply",
    "order": 62,
    "category": "communication",
    "title": "让别人能直接回",
    "englishTitle": "Make It Easy to Reply",
    "summary": "截图、语音、只言片语，都是在给对方加活。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "让别人能直接回",
      "subtitleHtml": "Make It Easy to Reply",
      "leadHtml": "你想被回答，<br>\n                    就得先让回答这件事变便宜。"
    },
    "bad": {
      "titleHtml": "❌ 只给一张糊图",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "14:20",
          "text": "（一张倾斜的手机翻拍，屏幕反光）",
          "html": "<span style=\"opacity:.75\">[图片：翻拍的报错屏幕]</span>"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "14:22",
          "text": "看不清，能贴文字吗？",
          "html": "看不清，能贴文字吗？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "14:23",
          "text": "文字太长了。",
          "html": "文字太长了。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "14:40",
          "text": "（没回）",
          "html": "（没回）"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">回答的成本由谁付</h3>\n                        <p>翻拍的照片没法复制、没法搜索、没法引用，对方要先把你的图翻译成文字，才能开始思考。</p>\n                        <p>你把整理的成本省了，它就转移到了回答的人身上。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 给能复制的原文",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "14:20",
          "text": "报错原文：TypeError: Cannot read properties of undefined (reading 'id')\n触发步骤：打开订单页 → 点导出\n环境：Chrome 131 / macOS 15",
          "html": "报错原文：TypeError: Cannot read properties of undefined (reading 'id')\n触发步骤：打开订单页 → 点导出\n环境：Chrome 131 / macOS 15"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "14:23",
          "text": "第 3 步的 order 是空的，加个判空。",
          "html": "第 3 步的 order 是空的，加个判空。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">可复制、可搜索、可复现</h3>\n                        <p>文字优先，代码块更好；截图只用来展示界面，不用来展示文字。</p>\n                        <p>再补一句「怎么复现」，对方就能在自己的环境里跑一遍，而不是靠猜。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明对方想帮你，但被你的信息格式卡住了。</p>\n            <p>Source: <a href=\"https://github.com/DomeenoH/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md\">提问的智慧 · 使问题容易回复</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "follow-up-after-solved",
    "order": 63,
    "category": "systems",
    "title": "解决后回来说一声",
    "englishTitle": "Follow Up After Solved",
    "summary": "别人花了时间，你至少欠一个结尾。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "解决后回来说一声",
      "subtitleHtml": "Follow Up After Solved",
      "leadHtml": "提问有开头，<br>\n                    也该有结尾。"
    },
    "bad": {
      "titleHtml": "❌ 拿到答案就走",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "16:10",
          "text": "好了，解决了。",
          "html": "好了，解决了。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "16:12",
          "text": "怎么解决的？",
          "html": "怎么解决的？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "16:30",
          "text": "（没有再回）",
          "html": "（没有再回）"
        },
        {
          "character": "bot327",
          "name": "群友",
          "time": "09:00",
          "text": "（三个月后）有人知道这个报错怎么解吗？",
          "html": "（三个月后）有人知道这个报错怎么解吗？"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">答案停在了私聊里</h3>\n                        <p>帮你的人不知道自己的判断对不对，下一个遇到同样问题的人搜不到任何结论。</p>\n                        <p>一次没有结尾的提问，等于让所有人重新踩一遍。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 补一句原因",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "16:10",
          "text": "解决了。原因是缓存目录属主是 root，chown 之后正常。",
          "html": "解决了。原因是缓存目录属主是 root，chown 之后正常。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "16:12",
          "text": "好，我把它补进文档。",
          "html": "好，我把它补进文档。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">你的结尾是别人的开头</h3>\n                        <p>一句「原因是 X，做法是 Y」就够。不需要写感谢信，只需要让答案留得下来。</p>\n                        <p>公开提问的价值，一半在答案，一半在可检索。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明那个帖子还悬着，没有结尾。</p>\n            <p>Source: <a href=\"https://github.com/DomeenoH/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md\">提问的智慧 · 问题解决后，加个简短的补充说明</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "ask-in-public",
    "order": 64,
    "category": "systems",
    "title": "公开提问，公开回答",
    "englishTitle": "Ask in Public",
    "summary": "私聊问完就走，等于把答案埋了。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "公开提问，公开回答",
      "subtitleHtml": "Ask in Public",
      "leadHtml": "你得到的答案，<br>\n                    本来可以留给下一个人。"
    },
    "bad": {
      "titleHtml": "❌ 私聊问完就消失",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "21:00",
          "text": "（私聊）在吗，问个问题",
          "html": "（私聊）在吗，问个问题"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "21:01",
          "text": "（详细回答了二十分钟）",
          "html": "（详细回答了二十分钟）"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "21:22",
          "text": "懂了，谢谢！",
          "html": "懂了，谢谢！"
        },
        {
          "character": "bot327",
          "name": "群友",
          "time": "10:00",
          "text": "（一周后，在群里问同一个问题）",
          "html": "（一周后，在群里问同一个问题）"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">被埋掉的答案</h3>\n                        <p>私聊不是错，很多问题确实不适合公开。但问完把结论贴回公开的地方，成本只有一句话。</p>\n                        <p>否则同一个问题会被不同的人问十遍，而每次都要重新回答一遍。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 问在明处，答在明处",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "21:00",
          "text": "（在群里）导出报错，环境是 Chrome 131，复现步骤是打开订单页点导出，有人遇到过吗？",
          "html": "（在群里）导出报错，环境是 Chrome 131，复现步骤是打开订单页点导出，有人遇到过吗？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "21:05",
          "text": "有，order 为空时要判空，改法我贴在这。",
          "html": "有，order 为空时要判空，改法我贴在这。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "21:20",
          "text": "已解决，按上面的改法改完正常了。",
          "html": "已解决，按上面的改法改完正常了。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">让答案可被检索</h3>\n                        <p>公开提问有三个附加好处：别人能补充、后来人能搜到、回答的人不必重复劳动。</p>\n                        <p>如果必须私聊，至少把脱敏后的结论补回公开渠道。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明这个问题值得问在大家都能看见的地方。</p>\n            <p>Source: <a href=\"https://github.com/DomeenoH/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md\">提问的智慧 · 别要求使用私人电邮回复</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "dont-cry-bug",
    "order": 65,
    "category": "thinking",
    "title": "别急着说是 bug",
    "englishTitle": "Don't Cry Bug",
    "summary": "先排除自己，再怀疑别人。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "别急着说是 bug",
      "subtitleHtml": "Don't Cry Bug",
      "leadHtml": "「这是 bug」是结论，<br>\n                    不是开场白。"
    },
    "bad": {
      "titleHtml": "❌ 先定罪再取证",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "11:20",
          "text": "你们这个接口有 bug，一直返回 500。",
          "html": "你们这个接口有 bug，一直返回 500。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "11:22",
          "text": "请求参数发我看看。",
          "html": "请求参数发我看看。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "11:22",
          "text": "就是普通请求，肯定不是参数问题。",
          "html": "就是普通请求，肯定不是参数问题。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "11:30",
          "text": "……你传的 id 是字符串，后端按数字解析。",
          "html": "……你传的 id 是字符串，后端按数字解析。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">大部分「bug」不是 bug</h3>\n                        <p>环境、参数、版本、缓存、配置——先按顺序排除这五样，再下结论。</p>\n                        <p>「肯定是你们的问题」这句话最大的坏处，是让你跳过检查自己那一半。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 先给证据，再给判断",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "11:20",
          "text": "调 /api/orders 返回 500，参数是 {\"id\": \"12\"}，换成数字就正常。是类型没做兼容吗？",
          "html": "调 /api/orders 返回 500，参数是 {\"id\": \"12\"}，换成数字就正常。是类型没做兼容吗？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "11:24",
          "text": "对，我们补一下校验。",
          "html": "对，我们补一下校验。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">把判断写成假设</h3>\n                        <p>「是类型没做兼容吗」比「你们有 bug」有用得多：前者给了对方一个可以验证的方向，后者只给了压力。</p>\n                        <p>确认是 bug 之后再说是 bug，也不迟。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人想让你先排除自己那一半。</p>\n            <p>Source: <a href=\"https://github.com/DomeenoH/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md\">提问的智慧 · 别动辄声称找到 Bug</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  },
  {
    "slug": "dont-play-helpless",
    "order": 66,
    "category": "communication",
    "title": "别用「我是小白」抵功课",
    "englishTitle": "Don't Play Helpless",
    "summary": "谦虚不能代替你已经查过的东西。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "别用「我是小白」抵功课",
      "subtitleHtml": "Don't Play Helpless",
      "leadHtml": "「我是新手」<br>\n                    不是免做功课的通行证。"
    },
    "bad": {
      "titleHtml": "❌ 用姿态换劳动",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "15:00",
          "text": "我是小白，这个怎么弄？",
          "html": "我是小白，这个怎么弄？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "15:02",
          "text": "你试过什么？",
          "html": "你试过什么？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "15:02",
          "text": "什么都没试，你先教我。",
          "html": "什么都没试，你先教我。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "15:05",
          "text": "（发了一篇入门文档）",
          "html": "（发了一篇入门文档）"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">低调也是一种索取</h3>\n                        <p>「我什么都不懂」听起来谦虚，实际是把整件事的劳动交给对方：从判断你缺什么，到从头讲一遍。</p>\n                        <p>新手身份可以解释你为什么不懂，不能解释你为什么没查。</p>\n                    </div>"
    },
    "good": {
      "titleHtml": "✅ 说我试到哪一步",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "15:00",
          "text": "我按文档装了一遍，卡在第二步的权限报错；试过 sudo 也不行，日志在这。",
          "html": "我按文档装了一遍，卡在第二步的权限报错；试过 sudo 也不行，日志在这。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "15:03",
          "text": "路径里有空格，加引号就行。",
          "html": "路径里有空格，加引号就行。"
        }
      ],
      "explanationHtml": "<div>\n                        <h3 style=\"margin-top:0\">把「我不会」换成「我卡在这」</h3>\n                        <p>说出你试过什么、卡在哪一步，对方只需要补最后一环，而不是从头带你走一遍。</p>\n                        <p>这不是要求你什么都会，是要求你先走两步。</p>\n                    </div>"
    },
    "footerHtml": "<p>\n                这不是非常严重的事情，所以请不要对送你来看这个网站的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人希望你先走到第二步。</p>\n            <p>Source: <a href=\"https://github.com/DomeenoH/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md\">提问的智慧 · 低声下气不能代替你的功课</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © 2025\n            </p>"
  }
];

export const orderedLaws = laws.sort((a, b) => a.order - b.order);

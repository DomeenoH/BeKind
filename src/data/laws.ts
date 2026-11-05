import type { Law } from './law-types';
import { extraLaws } from './laws-extra';
import { expandLaws } from './laws-expand';

const laws: Law[] = [
  {
    "slug": "no-hello",
    "order": 1,
    "category": "clarity",
    "title": "别只说「你好」",
    "englishTitle": "No Hello",
    "summary": "有事直接说，别先问在吗。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "不要说<span id=\"strike\">hello</span>",
      "subtitleHtml": "别先发一句「在吗？」",
      "leadHtml": "打电话给别人，对方接了，你问<span class=\"nowrap\">「在吗？」</span>，然后不出声，等他回话。",
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
      "explanationHtml": "<div>\n<p>西打两点一刻发的消息，两点二十才问到正题。多米诺回了个「…？」，又干等了一分钟，才知道对方要问什么。</p>\n<p>先问在吗，多半是出于礼貌。当面说话或者打电话，上来就提要求确实有点冲。可聊天要打字，你打一句要好几秒，对方回一句也要好几秒。本来一句话能问完的事，现在多走两个来回，对方还得先放下手头的事陪你热身。</p>\n<p>同类的开场还有不少。</p>\n<ul>\n<li>「你好，在吗？」</li>\n<li>「在，有事直接问。」</li>\n<li>「你有时间吗？」</li>\n<li>「有。」</li>\n<li>「忙吗？」</li>\n</ul>\n<p><strong>有事就直接问。</strong></p>\n</div>"
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
          "text": "三点半。",
          "html": "三点半。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "2:15 下午",
          "text": "好，谢啦。",
          "html": "好，谢啦。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "2:16 下午",
          "text": "不客气。",
          "html": "不客气。"
        }
      ],
      "explanationHtml": "<div>\n<p>觉得上来就问太冲，可以加一句寒暄，寒暄和问题放在同一条里发。</p>\n<ul>\n<li>「早，最近忙不忙？想问下那个事什么时候截止。」</li>\n<li>「还行，周五截止。」</li>\n<li>「好，你方便的话帮我把 NFR 也更新一下。」</li>\n</ul>\n<p>这样就算对方暂时不在，你又先下线了，他回来看到的也是一个能直接回答的问题，不用对着一句「在吗？」猜你想干什么。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方愿意帮你（也可能这是条自动回复），只是一句「在吗」让他不知道从哪儿回起。\n            </p>\n            <p>\n                本页面魔改自 <a href=\"https://nohello.net/zh-cn/\">nohello.net</a> ，基于\n                <a href=\"https://web.archive.org/web/20131127020115/http://www.nohello.com/\">nohello.com</a>\n                制作。头像取自多米诺和他对象。 原项目于 <a href=\"https://github.com/nohello-net/site\">GitHub</a>开源。\n            </p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "xy-problem",
    "order": 2,
    "category": "clarity",
    "title": "XY 问题",
    "englishTitle": "The XY Problem",
    "summary": "别问怎么修路，先说你要去哪。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "XY 问题",
      "subtitleHtml": "The XY Problem",
      "leadHtml": "医生不需要知道你是怎么查百度的，<br>\n                    他只想知道你<strong>哪里疼</strong>。"
    },
    "bad": {
      "titleHtml": "❌ 在 Y 里打转",
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
          "text": "得用 OCR 软件。不过你为啥要截图？",
          "html": "得用 OCR 软件。不过你为啥要截图？"
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
          "text": "客户发你的是 PDF 吧？直接选中复制就行了啊。",
          "html": "客户发你的是 PDF 吧？直接选中复制就行了啊。"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">盯着自己的办法，忘了要干什么</h3>\n<p>你可能有过这种经历。为了一件事折腾一整天，研究出一套很绕的办法，最后发现换个思路，甚至什么都不用做就行。</p>\n<p>这就是 XY 问题。</p>\n<ul>\n<li><strong>X</strong> 是你真正想做的事，比如把合同里的一段字弄出来。</li>\n<li><strong>Y</strong> 是你自己想出来的办法，不一定靠谱，比如截图再识别。</li>\n</ul>\n<p>你问别人「哪款截图识别软件好用」，大家就认真给你推荐软件，没人想起来告诉你<strong>直接复制粘贴就行</strong>。</p>\n<p>人一旦想出了 Y，就容易一路往下钻，忘了回头看看 X 有没有更省事的走法。</p>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 把 X 说出来",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:00",
          "text": "我想把客户合同里一段话弄出来（X），本来打算截图再识别（Y），好麻烦，有没有快点的办法？",
          "html": "我想把客户合同里一段话弄出来（X），本来打算截图再识别（Y），好麻烦，有没有快点的办法？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:01",
          "text": "是 PDF 的话一般能直接选中复制。不行就发我看看。",
          "html": "是 PDF 的话一般能直接选中复制。不行就发我看看。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:02",
          "text": "试了，真能复制。我傻了，谢谢！",
          "html": "试了，真能复制。我傻了，谢谢！"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">怎么绕出来</h3>\n<p>提问的时候，把你最终想做成的事也带上。</p>\n<p>问 Y 没问题，那是你想过的结果。只是记得在后面补一句。</p>\n<blockquote style=\"border-left: 4px solid var(--primary); padding-left: 1rem; color: var(--foreground);\">\n「我之所以想做 <strong>Y</strong>，是因为我想解决 <strong>X</strong>。如果 X 有更好的办法，麻烦告诉我。」\n</blockquote>\n<p>X 摆出来了，别人才有机会告诉你，旁边就有条近路。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方想帮你把 <strong>X</strong> 办成，不想陪你在 <strong>Y</strong> 里绕圈。\n            </p>\n            <p>Inspired by <a href=\"https://xyproblem.info\">xyproblem.info</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "dont-ask-to-ask",
    "order": 3,
    "category": "relation",
    "title": "拒绝谜语人",
    "englishTitle": "Don't Ask to Ask",
    "summary": "直接问，别先问能不能问。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "拒绝谜语人",
      "subtitleHtml": "Don't Ask to Ask",
      "leadHtml": "别问「有人懂吗」，<br>\n                    直接问那个问题。"
    },
    "bad": {
      "titleHtml": "❌ 先举手，再提问",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "14:02",
          "text": "有人懂投影仪吗？",
          "html": "有人懂投影仪吗？"
        },
        {
          "name": "（十分钟过去了）",
          "time": "14:12",
          "text": "……",
          "html": "……",
          "tone": "aside"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "14:12",
          "text": "在吗？302 的投影仪蓝屏了。",
          "html": "在吗？302 的投影仪蓝屏了。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "14:13",
          "text": "……你第一句就说这句，我已经在路上了。",
          "html": "……你第一句就说这句，我已经在路上了。"
        }
      ],
      "explanationHtml": "<div>\n<p>「有人懂投影仪吗」等于先让别人举手。懂的人得先站出来，你才肯说是什么问题。可大多数人不会举手，他们不知道自己懂不懂你那个问题。</p>\n<p>十分钟过去，你还在等一个「懂」的人冒头。</p>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 直接把问题问出来",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "14:02",
          "text": "302 会议室投影仪蓝屏，Mac 接 HDMI 没信号，拔插过线、也换过电脑。有人遇到过吗？",
          "html": "302 会议室投影仪蓝屏，Mac 接 HDMI 没信号，拔插过线、也换过电脑。有人遇到过吗？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "14:04",
          "text": "大概率是线。柜子里有一根备用的，先换上。",
          "html": "大概率是线。柜子里有一根备用的，先换上。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "14:07",
          "text": "换了，好了。",
          "html": "换了，好了。"
        }
      ],
      "explanationHtml": "<div>\n<p>问题完整摆出来，懂的人扫一眼就知道自己能不能接。</p>\n<p>先问「有人懂吗」，对方得先想清楚自己算不算懂。这比回答一个具体问题难多了，所以大家都不吭声。</p>\n</div>"
    },
    "footerHtml": "<p>这事不大，别跟发链接给你的人<a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。</p><p>如果你看到这个链接，说明对方希望你直接把问题说出来，别先问有没有人懂。</p><p>Inspired by <a href=\"https://dontasktoask.com\">dontasktoask.com</a></p><p><a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}</p>"
  },
  {
    "slug": "it-didnt-work",
    "order": 4,
    "category": "clarity",
    "title": "它挂了",
    "englishTitle": "It Didn't Work",
    "summary": "只说「坏了」，没人修得了。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "它挂了",
      "subtitleHtml": "It Didn't Work",
      "leadHtml": "「它坏了」三个字，<br>修的人什么也拿不到。"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">医生治不了「我病了」</h3>\n<p>你跟医生说「我病了」，就这一句，医生也没法治。他得知道哪里疼、什么时候开始的、吃过什么。</p>\n<p>设备和程序一样，修的人看不见你那边发生了什么。</p>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 试着这样做",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "16:00",
          "text": "打印机打不出来。型号 HP 1020，按打印键后听到咔咔两声，然后指示灯一直闪。纸盒里有纸。",
          "html": "打印机打不出来。型号 HP 1020，按打印键后听到咔咔两声，然后指示灯一直闪。纸盒里有纸。"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0; margin-bottom: 1.5rem;\">报故障时带上这几样</h3>\n<ul style=\"list-style: none; padding-left: 0; margin: 0;\">\n<li class=\"li-good\" style=\"margin-bottom: 16px;\"><strong>你做了什么</strong><br><span style=\"color: var(--muted-foreground); font-size: 0.875rem;\">按了哪个键，点了哪一步</span></li>\n<li class=\"li-good\" style=\"margin-bottom: 16px;\"><strong>结果怎样</strong><br><span style=\"color: var(--muted-foreground); font-size: 0.875rem;\">亮了什么灯，弹了什么提示</span></li>\n<li class=\"li-good\" style=\"margin-bottom: 16px;\"><strong>本来应该怎样</strong><br><span style=\"color: var(--muted-foreground); font-size: 0.875rem;\">你以为会发生什么</span></li>\n<li class=\"li-good\" style=\"margin-bottom: 0;\"><strong>用的什么</strong><br><span style=\"color: var(--muted-foreground); font-size: 0.875rem;\">型号、版本、报错原文</span></li>\n</ul>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明你的报错描述有点太<strong>抽象</strong>了。\n            </p>\n            <p>Inspired by <a href=\"https://itdidnt.work\">itdidnt.work</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "wheatons-law",
    "order": 5,
    "category": "systems",
    "title": "惠顿定律",
    "englishTitle": "Wheaton's Law",
    "summary": "别当混蛋（Don't be a dick）。",
    "layout": "statement",
    "hero": {
      "titleHtml": "惠顿定律",
      "subtitleHtml": "Wheaton's Law",
      "leadHtml": "<h2 style=\"font-size: clamp(3rem, 15vw, 8rem); line-height: 1; font-weight: 900; letter-spacing: -0.02em; color: var(--destructive); margin: 0; text-transform: uppercase;\">\n                    Don't be a dick.\n                </h2>\n                <h2 style=\"font-size: clamp(2rem, 10vw, 5rem); line-height: 1.2; font-weight: 900; margin: 1rem 0 0 0; color: var(--foreground);\">\n                    别当混蛋。\n                </h2>\n\n                "
    },
    "specialHtml": "<div>\n<h3 style=\"margin-top:0\">互联网黄金法则</h3>\n<p>威尔·惠顿（Wil Wheaton）2007 年在 PAX 主题演讲里说的。原话就一句，Don't be a dick。</p>\n<div class=\"callout\">\n<ul>\n<li class=\"li-bad\"><strong>不要</strong> 因为匿名就肆无忌惮地攻击他人。</li>\n<li class=\"li-bad\"><strong>不要</strong> 嘲笑新手，谁都当过新手。</li>\n<li class=\"li-good\"><strong>要</strong> 保持基本的礼貌和尊重。</li>\n</ul>\n</div>\n</div>",
    "footerHtml": "<p>\n            这事不大，别跟发链接给你的人\n            <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n        </p>\n        <p>\n            如果你看到这个链接，其实也没什么事，就是希望大家友善一点。\n        </p>\n        <p>Source: <a href=\"https://wilwheaton.net/?post_type=post&p=19\">Wil Wheaton, 2007 PAX 回顾</a> · <a href=\"https://knowyourmeme.com/memes/wheatons-law\">Know Your Meme</a></p>\n        <p>\n            <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n        </p>"
  },
  {
    "slug": "smart-questions",
    "order": 6,
    "category": "clarity",
    "title": "提问的智慧",
    "englishTitle": "Smart Questions",
    "summary": "先自己试过，再带着结果来问。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "提问的智慧",
      "subtitleHtml": "How To Ask Questions The Smart Way",
      "leadHtml": "问之前，<br>先把你自己走到哪一步说清楚。"
    },
    "bad": {
      "titleHtml": "❌ 只喊急",
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
          "text": "（看了一眼，没回）",
          "html": "（看了一眼，没回）"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">问之前</h3>\n<p>找人帮忙之前，自己先走几步。</p>\n<ul style=\"list-style: none; padding-left: 10px;\">\n<li>搜过 Google / 百度了吗？</li>\n<li>说明书翻过了吗？</li>\n<li>重启过、试着复现过吗？</li>\n</ul>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 带着信息问",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:00",
          "text": "我的笔记本（Win10，8G 内存）最近开 Chrome 很卡，重启和清垃圾都试过，开到 10 个网页就卡死。是内存不够吗？要不要加条内存？",
          "html": "我的笔记本（Win10，8G 内存）最近开 Chrome 很卡，重启和清垃圾都试过，开到 10 个网页就卡死。是内存不够吗？要不要加条内存？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:05",
          "text": "8G 确实紧。加到 16G，或者把不用的插件关掉。",
          "html": "8G 确实紧。加到 16G，或者把不用的插件关掉。"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">好问题里带着这些</h3>\n<ul style=\"list-style: none; padding-left: 10px;\">\n<li>用的什么，系统、版本、配置。</li>\n<li>出了什么事，做了哪一步，看到什么。</li>\n<li>试过什么，每样试完是什么反应。</li>\n</ul>\n</div>"
    },
    "footerHtml": "<p>\n            这事不大，别跟发链接给你的人\n            <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n        </p>\n        <p>\n            如果你看到这个链接，说明你这样问，回答的人有点<strong>摸不着头脑</strong>。花几分钟读读这份指南，答案会来得快一些。\n        </p>\n        <p>Based on <a href=\"https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way\">Eric S. Raymond's\n                Guide</a></p>\n        <p>\n            <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n        </p>"
  },
  {
    "slug": "no-pointless-politeness",
    "order": 7,
    "category": "relation",
    "title": "拒绝过度客套",
    "englishTitle": "Signal vs Noise",
    "summary": "一百句「收到」，能把一条更正顶没。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "拒绝过度客套",
      "subtitleHtml": "Signal vs Noise",
      "leadHtml": "你那句「谢谢大佬」，<br>\n                    可能正把有用的消息<strong>顶出屏幕</strong>。"
    },
    "bad": {
      "titleHtml": "❌ 排队回收到",
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
          "name": "（...以及其他 98 个人的收到）",
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">一条更正被顶没了</h3>\n<p>500 人的群，管理员发了条通知，接着一百来个人回「收到」「好的」「Thanks」。</p>\n<p>后面那条<strong>更正</strong>，集合地点改了，早被顶到屏幕上头去了。之后才点开群的四百人根本翻不到，第二天照旧去北门。</p>\n<p>面对面吃饭，寒暄客套是该有的。群聊、Issue、论坛里消息挤得很，你每发一行，都占着几百个人的<strong style=\"color: var(--bad);\">屏幕</strong>。</p>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 点个表情就行",
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
          "text": "紧急更正，集合地点改到南门！",
          "html": "紧急更正，集合地点改到南门！"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">不出声也算回了</h3>\n<p>好用的群一般有个默契。</p>\n<ul>\n<li><strong>点赞或者表情</strong>，就是「收到」「谢谢」。</li>\n<li><strong>引用回复</strong>，用来接着讨论具体哪一句。</li>\n</ul>\n<p>没人说话，说明这件事办完了。群里安安静静，下一条要紧的变更发出来，所有人都看得见。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明群里排的队形已经把<strong>正经消息挡住了</strong>。\n            </p>\n            <p>Inspired by <a href=\"https://github.com/torvalds\">Linus Torvalds' Attitude</a> (Sort of...)</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "cunninghams-law",
    "order": 8,
    "category": "systems",
    "title": "坎宁安定律",
    "englishTitle": "Cunningham's Law",
    "summary": "想要正确答案，先发一个错的。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "坎宁安定律",
      "subtitleHtml": "Cunningham's Law",
      "leadHtml": "在网上想要正确答案，<br>\n                    最快的办法是先发一个错的。"
    },
    "bad": {
      "titleHtml": "❌ 老实提问",
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
          "text": "（一个小时过去了）",
          "html": "（一个小时过去了）",
          "tone": "meta"
        },
        {
          "name": "",
          "text": "（没人回）",
          "html": "（没人回）",
          "tone": "meta"
        }
      ],
      "explanationHtml": "<div>\n<p>问题本身没毛病，就是<strong>太开放</strong>。</p>\n<p>北京的烤鸭店少说几十家，回答的人得先在脑子里过一遍，挑哪家、凭什么，想想就累，干脆不答。主观推荐还容易被人抬杠，没几个人愿意出这个头。</p>\n<p>于是这条消息就沉了。</p>\n</div>"
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
      "explanationHtml": "<div>\n<p><strong>五分钟，一份烤鸭店清单就齐了。</strong></p>\n<p>没人回答的问题，大家很容易划过去。看到一句<strong>明显说错的话</strong>，手就痒，非得纠正一下，顺便显摆自己懂行。</p>\n<p>这招适合这些时候。</p>\n<ul>\n<li>要主观推荐，餐厅、电影、书。</li>\n<li>想知道某个圈子里大家实际怎么做。</li>\n<li>群里太冷清，想让人聊起来。</li>\n</ul>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方想提醒你，有个<strong>不太正经</strong>的办法能拿到（或者给出）正确答案。\n            </p>\n            <p>名字来自 Ward Cunningham（wiki 的发明者，和维基百科无关）。这个说法由 Steven McGeady 在 1980 年代的一次交谈后命名。Cunningham 本人否认自己提倡过「发错误答案来提问」。</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "rubber-duck",
    "order": 9,
    "category": "thinking",
    "title": "小黄鸭调试",
    "englishTitle": "Rubber Duck",
    "summary": "先讲给鸭子听，常常讲着讲着就懂了。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "小黄鸭调试法",
      "subtitleHtml": "Rubber Duck Debugging",
      "leadHtml": "卡住的时候，<br>\n                    先把问题讲给一只鸭子听。"
    },
    "bad": {
      "titleHtml": "❌ 喊人来看",
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
          "text": "等下，我格式选错了，要选「可编辑的 PDF」…好了，解决了",
          "html": "等下，我格式选错了，要选「可编辑的 PDF」…好了，解决了"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "3:18 下午",
          "text": "…我一句话还没说",
          "html": "…我一句话还没说"
        }
      ],
      "explanationHtml": "<div>\n<p>西打其实<strong>用不着多米诺</strong>。他把问题讲出来的那几句里，自己就找到了答案。</p>\n<p>一个人闷头想的时候，脑子会跳步，几个看着理所当然的细节就这么滑过去了。讲给别人听，就得一步一步说，<strong>说到哪一步卡壳</strong>，毛病多半就在那儿。</p>\n<p>代价是多米诺手上的活被打断了，结果他什么也没做。</p>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 先讲给鸭子",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "3:15 下午",
          "text": "（对着桌上的小黄鸭）好，我跟你说下这个问题…",
          "html": "（对着桌上的小黄鸭）好，我跟你说下这个问题…"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "3:15 下午",
          "text": "我要把 PPT 导成 PDF，点了导出，然后选格式…",
          "html": "我要把 PPT 导成 PDF，点了导出，然后选格式…"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "3:16 下午",
          "text": "等下，格式！我选错了！",
          "html": "等下，格式！我选错了！"
        },
        {
          "name": "小黄鸭",
          "time": "永远在线",
          "text": "嘎。",
          "html": "嘎。"
        }
      ],
      "explanationHtml": "<div>\n<p><strong>小黄鸭调试</strong>用不着对方懂，只要有个听的，逼你把思路一句句讲完。</p>\n<p>听的可以是这些。</p>\n<ul>\n<li>一只橡皮小黄鸭</li>\n<li>桌角、咖啡杯、那盆绿萝</li>\n<li>一个空聊天窗口，问题打完先不发</li>\n<li>你自己，小声念一遍</li>\n</ul>\n<p>讲完还没懂，再去找人。那时候你问得也清楚多了。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方想让你先把问题<strong>从头讲一遍</strong>，讲给桌角或者鸭子都行，还卡着再来找他。\n            </p>\n            <p>Inspired by <a href=\"https://pragprog.com/\">The Pragmatic Programmer</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "bike-shedding",
    "order": 10,
    "category": "systems",
    "title": "自行车棚效应",
    "englishTitle": "Bike Shedding",
    "summary": "五百万的预算一分钟过，袋子颜色吵两小时。",
    "layout": "comparison",
    "visual": "bikeshed-bars",
    "hero": {
      "titleHtml": "自行车棚效应",
      "subtitleHtml": "Parkinson's Law of Triviality",
      "leadHtml": "看不懂的大事一句带过，<br>\n                    人人都懂的小事吵个没完。"
    },
    "bad": {
      "titleHtml": "❌ 典型症状",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "2:00 下午",
          "text": "好，第一项，明年的战略规划，预算 500 万。大家有意见吗？",
          "html": "好，第一项，明年的战略规划，预算 500 万。大家有意见吗？"
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
          "text": "（五分钟后，进入下一项）",
          "html": "（五分钟后，进入下一项）",
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
          "text": "不行，红色太土了，金色大气",
          "html": "不行，红色太土了，金色大气"
        },
        {
          "character": "bot327",
          "name": "群友",
          "time": "2:08 下午",
          "text": "我觉得深蓝显得高级…",
          "html": "我觉得深蓝显得高级…"
        },
        {
          "name": "",
          "text": "（两小时后，还在吵袋子颜色）",
          "html": "（两小时后，还在吵袋子颜色）",
          "tone": "meta"
        }
      ],
      "explanationHtml": "<div>\n<p>帕金森举过一个例子。委员会审核电站方案，没几个人看得懂，很快就过了。审员工的自行车棚，人人都懂自行车棚，于是吵了很久。</p>\n<p>这就是<strong>帕金森琐碎定律</strong>。越是谁都能插嘴的小事，花的时间越多。真正要紧又复杂的事，反倒一笔带过。</p>\n<ul>\n<li><strong>小事好懂</strong>，随便说两句都不会错。</li>\n<li><strong>想露个脸</strong>，大事上不敢开口，小事上能说。</li>\n<li><strong>大事太累</strong>，干脆不想了。这一条是后人补的，帕金森原文里没有。</li>\n</ul>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 如何避免",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "2:00 下午",
          "text": "第一项，明年的战略规划。这是今天的重点，各部门负责人会前准备好意见，留 45 分钟细聊。",
          "html": "第一项，明年的战略规划。这是今天的重点，各部门负责人会前准备好意见，留 45 分钟细聊。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "2:45 下午",
          "text": "第二项，年会伴手礼。行政挑了 3 个方案，5 分钟内投票，没投算弃权。",
          "html": "第二项，年会伴手礼。行政挑了 3 个方案，5 分钟内投票，没投算弃权。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "2:48 下午",
          "text": "投 A，散会！",
          "html": "投 A，散会！"
        }
      ],
      "explanationHtml": "<div>\n<ul>\n<li><strong>给每项定时间</strong>。小事别超过 5 分钟。</li>\n<li><strong>标出轻重</strong>。哪项是重点、哪项走个过场，议程上写明白。</li>\n<li><strong>只给几个选项</strong>。别问「选什么颜色」，问「A 还是 B」。</li>\n</ul>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明大家可能正为了<strong>袋子的颜色</strong>，把<strong>核电站</strong>晾在了一边。\n            </p>\n            <p>概念提出者：C. Northcote Parkinson</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "yak-shaving",
    "order": 11,
    "category": "systems",
    "title": "剪牦牛毛",
    "englishTitle": "Yak Shaving",
    "summary": "本来只想煮碗面，结果翻起了毕业相册。",
    "layout": "comparison",
    "visual": "yak-shaving-chain",
    "hero": {
      "titleHtml": "剪牦牛毛",
      "subtitleHtml": "Yak Shaving",
      "leadHtml": "本来想去倒个垃圾，<br>\n                    回过神来已经在山上给牦牛剪毛了。"
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
          "text": "车钥匙呢？翻下抽屉…",
          "html": "车钥匙呢？翻下抽屉…"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "12:10",
          "text": "咦，我高中毕业相册！看两眼…",
          "html": "咦，我高中毕业相册！看两眼…"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "2:30 下午",
          "text": "哈哈哈这张好丑…",
          "html": "哈哈哈这张好丑…"
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
          "text": "完了…我要干嘛来着？哦，煮面。面呢？葱呢？钥匙呢？",
          "html": "完了…我要干嘛来着？哦，煮面。面呢？葱呢？钥匙呢？"
        }
      ],
      "explanationHtml": "<div>\n<p><strong>剪牦牛毛</strong>说的是这么个过程。你想做 A，做 A 得先做 B，做 B 得先做 C，一路做下去，最后发现自己在山上给牦牛剪毛，早忘了 A 是什么。</p>\n<p>每一步单看都说得过去，确实得先有葱、得先找钥匙。可一步接一步，离开头那件事越来越远。</p>\n<p><strong>容易掉进去的时候</strong></p>\n<ul>\n<li><strong>岔路更好玩</strong>，相册比煮面有意思。</li>\n<li><strong>没想好终点</strong>，不知道做到哪算完。</li>\n<li><strong>低估时间</strong>，「看两眼」一看就是两小时。</li>\n</ul>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 如何避免",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "12:00",
          "text": "饿了，煮碗面。（目标：吃上面）",
          "html": "饿了，煮碗面。（目标：吃上面）"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "12:01",
          "text": "没葱了。等下，我是要吃面，又不是做大餐，没葱也能吃。",
          "html": "没葱了。等下，我是要吃面，又不是做大餐，没葱也能吃。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "12:10",
          "text": "面好了，吃完再说别的。",
          "html": "面好了，吃完再说别的。"
        }
      ],
      "explanationHtml": "<div>\n<p>发现自己走岔了，问问自己。</p>\n<ul>\n<li>这件事非做不可吗？</li>\n<li>能不能先把主线做完，回头再弄它？</li>\n<li>我现在手上这件，跟一开始要做的有什么关系？</li>\n</ul>\n<p><strong>几个土办法</strong></p>\n<ul>\n<li><strong>写下来</strong>。便签上写「我现在要做 X」，贴在眼前。</li>\n<li><strong>定个闹钟</strong>。半小时响一次，看看自己还在不在正路上。</li>\n<li><strong>先记着</strong>。碰到好玩的岔路，记一笔，回头再去。</li>\n</ul>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明你看着挺忙，可离<strong>一开始要做的事</strong>已经很远了。\n            </p>\n            <p>Source: <a href=\"http://catb.org/jargon/html/Y/yak-shaving.html\">Jargon File</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "hanlons-razor",
    "order": 12,
    "category": "thinking",
    "title": "汉隆剃刀",
    "englishTitle": "Hanlon's Razor",
    "summary": "能用糊涂解释的，别先往坏处想。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "汉隆剃刀",
      "subtitleHtml": "Hanlon's Razor",
      "leadHtml": "能用糊涂或者太忙解释的，<br>\n                    就别往恶意上想。"
    },
    "bad": {
      "titleHtml": "❌ 越想越坏",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "9:30 上午",
          "text": "今天电梯里跟多米诺打招呼，他居然没理我！",
          "html": "今天电梯里跟多米诺打招呼，他居然没理我！"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "9:35 上午",
          "text": "他肯定对我有意见。是不是上次开会我顶了他一句？",
          "html": "他肯定对我有意见。是不是上次开会我顶了他一句？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:00 上午",
          "text": "他是不是在背后说我？要给我穿小鞋？",
          "html": "他是不是在背后说我？要给我穿小鞋？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "11:00 上午",
          "text": "要不我先下手，在老板面前提他两句？",
          "html": "要不我先下手，在老板面前提他两句？"
        },
        {
          "name": "真相",
          "time": "其实是...",
          "text": "多米诺那天忘戴眼镜，根本没看清是谁。他满脑子在想晚上吃什么。",
          "html": "多米诺那天忘戴眼镜，根本没看清是谁。他满脑子在想晚上吃什么。",
          "tone": "aside"
        }
      ],
      "explanationHtml": "<div>\n<p>出了岔子，人往往先往<strong>最坏的地方</strong>想。在野外，多疑一点能保命，这习惯就这么留了下来。</p>\n<p>搬到办公室和群聊里，它只会让人难受。</p>\n<ul>\n<li><strong>心里发慌</strong>，一遍遍猜别人想干嘛。</li>\n<li><strong>白生气</strong>，气的是自己编出来的恶意。</li>\n<li><strong>闹出事</strong>，照着误会去回击，真把关系弄僵了。</li>\n</ul>\n<p>回头一查，对方常常什么都没想，就是<strong>没注意、太忙，或者犯了迷糊</strong>。</p>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 先往好处想",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "9:30 上午",
          "text": "今天电梯里跟多米诺打招呼，他没理我，有点怪。",
          "html": "今天电梯里跟多米诺打招呼，他没理我，有点怪。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "9:31 上午",
          "text": "可能没看见？或者在想事？算了，不琢磨了。",
          "html": "可能没看见？或者在想事？算了，不琢磨了。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "9:35 上午",
          "text": "@多米诺 早，刚才电梯里是你吧？我还怕认错人了",
          "html": "@多米诺 早，刚才电梯里是你吧？我还怕认错人了"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "9:36 上午",
          "text": "是我是我！不好意思，今天忘戴眼镜了，看谁都是一团",
          "html": "是我是我！不好意思，今天忘戴眼镜了，看谁都是一团"
        }
      ],
      "explanationHtml": "<div>\n<p><strong>假设善意（Assume Good Intent）</strong>是汉隆剃刀最常见的用法。</p>\n<p>别人哪儿让你不舒服了，先当他<strong>不是故意的</strong>。多数时候真相是这几种。</p>\n<ul>\n<li>太忙，或者太累</li>\n<li>没注意到</li>\n<li>犯迷糊了</li>\n<li>在看手机，没听见</li>\n</ul>\n<p><strong>同样的事一次次发生，就该找他聊聊了。头一回，先往好处想。</strong></p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方大概没有恶意，只是<strong>太忙、太累，或者犯了迷糊</strong>。\n            </p>\n            <p>概念提出者：Robert J. Hanlon</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "postels-law",
    "order": 13,
    "category": "clarity",
    "title": "波斯特尔法则",
    "englishTitle": "Postel's Law",
    "summary": "自己发的写清楚，别人发的往宽里读。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "波斯特尔法则",
      "subtitleHtml": "Postel's Law / 文字不带情绪",
      "leadHtml": "自己发的消息写清楚，<br>\n                    别人发的消息往宽里读。"
    },
    "bad": {
      "titleHtml": "❌ 一个「哦」脑补一出戏",
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
          "text": "「哦」？就一个「哦」？是不满意吗？还是在敷衍我？",
          "html": "「哦」？就一个「哦」？是不满意吗？还是在敷衍我？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:35 上午",
          "text": "完了，他肯定觉得方案很烂。要不要重做？",
          "html": "完了，他肯定觉得方案很烂。要不要重做？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "11:00 上午",
          "text": "我哪儿得罪他了？他最近是不是对我有意见？",
          "html": "我哪儿得罪他了？他最近是不是对我有意见？"
        },
        {
          "name": "真相",
          "time": "其实是...",
          "text": "多米诺在开会，随手回了个「哦」，意思是收到了，回头看。",
          "html": "多米诺在开会，随手回了个「哦」，意思是收到了，回头看。",
          "tone": "aside"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">打出来的字没有语气</h3>\n<p>当面说话，语调、表情、停顿都在帮忙。换成文字，这些全没了。常听人引用的 7-38-55 比例，来自 Mehrabian 一组专门测情绪表达的实验，拿来当通用公式不对。</p>\n<p>同一句话，换个人读，情绪就不一样了。</p>\n<ul>\n<li>「好的」，你读出冷淡，对方可能只是忙。</li>\n<li>「行吧」，你读出敷衍，对方可能真觉得行。</li>\n<li>「…」，你读出无语，对方可能在想。</li>\n<li>一个笑脸，你读出嘲讽，对方可能真在笑。</li>\n</ul>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 两头都留余地",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:00 上午",
          "text": "多米诺，下午那个方案你看了吗？不急，有空再回～",
          "html": "多米诺，下午那个方案你看了吗？不急，有空再回～"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:30 上午",
          "text": "看到了，在开会，晚点细看再跟你说",
          "html": "看到了，在开会，晚点细看再跟你说"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:31 上午",
          "text": "好，辛苦了",
          "html": "好，辛苦了"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">波斯特尔法则</h3>\n<p>这是网络先驱 Jon Postel 给协议定的规矩，这里借来用在人身上。</p>\n<blockquote style=\"border-left: 4px solid var(--primary); padding-left: 1rem; color: var(--foreground); font-style: italic;\">Be conservative in what you send, be liberal in what you accept.<br><strong>发的时候严一点，收的时候宽一点。</strong></blockquote>\n<p><strong>自己发消息</strong></p>\n<ul>\n<li>写清楚，别让人猜。</li>\n<li>不急就说一声不急。</li>\n<li>怕显得冷，加个语气词，「好的～」读起来就软一些。</li>\n</ul>\n<p><strong>读别人的消息</strong></p>\n<ul>\n<li>先当对方是好意。</li>\n<li>拿不准就直接问。</li>\n<li>别自己往下编剧情。</li>\n</ul>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方可能只是在忙，那个<strong>「哦」</strong>就是收到的意思。\n            </p>\n            <p>Named after: Jon Postel (RFC 793)</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "three-strikes",
    "order": 14,
    "category": "relation",
    "title": "三振出局",
    "englishTitle": "Three Strikes",
    "summary": "来回三条还没说清，就打个电话。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "三振出局",
      "subtitleHtml": "Three Strikes and You Call",
      "leadHtml": "来回三条还没说清，<br>\n                    就打个电话吧。",
      "effect": "three-strikes-count"
    },
    "bad": {
      "titleHtml": "❌ 绕个没完",
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
          "text": "上次哪个？上次聊了好几件事",
          "html": "上次哪个？上次聊了好几件事"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "2:20 下午",
          "text": "就周三开会说的那个",
          "html": "就周三开会说的那个"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "2:25 下午",
          "text": "周三说的哪个？合同还是报价单？",
          "html": "周三说的哪个？合同还是报价单？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "2:30 下午",
          "text": "都不是，另一个",
          "html": "都不是，另一个"
        },
        {
          "name": "",
          "text": "（半小时过去了，还没对上是哪件事）",
          "html": "（半小时过去了，还没对上是哪件事）",
          "tone": "meta"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">打字有打字的短处</h3>\n<p>打字适合传<strong>简单、明确</strong>的事。事情一复杂、一模糊，打字就慢了。</p>\n<ul>\n<li><strong>每句都要等</strong>。一来一回，时间翻着倍往上加。</li>\n<li><strong>前面的话被冲散</strong>。说着说着就得往回翻，再确认一遍。</li>\n<li><strong>越说越歪</strong>。每多一轮，就多一个能读岔的地方。</li>\n</ul>\n<p>电话里三分钟的事，打字能磨半小时。</p>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 第三条就打电话",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "15:10",
          "text": "那个东西你处理一下？",
          "html": "那个东西你处理一下？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "15:12",
          "text": "哪个东西？",
          "html": "哪个东西？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "15:13",
          "text": "就上次那个。",
          "html": "就上次那个。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "15:14",
          "text": "上次哪个？",
          "html": "上次哪个？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "15:15",
          "text": "算了，我打给你吧，两分钟说完。",
          "html": "算了，我打给你吧，两分钟说完。"
        },
        {
          "name": "语音通话",
          "time": "15:15",
          "text": "通话 3 分钟，事情说清了",
          "html": "通话 3 分钟，事情说清了",
          "tone": "meta"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">三振出局</h3>\n<p>规矩就一条。一件事来回<strong>超过 3 条</strong>还没说清，就换成打电话或者当面说。</p>\n<ul>\n<li><strong>马上能问</strong>。哪里听岔了，当场就能纠正。</li>\n<li><strong>听得见语气</strong>。对方急不急、烦不烦，一听就知道。</li>\n<li><strong>快</strong>。绕了半天的事，几分钟就说完了。</li>\n</ul>\n<p>打电话之前，先问一句对方方便不方便。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明打字已经说不清了，<strong>打个电话会快一些</strong>。\n            </p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "bluf",
    "order": 15,
    "category": "clarity",
    "title": "BLUF 原则",
    "englishTitle": "Bottom Line Up Front",
    "summary": "结论放第一句，细节往后放。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "BLUF 原则",
      "subtitleHtml": "Bottom Line Up Front",
      "leadHtml": "第一句先说结论，<br>\n                    细节放后面。"
    },
    "bad": {
      "titleHtml": "❌ 铺垫半天",
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
          "text": "本来想坐地铁，结果那条线在检修",
          "html": "本来想坐地铁，结果那条线在检修"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "9:02 上午",
          "text": "只好打车，路上又堵了好久",
          "html": "只好打车，路上又堵了好久"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "9:03 上午",
          "text": "到了发现门关着",
          "html": "到了发现门关着"
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
          "text": "兄弟，你到底想说啥？",
          "html": "兄弟，你到底想说啥？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "9:06 上午",
          "text": "哦对，明天开会改到下午3点。",
          "html": "哦对，明天开会改到下午3点。"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">读的人看不到最后</h3>\n<p>人读消息，注意力是<strong>越往后越少</strong>的。重点放在最后，很多人压根读不到。</p>\n<ul>\n<li><strong>记流水账</strong>，按时间顺序从早上讲起。</li>\n<li><strong>卖关子</strong>，像讲故事一样吊着人。</li>\n<li><strong>怕太直</strong>，觉得上来就说结论没礼貌。</li>\n</ul>\n<p>结果说了五分钟，对方还不知道你要说什么。</p>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 先说结论",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "9:00 上午",
          "text": "明天的会改到下午 3 点。",
          "html": "明天的会改到下午 3 点。"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "9:00 上午",
          "text": "会议室被临时借走了，我今天去现场确认过。",
          "html": "会议室被临时借走了，我今天去现场确认过。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "9:01 上午",
          "text": "收到，日程改了",
          "html": "收到，日程改了"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">BLUF</h3>\n<p><strong>BLUF</strong>（Bottom Line Up Front）是军队公文里的写法，后来很多公司也这么写。</p>\n<blockquote style=\"border-left: 4px solid var(--primary); padding-left: 1rem; color: var(--foreground);\"><strong>先结论，再原因，最后细节</strong></blockquote>\n<p><strong>一条消息可以这样排</strong></p>\n<ol>\n<li><strong>结论或请求</strong>。你要对方知道或者去做的那件事。</li>\n<li><strong>原因</strong>。为什么，一两句就够。</li>\n<li><strong>细节</strong>。需要的话再补，附件也放这里。</li>\n</ol>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方在等你<strong>先把重点说出来</strong>。\n            </p>\n            <p>Source: U.S. Army Regulation 25-50（AR 25-50）</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "sturgeons-law",
    "order": 16,
    "category": "thinking",
    "title": "斯特金定律",
    "englishTitle": "Sturgeon's Law",
    "summary": "九成的东西都是垃圾，挑着看。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "斯特金定律",
      "subtitleHtml": "Sturgeon's Law",
      "leadHtml": "90% 的东西都是垃圾。<br>\n                    挑着看就行。"
    },
    "bad": {
      "titleHtml": "❌ 每条都当真",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:00 上午",
          "text": "这篇说咖啡对身体好，要多喝",
          "html": "这篇说咖啡对身体好，要多喝"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:30 上午",
          "text": "这篇说咖啡伤心脏，要少喝",
          "html": "这篇说咖啡伤心脏，要少喝"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "11:00 上午",
          "text": "这条评论说第一篇对，100 个赞",
          "html": "这条评论说第一篇对，100 个赞"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "11:30 上午",
          "text": "那条评论说第二篇对，200 个赞",
          "html": "那条评论说第二篇对，200 个赞"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "12:00 中午",
          "text": "所以我到底还能不能喝咖啡？",
          "html": "所以我到底还能不能喝咖啡？"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">谁都能发，就什么都有</h3>\n<p>网上谁都能说话，<strong>没用的远比有用的多</strong>。</p>\n<ul>\n<li><strong>谁都能发</strong>。懂行的和瞎说的，摆在同一个页面上。</li>\n<li><strong>越极端越火</strong>。吓人的说法比平实的说法传得快。</li>\n<li><strong>为了点击</strong>。标题能写多夸张就写多夸张。</li>\n</ul>\n<p>每一条都认真看，人会被淹掉。</p>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 挑着看",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:00 上午",
          "text": "又一篇「震惊！XXX 竟然…」",
          "html": "又一篇「震惊！XXX 竟然…」"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:01 上午",
          "text": "等下，谁写的？引了原始研究没有？",
          "html": "等下，谁写的？引了原始研究没有？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:02 上午",
          "text": "没来源，划走。",
          "html": "没来源，划走。"
        },
        {
          "name": "心态",
          "time": "平和",
          "text": "省了半小时，心情没变",
          "html": "省了半小时，心情没变",
          "tone": "good"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">斯特金定律</h3>\n<p>科幻作家西奥多·斯特金 1957 年说的。</p>\n<blockquote style=\"border-left: 4px solid var(--primary); padding-left: 1rem; color: var(--foreground); font-style: italic;\">Ninety percent of everything is crud.<br><strong>什么东西都有九成是垃圾。</strong></blockquote>\n<p><strong>怎么挑</strong></p>\n<ul>\n<li><strong>看是谁说的</strong>。他懂这个吗？</li>\n<li><strong>找原始出处</strong>。有没有能查到的研究或数据？</li>\n<li><strong>等等再信</strong>。好几个互不相干的来源都这么说了吗？</li>\n<li><strong>敢不看</strong>。大部分东西不值得你花时间。</li>\n</ul>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方希望你<strong>别把网上每条评论都当回事</strong>。\n            </p>\n            <p>提出者：Theodore Sturgeon (1957)</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "greshams-law",
    "order": 17,
    "category": "systems",
    "title": "格雷舍姆法则",
    "englishTitle": "Gresham's Law",
    "summary": "标题党挤走好文章，别再给它送点击。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "格雷舍姆法则",
      "subtitleHtml": "Gresham's Law（网络版）",
      "leadHtml": "烂内容会把好内容挤走。<br>\n                    标题党总比认真写的文章火。"
    },
    "bad": {
      "titleHtml": "❌ 谁点得多谁赢",
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
          "text": "写长文的作者心灰意冷，也改写标题党了…",
          "html": "写长文的作者心灰意冷，也改写标题党了…",
          "tone": "bad"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">劣币驱逐良币</h3>\n<p>1558 年，Thomas Gresham 写信给伊丽莎白一世，提到一个现象。两种钱一起流通，大家会把成色足的藏起来，先花掉成色差的。1858 年，Macleod 用他的名字给这条规律起了名，叫格雷舍姆法则。</p>\n<p><strong>网上也是这样</strong></p>\n<ul>\n<li><strong>推荐看点击</strong>。点的人多，就推给更多人。</li>\n<li><strong>情绪跑得快</strong>。让人生气、害怕的东西，比讲道理的传得远。</li>\n<li><strong>没人有耐心</strong>。标题党三秒抓住人，一篇长文要读半小时。</li>\n</ul>\n<p>写的人只好跟着流量走，<strong>好文章越来越少</strong>。</p>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 自己去找好内容",
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
          "text": "订了几个行业里的 newsletter",
          "html": "订了几个行业里的 newsletter"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "行动",
          "text": "看到认真写的作者，点赞、打赏、转发",
          "html": "看到认真写的作者，点赞、打赏、转发"
        },
        {
          "name": "结果",
          "time": "改变",
          "text": "刷到的东西靠谱多了，也没那么焦虑了",
          "html": "刷到的东西靠谱多了，也没那么焦虑了",
          "tone": "good"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">用点击投票</h3>\n<p>推荐系统看你点了什么。<strong>你点什么，它就多给你什么。</strong></p>\n<ul>\n<li><strong>标题党别点</strong>，好奇也忍一下。</li>\n<li><strong>自己找来源</strong>，订阅、收藏、存书签。</li>\n<li><strong>给好内容撑腰</strong>，点赞、评论、付费。</li>\n<li><strong>少刷信息流</strong>，想看什么自己去搜。</li>\n</ul>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方希望你<strong>多给好内容一点点击，少喂标题党</strong>。\n            </p>\n            <p>原始记录：Thomas Gresham (1558)。命名：Henry Dunning Macleod (1858)</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "assume-public",
    "order": 18,
    "category": "systems",
    "title": "假设公开原则",
    "englishTitle": "Assume Public",
    "summary": "发出去的东西，当它会被所有人看到。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "假设公开原则",
      "subtitleHtml": "Assume Everything is Public",
      "leadHtml": "在网上发的任何东西，<br>\n                    都当它会被永久存着、被所有人看到。"
    },
    "bad": {
      "titleHtml": "❌ 以为没人看见",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "私聊",
          "text": "老板今天开会又在说胡话，真受不了",
          "html": "老板今天开会又在说胡话，真受不了"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "私聊",
          "text": "哈哈哈确实",
          "html": "哈哈哈确实"
        },
        {
          "name": "",
          "text": "（三个月后）",
          "html": "（三个月后）",
          "tone": "meta"
        },
        {
          "character": "tail",
          "name": "尾巴",
          "time": "正式邮件",
          "text": "西打，来我办公室一趟。有人反映你在内部群里说了些不合适的话…",
          "html": "西打，来我办公室一趟。有人反映你在内部群里说了些不合适的话…"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "崩溃",
          "text": "完了…那条被截图了…",
          "html": "完了…那条被截图了…"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">网上没有橡皮擦</h3>\n<p>很多人心里是这么想的。</p>\n<ul>\n<li>私聊就我们俩，没事。</li>\n<li>删了就行，谁记得。</li>\n<li>小号，查不到我。</li>\n<li>仅好友可见，安全。</li>\n</ul>\n<p><strong>实际上</strong></p>\n<ul>\n<li>私聊能被截图。</li>\n<li>你删之前，可能已经有人存了。</li>\n<li>小号能被对上号。</li>\n<li>好友会转发。</li>\n</ul>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 公告栏测试",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "发送前",
          "text": "想吐槽下老板…",
          "html": "想吐槽下老板…"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "暂停",
          "text": "等下，这条要是被贴到公司公告栏上，我会怎样？",
          "html": "等下，这条要是被贴到公司公告栏上，我会怎样？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "决定",
          "text": "算了。有意见当面说，或者约他喝杯咖啡聊。",
          "html": "算了。有意见当面说，或者约他喝杯咖啡聊。"
        },
        {
          "name": "结果",
          "time": "安全",
          "text": "一场麻烦没发生",
          "html": "一场麻烦没发生",
          "tone": "good"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">发之前问一句</h3>\n<blockquote style=\"border-left: 4px solid var(--primary); padding-left: 1rem; color: var(--foreground); font-style: italic;\">这条要是被贴到公司公告栏、转进家族群、上了热搜，<br><strong>我会后悔吗？</strong></blockquote>\n<ul>\n<li><strong>正在气头上</strong>，写完存草稿，第二天再决定发不发。</li>\n<li><strong>敏感的话题</strong>，当面说，别留字。</li>\n<li><strong>私密的信息</strong>，别走你管不住的渠道。</li>\n</ul>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方希望你<strong>发之前再想一下</strong>。\n            </p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "echo-chamber",
    "order": 19,
    "category": "systems",
    "title": "回声室效应",
    "englishTitle": "Echo Chamber",
    "summary": "你只看想看的，推荐再给你多喂一点。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "回声室效应",
      "subtitleHtml": "Echo Chamber / 信息茧房",
      "leadHtml": "你只看自己想看的，<br>\n                    看久了就以为全世界都这么想。"
    },
    "bad": {
      "titleHtml": "❌ 困在茧里",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "刷手机",
          "text": "又刷到一个支持 X 的视频，说得太对了！",
          "html": "又刷到一个支持 X 的视频，说得太对了！"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "继续刷",
          "text": "评论区也全是支持 X 的，看来大家都这么想",
          "html": "评论区也全是支持 X 的，看来大家都这么想"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "自信满满",
          "text": "X 就是共识，反对的都是少数极端分子",
          "html": "X 就是共识，反对的都是少数极端分子"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "现实世界",
          "text": "其实不少人想法跟你相反，只是没推给你…",
          "html": "其实不少人想法跟你相反，只是没推给你…"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "震惊",
          "text": "啊？不会吧？我每天刷到的明明都是…",
          "html": "啊？不会吧？我每天刷到的明明都是…"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">同温层怎么合上的</h3>\n<p>回声室早在推荐算法之前就有了。Sunstein 2001 年写的是，人会主动挑只说自己想听的地方待着，在里面越讨论，立场越极端。推荐系统后来又推了一把，它发现你在哪类内容上停得久，就多给你哪类。</p>\n<ul>\n<li><strong>越看越多</strong>。你看什么，就刷到更多一样的。</li>\n<li><strong>反对的声音没了</strong>。要么看不到，要么一看到就当成敌人。</li>\n<li><strong>越来越偏</strong>。你眼里的主流，其实只是你那个圈子。</li>\n</ul>\n<p>你和想法相反的人用着同一个 App，刷到的却是<strong>两个世界</strong>。</p>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 自己戳破泡泡",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "意识到",
          "text": "等下，我最近只刷到一种说法，是不是推荐在搞我？",
          "html": "等下，我最近只刷到一种说法，是不是推荐在搞我？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "行动",
          "text": "去搜搜反方怎么说",
          "html": "去搜搜反方怎么说"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "发现",
          "text": "人家也有道理，只是看的角度不一样",
          "html": "人家也有道理，只是看的角度不一样"
        },
        {
          "name": "结果",
          "time": "成长",
          "text": "再聊这个话题，心平气和多了",
          "html": "再聊这个话题，心平气和多了",
          "tone": "good"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">怎么出来</h3>\n<p><strong>先看看自己有没有这些迹象</strong></p>\n<ul>\n<li>很久没看到反对意见了。</li>\n<li>觉得所有人都这么想。</li>\n<li>想法不同的人，在你眼里全是蠢货。</li>\n</ul>\n<p><strong>然后</strong></p>\n<ul>\n<li><strong>自己去搜反方</strong>，别等推荐喂给你。</li>\n<li><strong>跟别的圈子的人聊</strong>，当面比网上容易。</li>\n<li><strong>多看几个来源</strong>，立场不同的媒体都翻翻。</li>\n</ul>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方希望你<strong>从自己的泡泡里出来一下</strong>，听听别的声音。\n            </p>\n            <p>概念：Cass Sunstein《Republic.com》(2001)。算法部分见 Eli Pariser《The Filter Bubble》(2011)</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "online-disinhibition",
    "order": 20,
    "category": "systems",
    "title": "在线解除抑制",
    "englishTitle": "Online Disinhibition",
    "summary": "想想当着面你还会不会这么说。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "在线解除抑制效应",
      "subtitleHtml": "Online Disinhibition Effect",
      "leadHtml": "人在网上，<br>\n                    比当面更容易口出恶言，也更容易掏心掏肺。"
    },
    "bad": {
      "titleHtml": "❌ 隔着屏幕就敢说",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "评论区",
          "text": "你这种人就别上网了，滚！",
          "html": "你这种人就别上网了，滚！"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "继续喷",
          "text": "脑子有病吧！废物！",
          "html": "脑子有病吧！废物！"
        },
        {
          "name": "",
          "text": "（后来线下碰到了）",
          "html": "（后来线下碰到了）",
          "tone": "meta"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "现实中",
          "text": "你好，你就是网上那位吧？",
          "html": "你好，你就是网上那位吧？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "现实中",
          "text": "啊…那个…我开玩笑的…不好意思…",
          "html": "啊…那个…我开玩笑的…不好意思…"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">隔着屏幕胆子就大了</h3>\n<p>心理学家 John Suler 注意到，人在网上会做出平时绝不会做的事，他把这叫作<strong>在线去抑制效应</strong>。</p>\n<p><strong>他列了六个原因</strong></p>\n<ul>\n<li><strong>匿名</strong>。他们不知道我是谁。</li>\n<li><strong>看不见</strong>。对方的脸色看不到。</li>\n<li><strong>不同步</strong>。说完不用马上面对对方的反应。</li>\n<li><strong>脑内补全</strong>。看不见人，你会自己补出他的语气和样子，聊着聊着像在跟自己吵。</li>\n<li><strong>像在玩游戏</strong>。觉得网上的事不算数。</li>\n<li><strong>没大没小</strong>。网上谁都能去挑战权威。</li>\n</ul>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 想象他就在对面",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "准备回复",
          "text": "这人说的也太蠢了，我要骂他…",
          "html": "这人说的也太蠢了，我要骂他…"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "暂停",
          "text": "等下，他要是站在我面前，我会这么说吗？",
          "html": "等下，他要是站在我面前，我会这么说吗？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "反思",
          "text": "不会…当面说太过了",
          "html": "不会…当面说太过了"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "理性回复",
          "text": "我不同意，理由有两点…",
          "html": "我不同意，理由有两点…"
        },
        {
          "name": "结果",
          "time": "文明",
          "text": "吵不起来了，两边还各自学到点东西",
          "html": "吵不起来了，两边还各自学到点东西",
          "tone": "good"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">发之前问自己</h3>\n<blockquote style=\"border-left: 4px solid var(--primary); padding-left: 1rem; color: var(--foreground); font-style: italic;\">这个人要是就站在我面前，<br><strong>我会当面这么说吗？</strong></blockquote>\n<ul>\n<li><strong>把对方当个人</strong>。他有家人，会难受，有自己的事。</li>\n<li><strong>冷一冷</strong>。生气时写完先放着，十分钟后再发。</li>\n<li><strong>说事别骂人</strong>。观点可以批，人格别碰。</li>\n</ul>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方希望你<strong>先想想当着面会不会这么说</strong>。\n            </p>\n            <p>提出者：John Suler (《The Psychology of Cyberspace》)</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "dunning-kruger",
    "order": 21,
    "category": "thinking",
    "title": "邓宁-克鲁格效应",
    "englishTitle": "Dunning-Kruger",
    "summary": "懂得越少越敢下结论，别被嗓门唬住。",
    "layout": "comparison",
    "visual": "dunning-kruger-curve",
    "hero": {
      "titleHtml": "邓宁-克鲁格效应",
      "subtitleHtml": "Dunning-Kruger Effect",
      "leadHtml": "懂得越少，<br>\n                    越容易高估自己。"
    },
    "bad": {
      "titleHtml": "❌ 刚学会就出来教人",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "技术群",
          "text": "这代码写得太烂了，我来教你们什么叫架构！",
          "html": "这代码写得太烂了，我来教你们什么叫架构！"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "技术群",
          "text": "你写了几年代码？",
          "html": "你写了几年代码？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "技术群",
          "text": "上周刚学完一门网课，但我已经懂了。你们老程序员思路太旧了！",
          "html": "上周刚学完一门网课，但我已经懂了。你们老程序员思路太旧了！"
        },
        {
          "character": "tail",
          "name": "尾巴",
          "time": "技术群",
          "text": "（不吭声，懒得接）",
          "html": "（不吭声，懒得接）"
        },
        {
          "name": "真相",
          "time": "研究表明",
          "text": "能力最低的那组最容易高估自己，最高的那组反而会稍稍低估自己。",
          "html": "能力最低的那组最容易高估自己，最高的那组反而会稍稍低估自己。",
          "tone": "aside"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">网上为什么杠精多</h3>\n<p>邓宁和克鲁格 1999 年把人按能力分成四组，比较每组的自我评价和实际得分。最低的一组最容易高估自己，最高的一组会稍稍低估自己。两头差得最多，中间差得少。网上流传的那条「愚昧之巅、绝望之谷」曲线，是后来的人拼出来的，论文里没有这张图。</p>\n<p>所以嗓门最大的那个，常常最不靠谱。不懂的人不知道自己不懂，懂的人知道这事有多复杂。</p>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 给自己留个口子",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "学习中",
          "text": "我觉得这个方案没问题，不过可能漏了什么…",
          "html": "我觉得这个方案没问题，不过可能漏了什么…"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "讨论区",
          "text": "我是这么理解的。我刚上手，有不对的大家指出来～",
          "html": "我是这么理解的。我刚上手，有不对的大家指出来～"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "讨论区",
          "text": "思路挺好！补一点，上生产还得考虑 XXX…",
          "html": "思路挺好！补一点，上生产还得考虑 XXX…"
        },
        {
          "name": "结果",
          "time": "成长",
          "text": "西打这么一问，拿到了真正有用的意见",
          "html": "西打这么一问，拿到了真正有用的意见",
          "tone": "good"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">怎么办</h3>\n<p><strong>对自己</strong></p>\n<ul>\n<li><strong>越觉得懂，越要多查一遍</strong>。</li>\n<li><strong>敢说不知道</strong>。说一句「我不知道」，比硬撑着强。</li>\n</ul>\n<p><strong>对别人</strong></p>\n<ul>\n<li><strong>少跟杠精吵</strong>。他不知道自己不知道。</li>\n<li><strong>留意不怎么说话的行家</strong>。最懂的人常常话最少。</li>\n<li><strong>查出处</strong>。别被笃定的语气唬住。</li>\n</ul>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明对方希望你<strong>下狠结论之前，先确认自己真懂</strong>。\n            </p>\n            <p>原始研究：Kruger &amp; Dunning (1999)。这条的流行曲线是后来的四阶段示意，论文里没有这张图。统计上的争议可参考 Gignac &amp; Zajenkowski (2020)。</p><p><a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}</p>"
  },
  {
    "slug": "tldr",
    "order": 22,
    "category": "clarity",
    "title": "太长不看",
    "englishTitle": "TL;DR",
    "summary": "太长了，先给一句摘要。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "TL;DR",
      "subtitleHtml": "Too Long; Didn't Read",
      "leadHtml": "太长不看。<br>\n                    先给一句摘要吧。"
    },
    "bad": {
      "titleHtml": "❌ 一口气倒出来",
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
          "text": "[发了一条 2000 字的消息，从项目背景讲到技术细节，再到个人感想和未来展望]",
          "html": "[发了一条 2000 字的消息，从项目背景讲到技术细节，再到个人感想和未来展望]"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "2:45 下午",
          "text": "所以…你到底想说啥？",
          "html": "所以…你到底想说啥？"
        },
        {
          "character": "tail",
          "name": "尾巴",
          "time": "3:00 下午",
          "text": "太长了，等我有空再看吧…",
          "html": "太长了，等我有空再看吧…"
        },
        {
          "name": "结果",
          "time": "没人看完",
          "text": "要紧的那句埋在中间，没人回。",
          "html": "要紧的那句埋在中间，没人回。",
          "tone": "bad"
        }
      ],
      "explanationHtml": "<div>\n<ul>\n<li><strong>读不完</strong>。多数人看几行就划走了。</li>\n<li><strong>找不到重点</strong>。要紧的那句埋在中间。</li>\n<li><strong>没人回</strong>。最后整条被晾着。</li>\n</ul>\n<p><strong>TL;DR</strong> 原来是读的人在抱怨，现在成了写的人该先做的事。</p>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 先放摘要",
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
          "text": "详情：[点开看完整背景和技术细节]",
          "html": "详情：[点开看完整背景和技术细节]"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "2:32 下午",
          "text": "收到，周一前搞定",
          "html": "收到，周一前搞定"
        }
      ],
      "explanationHtml": "<div>\n<p><strong>怎么写 TL;DR</strong></p>\n<ul>\n<li><strong>摘要放开头</strong>，一两句话说完要点。</li>\n<li><strong>写清要做什么</strong>，谁做、什么时候做完。</li>\n<li><strong>细节折起来</strong>，想看的人自己点开。</li>\n</ul>\n</div>"
    },
    "footerHtml": "<p>这事不大，别跟发链接给你的人<a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。</p>\n            <p>如果你看到这个链接，说明对方希望你<strong>先给一句摘要，大家的时间都不多</strong>。</p>\n            <p>概念来源：互联网俚语，约2000年代初</p>\n            <p><a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}</p>"
  },
  {
    "slug": "rtfm",
    "order": 23,
    "category": "clarity",
    "title": "读该死的手册",
    "englishTitle": "RTFM",
    "summary": "问之前，先翻翻文档。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "RTFM",
      "subtitleHtml": "Read The F***ing Manual",
      "leadHtml": "问之前，<br>\n                    先翻翻文档。"
    },
    "bad": {
      "titleHtml": "❌ 张口就要",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:00 上午",
          "text": "这软件怎么装啊？",
          "html": "这软件怎么装啊？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:05 上午",
          "text": "官网有安装教程，你看了吗？",
          "html": "官网有安装教程，你看了吗？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:06 上午",
          "text": "没，太长了不想看。你直接告诉我呗？",
          "html": "没，太长了不想看。你直接告诉我呗？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:30 上午",
          "text": "环境变量怎么配？为啥一运行就报错？",
          "html": "环境变量怎么配？为啥一运行就报错？"
        },
        {
          "name": "多米诺",
          "time": "11:00 上午",
          "text": "RTFM！文档里写得清清楚楚！",
          "html": "RTFM！文档里写得清清楚楚！",
          "tone": "bad"
        }
      ],
      "explanationHtml": "<div>\n<p><strong>RTFM</strong> 是 Read The F***ing Manual 的缩写，意思是去读那该死的手册。</p>\n<p>手册里没写的，就轮到 <a href=\"/stfw/\">STFW</a> 了，先去搜。</p>\n<ul>\n<li><strong>文档就是答案</strong>。作者花时间写，就是为了回答这些常见问题。</li>\n<li><strong>别人有自己的事</strong>。他不是你的私人助教。</li>\n<li><strong>早被问过了</strong>。你这个问题，可能已经有一百个人问过。</li>\n</ul>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 读完再问",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:00 上午",
          "text": "我照官方文档第 3 步做，出了这个错：[截图]",
          "html": "我照官方文档第 3 步做，出了这个错：[截图]"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "10:01 上午",
          "text": "这个报错我搜过，Stack Overflow 上的办法试了没用。环境是 macOS 14 + Node 20。",
          "html": "这个报错我搜过，Stack Overflow 上的办法试了没用。环境是 macOS 14 + Node 20。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:10 上午",
          "text": "这是已知问题，文档还没更新，加个 --legacy-peer-deps 就行",
          "html": "这是已知问题，文档还没更新，加个 --legacy-peer-deps 就行"
        }
      ],
      "explanationHtml": "<div>\n<p><strong>问之前过一遍</strong></p>\n<ul>\n<li>官方文档读了吗？</li>\n<li>搜过了吗？</li>\n<li>FAQ 看了吗？</li>\n</ul>\n<p>这三样都做过，再把做过的写进问题里，回你的人会快很多。</p>\n</div>"
    },
    "footerHtml": "<p>这事不大，别跟发链接给你的人<a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。</p>\n            <p>如果你看到这个链接，说明对方希望你<strong>先自己找找答案</strong>。</p>\n            <p>概念来源：黑客文化，1979年</p>\n            <p><a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}</p>"
  },
  {
    "slug": "occams-razor",
    "order": 24,
    "category": "thinking",
    "title": "奥卡姆剃刀",
    "englishTitle": "Occam's Razor",
    "summary": "能用简单的原因解释，就先查简单的。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "奥卡姆剃刀",
      "subtitleHtml": "Occam's Razor",
      "leadHtml": "如无必要，勿增假设。<br>\n                    两种解释都说得通，先信假设少的那个。"
    },
    "bad": {
      "titleHtml": "❌ 越想越复杂",
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
          "text": "是竞争对手干的？还是有内鬼把服务器密码泄露了？",
          "html": "是竞争对手干的？还是有内鬼把服务器密码泄露了？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "下午 3:10",
          "text": "我要报警！",
          "html": "我要报警！"
        },
        {
          "name": "多米诺",
          "time": "下午 3:15",
          "text": "兄弟，你 SSL 证书过期了。",
          "html": "兄弟，你 SSL 证书过期了。",
          "tone": "aside"
        }
      ],
      "explanationHtml": "<div>\n<p><strong>奥卡姆剃刀</strong>是很老的一个想问题的办法。下面这句拉丁文常被算到奥卡姆头上，其实是 John Punch 1639 年的说法。奥卡姆自己说的更接近「如无必要，勿假定繁多」。</p>\n<blockquote style=\"border-left: 3px solid #666; padding-left: 1rem; margin: 1rem 0; font-style: italic;\">如无必要，勿增实体。</blockquote>\n<ul>\n<li>先查简单的错，别上来就想阴谋。</li>\n<li>能少一个变量，就少一个。</li>\n<li>从最可能的原因开始排查。</li>\n</ul>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 先查最简单的",
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
          "text": "先看下，静音键是不是按了？",
          "html": "先看下，静音键是不是按了？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "下午 2:03",
          "text": "好了，谢谢…",
          "html": "好了，谢谢…"
        }
      ],
      "explanationHtml": "<div>\n<p><strong>平时怎么用</strong></p>\n<ul>\n<li><strong>查 bug</strong>，先看最常见的，拼写、配置、重启。</li>\n<li><strong>等回复</strong>，对方没回，多半只是在忙。</li>\n<li><strong>看病</strong>，医学院有句老话，听到马蹄声先想马，别想斑马。</li>\n</ul>\n</div>"
    },
    "footerHtml": "<p>这事不大，别跟发链接给你的人<a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。</p>\n            <p>如果你看到这个链接，说明对方希望你<strong>先从最简单的可能查起</strong>。</p>\n            <p>概念提出者：William of Ockham，约1287–1347</p>\n            <p><a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}</p>"
  },
  {
    "slug": "hitchens-razor",
    "order": 25,
    "category": "thinking",
    "title": "希钦斯剃刀",
    "englishTitle": "Hitchens's Razor",
    "summary": "没证据的说法，不用证据就能驳回。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "希钦斯剃刀",
      "subtitleHtml": "Hitchens's Razor",
      "leadHtml": "拿不出证据的说法，<br>\n                    不用证据就能驳回。"
    },
    "bad": {
      "titleHtml": "❌ 张口就指控",
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
          "text": "要什么证据？你去证明他没抄啊！",
          "html": "要什么证据？你去证明他没抄啊！"
        },
        {
          "name": "问题",
          "time": "举证责任倒置",
          "text": "谁说的谁拿证据。让别人证明一件事没发生，这要求没道理。",
          "html": "谁说的谁拿证据。让别人证明一件事没发生，这要求没道理。",
          "tone": "bad"
        }
      ],
      "explanationHtml": "<div>\n<p><strong>希钦斯剃刀</strong>出自克里斯托弗·希钦斯。</p>\n<blockquote style=\"border-left: 3px solid #666; padding-left: 1rem; margin: 1rem 0; font-style: italic;\">无证据提出的主张，可以无证据驳回。</blockquote>\n<ul>\n<li><strong>谁主张，谁举证</strong>。</li>\n<li><strong>你不欠解释</strong>。空口的指控，你没义务一条条去驳。</li>\n<li><strong>省点力气</strong>。没证据的话，不值得认真对待。</li>\n</ul>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 拿证据说话",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "晚上 8:00",
          "text": "我发现这两个产品有几处很像，对比截图在下面：",
          "html": "我发现这两个产品有几处很像，对比截图在下面："
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
          "text": "谢谢你贴出来，这样就能好好聊了。",
          "html": "谢谢你贴出来，这样就能好好聊了。"
        }
      ],
      "explanationHtml": "<div>\n<p><strong>怎么用</strong></p>\n<ul>\n<li><strong>自己下结论时</strong>，把证据一起贴上。</li>\n<li><strong>被人指控时</strong>，客气地请他拿出证据。</li>\n<li><strong>对方拿不出来</strong>，就不用费劲去驳了。</li>\n</ul>\n</div>"
    },
    "footerHtml": "<p>这事不大，别跟发链接给你的人<a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。</p>\n            <p>如果你看到这个链接，说明对方希望你<strong>拿出证据来</strong>。</p>\n            <p>概念提出者：Christopher Hitchens，1949–2011</p>\n            <p><a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}</p>"
  },
  {
    "slug": "poes-law",
    "order": 26,
    "category": "systems",
    "title": "坡定律",
    "englishTitle": "Poe's Law",
    "summary": "不加标记，反讽和真心话分不清。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "坡定律",
      "subtitleHtml": "Poe's Law",
      "leadHtml": "不加个表情或者标记，<br>\n                    反讽和真心话分不清。"
    },
    "bad": {
      "titleHtml": "❌ 被当真了",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "下午 3:00",
          "text": "地球当然是平的，你们都被洗脑了",
          "html": "地球当然是平的，你们都被洗脑了"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "下午 3:05",
          "text": "啥？？你认真的？？",
          "html": "啥？？你认真的？？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "下午 3:07",
          "text": "……我玩梗呢，你不会真以为我信地平说吧？",
          "html": "……我玩梗呢，你不会真以为我信地平说吧？"
        },
        {
          "name": "坡定律",
          "time": "生效了",
          "text": "不加表情或者 /s，反讽和极端观点看起来一模一样。",
          "html": "不加表情或者 /s，反讽和极端观点看起来一模一样。",
          "tone": "aside"
        }
      ],
      "explanationHtml": "<div>\n<p><strong>坡定律</strong>是 Nathan Poe 2005 年在一个论坛里提出来的。</p>\n<p>打字聊天时，<strong>反讽和真心话很难分清</strong>。</p>\n<ul>\n<li>没有语气和表情，读的人看不出你的意思。</li>\n<li>网上真有人信那些离谱说法。</li>\n<li>你当玩笑说的，别人可能当真。</li>\n</ul>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 标出来",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "下午 3:00",
          "text": "地球当然是平的 /s",
          "html": "地球当然是平的 /s"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "下午 3:01",
          "text": "哈哈哈，差点被你骗了",
          "html": "哈哈哈，差点被你骗了"
        }
      ],
      "explanationHtml": "<div>\n<p><strong>怎么避免</strong></p>\n<ul>\n<li>加个表情，让人看出语气。</li>\n<li>反讽结尾加个 <code>/s</code>。</li>\n<li>加个狗头。</li>\n<li>拿不准别人什么意思，就先问。</li>\n</ul>\n</div>"
    },
    "footerHtml": "<p>这事不大，别跟发链接给你的人<a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。</p>\n            <p>如果你看到这个链接，说明对方想提醒你，<strong>你那句话可能被读反了</strong>。</p>\n            <p>概念提出者：Nathan Poe，2005</p>\n            <p><a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}</p>"
  },
  {
    "slug": "brandolinis-law",
    "order": 27,
    "category": "systems",
    "title": "布兰多里尼定律",
    "englishTitle": "Brandolini's Law",
    "summary": "造谣一张嘴，辟谣跑断腿。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "布兰多里尼定律",
      "subtitleHtml": "Brandolini's Law",
      "leadHtml": "驳倒一句胡说要花的力气，<br>\n                    是编出它的十倍。"
    },
    "bad": {
      "titleHtml": "❌ 辟谣的人累死",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "上午 10:00",
          "text": "震惊！科学家证实喝水致癌！快转给家里人！",
          "html": "震惊！科学家证实喝水致癌！快转给家里人！"
        },
        {
          "character": "tail",
          "name": "尾巴",
          "time": "上午 10:01",
          "text": "天哪！已转！",
          "html": "天哪！已转！"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "下午 3:00",
          "text": "[花 5 小时写了 3000 字辟谣，引了 12 篇论文]",
          "html": "[花 5 小时写了 3000 字辟谣，引了 12 篇论文]"
        },
        {
          "name": "结果",
          "text": "谣言 10 万+，辟谣那篇阅读 203",
          "html": "谣言 10 万+，辟谣那篇阅读 203",
          "tone": "bad"
        }
      ],
      "explanationHtml": "<div>\n<p><strong>布兰多里尼定律</strong>又叫胡扯不对称原理。</p>\n<blockquote style=\"border-left: 3px solid #666; padding-left: 1rem; margin: 1rem 0; font-style: italic;\">反驳胡说八道所需的能量，是制造它的十倍。</blockquote>\n<ul>\n<li>编一条谣言，5 秒。</li>\n<li>驳倒它，5 小时。</li>\n<li>谣言传了 10 万+。</li>\n<li>辟谣传了 203。</li>\n</ul>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 让他先拿出处",
      "lines": [
        {
          "character": "domino",
          "name": "多米诺",
          "time": "上午 10:05",
          "text": "原论文有链接吗？哪位科学家？发在哪？",
          "html": "原论文有链接吗？哪位科学家？发在哪？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "上午 10:10",
          "text": "......（沉默）",
          "html": "......（沉默）"
        }
      ],
      "explanationHtml": "<div>\n<p><strong>碰到胡说怎么办</strong></p>\n<ul>\n<li><strong>先要出处</strong>。让说的人自己证明。</li>\n<li><strong>别帮着传</strong>。转发去骂也是在帮它传。</li>\n<li><strong>挑着驳</strong>。每一条都去驳，你会累死。</li>\n<li><strong>用现成的</strong>。已经有人辟过的，直接贴链接。</li>\n</ul>\n</div>"
    },
    "footerHtml": "<p>这事不大，别跟发链接给你的人<a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。</p>\n            <p>如果你看到这个链接，说明对方在提醒你，<strong>别在烂论调上耗太多力气</strong>。</p>\n            <p>概念提出者：Alberto Brandolini，2013</p>\n            <p><a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}</p>"
  },
  {
    "slug": "stfw",
    "order": 28,
    "category": "clarity",
    "title": "善用搜索",
    "englishTitle": "STFW",
    "summary": "先自己搜一下，必应和谷歌都很耐心。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "善用搜索",
      "subtitleHtml": "Search The F***ing Web",
      "leadHtml": "先拿问题去搜一下。<br>\n                    大部分基础问题，第一页就有答案。"
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
          "text": "……",
          "html": "……"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:02",
          "text": "这个搜一下，第一条就是答案。",
          "html": "这个搜一下，第一条就是答案。"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">搜索引擎比人有耐心</h3>\n<p>基础问题大多早就有人问过、答过。你去问一个能直接搜到的问题，要搭进两个人的时间。你在这头干等，对方在那头打字。</p>\n<p><strong>STFW</strong> 和 <a href=\"/rtfm/\"><strong>RTFM</strong></a>（Read The F***ing Manual）是一家人。一个让你搜网页，一个让你翻手册，意思都是先自己动手。这样问得也快。</p>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 带着搜过的结果来问",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:00",
          "text": "我想把 Python 字符串转小写，搜了说是用 .lower()，但我拿 \"STRASSE\" 和 \"Straße\" 比较，.lower() 之后还是不相等，是编码问题吗？",
          "html": "我想把 Python 字符串转小写，搜了说是用\n                            <code>.lower()</code>，但我拿 \"STRASSE\" 和 \"Straße\" 比较，.lower() 之后还是不相等，是编码问题吗？"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:05",
          "text": "不是编码，是大小写折叠。用 .casefold()：'Straße'.casefold() 会变成 'strasse'，.lower() 不会。",
          "html": "不是编码，是大小写折叠。用 <code>.casefold()</code>：<code>'Straße'.casefold()</code> 会变成 <code>'strasse'</code>，<code>.lower()</code> 不会。"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">把你试过的写出来</h3>\n<p>说一句「我搜过 XXX，试了 .lower()，结果还是不对」，对方马上知道你卡在哪，也愿意多花点时间帮你。</p>\n<p>上面这个问题，搜一次拿到 .lower()，比一比发现不对劲，再来问。答的人一句话就能说到点上。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明你这个问题<strong>搜一下就有答案</strong>。\n            </p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "denver-coder-9",
    "order": 29,
    "category": "relation",
    "title": "解决了就把办法写出来",
    "englishTitle": "Who is DenverCoder9?",
    "summary": "问题解决了，把怎么解决的也写上。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "解决了就把办法写出来",
      "subtitleHtml": "Who is DenverCoder9?",
      "leadHtml": "问题解决了，顺手把办法写上。<br>\n                    别只留一句「已解决」。"
    },
    "bad": {
      "titleHtml": "❌ 留下一个死胡同",
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
          "text": "怎么搞定的？？楼主你说啊！我现在的报错跟你一模一样！",
          "html": "怎么搞定的？？楼主你说啊！我现在的报错跟你一模一样！"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">DenverCoder9</h3>\n<p>这个名字出自 <a href=\"https://xkcd.com/979/\" target=\"_blank\">xkcd 979</a>。漫画里有人搜了一晚上，终于找到一个一模一样的问题，帖子停在 2003 年，提问人 DenverCoder9 只回了一句「搞定了」。</p>\n<p>你只回一句「已解决」，这个帖子就会一直挂在搜索结果里。后面搜到它的人点进来，什么也拿不到。</p>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 两句话写清楚",
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
          "text": "更新，解决了。要在 BIOS 里关掉 Fast Boot，驱动降到 v4.2。后面遇到的可以试试。",
          "html": "更新，解决了。要在 BIOS 里关掉 Fast Boot，驱动降到 v4.2。后面遇到的可以试试。"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">写两句就够</h3>\n<p>改了哪个设置、换了哪个版本，写两句就行。几年后有人半夜搜到这个帖子，能少熬一晚上。</p>\n<p>办法后来证明是错的也没关系，回来补一句「这个办法后来又出问题了」，照样有用。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，可能是因为你问题解决了，却<strong>没写怎么解决的</strong>。\n            </p>\n            <p>Inspired by <a href=\"https://xkcd.com/979/\" target=\"_blank\">xkcd</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "no-urgent",
    "order": 30,
    "category": "relation",
    "title": "别喊「紧急」",
    "englishTitle": "No \"Urgent\"",
    "summary": "标题写「救命」，没人会更快来救你。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "别喊「紧急」",
      "subtitleHtml": "Your Emergency ≠ My Emergency",
      "leadHtml": "你那边着急，别人这边不一定。<br>\n                    标题喊「救命」，大家反而先划过去。"
    },
    "bad": {
      "titleHtml": "❌ 狼来了",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "10:00",
          "text": "救命啊！！！大佬救我！！！服务器炸了！急急急在线等！！！",
          "html": "救命啊！！！大佬救我！！！服务器炸了！急急急在线等！！！"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "10:05",
          "text": "（已读不回）",
          "html": "（已读不回）"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">喊得越响，越没人理</h3>\n<p>紧急、跪求、救命，这些词在技术群里天天有人喊，大家早就看麻了。标题里全是感叹号，正文里一行报错都没有，看的人只能读出一个意思，<strong>你觉得自己的时间更值钱</strong>。</p>\n<p>把问题写清楚，比喊十遍救命管用。</p>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 标题就是摘要",
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">标题写清哪里坏了</h3>\n<p>好标题写两件事，<strong>哪里坏了，坏成什么样</strong>。上面这条写了生产环境、连接池耗尽、502，还附了日志，懂的人扫一眼就知道该不该点进去。</p>\n<p>真的急，就付费找人，或者打电话给值班的同事。群里喊得再响，也没人欠你一个马上回复。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>\n                如果你看到这个链接，说明你的<strong>急</strong>多半来自<strong>计划没做好</strong>，或者你想用情绪催别人。\n            </p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "principle-of-charity",
    "order": 31,
    "category": "thinking",
    "title": "善意原则",
    "englishTitle": "Principle of Charity",
    "summary": "先按最讲得通的方式理解对方，再决定要不要反驳。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "善意原则",
      "subtitleHtml": "Principle of Charity",
      "leadHtml": "读到一句让你上火的话，先往讲得通的方向想。<br>\n                    多数时候，对方确实就是那个意思。"
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
          "text": "「还能再优化」也可能是说方向对、细节还能改。你直接挑了最坏的那个意思。",
          "html": "「还能再优化」也可能是说方向对、细节还能改。你直接挑了最坏的那个意思。"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">谁来决定怎么读</h3>\n<p>同一句话能读出好几种意思。屏幕上看不见表情，也听不见语气，人很容易往最坏的方向去补。</p>\n<p>善意原则也没让你当老好人。反驳之前，先把对方的话还原成一个正常人会说的话。还原不出来，就问一句。</p>\n</div>"
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
          "text": "直接问呗，你指的是结构还是措辞？",
          "html": "直接问呗，你指的是结构还是措辞？"
        },
        {
          "character": "cider",
          "name": "西打",
          "time": "14:06",
          "text": "问了，他说是措辞。我白气一场。",
          "html": "问了，他说是措辞。我白气一场。"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">问一句就清楚了</h3>\n<p>把心里那句「他什么意思」换成问对方「你指的是哪一块」，花一句话，就不用在心里演三集电视剧。</p>\n<p>生闷气的是你自己，这一句话最先省下的也是你的力气。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人希望你先别急着把话往坏处读。</p>\n            <p>延伸阅读：<a href=\"https://en.wikipedia.org/wiki/Principle_of_charity\">Wikipedia · Principle of charity</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "grice-maxims",
    "order": 32,
    "category": "clarity",
    "title": "格莱斯准则",
    "englishTitle": "Grice's Maxims",
    "summary": "说够、说真、说相关的、说清楚。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "格莱斯准则",
      "subtitleHtml": "Grice's Maxims",
      "leadHtml": "对方要的是信息。<br>\n                    修辞写得再好，也顶不了报价单。"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">四条准则</h3>\n<ul>\n<li><strong>量</strong>。该说的一次说完，别挤牙膏。</li>\n<li><strong>质</strong>。没把握的标出来，别混在确定的里面。</li>\n<li><strong>关系</strong>。问什么答什么。</li>\n<li><strong>方式</strong>。别绕，一个词能说完的事别用三个从句。</li>\n</ul>\n<p>哲学家格莱斯（H. P. Grice）把合作对话拆成了这四条。上面那段对话四条全踩了，聊了五句，报价还是没有。</p>\n</div>"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">少让对方猜</h3>\n<p>「不太成熟的想法」「随便说说」这种开头，听着谦虚，可哪里没把握，对方还得自己去猜。</p>\n<p>哪一段没把握，就直接说哪一段。上面这条写了缺什么、什么时候给，对方回一句就能接上。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明你的消息铺垫太多，正事太少。</p>\n            <p>延伸阅读：<a href=\"https://en.wikipedia.org/wiki/Cooperative_principle\">Wikipedia · Cooperative principle</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "context-collapse",
    "order": 33,
    "category": "clarity",
    "title": "语境崩塌",
    "englishTitle": "Context Collapse",
    "summary": "私聊的话发进群，意思就变了。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "语境崩塌",
      "subtitleHtml": "Context Collapse",
      "leadHtml": "同一句话，两个人私聊时说，和发到五百人的群里，<br>\n                    听起来完全是两回事。"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">听的人换了，意思也跟着换</h3>\n<p>语境崩塌（context collapse）说的是一句话原本只说给几个人听，后来被放到一大群人面前，听的人换了，意思也跟着变。</p>\n<p>截图最容易出事。前后文、语气、你当时为什么这么说，全被截掉了，只剩下最容易被误读的那几行。</p>\n</div>"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">转发前问一句</h3>\n<p>先问对方能不能发，再去掉名字和能认出是谁的细节。这几步做完再发，基本不会出事。</p>\n<p>私聊里说的话，默认就只给你一个人听。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人提醒你，<strong>这段话的听众变了</strong>。</p>\n            <p>延伸阅读：<a href=\"https://en.wikipedia.org/wiki/Context_collapse\">Wikipedia · Context collapse</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "medium-is-the-message",
    "order": 34,
    "category": "clarity",
    "title": "媒介即讯息",
    "englishTitle": "The Medium Is the Message",
    "summary": "发语音、打字还是打电话，对方都看在眼里。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "媒介即讯息",
      "subtitleHtml": "The Medium Is the Message",
      "leadHtml": "用什么方式发，<br>\n                    和发了什么一样重要。"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">省事的是谁</h3>\n<p>麦克卢汉的原意要重得多。他说媒介本身会改变人怎么感知、社会怎么组织，内容只是装在里面的东西。放到群聊里，可以借他的话推一步，你挑的发送方式，也在替你说话。这一步是推论，他没这么说过。</p>\n<p>发语音，省的是你整理的工夫，费的是对方听的工夫。不方便外放，没听清要重听，过后想找还搜不到，这些都落在对方头上。</p>\n<p>三条语音你录得很快，对方得花三分钟听完。</p>\n</div>"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">先问一句方便吗</h3>\n<p>急事打电话，复杂的事打字，要反复对的事写成文档。方式选错了，内容再好也送不到对方手里。</p>\n<p>非发语音不可，先问一句「方便听吗」，两秒钟的事。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明你挑的发送方式，给对方添了活。</p>\n            <p>延伸阅读：<a href=\"https://en.wikipedia.org/wiki/The_medium_is_the_message\">Wikipedia · The medium is the message</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "no-is-a-complete-sentence",
    "order": 35,
    "category": "relation",
    "title": "拒绝不需要理由",
    "englishTitle": "No Is a Complete Sentence",
    "summary": "一个「不」字，就是完整的回答。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "拒绝不需要理由",
      "subtitleHtml": "No Is a Complete Sentence",
      "leadHtml": "不想去、不想帮、不想借，<br>\n                    直接说不就行。"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">含糊的拒绝会被当成答应</h3>\n<p>「看情况」「再说吧」，对方听到的常常是「有戏」。你觉得自己留了余地，对方已经开始等你了。</p>\n<p>编理由还有个麻烦，对方会帮你把理由解决掉。「忙？那换个时间。」你只好再编一个。</p>\n</div>"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">说完就完了</h3>\n<p>拒绝用不着交代原因。一个明确的「不」，对方马上就能去找别人，比一个随时会被推翻的理由省事。</p>\n<p>关系近的话，可以补一句你能帮上的，比如「这周不行，下周三可以帮你拉一趟」。帮不上就别补。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人希望你别再用「再看吧」拖着。</p>\n            <p>出处不明：1958 年已见于报纸。Gavin de Becker 与 Anne Lamott 都用过这个说法。</p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "reply-all",
    "order": 36,
    "category": "clarity",
    "title": "别回复全部",
    "englishTitle": "Reply All",
    "summary": "三十个人在收件人里，没必要人人都看你说收到。",
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">一句收到，三十条通知</h3>\n<p>点一次「回复全部」，列表里每个人都会多一条通知。三十个人的列表，大家轮流说一遍收到，就是三十条。</p>\n<p>真正要紧的那封回复，就埋在这一堆收到里了。</p>\n</div>"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">两个按钮</h3>\n<p>「回复」只发给发件人，「回复全部」会发给所有人。点之前看一眼收件人那栏，一秒钟。</p>\n<p>有进展要让所有人知道，就改原文档，或者发一封汇总，别让三十个人各回一句。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明那封邮件里已经有太多「收到」了。</p>\n            <p>Source: <a href=\"https://www.rfc-editor.org/rfc/rfc1855\">RFC 1855 · Netiquette Guidelines</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "one-message",
    "order": 37,
    "category": "clarity",
    "title": "一条说完",
    "englishTitle": "One Message, Please",
    "summary": "一句话拆成十条发，对方只能等你连载完。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "一条说完",
      "subtitleHtml": "One Message, Please",
      "leadHtml": "聊天框又不是弹幕。<br>\n                    一句话能说完的，别发七条。",
      "effect": "one-message-split",
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">每条都会响一下</h3>\n<p>每发一条，对方的手机就响一次。七条消息，就是把人打断七次。</p>\n<p>一句话拆成七段，对方得等你全发完，才知道这事急不急。</p>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 一条打包",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "11:02",
          "text": "有个事想确认一下，周五的场地我们几点到？我这边要订车，今天得定下来。",
          "html": "有个事想确认一下，周五的场地我们几点到？我这边要订车，今天得定下来。"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">想好了再发</h3>\n<p>发之前想一下，对方要回什么，需要知道哪些事，这事急不急。想清楚了，一条发完。</p>\n<p>内容真的长到要分开发，就标上序号，让对方知道后面还有几条。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明你刚才连发了六条，没一条说到正事。</p>\n            <p>Source: <a href=\"https://www.rfc-editor.org/rfc/rfc1855\">RFC 1855 · Netiquette Guidelines</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "lurk-moar",
    "order": 38,
    "category": "relation",
    "title": "先潜水，再发言",
    "englishTitle": "Lurk Moar",
    "summary": "进新群先看三天，比发自我介绍管用。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "先潜水，再发言",
      "subtitleHtml": "Lurk Moar",
      "leadHtml": "每个群都有自己的规矩，<br>\n                    群公告里一般不写。"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">先看看大家怎么聊</h3>\n<p>Lurk moar 是早年论坛的黑话，意思是先潜水，多看几天，别急着发言。老成员这么说，是想让新人先摸清这个群在聊什么。</p>\n<p>群里多少人、彼此什么关系、哪些话题不碰、玩笑开到什么程度，都在聊天记录里。不看就开口，很容易一句话踩到别人。</p>\n</div>"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">潜水也算在场</h3>\n<p>看上三天，大概就知道这个群在聊什么、谁常说话、什么话有人接。然后挑一个具体的话题开口，比十行自我介绍管用。</p>\n<p>老成员也一样，换了个群，就重新潜一次。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人建议你先看看大家怎么说话。</p>\n            <p>Source: <a href=\"https://knowyourmeme.com/memes/lurk-moar\">Know Your Meme · Lurk Moar</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
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
      "leadHtml": "碰到一条看不懂的规矩，<br>\n                    先当它是在防一件你没见过的事。"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">先弄明白，再动手</h3>\n<p>切斯特顿讲过一个比方。路上有道栅栏，你不知道它为什么在那儿，就先别拆。等你弄清楚它拦的是什么，再决定拆不拆。</p>\n<p>很多看着多余的规矩，是出过一次事才定下来的。上面那个财务复核，就是拿八千块换来的。</p>\n</div>"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">说得清才能改</h3>\n<p>你能说清它在防什么、现在还用不用得着，再去动它。</p>\n<p>说不清就先留着。别人交过的学费，你没必要再交一遍。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明你想拆的东西，别人还靠它挡着事。</p>\n            <p>延伸阅读：<a href=\"https://en.wikipedia.org/wiki/Wikipedia:Chesterton%27s_fence\">Wikipedia · Chesterton's fence</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
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
      "leadHtml": "别人出错，你怪他这个人。<br>\n                    自己出错，你怪当时的情况。"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">两套标准</h3>\n<p>看别人出错，人习惯怪他的性格。看自己出错，就怪路上堵、事情多。心理学管这个叫基本归因错误。</p>\n<p>麻烦在于，一旦你认定一个人不靠谱，他后面做什么，你都会往这上面套。</p>\n</div>"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">先问一句发生了什么</h3>\n<p>用不着你多宽容。下结论之前，先问一句「他遇到什么事了」。</p>\n<p>多数时候答案是堵车、孩子有事、身体不舒服，和你自己迟到时的理由差不多。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人觉得你把人想得太坏了。</p>\n            <p>延伸阅读：<a href=\"https://en.wikipedia.org/wiki/Fundamental_attribution_error\">Wikipedia · Fundamental attribution error</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "confirmation-bias",
    "order": 41,
    "category": "thinking",
    "title": "确认偏误",
    "englishTitle": "Confirmation Bias",
    "summary": "你去搜，多半是想找能证明自己对的东西。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "确认偏误",
      "subtitleHtml": "Confirmation Bias",
      "leadHtml": "心里有了结论，<br>\n                    就只找得到支持它的东西。"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">搜什么，就看到什么</h3>\n<p>搜索框里加上「差评」两个字，好评就全被筛掉了。这样查到的，只会是你想要的那些。</p>\n<p>确认偏误难就难在你确实查了，也确实看到了证据，只是另一半你没去看。</p>\n</div>"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">专门去找反例</h3>\n<p>有个简单的办法自查。搜出来的东西全都支持你，多半是搜的方式有问题。</p>\n<p>更稳的做法是先把结论写下来，再去找能推翻它的证据。找了一圈没找到，这个结论才站得住。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明你的证据只看了一半。</p>\n            <p>延伸阅读：<a href=\"https://en.wikipedia.org/wiki/Confirmation_bias\">Wikipedia · Confirmation bias</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "survivorship-bias",
    "order": 42,
    "category": "thinking",
    "title": "幸存者偏差",
    "englishTitle": "Survivorship Bias",
    "summary": "你看到的，全是活下来的那些。",
    "layout": "comparison",
    "visual": "survivorship-funnel",
    "hero": {
      "titleHtml": "幸存者偏差",
      "subtitleHtml": "Survivorship Bias",
      "leadHtml": "经验都是成功的人写的，<br>\n                    失败的人没机会出来说话。"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">没回来的那些</h3>\n<p>二战时有人统计返航飞机上的弹孔，一开始打算加固弹孔最密的地方。后来统计学家 Abraham Wald 提醒，这些都是飞回来的飞机，打中要害的那些根本没回来。</p>\n<p>网上的成功经验也一样，你读到的几乎都出自飞回来的那批。</p>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 先找没成的人",
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">问一句分母</h3>\n<p>听到「他们都是这么做的」，先问一句，这么做了没成的有多少。</p>\n<p>找不到这个数，那条经验就只能当故事听。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人提醒你，<strong>失败的人不在你的样本里</strong>。</p>\n            <p>延伸阅读：<a href=\"https://en.wikipedia.org/wiki/Survivorship_bias\">Wikipedia · Survivorship bias</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "sunk-cost",
    "order": 43,
    "category": "thinking",
    "title": "沉没成本",
    "englishTitle": "Sunk Cost Fallacy",
    "summary": "已经投了很多，也不用接着投。",
    "layout": "comparison",
    "visual": "sunk-cost-bars",
    "hero": {
      "titleHtml": "沉没成本",
      "subtitleHtml": "Sunk Cost Fallacy",
      "leadHtml": "要不要接着做，<br>\n                    只看接下来值不值。"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">花掉的拿不回来</h3>\n<p>沉没成本指已经花出去、怎么也收不回来的时间和钱。决定接下来做什么的时候，它不该算进去。</p>\n<p>可人最怕白忙一场，于是接着往里投，想证明之前没白费，结果亏得更多。</p>\n</div>"
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
          "text": "换来一个结论，这条路走不通。比再花四个月便宜。",
          "html": "换来一个结论，这条路走不通。比再花四个月便宜。"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">换个问法</h3>\n<p>问自己一句，今天从零开始，我还会选它吗。这么一问，已经花掉的那部分就不会掺进来了。</p>\n<p>答案是不会，就停下。花掉的时间和钱，你接着做也回不来。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人想让你别再为过去买单。</p>\n            <p>延伸阅读：<a href=\"https://en.wikipedia.org/wiki/Sunk_cost\">Wikipedia · Sunk cost</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "correlation-is-not-causation",
    "order": 44,
    "category": "thinking",
    "title": "相关不是因果",
    "englishTitle": "Correlation ≠ Causation",
    "summary": "两件事一起出现，未必有一件导致另一件。",
    "layout": "comparison",
    "visual": "correlation-panels",
    "hero": {
      "titleHtml": "相关不是因果",
      "subtitleHtml": "Correlation ≠ Causation",
      "leadHtml": "冰淇淋卖得多的月份，溺水的人也多，<br>\n                    可冰淇淋没淹死过人。"
    },
    "bad": {
      "titleHtml": "❌ 一起发生就下结论",
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">至少四种解释</h3>\n<p>两件事总是一起出现，可能是 A 导致 B，可能是 B 导致 A，可能是另一件事 C 同时带出了 A 和 B，也可能纯属巧合。</p>\n<p>上面的插件留存就是第二种的样子。看到一起出现就认定是因果，等于挑了最省事的那个解释，另外三个都没去排除。</p>\n</div>"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">怎么验证</h3>\n<p>能做对照实验就做。做不了，至少问自己三句。会不会反过来？有没有第三个因素？样本是不是用户自己挑出来的？</p>\n<p>相关只能告诉你往哪儿查，结论还得查完才有。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人要你先把<strong>一起发生</strong>和<strong>因为所以</strong>分开。</p>\n            <p>延伸阅读：<a href=\"https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation\">Wikipedia · Correlation does not imply causation</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "steelmanning",
    "order": 45,
    "category": "thinking",
    "title": "先搭最强版本",
    "englishTitle": "Steelmanning",
    "summary": "反驳之前，先把对方的话复述到他点头。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "先搭最强版本",
      "subtitleHtml": "Steelmanning",
      "leadHtml": "把对方的话改得弱一点再驳倒，很容易，<br>\n                    可那场争论你其实没赢。"
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
          "text": "差很多。他说的是带新人，没说所有人。",
          "html": "差很多。他说的是带新人，没说所有人。"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">稻草人最好打</h3>\n<p>先把对方的观点换成一个谁都会反对的说法，再把它驳得体无完肤，这叫稻草人谬误。嘴上赢了，事情没谈成。</p>\n<p>很多时候人也不是故意的。你记住的，常常是自己生气时理解的那个版本。</p>\n</div>"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">先复述一遍</h3>\n<p>反驳之前先说一句「你的意思是……对吗？」。对方点头了，再开始反驳。</p>\n<p>复述的时候对方老摇头，多半是你还没听懂他在说什么。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明你驳倒的，可能是你自己扎的稻草人。</p>\n            <p>延伸阅读：<a href=\"https://en.wikipedia.org/wiki/Straw_man\">Wikipedia · Straw man（steelman 是反过来的做法，两者并不完全对称）</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "bystander-effect",
    "order": 46,
    "category": "systems",
    "title": "旁观者效应",
    "englishTitle": "Bystander Effect",
    "summary": "群里没人回，大家多半都看见了。",
    "layout": "comparison",
    "visual": "bystander-curve",
    "hero": {
      "titleHtml": "旁观者效应",
      "subtitleHtml": "Bystander Effect",
      "leadHtml": "在场的人越多，<br>\n                    站出来的人越少。"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">人人都觉得别人会管</h3>\n<p>在场的人越多，每个人越觉得会有别人出手。群友也没那么冷漠，只是一件事分给了一百个人，落到每个人头上就只剩一点点。</p>\n<p>在群里问「有人能帮忙吗」，问的是所有人，结果就没有哪个人觉得这是在问自己。</p>\n</div>"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">把「有人」换成名字</h3>\n<p>点名，说清要什么，给个时间。这样一来，要回的就从所有人变成了一个人。</p>\n<p>被点名的人可以拒绝，但他至少知道这件事在等他。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明你那句「有人吗」，没人觉得是在问自己。</p>\n            <p>延伸阅读：<a href=\"https://en.wikipedia.org/wiki/Bystander_effect\">Wikipedia · Bystander effect</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "streisand-effect",
    "order": 47,
    "category": "systems",
    "title": "斯特赖桑德效应",
    "englishTitle": "The Streisand Effect",
    "summary": "越想删掉，看的人越多。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "斯特赖桑德效应",
      "subtitleHtml": "The Streisand Effect",
      "leadHtml": "想让一件事没人知道，<br>\n                    删它往往最不管用。"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">删了也是新闻</h3>\n<p>2003 年，芭芭拉·斯特赖桑德起诉一位摄影师，想让一张拍到她海边豪宅的航拍照消失。起诉之前，这张照片只被下载过六次，消息传开后，一个月里有四十多万人看过它。</p>\n<p>你一删，大家就知道这里有东西可看了。</p>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 先算传播账",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "18:20",
          "text": "那张图现在就几十个人看到，删了可能传得更开。我先联系发帖人，把关键信息改掉。",
          "html": "那张图现在就几十个人看到，删了可能传得更开。我先联系发帖人，把关键信息改掉。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "18:22",
          "text": "对，能私下解决就别公开处理。",
          "html": "对，能私下解决就别公开处理。"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">动手前先问三件事</h3>\n<p>现在有多少人看到了？删了会不会自己变成新闻？有没有动静更小的办法，比如改掉信息、让帖子沉下去、私下找发帖人谈？</p>\n<p>这三件想清楚了，再决定要不要动手。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明你这一删，正在帮它传得更开。</p>\n            <p>延伸阅读：<a href=\"https://en.wikipedia.org/wiki/Streisand_effect\">Wikipedia · Streisand effect</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "eternal-september",
    "order": 48,
    "category": "systems",
    "title": "永恒九月",
    "englishTitle": "Eternal September",
    "summary": "新人来得太多，老规矩就慢慢没人守了。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "永恒九月",
      "subtitleHtml": "Eternal September",
      "leadHtml": "新人天天来，<br>\n                    一个社区的老规矩就教不过来了。"
    },
    "bad": {
      "titleHtml": "❌ 只会说以前不这样",
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">九月没再结束</h3>\n<p>早年 Usenet 每年九月都会来一批大学新生，老用户教上一两个月，规矩也就教会了。1993 年 9 月，AOL 给自家用户开了 Usenet 入口，新人从此天天来，老用户说，那以后每天都是九月。</p>\n<p>一个群变得乱糟糟的，多半怪不到哪一个人头上，是人一下子来得太多了。</p>\n</div>"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">别靠老成员挨个提醒</h3>\n<p>人一多，靠老成员一个个提醒是撑不住的。把规矩写进入群流程、自动回复和置顶，新人一进来就能看到。</p>\n<p>天天怀念以前的群，群也回不到以前。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明这个群正在过它的九月。</p>\n            <p>延伸阅读：<a href=\"https://en.wikipedia.org/wiki/Eternal_September\">Wikipedia · Eternal September</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "goodharts-law",
    "order": 49,
    "category": "systems",
    "title": "古德哈特定律",
    "englishTitle": "Goodhart's Law",
    "summary": "一个数字拿来考核，它就不准了。",
    "layout": "comparison",
    "visual": "goodhart-divergence",
    "hero": {
      "titleHtml": "古德哈特定律",
      "subtitleHtml": "Goodhart's Law",
      "leadHtml": "数字一旦拿来考核，<br>\n                    大家就会想办法把数字做好看。"
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
          "text": "我猜到了。",
          "html": "我猜到了。"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">考什么，就凑什么</h3>\n<p>经济学家古德哈特 1975 年说过，一个统计规律被拿来当管理手段，它就会开始失灵。后来人类学家 Marilyn Strathern 把这话说得更好记，一项指标变成了目标，就不再是好指标。</p>\n<p>原因很简单，大家会去凑那个数，它本来要量的那件事就没人管了。上面的客服发「您好」「稍等」凑条数，就是这么来的。</p>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 两个指标一起看",
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">别让一个数说了算</h3>\n<p>至少配一个往反方向拉的指标。看速度，也看质量。看量，也看投诉。两个一起看，谁也凑不了数。</p>\n<p>数字只是替你去量那件事的工具，事情本身才是你要的。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人发现你们的数字在骗人。</p>\n            <p>延伸阅读：<a href=\"https://en.wikipedia.org/wiki/Goodhart%27s_law\">Wikipedia · Goodhart's law</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "dont-feed-the-trolls",
    "order": 50,
    "category": "systems",
    "title": "别喂 troll",
    "englishTitle": "Don't Feed the Trolls",
    "summary": "你回他一句，他就赢一次。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "别喂 troll",
      "subtitleHtml": "Don't Feed the Trolls",
      "leadHtml": "有些人来这儿就是想看你急，<br>\n                    根本没打算讨论。"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">他就等你急</h3>\n<p>Troll 没打算说服你。他想让你花时间、上火，然后把你的回复截图拿去乐。</p>\n<p>你越认真解释，他手里的素材越多。这场对话里你唯一产出的就是火气，最后还归了他。</p>\n</div>"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">不回，不转，不留</h3>\n<p>别回复，别转发，该拉黑就拉黑，该交给管理员就交。他等不到你的反应，这出戏就唱不下去。</p>\n<p>非回不可的话，就当回给旁边看热闹的人，一句话说完就走，别跟他来第二轮。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人建议你别再回了。</p>\n            <p>延伸阅读：<a href=\"https://en.wikipedia.org/wiki/Don%27t_feed_the_troll\">Wikipedia · Don't feed the troll</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "no-jargon",
    "order": 51,
    "category": "clarity",
    "title": "说人话",
    "englishTitle": "No Jargon",
    "summary": "缩写和黑话一多，新人就插不上话了。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "说人话",
      "subtitleHtml": "No Jargon",
      "leadHtml": "你少打的几个字，<br>\n                    对方可能要查半小时。",
      "effect": "jargon-swap",
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">黑话能认人，也能挡人</h3>\n<p>黑话能让自己人一听就认出彼此，同时也让外人一句都听不懂。在团队里满嘴黑话，新人每句话都得先猜一遍。</p>\n<p>更麻烦的是，听不懂的人多半不会问。问一次被笑话，以后就不吭声了。</p>\n</div>"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">第一次写全，后面随便</h3>\n<p>一个词第一次出现，写全称或者跟一句解释，后面再用缩写。多打几个字，群里就没人需要猜。</p>\n<p>要是这个词你自己都得想一下才说得清，就换个说法。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人被你的缩写卡住了，又不好意思问。</p>\n            <p>Source: <a href=\"https://github.com/itorr/nbnhhsh\">itorr/nbnhhsh ·「能不能好好说话？」</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "correct-in-private",
    "order": 52,
    "category": "relation",
    "title": "私下纠错",
    "englishTitle": "Correct in Private",
    "summary": "当众挑错，道理赢了，人得罪了。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "私下纠错",
      "subtitleHtml": "Correct in Private",
      "leadHtml": "纠错是为了让对方改过来，<br>\n                    没必要让全群都看见他错了。"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">当众挑错的两笔账</h3>\n<p>先是对方那笔。当着一群人被挑错，人会先顾面子，问题放到后面再说。</p>\n<p>还有你自己那笔。群里其他人看在眼里，知道你随时会点名，以后说话都会先掂量一下。</p>\n</div>"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">夸在群里，错私下说</h3>\n<p>这条说不清最早是谁讲的，一直都管用。当众夸人，大家都高兴。当众挑错，对方会记很久。</p>\n<p>错误影响到了所有人，就在群里补一句数据更新了，以这一版为准，不用提是谁弄错的。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人宁愿私聊跟你说，也不想在群里让你下不来台。</p>\n            <p>延伸阅读：<a href=\"https://en.wikipedia.org/wiki/Netiquette\">Wikipedia · Netiquette（Virginia Shea）</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "observation-not-judgment",
    "order": 53,
    "category": "relation",
    "title": "说事实，不说评价",
    "englishTitle": "Observation, Not Judgment",
    "summary": "「你总是拖」是下定义，「晚了两天」是说事。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "说事实，不说评价",
      "subtitleHtml": "Observation, Not Judgment",
      "leadHtml": "一下定义，对方就开始辩。<br>\n                    说清发生了什么，他才好改。"
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
          "text": "那你直接说这次晚了就行，别说我总是这样。",
          "html": "那你直接说这次晚了就行，别说我总是这样。"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">「总是」一找就破</h3>\n<p>你一说「总是」「从来不」，对方只要找出一次例外，整句话就站不住了。</p>\n<p>接下来两个人就在争到底是不是总是，这次为什么晚了，没人再提。</p>\n</div>"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">观察、感受、需要、请求</h3>\n<p>非暴力沟通把这件事拆成四步。先说看到了什么，再说你的感受和需要，最后提一个具体的请求。</p>\n<p>第一步最容易跳过，也最管用。上面那句只说了晚了两天、排期被顶掉，对方没什么可辩的，只能接着谈事。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人希望你把「你总是」换成「这一次」。</p>\n            <p>延伸阅读：<a href=\"https://en.wikipedia.org/wiki/Nonviolent_Communication\">Wikipedia · Nonviolent Communication</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "ring-theory",
    "order": 54,
    "category": "relation",
    "title": "先给耳朵，再给方案",
    "englishTitle": "Ring Theory",
    "summary": "吐苦水的人想找人听，没想找人出方案。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "先给耳朵，再给方案",
      "subtitleHtml": "Ring Theory",
      "leadHtml": "安慰往圈里给，<br>\n                    抱怨往圈外倒。"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">他没要清单</h3>\n<p>吐苦水的人多半知道该怎么办，他只是想有人听着。你一上来就列方案，他听到的是，你的累不重要，先解决问题。</p>\n<p>后面那句「那你早说啊」更伤人，没听懂还怪到了对方头上。</p>\n</div>"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">comfort in, dump out</h3>\n<p>心理学家苏珊·西尔克提过一个环形理论。出事的人站在最里面一圈，越亲近的人离他越近。安慰只往里面那圈给，抱怨只往外面那圈倒。</p>\n<p>平时聊天也用得上。先问一句对方要你听着还是要你出主意，就少一场误会。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人现在只想有人听着，不想听你出主意。</p>\n            <p>延伸阅读：<a href=\"https://en.wikipedia.org/wiki/Ring_theory_(psychology)\">Wikipedia · Ring theory（Susan Silk）</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "straight-talk-is-not-rudeness",
    "order": 55,
    "category": "relation",
    "title": "说话直不是免死金牌",
    "englishTitle": "Straight Talk Is Not Rudeness",
    "summary": "直接说的是内容，态度用不着跟着冲。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "说话直不是免死金牌",
      "subtitleHtml": "Straight Talk Is Not Rudeness",
      "leadHtml": "「我说话直，你别介意」，<br>\n                    很多时候意思是我要冒犯你了，你自己消化。"
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
          "text": "说不上来就算不上直，你是还没想清楚。",
          "html": "说不上来就算不上直，你是还没想清楚。"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">直和冲是两回事</h3>\n<p>「我说话直」这句一出口，就先给对方派了个活，接住你的情绪，还不许生气。</p>\n<p>直说的人，内容说得明白，态度也不伤人。上面那句说不出哪里不行，只能算一个感觉，对方拿着也没法改。</p>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 具体，且给出方向",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "16:40",
          "text": "这版我觉得不行，问题在第二部分的论证。结论有了，没有数据撑着。",
          "html": "这版我觉得不行，问题在第二部分的论证。结论有了，没有数据撑着。"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">在乎人，也敢直说</h3>\n<p>Radical Candor 这本书把反馈分成四格。既在乎对方，又敢直说，才叫坦诚。只直说不在乎，对方只觉得被扎了一下。</p>\n<p>说之前问问自己，这句话是想让他改好，还是只想自己说个痛快。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明你的「直」让别人只收到了刺。</p>\n            <p>Source: <a href=\"https://www.radicalcandor.com/\">Radical Candor · Kim Scott</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "answer-then-explain",
    "order": 56,
    "category": "clarity",
    "title": "先回答，再解释",
    "englishTitle": "Answer, Then Explain",
    "summary": "别人问能不能，先说能还是不能。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "先回答，再解释",
      "subtitleHtml": "Answer, Then Explain",
      "leadHtml": "对方问的是结论，<br>\n                    你先说了一大段背景。"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">答案埋在最后</h3>\n<p>你说的都是实话，可对方只想要一个字。他得听完一整段才拿到答案，中间还得自己分辨哪句才是结论。</p>\n<p>更常见的情况是他没耐心听完，就当成「应该能」去排了。</p>\n</div>"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">倒金字塔</h3>\n<p>新闻写作讲倒金字塔，最要紧的放第一句，细节按重要程度往后排。读者读到哪里停下，都已经知道结论了。</p>\n<p>聊天比看报更容易被打断，第一句就该是答案。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明对方听了半天，还没听到你的答案。</p>\n            <p>延伸阅读：<a href=\"https://en.wikipedia.org/wiki/Inverted_pyramid_(journalism)\">Wikipedia · Inverted pyramid</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "passive-aggressive-texting",
    "order": 57,
    "category": "relation",
    "title": "别用标点甩脸色",
    "englishTitle": "Passive-Aggressive Texting",
    "summary": "回个「哦」「行吧」「。」，对方只能去猜你的脸色。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "别用标点甩脸色",
      "subtitleHtml": "Passive-Aggressive Texting",
      "leadHtml": "文字里听不出语气，<br>\n                    标点就替你甩了脸色。"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">让对方去猜</h3>\n<p>不满不直说，回个「行吧」让对方自己难受。这招挺好使，对方只能猜，猜错了还算他的。</p>\n<p>可问题一次都没说出口，火已经先发过一轮了。</p>\n</div>"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">说一句，省一场猜谜</h3>\n<p>回个「行吧」「哦」「随便」，对方得像做阅读理解一样琢磨你到底什么意思。</p>\n<p>不想去就说不想去，不高兴就说哪里不高兴。文字本来就够冷了，别再让对方猜你心情。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人没读懂你回的那个「哦」。</p>\n            <p>延伸阅读：<a href=\"https://en.wikipedia.org/wiki/Passive-aggressive_behavior\">Wikipedia · Passive-aggressive behavior</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "hindsight-bias",
    "order": 58,
    "category": "thinking",
    "title": "我早说过",
    "englishTitle": "Hindsight Bias",
    "summary": "事后回头看，什么都像是早就该知道的。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "我早说过",
      "subtitleHtml": "Hindsight Bias",
      "leadHtml": "说一句「早就告诉过你」，<br>\n                    显得你聪明，事情还是没解决。"
    },
    "bad": {
      "titleHtml": "❌ 拿结果倒推当初",
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">记忆会偷偷改答案</h3>\n<p>知道结果以后，人会觉得自己当初早就料到了。你当时只说了「再看看」，回想起来就成了「我当时就觉得不对」。</p>\n<p>拿改过的记忆去复盘，最后只会得出一个结论，我果然是对的。</p>\n</div>"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">复盘只看当时</h3>\n<p>复盘问两件事就够了。当时手上有哪些信息？按那些信息，这个决定说得过去吗？</p>\n<p>决定没问题、结果不好，多半是运气差。决定有问题、结果还不错，下次就未必这么走运了。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人提醒你，<strong>别拿结果去改写记忆</strong>。</p>\n            <p>延伸阅读：<a href=\"https://en.wikipedia.org/wiki/Hindsight_bias\">Wikipedia · Hindsight bias</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "false-consensus",
    "order": 59,
    "category": "thinking",
    "title": "大家都这么觉得",
    "englishTitle": "False Consensus Effect",
    "summary": "你说的大家，多半是你和身边两个人。",
    "layout": "comparison",
    "visual": "false-consensus-dots",
    "hero": {
      "titleHtml": "大家都这么觉得",
      "subtitleHtml": "False Consensus Effect",
      "leadHtml": "把自己的看法说成大家的看法，<br>\n                    说服人最省事，也最容易露馅。"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">大家到底是几个人</h3>\n<p>心理学管这个叫虚假共识效应。人总觉得别人跟自己想的差不多，因为平时打交道最多的，就是跟自己像的人。</p>\n<p>你说「大家都觉得」的时候，往往只数了自己和两个同事。</p>\n</div>"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">把大家换成数字</h3>\n<p>问了几个人，在什么范围里问的，怎么问的，说清楚了，这句话才有分量。</p>\n<p>说不清就别用「大家」。听着像所有人都同意，其实只是你声音大一点。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人想让你把「大家」换成具体的人。</p>\n            <p>延伸阅读：<a href=\"https://en.wikipedia.org/wiki/False_consensus_effect\">Wikipedia · False consensus effect</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "respect-bandwidth",
    "order": 60,
    "category": "clarity",
    "title": "别浪费别人的注意力",
    "englishTitle": "Respect Bandwidth",
    "summary": "刷屏、连环 @、九张长图，看的人都得陪你耗时间。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "别浪费别人的注意力",
      "subtitleHtml": "Respect Bandwidth",
      "leadHtml": "网上的规矩里，最常被忘掉的一条，<br>\n                    是别占用别人的时间。"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">花的是别人的时间</h3>\n<p>你发的每张图、每条语音，都要占收的人的时间、流量和注意力。九张长图翻到最后才看到重点，一群人都陪着翻了一遍。</p>\n<p>「很重要」三个字说明不了是什么事，只会让人更紧张。</p>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 说清事、给链接、讲要求",
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">一件事两三句交代完</h3>\n<p>说清是什么事，在哪儿能看到，要对方做什么。几句话交代完，其他人自己挑时间去看细节。</p>\n<p>Virginia Shea 写的网络礼仪十条里，有一条就是尊重别人的时间和带宽。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明你刚花掉了别人一分钟，其实十秒就够了。</p>\n            <p>延伸阅读：<a href=\"https://en.wikipedia.org/wiki/Netiquette\">Wikipedia · Netiquette（Virginia Shea）</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "meaningful-title",
    "order": 61,
    "category": "clarity",
    "title": "标题写症状",
    "englishTitle": "Meaningful Title",
    "summary": "标题只写「求助」，跟没写差不多。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "标题写症状",
      "subtitleHtml": "Meaningful Title",
      "leadHtml": "别人看标题决定点不点开，<br>\n                    你急不急，标题上看不出来。"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">大家先看标题</h3>\n<p>在群里、论坛里、工单系统里，大家都是先扫一眼标题，再决定要不要花时间。「救命」只能看出你很急，看不出你遇到了什么事。</p>\n<p>后来有人遇到同样的问题想搜，也搜不到这一条。</p>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 写清环境、操作和结果",
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">标题写全三样</h3>\n<p>环境是 Vite 5，操作是构建，结果是 EACCES 报错。三样都写上，懂的人看一眼就知道自己能不能帮。</p>\n<p>「紧急」「在线等」就别往标题里放了，看的人从里面读不出任何信息。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明别人看了你的标题，判断不了要不要点开。</p>\n            <p>Source: <a href=\"https://github.com/DomeenoH/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md\">提问的智慧 · 使用有意义且描述明确的标题</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "make-it-easy-to-reply",
    "order": 62,
    "category": "clarity",
    "title": "让别人能直接回",
    "englishTitle": "Make It Easy to Reply",
    "summary": "只发截图、语音、半句话，对方回你之前得先干一堆活。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "让别人能直接回",
      "subtitleHtml": "Make It Easy to Reply",
      "leadHtml": "想让别人回你，<br>\n                    就先让他回起来省事。"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">谁来整理</h3>\n<p>翻拍的照片复制不了，搜不到，也没法引用。对方得先把图里的字一个个敲出来，才能开始想问题。</p>\n<p>你省掉的整理工夫，全落到了回答的人身上。</p>\n</div>"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">能复制，能搜，能复现</h3>\n<p>能贴文字就贴文字，贴成代码块更好。截图留给界面长什么样，报错和日志直接贴原文。</p>\n<p>再写上怎么复现，对方就能在自己电脑上跑一遍，用不着猜。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明对方想帮你，可你发来的东西他没法直接用。</p>\n            <p>Source: <a href=\"https://github.com/DomeenoH/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md\">提问的智慧 · 使问题容易回复</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "follow-up-after-solved",
    "order": 63,
    "category": "relation",
    "title": "解决后回来说一声",
    "englishTitle": "Follow Up After Solved",
    "summary": "别人花了时间帮你，解决了至少回来说一声。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "解决后回来说一声",
      "subtitleHtml": "Follow Up After Solved",
      "leadHtml": "问题问出去了，<br>\n                    解决了也回来说一声。"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">答案没留下来</h3>\n<p>帮你的人不知道自己猜得对不对。下一个遇到同样问题的人来搜，只能看到一句「解决了」。</p>\n<p>一个问题没收尾，后面的人就得从头再踩一遍。</p>\n</div>"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">你一句话，后面的人少找半天</h3>\n<p>写一句「原因是 X，我是这么改的」就够了，用不着写感谢信，把答案留下来就行。</p>\n<p>在公开的地方提问，一半的用处在答案，另一半在后来的人能搜到它。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明那个帖子还悬着，没人知道后来怎么样了。</p>\n            <p>Source: <a href=\"https://github.com/DomeenoH/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md\">提问的智慧 · 问题解决后，加个简短的补充说明</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "ask-in-public",
    "order": 64,
    "category": "systems",
    "title": "公开提问，公开回答",
    "englishTitle": "Ask in Public",
    "summary": "私聊问完就走，答案就只有你一个人知道。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "公开提问，公开回答",
      "subtitleHtml": "Ask in Public",
      "leadHtml": "你问到的答案，<br>\n                    本来可以留给下一个人。"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">答案锁在私聊里</h3>\n<p>私聊没有错，有些问题确实不适合公开。问完以后，把结论贴回群里或者论坛，也就一句话的事。</p>\n<p>不贴的话，同一个问题会被十个人轮流问，每次都得有人再答一遍。</p>\n</div>"
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">问在大家看得见的地方</h3>\n<p>在公开的地方问，别人能补充，后来的人能搜到，回答的人也不用一遍遍重复。</p>\n<p>非私聊不可，问完至少把去掉敏感信息的结论贴回公开的地方。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明这个问题值得问在大家都能看见的地方。</p>\n            <p>Source: <a href=\"https://github.com/DomeenoH/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md\">提问的智慧 · 别要求使用私人电邮回复</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "dont-cry-bug",
    "order": 65,
    "category": "thinking",
    "title": "别急着说是 bug",
    "englishTitle": "Don't Cry Bug",
    "summary": "先查自己那一半，再怀疑别人的。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "别急着说是 bug",
      "subtitleHtml": "Don't Cry Bug",
      "leadHtml": "「这是 bug」应该是查完以后的结论，<br>\n                    一开口就说，对方只会先防着你。"
    },
    "bad": {
      "titleHtml": "❌ 没查就先下结论",
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">很多 bug 最后都不是 bug</h3>\n<p>环境、参数、版本、缓存、配置，按顺序一样样排除，再下结论。</p>\n<p>一句「肯定是你们的问题」说出口，你自己那一半就不会再去查了。上面那个字符串 id，就是这么漏掉的。</p>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 先给证据，再说判断",
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">把判断说成猜测</h3>\n<p>问一句「是类型没做兼容吗」，对方能顺着去查。说「你们有 bug」，对方只会先替自己辩护。</p>\n<p>等确认真是 bug 了，再说它是 bug 也来得及。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人想让你先查查自己那一半。</p>\n            <p>Source: <a href=\"https://github.com/DomeenoH/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md\">提问的智慧 · 别动辄声称找到 Bug</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  },
  {
    "slug": "dont-play-helpless",
    "order": 66,
    "category": "clarity",
    "title": "别拿「我是小白」当借口",
    "englishTitle": "Don't Play Helpless",
    "summary": "说自己是新手，也得先自己查一查。",
    "layout": "comparison",
    "hero": {
      "titleHtml": "别拿「我是小白」当借口",
      "subtitleHtml": "Don't Play Helpless",
      "leadHtml": "「我是新手」能说明你为什么不懂，<br>\n                    说明不了你为什么没查。"
    },
    "bad": {
      "titleHtml": "❌ 什么都没试就让人教",
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
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">把活全推给了对方</h3>\n<p>「我什么都不懂」听着谦虚，可后面的活全落到了对方身上。他得先猜你缺什么，再从头给你讲一遍。</p>\n<p>上面那段，多米诺最后只能甩一篇入门文档，因为他连你卡在哪都不知道。</p>\n</div>"
    },
    "good": {
      "titleHtml": "✅ 说我试到哪一步",
      "lines": [
        {
          "character": "cider",
          "name": "西打",
          "time": "15:00",
          "text": "我按文档装了一遍，卡在第二步的权限报错。试过 sudo 也不行，日志在这。",
          "html": "我按文档装了一遍，卡在第二步的权限报错。试过 sudo 也不行，日志在这。"
        },
        {
          "character": "domino",
          "name": "多米诺",
          "time": "15:03",
          "text": "路径里有空格，加引号就行。",
          "html": "路径里有空格，加引号就行。"
        }
      ],
      "explanationHtml": "<div>\n<h3 style=\"margin-top:0\">说你卡在哪</h3>\n<p>说清你试了什么、卡在第几步，对方补上最后那一下就行，用不着从头带你走。</p>\n<p>没人要求新手什么都会，先自己走两步就够了。</p>\n</div>"
    },
    "footerHtml": "<p>\n                这事不大，别跟发链接给你的人\n                <a href=\"https://www.bilibili.com/video/BV1t4411V7m2/\">生气</a>。\n            </p>\n            <p>如果你看到这个链接，说明有人希望你先自己走到第二步。</p>\n            <p>Source: <a href=\"https://github.com/DomeenoH/How-To-Ask-Questions-The-Smart-Way/blob/master/README-zh_CN.md\">提问的智慧 · 低声下气不能代替你的功课</a></p>\n            <p>\n                <a href=\"https://github.com/DomeenoH/BeKind\" target=\"_blank\">GitHub</a> · 编排与译文采用 <a href=\"https://creativecommons.org/licenses/by/4.0/\" target=\"_blank\">CC BY 4.0</a> · © {{YEAR}}\n            </p>"
  }
];

export const orderedLaws = [...laws, ...extraLaws, ...expandLaws].sort((a, b) => a.order - b.order);

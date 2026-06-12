const navbar = require("./navbar");
const sidebar = require("./sidebar");
const footer = require("./footer");
const extraSideBar = require("./extraSideBar");

const author = "程序员鱼皮";
const domain = "https://codefather.cn";
const tags = ["程序员", "编程", "计算机"];

module.exports = {
  title: "鱼皮的编程宝典",
  description: "贴心的编程学习路线，全面的编程知识百科",
  head: [
    // 站点图标
    ["link", { rel: "icon", href: "/favicon.ico" }],
    // SEO
    [
      "meta",
      {
        name: "keywords",
        content:
          "程序员鱼皮, 编程学习路线, 编程知识百科, Java, 编程导航, 前端, 开发, 编程分享, 项目, IT, 求职, 面经",
      },
    ],
    // 百度统计
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?2675818a983a3131404cee835018f016";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `,
    ],
  ],
  permalink: "/:slug",

  // 监听文件变化，热更新
  extraWatchFiles: [".vuepress/*.js", ".vuepress/sidebars/*.js"],
  markdown: {
    // 开启代码块的行号
    lineNumbers: true,
    // 支持 4 级以上的标题渲染
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"],
  },
  plugins: [
    "@vuepress/back-to-top",
    ["@vuepress/medium-zoom"],
    ["vuepress-plugin-code-copy", { successText: "代码已复制" }],
    "vuepress-plugin-img-lazy",
  ],
  // 主题配置
  themeConfig: {
    logo: "/logo.png",
    nav: navbar,
    sidebar,
    lastUpdated: "最近更新",

    // GitHub 仓库位置
    repo: "liyupi/codefather",
    docsBranch: "master",

    // 编辑链接
    editLinks: true,
    editLinkText: "完善页面",

    // 底部版权信息
    footer,
    // 额外右侧边栏
    extraSideBar,
  },
};

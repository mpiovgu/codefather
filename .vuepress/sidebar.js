const roadmapSideBar = require("./sidebars/roadmapSideBar");

module.exports = {
    "/学习路线/": roadmapSideBar,
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
};
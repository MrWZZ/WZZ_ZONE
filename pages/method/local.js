//页面数组
var pages = [
    { title: "tool", url: "pages/tool.html" },
    { title: "jdw", url: "pages/jdw.html" },
    { title: "js", url: "pages/js.html" },
];
var info = {
    title: "方法库",
    description: ""
}
Controller.loadView(mainData.view.summary, Controller.pageInit, [pages, info]);
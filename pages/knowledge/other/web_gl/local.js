//页面数组
var pages = [
  { title:"概述", url:"pages/1.html" },
];
var info = {
  title : "webGL",
  description : "————摘抄自《WebGl编程指南》"
}
Controller.loadView(mainData.view.summary,Controller.pageInit,[pages,info]);

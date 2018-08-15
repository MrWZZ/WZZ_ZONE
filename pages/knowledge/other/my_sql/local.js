//页面数组
var pages = [
  { title:"储存类型和数据类型", url:"pages/1.html" },
  { title:"MySQL的基本操作", url:"pages/2.html" },
];
var info = {
  title : "MY_SQL",
  description : "摘抄自《MySQL快速入门》"
}
Controller.loadView(mainData.view.summary,Controller.pageInit,[pages,info]);

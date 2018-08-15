//页面数组
var pages = [
  { title:"类图", url:"pages/1.html" },
  { title:"用例图", url:"pages/2.html" },
  { title:"状态图", url:"pages/3.html" },
  { title:"顺序图", url:"pages/4.html" },
  { title:"活动图", url:"pages/5.html" }
];
var info = {
  title : "UML",
  description : "————摘抄自《UML基础、案例与应用（第三版）》"
}
Controller.loadView(mainData.view.summary,Controller.pageInit,[pages,info]);

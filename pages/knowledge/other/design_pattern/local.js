//页面数组
var pages = [
  { title:"简单工厂", url:"pages/1.html" },
  { title:"外观模式", url:"pages/2.html" },
  { title:"中介者模式", url:"pages/3.html" },
];
var info = {
  title : "设计模式",
  description : ""
}
Controller.loadView(mainData.view.summary,Controller.pageInit,[pages,info]);

//页面数组
var pages = [
  { title:"属性预览",url:"pages/1.html"},
  { title:"基础入门", url:"pages/2.html" },
  { title:"对象", url:"pages/3.html" },
  { title:"正则表达式", url:"pages/4.html" },
  { title:"TypeScript", url:"pages/5.html" },
];
var info = {
  title : "JavaScript总结",
  description : "《ECMAScript 6 入门（阮一峰）》+ 《JavaScript高级程序设计》"
}
Controller.loadView(mainData.view.summary,Controller.pageInit,[pages,info]);

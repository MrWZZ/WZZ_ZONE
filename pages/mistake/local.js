//页面数组
var pages = [
  { title:"JavaScript", url:"pages/java_script.html" },
  { title:"Atom", url:"pages/atom.html" },
  { title:"CSS", url:"pages/css.html" },
  { title:"egret", url:"pages/egret.html" },
  { title:"其他", url:"pages/other.html" },
];
var info = {
  title : "踩过的坑",
  description : ""
}
Controller.loadView(mainData.view.summary,Controller.pageInit,[pages,info]);

//页面数组
var pages = [
  { title:"简单实例", url:"pages/1.html" },
  { title:"全局配置", url:"pages/2.html" },
  { title:"xml映射文件", url:"pages/3.html" },
];
var info = {
  title : "My Batis",
  description : ""
}
Controller.loadView(mainData.view.summary,Controller.pageInit,[pages,info]);

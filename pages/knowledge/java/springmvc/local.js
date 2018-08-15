//页面数组
var pages = [
  { title:"简单实例", url:"pages/1.html" },
  { title:"常用注解", url:"pages/2.html" },
  { title:"标签库", url:"pages/3.html" },
];
var info = {
  title : "Spring MVC",
  description : "————摘抄自《Spring+MyBatis企业应用实战》"
}
Controller.loadView(mainData.view.summary,Controller.pageInit,[pages,info]);

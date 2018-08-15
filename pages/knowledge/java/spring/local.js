//页面数组
var pages = [
  { title:"IOC", url:"pages/1.html" },
  { title:"AOP", url:"pages/2.html" },
  { title:"JDBC和事务", url:"pages/3.html" },
  { title:" video", url:"pages/4.html" }
];
var info = {
  title : "Spring",
  description : "————摘抄自《精通Spring2.X Java Web开发》"
}
Controller.loadView(mainData.view.summary,Controller.pageInit,[pages,info]);

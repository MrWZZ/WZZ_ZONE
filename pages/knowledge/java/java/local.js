var info = {
  title : "Java",
  description : "摘抄自《写给大忙人看Java核心技术》";
}
var pages = [
  { title:"基本的编程结构", url:"pages/1.html" },
  { title:"面向对象编程", url:"pages/2.html" },
  { title:"接口和lambda表达式", url:"pages/3.html" },
  { title:"泛型", url:"pages/4.html" },
  { title:"集合", url:"pages/5.html" },
  { title:"Stream", url:"pages/6.html" },
  { title:"并发操作", url:"pages/7.html" },
];

Controller.loadView(mainData.view.summary,Controller.pageInit,[pages,info]]);

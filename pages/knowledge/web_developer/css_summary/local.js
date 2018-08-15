//页面数组
var pages = [
  { title:"概述", url:"pages/1.html" },
  { title:"属性简明介绍", url:"pages/2.html" },
  { title:"设置文本样式", url:"pages/3.html" },
  { title:"过渡、动画、变换", url:"pages/4.html" }
];
var info = {
  title : "CSS总结",
  description : "————内容摘抄自《HTML5权威指南》"
}
Controller.loadView(mainData.view.summary,Controller.pageInit,[pages,info]);

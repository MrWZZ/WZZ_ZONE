//页面数组
var pages = [
  { title:"概要", url:"pages/1.html" },
  { title:"基础排序算法", url:"pages/2.html" },
  { title:"基础查找算法", url:"pages/3.html" },
  { title:"散列表", url:"pages/4.html" },
  { title:"链表", url:"pages/5.html" },
  { title:"二叉树", url:"pages/6.html" },
  { title:"集合", url:"pages/7.html" },
  { title:"高级排序算法", url:"pages/8.html" },
];
var info = {
  title : "数据结构与算法",
  description : "————摘抄自《数据结构与算法C#语言描述》"
}
Controller.loadView(mainData.view.summary,Controller.pageInit,[pages,info]);

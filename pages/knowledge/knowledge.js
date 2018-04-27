//首页导航数组(通用模块有这个的副本，需要一起修改)
var homeLinks = [
  { title:"主页", url:"/index.html" },
  { title:"知识总结", url:"/pages/knowledge/knowledge.html" },
  { title:"方法库", url:"#" },
  { title:"收藏", url:"/pages/collection/collection.html" },
  { title:"作品", url:"#" },
  { title:"踩过的坑", url:"/pages/mistake/mistake.html" }
];

//首页导航生成(通用模块有这个的副本，需要一起修改)
function CreateHomeLinks()
{
  var homeNavPanel = document.querySelector(".home_nav");
  for(var i in homeLinks)
  {
    var a = document.createElement("a");
    a.setAttribute("href",homeLinks[i].url);
    a.text = homeLinks[i].title;
    homeNavPanel.appendChild(a);
  }
}

//知识数组
var knowledgeList = [
  //前端
  {type : "前端",
   slots:[
    {title:"HTML",url:"web_developer/html_summary/html_summary.html"},
    {title:"CSS",url:"web_developer/css_summary/css_summary.html"},
    {title:"JavaScript",url:"web_developer/javascript_summary/javascript_summary.html"},
    {title:"JQuery",url:"web_developer/jquery_summary/jquery_summary.html"}
  ]},
  //其他
  {type : "其他",
   slots:[
    {title:"C#",url:"other/csharp/csharp.html"},
    {title:"UML",url:"other/uml/uml.html"},
    {title:"设计模式",url:"other/design_pattern/design_pattern.html"},
    {title:"MySQL",url:"other/my_sql/my_sql.html"},
    {title:"数据结构与算法",url:"other/structures_and_algorithms/structures_and_algorithms.html"}
  ]}
];

//生成知识的各个模块
function CreateModel()
{
  var center = document.querySelector(".center");
  for(var i in knowledgeList)
  {
    var knowledge_type = document.createElement("div");
    knowledge_type.setAttribute("class","knowledge_type");
    var h2 = document.createElement("h2");
    h2.innerHTML = knowledgeList[i].type;
    knowledge_type.appendChild(h2);
    var knowledge_content = document.createElement("div");
    knowledge_content.setAttribute("class","knowledge_content");
    for(var j in knowledgeList[i].slots)
    {
      var a = document.createElement("a");
      a.text = knowledgeList[i].slots[j].title;
      a.setAttribute("href",knowledgeList[i].slots[j].url);
      knowledge_content.appendChild(a);
    }
    knowledge_type.appendChild(knowledge_content);
    center.appendChild(knowledge_type);
  }
}

CreateModel();
CreateHomeLinks();

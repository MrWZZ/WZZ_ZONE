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
  //Java
  {type : "Java",
   slots:[
     {title:"Java",url:"java/java/java.html"},
     {title:"Spring",url:"java/spring/spring.html"},
     {title:"SpringMVC",url:"java/springmvc/springmvc.html"},
     {title:"MyBatis",url:"java/mybatis/mybatis.html"},
  ]},
  //其他
  {type : "其他",
   slots:[
    {title:"C#",url:"other/csharp/csharp.html"},
    {title:"UML",url:"other/uml/uml.html"},
    {title:"设计模式",url:"other/design_pattern/design_pattern.html"},
    {title:"MySQL",url:"other/my_sql/my_sql.html"},
    {title:"WebGL",url:"other/web_gl/web_gl.html"},
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
Controller.createTopLinks();

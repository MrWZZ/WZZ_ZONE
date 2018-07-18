var navContent;           //左侧导航
var pageContent;          //子页面
//首页导航数组(知识总结模块、作品有这个的副本，需要一起修改)
var homeLinks = [
  { title:"主页", url:"/index.html" },
  { title:"知识总结", url:"/pages/knowledge/knowledge.html" },
  { title:"方法库", url:"/pages/method/method.html" },
  { title:"收藏", url:"/pages/collection/collection.html" },
  { title:"作品", url:"/pages/production/production.html" },
  { title:"踩过的坑", url:"/pages/mistake/mistake.html" }
];

//首页导航生成(知识总结模块有这个的副本，需要一起修改)
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

//导航链接生成
function CreateLink()
{
  for(var i in pages)
  {
    var a = document.createElement("a");
    a.setAttribute("data-url",pages[i].url);
    a.text = pages[i].title;
    a.onclick = function(e) {CreateContent(e.target.getAttribute("data-url"));}
    navContent.appendChild(a);
  }
}

//点击链接生成内容
function CreateContent(url)
{
  var iframe = document.createElement("iframe");
  iframe.src = url;
  iframe.style.display = "none";
  iframe.onload = function()
  {
    pageContent.innerHTML = iframe.contentWindow.document.body.innerHTML;
    ExecuteFunList();
  }
  pageContent.appendChild(iframe);
}

//执行子页面中需要运行的方法
function ExecuteFunList()
{
  var scriptElems = document.getElementsByClassName("execute_fun");
  for(var i = 0; i < scriptElems.length; i++)
  {
    eval(scriptElems[i].innerHTML.toString());
  }
}

//页面初始化
(function PageInitial()
{
  navContent = document.querySelector(".left nav");
  pageContent = document.querySelector(".center");
  funList = [];
  CreateLink();
  CreateHomeLinks();
  document.querySelector(".to_top").setAttribute("onclick","window.scrollTo(0,0)");

  //一开始显示第一个页面
  CreateContent(pages[0].url);
})();

/*  暂时不需要

//JS样式
var JS =
{
  int :　"<span style='color:blue;'>int</span>"
};

//根据class给语言加上颜色
function LanguageInitial()
{
  var languagePanels = document.getElementsByClassName("language");

  for(var i = 0; i < languagePanels.length; i++)
  {
    var c = languagePanels[i].getAttribute("class");
    var cs = c.split(" ");
    for(var j = 0; j < cs.length; j++)
    {
      switch(cs[j])
      {
        case "js":
          JS_Language(languagePanels[i]);
          break;
        default:
          break;
      }
    }
  }
}

//给JS关键词加上样式
function JS_Language(panel)
{
  var text = panel.innerHTML;
  text = text.replace("int",JS.int);
  panel.innerHTML = text;
}

*/

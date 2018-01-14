var navContent;           //左侧导航
var pageContent;          //子页面
var funList;              //子页面中需要运行的方法列表
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
  // for(var i = 0; i < funList.length; i++)
  // {
  //   eval(funList[i]);
  //   console.log("1");
  // }
  // //funList = [];
  var scriptElems = document.getElementsByClassName("execute_fun");
  for(var i = 0; i <　scriptElems.length; i++)
  {
    console.log(String(scriptElems[i].innerHTML).toString());
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

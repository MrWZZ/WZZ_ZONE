var navContent;
var navContentDetials;
var isShow;
//页面数组
var pages = [
  { title:"创建文档", url:"pages/creating_html.html" },
  { title:"标记文字", url:"pages/marking_word.html" },
  { title:"组织内容", url:"pages/organizing_content.html" },
  { title:"文档分节", url:"pages/document_segmentation.html" },
  { title:"表格元素", url:"pages/table_element.html" }
];

//导航链接生成
function CreateLink()
{

  for(var i in pages)
  {
    var a = document.createElement("a");
    // a.setAttribute("href",pages[i].url);
    // a.setAttribute("target","page_content");
    a.setAttribute("class","w_blur");
    a.text = pages[i].title;
    navContent[0].appendChild(a);
    var ac = a.cloneNode(true);
    ac.setAttribute("onclick","createContent(e)");
    navContentDetials[0].appendChild(ac);
  }
}

//iframe高度自适应
function setIframeHeight()
{
  var frame = document.getElementById("page_content");
  var frameContent = frame.contentWindow.document;
  var frameHeight = frameContent.body.scrollHeight || frameContent.documentElement.scrollHeight;
  frame.height = frameHeight;
  frame.onload = function()
  {
    frameContent = frame.contentWindow.document;
    frameHeight = frameContent.body.scrollHeight || frameContent.documentElement.scrollHeight;
    frame.height = frameHeight;
    AcceptBody(frameContent.querySelector(".w_article"));
  }
  document.querySelector(".w_center").removeChild(frame);
}

//点击链接生成内容
function createContent(e)
{
  console.log(e);
  var iframe = document.createElement("iframe");
  iframe.src = "pages/document_segmentation.html";
  iframe.style.display = "none";
  iframe.onload = function()
  {
    console.log("onload");
    console.log(iframe.contentWindow.document.querySelector(".w_article"));
    AcceptBody(iframe.contentWindow.document.querySelector(".w_article"));
  }
}

//显示目录
function ShowCatalogue()
{
  if(!isShow)
  {
    navContentDetials[0].style.display = "block";
  }
  else
  {
    navContentDetials[0].style.display = "none";
  }
  isShow = !isShow;
}

//接受子页面内容
function AcceptBody(article)
{
  document.querySelector(".page_content_t").append(article);
}



//页面初始化
(function PageInitial()
{
  isShow = false;
  navContent = document.getElementsByClassName("w_nav");
  navContentDetials =  document.getElementsByClassName("w_nav_details");
  CreateLink();
  // setIframeHeight();
  document.querySelector(".w_to_top").setAttribute("onclick","window.scrollTo(0,0)");
  document.querySelector(".w_show_catalogue").setAttribute("onclick","ShowCatalogue()");
})();

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
    a.setAttribute("href",pages[i].url);
    a.setAttribute("target","page_content");
    a.setAttribute("class","w_blur");
    a.text = pages[i].title;
    navContent[0].appendChild(a);
    var ac = a.cloneNode(true);
    ac.setAttribute("onclick","ShowCatalogue()");
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

//页面初始化
(function PageInitial()
{
  isShow = false;
  navContent = document.getElementsByClassName("w_nav");
  navContentDetials =  document.getElementsByClassName("w_nav_details");
  CreateLink();
  setIframeHeight();
  document.querySelector(".w_to_top").setAttribute("onclick","window.scrollTo(0,0)");
  document.querySelector(".w_show_catalogue").setAttribute("onclick","ShowCatalogue()");
})();

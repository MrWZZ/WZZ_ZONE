
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
  var navContent = document.querySelector(".w_nav");
  for(var i in pages)
  {
    var a = document.createElement("a");
    a.setAttribute("href",pages[i].url);
    a.setAttribute("target","page_content");
    a.setAttribute("class","w_blur");
    a.onclick = ReplaceHistory;
    a.text = pages[i].title;
    navContent.appendChild(a);
  }
}

//删除点开iframe所产生的历史信息
function ReplaceHistory()
{
  history.replaceState(null,null,"https://mrwzz.github.io/WZZ_ZONE/pages/knewledge/knewledge.html");
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

//页面初始化
(function PageInitial()
{
  CreateLink();
  setIframeHeight();
})();

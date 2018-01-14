var navContent;           //左侧导航
var pageContent;          //子页面

//页面数组
var pages = [
  { title:"创建文档", url:"pages/1_creating_html.html" },
  { title:"标记文字", url:"pages/2_marking_word.html" },
  { title:"组织内容", url:"pages/3_organizing_content.html" },
  { title:"文档分节", url:"pages/4_document_segmentation.html" },
  { title:"表格元素", url:"pages/5_table_element.html" }
];

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
    pageContent.removeChild(iframe);
  }
  pageContent.appendChild(iframe);
}

//页面初始化
(function PageInitial()
{
  navContent = document.querySelector(".left nav");
  pageContent = document.querySelector(".center");
  CreateLink();
  document.querySelector(".to_top").setAttribute("onclick","window.scrollTo(0,0)");

  //一开始显示第一个页面
  CreateContent(pages[0].url);
})();

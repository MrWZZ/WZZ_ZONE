var navContent;
var navContentDetials;
var isShow;
//子页面
var pageContent;
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
    a.setAttribute("class","w_blur");
    a.setAttribute("data-url",pages[i].url);
    a.text = pages[i].title;
    a.onclick = function(e) {CreateContent(e.target.getAttribute("data-url"));}
    navContent[0].appendChild(a);
    var ac = a.cloneNode(true);
    ac.onclick = function(e) {CreateContent(e.target.getAttribute("data-url"));}
    navContentDetials[0].appendChild(ac);
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
    document.querySelector(".w_center").removeChild(iframe);
    ShowCatalogue();
  }
  document.querySelector(".w_center").appendChild(iframe);
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
  pageContent = document.querySelector(".page_content");
  CreateLink();
  document.querySelector(".w_to_top").setAttribute("onclick","window.scrollTo(0,0)");
  document.querySelector(".w_show_catalogue").setAttribute("onclick","ShowCatalogue()");
  window.onresize = function()
  {
    if(window.innerWidth < 1200)
    {
      navContentDetials[0].style.display = "none";
    }
  }
  //一开始显示第一个页面
  CreateContent(pages[0].url);
})();

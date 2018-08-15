mainData = {
  rootPath : "/wzz/",
  homeLinks : [
    { title:"主页", url:"/wzz/index.html" },
    { title:"知识总结", url:"/wzz/pages/knowledge/knowledge.html" },
    { title:"方法库", url:"/wzz/pages/method/method.html" },
    { title:"收藏", url:"/wzz/pages/collection/collection.html" },
    { title:"作品", url:"/wzz/pages/production/production.html" },
    { title:"踩过的坑", url:"/wzz/pages/mistake/mistake.html" }
  ],
  css : {
    "summary" : "/wzz//pages/summary.css",
    "knowledge" : "knowledge.css"
  },
  image : {
    "favicon" : "/wzz/favicon.png"
  },
  view : {
    "summary" : "/wzz/view/summary.html"
  }
}

// 控制器
function Controller() {
  var self = this;

  // 加载脚本
  self.loadScript = function(path,callback) {
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.src = path;
    script.type = "text/javascript";
    if (typeof callback === "function") {
        script.onload= function(){
            callback();
        }
    }
    head.appendChild(script);
  }

  // 加载CSS
  self.loadCss = function(url) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.type="text/css";
    link.rel = "stylesheet";
    link.href = url;
    head.appendChild(link);
  }

  // 顶部导航生成
  self.createTopLinks = function() {
    var homeNavPanel = document.querySelector(".home_nav");
    for(var i in mainData.homeLinks)
    {
      var a = document.createElement("a");
      a.setAttribute("href",mainData.homeLinks[i].url);
      a.text = mainData.homeLinks[i].title;
      homeNavPanel.appendChild(a);
    }
  }

  // 左侧导航生成
  self.createLeftLinks = function(_pages) {
    var navContent = document.querySelector(".left nav");
    // pages为本页面loacl.js中的页面数据
    for(var i in _pages)
    {
      var a = document.createElement("a");
      a.setAttribute("data-url",_pages[i].url);
      a.text = _pages[i].title;
      a.onclick = function(e) {self.createContent(e.target.getAttribute("data-url"));}
      navContent.appendChild(a);
    }
  }

  // 生成内容
  self.createContent = function(_url) {
    var pageContent = document.querySelector(".center");
    var iframe = document.createElement("iframe");
    iframe.src = _url;
    iframe.style.display = "none";
    iframe.onload = function()
    {
      pageContent.innerHTML = iframe.contentWindow.document.body.innerHTML;
      // 执行本页面下的script元素
      self.ExecuteFunList();
    }
    pageContent.appendChild(iframe);
  }

  // 执行子页面的script元素
  self.executeFun = function() {
    var scriptElems = document.getElementsByClassName("execute_fun");
    for(var i = 0; i < scriptElems.length; i++)
    {
      eval(scriptElems[i].innerHTML.toString());
    }
  }

  // 设置小页面信息
  self.setInfo = function(_info) {
    var title = document.getElementsByTagName("title")[0];
    title.innerHTML = _info.title;
    var header = document.getElementsByTagName("header")[0];
    var h1 = header.getElementsByTagName("h1")[0];
    h1.innerHTML = _info.title;
    var p = header.getElementsByTagName("p")[0];
    p.innerHTML = _info.description;
  }

  // 设置网站图标
  self.setFavicon = function() {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.rel = "shortcut icon";
    link.href = mainData.image.favicon;
    head.appendChild(link);
  }

  // 加载视图
  set.loadView = function(view,callback,args) {
    var body = document.getElementsByTagName("body")[0];
    var iframe = document.createElement("iframe");
    iframe.src = view;
    iframe.style.display = "none";
    iframe.onload = function()
    {
      body.innerHTML = iframe.contentWindow.document.body.innerHTML;
      if(typeof callback === "function") {
        callback.apply(this,args);
      }
    }
    body.appendChild(iframe);
  }

  // 小页面初始化
  self.pageInit = function(_pages,_info) {
    self.createTopLinks();
    self.createLeftLinks(_pages);
    self.setInfo(_info);
    // 一开始显示第一个页面
    self.createContent(_pages[0].url);
  }
}

// 运行脚本
var Controller = new Controller();
Controller.loadScript("local.js");
Controller.setFavicon();

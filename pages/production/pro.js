//首页导航数组(知识总结模块有这个的副本，需要一起修改)
var homeLinks = [
  { title:"主页", url:"/index.html" },
  { title:"知识总结", url:"/pages/knowledge/knowledge.html" },
  { title:"方法库", url:"#" },
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

//作品
var pros = [
  {
    title:"简单实现u3d的一些功能",
    description:"使用javascript简单模仿u3d游戏的编写模式，提供了html游戏开发的简单模版。该模版提供了简单的物体碰撞检测，帧动画切换，角色动作逻辑套版等基本实现。",
    url:"u3d_js/u3d_js.html",
    imgUrl:"u3d_js/demo.png"
  },
  {
    title:"简单实现u3d的一些功能",
    description:"使用javascript简单模仿u3d游戏的编写模式，提供了html游戏开发的简单模版。该模版提供了简单的物体碰撞检测，帧动画切换，角色动作逻辑套版等基本实现。",
    url:"u3d_js/u3d_js.html",
    imgUrl:"u3d_js/demo.png"
  },
  {
    title:"简单实现u3d的一些功能",
    description:"使用javascript简单模仿u3d游戏的编写模式，提供了html游戏开发的简单模版。该模版提供了简单的物体碰撞检测，帧动画切换，角色动作逻辑套版等基本实现。",
    url:"u3d_js/u3d_js.html",
    imgUrl:"u3d_js/demo.png"
  }
];

//作品生成
function CreatPros()
{
  var container = document.getElementById("container");
  for(var i in pros)
  {
    var a = document.createElement("a");
    a.setAttribute("class","pro");
    a.href = pros[i].url;

    var left = document.createElement("div");
    left.setAttribute("class","left");

    var title = document.createElement("p");
    title.setAttribute("class","title");
    title.innerHTML = pros[i].title;
    left.appendChild(title);

    var description = document.createElement("p");
    description.setAttribute("class","description");
    description.innerHTML = pros[i].description;
    left.appendChild(description);

    var right = document.createElement("div");
    right.setAttribute("class","right");

    var img = document.createElement("img");
    img.setAttribute("class","img");
    img.src = pros[i].imgUrl;
    right.appendChild(img);

    a.appendChild(left);
    a.appendChild(right);
    container.appendChild(a);
  }
}

CreateHomeLinks();
CreatPros();

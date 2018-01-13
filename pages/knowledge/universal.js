//语言类初始化
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

//给关键JS关键词加上样式
function JS_Language(panel)
{
  var text = panel.innerHTML;
  text = text.replace("int",JS.int);
  panel.innerHTML = text;
}

var JS =
{
  int :　"<span style='color:blue;'>int</span>"

};

LanguageInitial();

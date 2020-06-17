const marked = require("marked");
const fs = require('fs-extra');
const path = require('path');
const sidebar = require('../../static/sidebar.json');
const renderer = new marked.Renderer();
const jsxRender = require('preact-render-to-string');
var QRCode = require('qrcode')

renderer.heading = function (text, level) {
  if (level > 1) {
    return `<h${level} id="${text}">${text}</h${level}/>`
  } else {
    return `<h${level}>${text}</h${level}/>`
  }
}

renderer.link = function (href, title, text) {
  var target = '';
  if (href) {
    target = "_blank";
  } else {
    href = 'javacript:void(0);'
  }
  return `<a target="${target}" href="${href}" style="color:#E14C46" title="${text}" >${text}</a>`;
};

marked.setOptions({
  renderer: renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});

const docRouter = ['attention','changelog','compatibility','install',
  'interact','summarize','quickStart','project','attention','pakage',
  'participation','keyboard','multiport','international','theme','interact'
]


/**
 * 获得文档的导航菜单
 */

let docsMenus = {};
Object.keys(sidebar).forEach(item => {
  let doc = sidebar[item];
  if (doc.children) {
    let child = doc.children[""];
    if (child) {
      Object.keys(child).forEach(ch => {
        docsMenus[child[ch].component] = {};
        docsMenus[child[ch].component].menus = child[ch].menus;
      })
    }
  } else {
    docsMenus[sidebar[item].component] = {};
    docsMenus[sidebar[item].component].menus = sidebar[item].menus;
  }
})





//定义变量提取
///##.*代码演示/ 匹配规则改变，
// 官网react版本
module.exports = {
  index: async (ctx, next) => {
    let tag = ctx.url.split('tag=')[1]; //版本号
    let component = ctx.params.component || 'summarize';
    console.log('log: '+new Date()+' 访问了 '+component);
    let data = '';
    let filePath = '';
    let isComponentFlag = false; //是否是组件
    let rightMenus = {}; //右侧菜单
    let changeLog = []; //组件更新日志
    let demoStr = '',iframeUrl='',demosArray=[];
    if (docRouter.indexOf(component)==-1) {
      isComponentFlag=true;
      filePath = path.join(__dirname, `../../componentsDemos/ucf-apps/demos/src/${component}/doc.md`);
      data = await fs.readFileSync(filePath, 'utf-8');
      //1、获得demo 个数
      let demos = fs.readdirSync(path.join(__dirname, `../../componentsDemos/ucf-apps/demos/src/${component}/demo/`));
      let demoReg = /Demo[\w\W]+\.js/;
      
      demos.forEach((item)=>{
          if(demoReg.test(item)){
              demoStr += '<div class="demo-item">'
              let code =  fs.readFileSync(path.join(__dirname, `../../componentsDemos/ucf-apps/demos/src/${component}/demo/${item}`),'utf-8');
              let lessPath = path.join(__dirname, `../../componentsDemos/ucf-apps/demos/src/${component}/demo/${item.replace('.js','.less')}`);
              let less = ''
              let flag = fs.existsSync(lessPath);
              if(flag){
                less = fs.readFileSync(lessPath,'utf-8');
              }
              let title = code.match(/@title(.{0,})/)?code.match(/@title(.{0,})/)[1]:'';//标题
              let description = code.match(/@description(.{0,})/)?code.match(/@description(.{0,})/)[1]:'';//描述
              code = code.replace('//@title'+title,'').replace('//@description'+description,'')
              demoStr+='<div class="demo-des"><div class="demo-des-title">'+title+
              '</div><div class="demo-des-des">'+description+
              '</div></div><div class="code-area"><div class="mobile-demo-left-title">js代码如下<i class="uf uf-maxmize"></i><i class="uf uf-copy" title="点击复制" data-clipboard-text="'+jsxRender(code)+'"></i></div>'
                +'<pre><code class="hljs javascript">'+jsxRender(code)+'</code></pre>';
              if(less){
                demoStr+='<div class="mobile-demo-left-title">less代码如下 <i class="uf uf-copy" title="点击复制代码" data-clipboard-text="'+less+'"></i></div>'
                  +'<pre><code class="hljs javascript">'+less+'</code></pre>'
                demosArray.push(code+less)
              }else{
                demosArray.push(code)
              }
              demoStr += '</div></div>'
              
          }
          
      })
     

      let demo = '<h2 id="代码演示" class="">代码演示</h2><div class="demo-container"><div class="mobile-demo-left">&&&&</div></div>';
      data = data.replace(/##.*代码演示/, demo);
      
      let str =
        data.match(/#? \w+/g) && data.match(/#? \w+/g).length ?
        data.match(/#? \w+/g)[0] :
        "";

      iframeUrl = 'http://mobiledemo.dev.app.yyuap.com/#/'+component;
      let generateQR = await QRCode.toDataURL(iframeUrl);

      data = data.replace(
        /#? \w+/,
        str+'<span class="qrcode" id="qricon"><icon class="uf uf-qrcode"/><div id="qrcode"><img src="'+generateQR+'"/></div></span>' 
        // "<a href='https://github.com/tinper-bee/" +
        //  +
        // "/edit/master/docs/api.md' class='pencil'  target='_blank' title='在github上编辑此页'><i class='uf uf-pencil-s' style='font-size: 20px;padding-left: 10px;'></i></a>" +
        // "<div class='title-right'>"
      );
      
    }  else {
      rightMenus = docsMenus[component].menus;
      changeLog = [];
      filePath = path.join(__dirname, `../../docs/${component}.md`);
      data = await fs.readFileSync(filePath, 'utf-8');
    }

    data = marked(data);

    data = data
      .replace(/\<table/gi, '<div class="table-container">\n<table')
      .replace(/<\/table>/gi, "</table>\n</div>\n")
      .replace('&&&&', demoStr)

    // let latestVersion = sidebar['更新日志']['version'];

    


    await ctx.render('index', {
      sidebar: sidebar,
      docs: data,
      active: component,
      tag: tag,
      isComponent: isComponentFlag,
      rightMenus: rightMenus,
      changeLog: changeLog,
      newComponent: [], //有更新的组件
      latestVersion: '1.0.0',
      iframeUrl:iframeUrl,
      demosArray:demosArray
    });
  }
}
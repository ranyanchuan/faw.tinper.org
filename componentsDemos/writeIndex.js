/**
 * 将组件下的 demo 合并为 index.js ，并在组件下生成
 */
const path = require('path');
const fs = require('fs-extra');
const componentsPath = path.join(__dirname, `./ucf-apps/demos/src/`);
const demoJsReg = /Demo[\w\W]+\.js/;
const demoLessReg = /Demo[\w\W]+\.less/;

let replaceLink = [];
let replaceRoute = ['<App/>'];
let replaceImportant = [];

let isServer = process.env.NODE_ENV=='server';
if(isServer)replaceRoute = []
let components = fs.readdirSync(componentsPath);
components.forEach(component=>{
    //1、生成 index.js 
    let template = fs.readFileSync(path.join(__dirname, `./template/indexTemplate.js`),'utf-8');
    let demoJs = [];
    let demoLess = [];
    let demoJsDom = [];
    if(fs.existsSync(componentsPath+`${component}/demo`)){
        let demos = fs.readdirSync(componentsPath+`${component}/demo`);
        demos.forEach(it=>{
            if(demoJsReg.test(it)){
                demoJs.push(`import ${it.replace('.js','')} from './demo/${it}'`);
                let code = fs.readFileSync(componentsPath+`${component}/demo/${it}`,'utf-8');//代码
                let title = code.match(/@title(.{0,})/)?code.match(/@title(.{0,})/)[1]:'';//标题
                demoJsDom.push("<div className='demo-item'><div className='demo-item-title'>"+title+"</div><"+it.replace('.js','')+"/></div>")
            }
            if(demoLessReg.test(it))demoLess.push(`import './demo/${it}'`);
        })
        template=template.replace('importDemoJs',demoJs.join('\n'))
        .replace('importDemoless',demoLess.join('\n'))
        .replace('importDemoJsDom',demoJsDom.join('\n'))
        .replace('replaceENV',"export default Exmple;")
        fs.writeFileSync(componentsPath+`${component}/index.js`,template)
        console.log(`✌️ 😀 ✌️ ${component} index.js 文件生成成功`)
        replaceImportant.push('import '+component+' from "./'+component+'/index";');
        replaceLink.push('<Link to="/'+component+'">'+component+'</Link>');
        replaceRoute.push('<Route exact path="/'+component+'" component={'+component+'} /> ');
    }
    
})


//2、生成router/index.js
let appJs = fs.readFileSync(path.join(__dirname,'./template/appTemplate.js'),'utf-8');
appJs = appJs.replace('replaceImportant',replaceImportant.join('\n'))
.replace('replaceLink',replaceLink.join('\n'))
.replace('replaceRoute',replaceRoute.join('\n'));
if(isServer){
    appJs = appJs.replace('replaceRender',"ReactDOM.render(<Routers/>, document.getElementById('testPhone'));");
}else{
    appJs = appJs.replace('replaceRender',"ReactDOM.render(<Routers/>, document.getElementById('mobileDemo'));");
}
fs.writeFileSync(path.join(__dirname,'./ucf-apps/demos/src/app.js'),appJs);
console.log(`✌️ 😀 ✌️ app.js 文件生成成功!`)

//3、生成 index.html 
let indexHtml = fs.readFileSync(path.join(__dirname,'./template/indexHtmlTemplate.html'),'utf-8');
if(isServer){
    indexHtml = indexHtml.replace('replaceHtml','<div id="testPhone"></div>')
}else{
    indexHtml = indexHtml.replace('replaceHtml','<div class="test-phone" ><div class="phone-dot"></div><div class="phone-header"><img src="https://os.alipayobjects.com/rmsportal/VfVHYcSUxreetec.png"/></div><div id="mobileDemo"></div><div class="phone-footer"><i class="uf uf-stop-c"></i></div></div>');
}
fs.writeFileSync(path.join(__dirname,'./ucf-apps/demos/src/index.html'),indexHtml);
console.log(`✌️ 😀 ✌️ indexHtml 文件修改成功!`)


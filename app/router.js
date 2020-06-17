const koaRouter = require('koa-router')
const HomeController = require('./controller/index.js');

const router = new koaRouter();

// 主入口-》路由分发 -》controller-》调用模板进行渲染，加载 service处理服务逻辑
module.exports = (app) => {
    router.get('/', HomeController.index);
    router.get('/:component', HomeController.index);
    // 注册路由中间件
    app.use(router.routes())
        .use(router.allowedMethods())
}

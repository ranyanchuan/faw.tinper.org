const Koa = require('koa');
const render = require('koa-ejs');
const path = require('path');
const router = require('./router');
const middleware = require('./middleware');

const app = new Koa();
render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'index',
    viewExt: 'html',
    cache: false,
    debug: false,
});


router(app);
middleware(app);

app.listen(3002, () => {
    console.log('服务运行在 http://localhost:3002')
})

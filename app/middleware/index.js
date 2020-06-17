const path = require('path');
const bodyParser = require('koa-bodyparser');
const nunjucks = require('koa-nunjucks-2');
const staticFiles = require('koa-static');

module.exports = (app) => {

    const static = staticFiles(path.join(__dirname, '../../static'));
    const tinperAcs = staticFiles(path.join(__dirname, '../../tinper-acs'));

    app.use(static);
    app.use(tinperAcs);

    app.use(nunjucks({
        ext: 'html',
        path: path.join(__dirname, '../views'),
        nunjucksConfig: {
            trimBlocks: true
        }
    }));

    app.use(bodyParser())

}

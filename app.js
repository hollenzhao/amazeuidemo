const koa = require('koa');
const koaRouter = require('koa-router');
const koaMount = require('koa-mount');
const koaStatic = require('koa-static');
const views = require('koa-views');
const nunjucks = require('nunjucks');
const path = require('path');
const mainRouter = require('./server/route/main_router');
const ajaxRouter = require('./server/route/ajax_router');

const app = new koa();

//静态资源目录
app.use(koaMount('/static', koaStatic(__dirname + '/static_dist')));
app.use(koaMount('/npm', koaStatic(__dirname + '/node_modules')));

// 配置nunjucks模板文件所在的路径，否则模板继承时无法使用相对路径
let nunjucksOptions = {
  autoescape: true,
  noCache: false,
  // watch: true,
};
nunjucks.configure(path.resolve(__dirname, './server/view'), nunjucksOptions);
app.use(views(path.resolve(__dirname, './server/view'), {
  extension: 'njk',
  map: {
    njk: 'nunjucks',
    html: 'nunjucks'
  }
}));

app.use(mainRouter.routes(), mainRouter.allowedMethods());
app.use(ajaxRouter.routes(), ajaxRouter.allowedMethods());

app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

console.log('准备启动web...');
if (!module.parent) {
  let port = process.env.PORT || 9000;
  app.listen(port);
  console.log(`服务已启动,端口:${port}`);
}

module.exports = app;
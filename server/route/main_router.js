let koaRouter = require('koa-router');

const router = koaRouter({
  // prefix: '/'
});

//首页
router.get('/', function(ctx, next) {
  return ctx.render('index.html');
});

router.get('/login', function(ctx, next) {
  return ctx.render('login.html');
});

router.get('/tabledemo', (ctx, next) => {
  return ctx.render('page/tabledemo.html');
});

module.exports = router;
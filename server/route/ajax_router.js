let koaRouter = require('koa-router');
let koaBodyParser = require('koa-bodyparser');

const router = koaRouter({
  prefix: '/ajax'
});

router.use(koaBodyParser());

router.post('/test', (ctx, next) => {
  ctx.body = {};
});

module.exports = router;
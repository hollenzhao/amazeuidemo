let koaRouter = require('koa-router');
let koaBodyParser = require('koa-bodyparser');

const router = koaRouter({
  prefix: '/ajax'
});

router.use(koaBodyParser());

router.post('/tabledemo/getdata', (ctx, next) => {
  let limit = Number.parseInt(ctx.request.body.limit);
  let start = Number.parseInt(ctx.request.body.start);
  let page = Number.parseInt(ctx.request.body.page);
  let fakedata = [];
  for (var i = 0; i < 1000; i++) {
    fakedata.push({
      id: i,
      name: '张三' + i,
      age: i + 30,
    });
  }
  let rdata = fakedata.slice(start, start + limit);

  ctx.body = {
    total: fakedata.length,
    data: rdata
  };
});

module.exports = router;
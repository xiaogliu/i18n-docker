const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  if (ctx.request.path === '/api/v1/locale') {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.response.body = 'en-GB';
    console.log(`Request from ${ctx.request.href}`);
  } else {
    await next();
  }
});

app.listen(8081, () => {
  console.log('[demo] request get is starting at port 8081');
});

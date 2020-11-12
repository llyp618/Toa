import * as Koa from 'koa';

const app = new Koa();

app.use((ctx) => {
  ctx.set('Content-Type', 'text/html');
  ctx.body = '<html><h1>nihafsdsdfsdffasdfoss</h1></html>';
});

export default app;

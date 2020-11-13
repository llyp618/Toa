import * as Koa from 'koa';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';
import onerror from 'koa-onerror';
import router from './router';
import config from './config';

const app = new Koa();

onerror(app);

app.keys = config.KEY;

app.use(json());

app.use(bodyParser({
  enableTypes: ['json', 'form', 'text']
}));

app.use(router.routes()).use(router.allowedMethods());

export default app;

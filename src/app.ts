import * as Koa from 'koa';
import * as koaJson from 'koa-json';
import * as koaBody from 'koa-bodyparser';
import * as koaOnerror from 'koa-onerror';
import * as koaHelmet from 'koa-helmet';
import * as koaFavicon from 'koa-favicon';
import * as koaStatic from 'koa-static';
import router from './router';
import config from './config';

const app = new Koa();

app.keys = config.KEY;

koaOnerror(app);

app.use(koaStatic(config.PUBLIC));

app.use(koaFavicon(config.FAVICO));

app.use(koaHelmet());

app.use(koaJson());

app.use(koaBody({
  enableTypes: ['json', 'form', 'text']
}));

app.use(router.routes()).use(router.allowedMethods());

export default app;

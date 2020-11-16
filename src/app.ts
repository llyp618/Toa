import * as Koa from 'koa';
import * as json from 'koa-json';
import * as bodyParser from 'koa-bodyparser';
import * as onerror from 'koa-onerror';
import * as helmet from 'koa-helmet';
import * as favicon from 'koa-favicon';
import router from './router';
import config from './config';

const app = new Koa();

app.keys = config.KEY;

onerror(app);

app.use(favicon(config.FAVICO));

app.use(helmet());

app.use(json());

app.use(bodyParser({
  enableTypes: ['json', 'form', 'text']
}));

app.use(router.routes()).use(router.allowedMethods());

export default app;

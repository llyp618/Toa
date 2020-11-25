import * as Router from '@koa/router';
import apiRouter from './router_api';
import viewRouter from './router_view';

const router = new Router();

router
  .use(apiRouter.routes())
  .use(viewRouter.routes());

export default router;

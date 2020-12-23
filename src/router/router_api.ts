import * as Router from '@koa/router';
import * as helloCtrl from '../controller/ctrl.helloworld';

const router = new Router();

router.prefix('/api');

router
  .get('/helloworld', helloCtrl.sayhello)
  .get('/login', helloCtrl.login)
  .get('/logout', helloCtrl.logout);

export default router;

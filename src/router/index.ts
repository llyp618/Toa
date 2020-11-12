import * as Router from '@koa/router';
import * as helloCtrl from '../controller/ctrl.helloworld';

const router = new Router();

router.get('/api/helloworld', helloCtrl.sayhello);

export default router;

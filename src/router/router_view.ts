import * as Router from '@koa/router';
import * as helloCtrl from '../controller/ctrl.helloworld';

const router = new Router();

router.prefix('/view');

router.get('/helloworld', helloCtrl.renderHello);

export default router;
import koaRouter from 'koa-router';
import users from './users';

let router = koaRouter();

router.use('/users', users.routes());

export default router;

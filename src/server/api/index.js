import koa from 'koa';
import logger from 'koa-logger';
import router from './router';

let app = koa();

app.use(logger());

// Set up routes for the API
app.use(router.routes());

export default app;

import http from 'http';
import koa from 'koa';
import mount from 'koa-mount'
import logger from 'koa-logger';
import fs from 'fs';
import renderPage from './render-page';

import apiApp from './api';

let app = koa();

app.use(logger());

// Mount API to the server
app.use(mount('/api', apiApp));

app.use(function* () {
  this.body = 'Hello World';
});

// let options = {
//   key: fs.readFileSync(__dirname + '/dummy/localhost.key'),
//   cert: fs.readFileSync(__dirname + '/dummy/localhost.crt')
// };

http.createServer(app.callback()).listen(8000);
console.log('Listening at 8000');
//app.listen(8000);

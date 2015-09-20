import http from 'http';
import koa from 'koa';
import logger from 'koa-logger';
import fs from 'fs';
import renderPage from './render-page';

let app = koa();

app.use(logger());

app.use(function* () {
  this.body = 'Hello World';
});

// let options = {
//   key: fs.readFileSync(__dirname + '/dummy/localhost.key'),
//   cert: fs.readFileSync(__dirname + '/dummy/localhost.crt')
// };

http.createServer(app.callback()).listen(8000);
//app.listen(8000);

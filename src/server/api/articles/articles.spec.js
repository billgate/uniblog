import test from 'tape';
import co from 'co';
import app from '../index';
import request from 'supertest';

test('Articles API lists all articles', co.wrap(function* (t) {
  t.plan(2);
  request(app.callback())
    .get('/articles')
    .expect(200)
    .expect('Content-Type', 'json')
    .end((err, res) => {
      if (err) {
        t.fail('Cannot retrieve articles');
      }

      t.equal(res.body.results.length, 3, 'Should fetch 3 articles');
      t.pass('Successfully fetched all articles');
    });
}));

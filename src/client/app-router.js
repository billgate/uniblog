import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
var createHistory = require('react-router/node_modules/history/lib/createBrowserHistory');
import App from './app.js';
import Home from './home/home';
import Articles from './articles/articles';
import About from './about/about';

export default (
  <Router history={createHistory()}>
    <Route path='/' component={App}>
      <Route path='home' component={Home} />
      <Route path='articles' component={Articles} />
      <Route path='about' component={About} />

      <IndexRoute component={Home} />
    </Route>
  </Router>
);

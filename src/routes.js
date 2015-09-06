import React from 'react';
import Router, {Route, DefaultRoute} from 'react-router';
import Home from './home/home';
import Articles from './articles/articles';
import About from './about/about';

export default function routes(handler) {
  return (
  <Route handler={handler}>
    <Route path='home'  handler={Home} />
    <Route path='articles'  handler={Articles} />
    <Route path='about'  handler={About} />

    <DefaultRoute handler={Home} />
  </Route>
)};

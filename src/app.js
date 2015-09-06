import React from 'react';
import 'normalize.css';
import './fonts/dejavu.less';
import './app.less';
import Header from './header/header';
import Footer from './footer/footer';
import Router from 'react-router';
import routes from './routes';
let RouteHandler = Router.RouteHandler;

let App = React.createClass({
  render() {
    return (
      <div className='application'>
        <Header />
        <RouteHandler />
        <Footer />
      </div>
    );
  }
});

Router.run(routes(App), Router.HistoryLocation, (Root) => {
  React.render(<Root />, document.getElementById('app'));
});



export default App;

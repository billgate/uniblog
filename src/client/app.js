import React from 'react';
import 'normalize.css';
import './fonts/dejavu.less';
import './app.less';
import Header from './header/header';
import Footer from './footer/footer';

let App = React.createClass({
  render() {
    return (
      <div className='application'>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
});

export default App;

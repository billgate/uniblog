import React from 'react';
import './footer.less';

let Footer = React.createClass({
  render() {
    return (
      <footer className='site-footer'>
        <p>Here goes text from database</p>
        <p>Follow me: @github @twitter @linkedin</p>
      </footer>
    );
  }
});

export default Footer;

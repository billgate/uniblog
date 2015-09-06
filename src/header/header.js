import React from 'react';
import './header.less';

let binary = Number(420).toString(2);
let numberOfZeroes = 16 - binary.length;
let zeroes = '0'.repeat(numberOfZeroes);
export const fourTwenty = zeroes + binary;

let Header = React.createClass({
  render() {
    return (
      <header className='site-header'>
        <div className='header-top'>
          <h1 className='header-top-item'>Michal's blog</h1>
        </div>
        <h2 className='page-title'>Once upon a time. Michals journey</h2>
        <div className='motto'>{fourTwenty}</div>
      </header>
    )
  }
});

export default Header;

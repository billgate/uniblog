import React from 'react';
import './header.less';
import Navigation from './navigation';

let binary = Number(420).toString(2);
let numberOfZeroes = 16 - binary.length;
let zeroes = '0'.repeat(numberOfZeroes);
export const fourTwenty = zeroes + binary;

export const headerLinks = [
  { path: '/articles', label: 'Articles'},
  { path: 'https://github.com/michalvankodev', label: 'GitHub'}
];

let Header = React.createClass({
  render() {
    return (
      <header className='site-header'>
        <div className='header-top'>
          <h1 className='header-top-item'>Michal's blog</h1>
          <Navigation items={headerLinks} />
        </div>
        <h2 className='page-title'>Once upon a time. Michals journey</h2>
        <div className='motto'>{fourTwenty}</div>
      </header>
    )
  }
});

export default Header;

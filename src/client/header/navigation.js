import React from 'react';
import {Link} from 'react-router';
import './navigation.less';

let Navigation = (props) => (
  <nav>
    {props.items.map(item => {
      if (item.path.startsWith('http')) {
        return (
          <a href={item.path} target='_blank' key={item.path}>{item.label}</a>
        );
      }
      else {
        return (
          <Link to={item.path} activeClassName='active' key={item.path}>{item.label}</Link>
        )
      }
    })}
  </nav>
);

export default Navigation;

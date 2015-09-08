import React from 'react';
import {Link} from 'react-router';
import './navigation.less';

let Navigation = React.createClass({
  render() {
    return (
      <nav>
        {this.props.items.map(item => {
          if (item.path.startsWith('http')) {
            return (
              <a href={item.path} target='_blank'>{item.label}</a>
            );
          }
          else {
            return (
              <Link to={item.path}>{item.label}</Link>
            )
          }
        })}
      </nav>
    );
  }
});

export default Navigation;

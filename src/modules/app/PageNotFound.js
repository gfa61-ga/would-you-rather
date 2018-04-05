import React from 'react';
import { Link } from 'react-router-dom';

export default class PageNotFound extends React.Component {
  render () {
    return (
      <div>
        <h1>404 - Page not found</h1>
        <p>
          Try going back to the <Link to='/'>start page</Link>.
        </p>
      </div>
    );
  }
}

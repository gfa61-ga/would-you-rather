import React from 'react';
import { Link } from 'react-router-dom';
import { makeUrl } from 'modules/shared/helpers';

export default function PageNotFound () {
  return (
    <div>
      <h1>404 - Page not found</h1>
      <p>
        Try going back to the <Link to={makeUrl('/')}>home page</Link>.
      </p>
    </div>
  );
}

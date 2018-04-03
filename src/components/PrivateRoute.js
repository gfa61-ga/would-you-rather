import React from 'react';
import { Redirect, Route } from 'react-router-dom';

// based on: https://tylermcginnis.com/react-router-protected-routes-authentication/
export default function PrivateRoute ({ component: Component, isAuthenticated = false, ...rest }) {
  return (
    <Route {...rest} render={(props) => (
      isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  );
}

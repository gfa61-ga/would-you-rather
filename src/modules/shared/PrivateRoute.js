import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { getLoggedInUser } from 'modules/login/selectors';

const mapStateToProps = state => ({
  isAuthenticated: !!getLoggedInUser(state)
});

// based on: https://tylermcginnis.com/react-router-protected-routes-authentication/
function PrivateRoute ({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route {...rest} render={(props) => (
      isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  );
}

export default connect(mapStateToProps)(PrivateRoute);

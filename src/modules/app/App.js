import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from 'modules/homepage/Homepage';
import Login from 'modules/login/Login';
import PrivateRoute from 'modules/shared/PrivateRoute';
import { getLoggedInUserId } from 'modules/login/selectors';

const mapStateToProps = state => ({
  loggedInUserId: getLoggedInUserId(state)
});

class App extends Component {
  render () {
    const { loggedInUserId } = this.props;
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <PrivateRoute path='/' exact component={Homepage} isAuthenticated={!!loggedInUserId} />
            <Route path='/login' component={Login} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);

import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from 'components/Homepage';
import Login from 'components/Login';
import PrivateRoute from 'components/PrivateRoute';

class App extends Component {
  render () {
    return (
      <Router>
        <React.Fragment>
          <PrivateRoute path='/' exact component={Homepage} />
          <Route path='/login' component={Login} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;

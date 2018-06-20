import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import customHistory from 'modules/app/customHistory';
import Homepage from 'modules/homepage/Homepage';
import Leaderboard from 'modules/leaderboard/Leaderboard';
import Login from 'modules/login/Login';
import PageNotFound from 'modules/app/PageNotFound';
import PrivateRoute from 'modules/shared/PrivateRoute';
import Question from 'modules/questions/Question';
import QuestionForm from 'modules/questions/QuestionForm';
import MainMenu from 'modules/app/MainMenu';
import DebugTools from 'modules/debug-tools/DebugTools';
import { getIsLoading } from './selectors';
import { initApp } from './actions';

const mapStateToProps = state => ({
  isLoading: getIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  dispatchInitApp: () => dispatch(initApp())
});

class App extends React.Component {
  componentWillMount () {
    localStorage.setItem('originalUrl', JSON.stringify(window.location.pathname));
    this.props.dispatchInitApp();
  }

  render () {
    const { isLoading } = this.props;
    return (
      <React.Fragment>
        <DebugTools />
        <div style={{ maxWidth: 1200, margin: '0 auto 0 50px', backgroundColor: 'white', boxShadow: '0 0 10px rgba(0,0,0, 0.1)', padding: 15, height: '100%', overflowY: 'auto' }}>
          { isLoading
            ? <div style={{ display: 'flex', height: '100%' }}>
              <h1 style={{ alignSelf: 'center', margin: '0 auto' }}>
                  Loading...
              </h1>
            </div>
            : <Router history={customHistory} basename={process.env.PUBLIC_URL}>
              <React.Fragment>
                <MainMenu />
                <Switch>
                  <Route path='/login' component={Login} />
                  <PrivateRoute path='/' component={() => {
                    return (
                      <React.Fragment>
                        <Switch>
                          <Route path='/' exact component={Homepage} />
                          <Route path='/add' component={QuestionForm} />
                          <Route path='/leaderboard' component={Leaderboard} />
                          <Route path='/questions/:question_id' component={Question} />
                          <Route component={PageNotFound} />
                        </Switch>
                      </React.Fragment>
                    );
                  }} />
                </Switch>
              </React.Fragment>
            </Router>
          }
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

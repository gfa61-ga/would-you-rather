import React from 'react';
import { _getUsers } from 'fakeApi/_DATA';

export default class Login extends React.Component {
  state = {
    users: []
  };

  componentDidMount () {
    _getUsers().then(users => {
      this.setState(state => ({
        ...state,
        users
      }));
    });
  }

  render () {
    const { users } = this.state;
    return (
      <React.Fragment>
        <h1>Login</h1>
        <ul>
          {Object.values(users).map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

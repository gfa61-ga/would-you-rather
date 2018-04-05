import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from './actions';
import { getIsLoading, getUsers } from './selectors';

const mapStateToProps = (state) => ({
  isLoading: getIsLoading(state),
  users: getUsers(state)
});

const mapDispatchToProps = (dispatch) => ({
  dispatchLoginUser: userId => dispatch(loginUser(userId))
});

class Login extends React.Component {
  render () {
    const { dispatchLoginUser, users } = this.props;
    const objectPosition = {
      bobaFett: 'top center',
      lukeSkywalker: '-120px center',
      princessLeia: '-211px center'
    };

    return (
      <React.Fragment>
        <h1>Who are you?</h1>
        <ul style={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
          {users.map((user, index) => (
            <li key={user.id} onClick={() => dispatchLoginUser(user.id)} style={{
              display: 'flex',
              width: 210,
              flexDirection: 'column',
              padding: '5px 5px 0 5px',
              border: '1px solid black',
              borderRadius: 10,
              cursor: 'pointer',
              marginRight: index === users.length ? 0 : 20,
              alignItems: 'center'
            }}>
              <React.Fragment>
                <img alt={user.name} src={user.avatarURL} style={{ width: 200, height: 200, objectFit: 'cover', objectPosition: objectPosition[user.id], borderRadius: '10px 10px 0 0' }} />
                <h3 style={{ textAlign: 'center' }}>{user.name}</h3>
              </React.Fragment>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

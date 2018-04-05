import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers, loginUser } from './actions';
import { getUsers } from './selectors';

const mapStateToProps = (state) => ({
  users: getUsers(state)
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchUsers: () => dispatch(fetchUsers()),
  dispatchLoginUser: userId => dispatch(loginUser(userId))
});

class Login extends React.Component {
  componentDidMount () {
    this.props.dispatchFetchUsers();
  }

  render () {
    const { dispatchLoginUser, users } = this.props;
    const objectPosition = {
      bobaFett: 'top center',
      lukeSkywalker: '-120px center',
      princessLeia: '-211px center'
    };

    return (
      <React.Fragment>
        <h1>Login</h1>
        <ul style={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
          {users.map((user, index) => (
            <Link key={user.id} to='/'>
              <li onClick={() => dispatchLoginUser(user.id)} style={{
                display: 'flex',
                width: 210,
                flexDirection: 'column',
                padding: 5,
                border: '1px solid black',
                borderRadius: 10,
                cursor: 'pointer',
                marginRight: index === users.length ? 0 : 20,
                alignItems: 'center'
              }}>
                <img alt={user.name} src={user.avatarURL} style={{ width: 200, height: 200, objectFit: 'cover', objectPosition: objectPosition[user.id], borderRadius: '10px 10px 0 0' }} />
                <h3>{user.name}</h3>
              </li>
            </Link>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

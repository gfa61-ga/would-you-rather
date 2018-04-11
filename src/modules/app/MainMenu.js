import './MainMenu.css';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLoggedInUser } from 'modules/login/selectors';
import { logoutUser } from 'modules/login/actions';

const mapStateToProps = state => ({
  loggedInUser: getLoggedInUser(state)
});

const mapDispatchToProps = dispatch => ({
  dispatchLogoutUser: () => dispatch(logoutUser())
});

class MainMenu extends React.Component {
  render () {
    const { loggedInUser, dispatchLogoutUser } = this.props;
    return (
      <nav className='MainMenu'>
        <ul>
          { loggedInUser &&
            <li className='MainMenu_avatarContainer'>
              <img alt={loggedInUser.name} src={loggedInUser && loggedInUser.avatarURL} className='MainMenu_avatar' />
              { loggedInUser.name }
            </li>
          }
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/add'>
              Create new question
            </Link>
          </li>
          <li>
            <Link to='/leaderboard'>
              Leaderboard
            </Link>
          </li>

          { loggedInUser &&
            <li style={{ marginLeft: 'auto' }}>
              <button className='myButton' onClick={dispatchLogoutUser}>Logout</button>
            </li>
          }
        </ul>
      </nav>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);

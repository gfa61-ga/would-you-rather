import React from 'react';
import { connect } from 'react-redux';
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
      <nav style={{ backgroundColor: '#124d77', padding: 15, color: 'white', marginLeft: -15, marginRight: -15, marginTop: -15 }}>
        <ul style={{ listStyleType: 'none', display: 'flex', padding: 0, alignItems: 'center', margin: 0 }}>
          <li style={{ display: 'flex', alignItems: 'center', color: '#b7d5ea' }}>
            <img alt={loggedInUser.name} src={loggedInUser.avatarURL} style={{ width: 80, height: 80, objectFit: 'cover', marginRight: 15 }} />
            { loggedInUser.name }
          </li>
          <li style={{ marginLeft: 'auto' }}>
            <button className='myButton' onClick={dispatchLogoutUser}>Logout</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);

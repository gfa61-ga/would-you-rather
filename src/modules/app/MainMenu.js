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
      <nav>
        <ul style={{ listStyleType: 'none', display: 'flex', padding: 0 }}>
          <li>{ loggedInUser.name }</li>
          <li>
            <button onClick={dispatchLogoutUser}>Logout</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);

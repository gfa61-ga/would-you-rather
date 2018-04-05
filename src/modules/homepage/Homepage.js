import React from 'react';
import { connect } from 'react-redux';
import { getLoggedInUser } from 'modules/login/selectors';

const mapStateToProps = state => ({
  loggedInUser: getLoggedInUser(state)
});

const Homepage = ({ loggedInUser }) => {
  return (
    <React.Fragment>
      <nav>
        { loggedInUser.name }
      </nav>
      <h1>Homepage</h1>
    </React.Fragment>
  );
};

export default connect(mapStateToProps)(Homepage);

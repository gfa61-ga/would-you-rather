import React from 'react';
import { connect } from 'react-redux';

import { getUsers } from 'modules/login/selectors';

const mapStateToProps = state => ({
  users: getUsers(state).sort((a, b) => {
    const aTotal = a.answers.size + a.questions.size;
    const bTotal = b.answers.size + b.questions.size;
    return bTotal - aTotal;
  })
});

class LeaderBoard extends React.Component {
  render () {
    const { users } = this.props;
    return (
      <React.Fragment>
        <h1>Leaderboard</h1>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>avatarURL</th>
              <th>questions count</th>
              <th>answers count</th>
            </tr>
          </thead>
          <tbody>

            { users.map(user => (
              <tr key={user.id}>
                <td>{ user.name }</td>
                <td>
                  <img alt={user.name} className='MainMenu_avatar' src={user.avatarURL} />
                </td>
                <td>{ user.questions.size }</td>
                <td>{ user.answers.size }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(LeaderBoard);

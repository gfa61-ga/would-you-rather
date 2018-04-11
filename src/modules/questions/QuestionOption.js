import './QuestionOption.css';
import React from 'react';

export default class QuestionOption extends React.Component {
  render () {
    const { loggedInUser, option, totalAnswers } = this.props;
    const answersCount = option.votes.size;
    const isActive = loggedInUser && option.votes.includes(loggedInUser.id);
    const percentage = toPercent(answersCount / totalAnswers);

    return (
      // need to take loading state into account for when loading the URL directly
      <span className={`QuestionOption${isActive ? ' isActive' : ''}`}>
        {totalAnswers > 0
          ? `${option.text} (${answersCount}, ${percentage}%)`
          : option.text}
      </span>
    );
  }
}

function toPercent (decimals) {
  return Math.round(decimals * 100);
}

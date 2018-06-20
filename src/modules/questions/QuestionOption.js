import './QuestionOption.css';
import React from 'react';

export default class QuestionOption extends React.Component {
  render () {
    const { loggedInUser, option, totalAnswers } = this.props;
    const answersCount = option.votes.size;
    const isActive = loggedInUser && option.votes.includes(loggedInUser.id);
    const percentage = toPercent(answersCount / totalAnswers);

    return (
      <React.Fragment>
        { isActive &&
          <React.Fragment>
            <u>your answer: </u>
          </React.Fragment> }
        <span className={`QuestionOption${isActive ? ' isActive' : ''}`}>
          {totalAnswers > 0
            ? `${option.text} (${answersCount} answers, ${percentage}%)`
            : option.text}
        </span>
      </React.Fragment>
    );
  }
}

function toPercent (decimals) {
  return Math.round(decimals * 100);
}

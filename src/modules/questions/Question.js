import './Question.css';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getIsLoading } from 'modules/app/selectors';
import { getLoggedInUser } from 'modules/login/selectors';
import { getQuestion, getQuestionAuthor } from 'modules/questions/selectors';
import QuestionOption from './QuestionOption';

const mapStateToProps = (state, props) => ({
  isLoading: getIsLoading(state),
  loggedInUser: getLoggedInUser(state),
  question: getQuestion(state, props.match.params.question_id),
  questionAuthor: getQuestionAuthor(state, props.match.params.question_id)
});

class Question extends React.Component {
  render () {
    const { isLoading, loggedInUser, question, questionAuthor } = this.props;

    // need to take loading state into account for when loading the URL directly
    if (!isLoading && !question) {
      return <Redirect to='/questions/not-found' />;
    }

    const answerOneCount = question.optionOne.votes.size;
    const answerTwoCount = question.optionTwo.votes.size;
    const totalAnswers = answerOneCount + answerTwoCount;

    return (
      <React.Fragment>
        <h1>Would You Rather</h1>
        <p>author: <img alt={questionAuthor.name} className='Question_avatar' src={questionAuthor.avatarURL} />{questionAuthor.name}</p>
        <QuestionOption loggedInUser={loggedInUser} option={question.optionOne} totalAnswers={totalAnswers} />
        <br />
        <QuestionOption loggedInUser={loggedInUser} option={question.optionTwo} totalAnswers={totalAnswers} />
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(Question);

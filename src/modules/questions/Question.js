import './Question.css';

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getIsLoading } from 'modules/app/selectors';
import { getLoggedInUser } from 'modules/login/selectors';
import { getQuestion, getQuestionAuthor } from 'modules/questions/selectors';
import QuestionOption from './QuestionOption';
import { saveAnswer } from './actions';

const mapStateToProps = (state, props) => ({
  isLoading: getIsLoading(state),
  loggedInUser: getLoggedInUser(state),
  question: getQuestion(state, props.match.params.question_id),
  questionAuthor: getQuestionAuthor(state, props.match.params.question_id)
});

const mapDispatchToProps = dispatch => ({
  dispatchSaveAnswer: (userId, questionId, answer) => dispatch(saveAnswer(userId, questionId, answer))
});

class Question extends React.Component {
  render () {
    const { dispatchSaveAnswer, isLoading, loggedInUser, question, questionAuthor } = this.props;

    if (isLoading) return null;

    if (!question) {
      return <div>
        <h1>404 - Question not found</h1>
        <p>
           Try going back to the <Link to='/'>home page</Link>.
        </p>
      </div>;
    }

    const answerOneCount = question.optionOne.votes.size;
    const answerTwoCount = question.optionTwo.votes.size;
    const isQuestionAnswered = question.optionOne.votes.includes(loggedInUser.id) || question.optionTwo.votes.includes(loggedInUser.id);
    const totalAnswers = answerOneCount + answerTwoCount;

    return (
      <React.Fragment>
        <h1>Would You Rather</h1>
        <p>author: <img alt={questionAuthor.name} className='Question_avatar' src={questionAuthor.avatarURL} />{questionAuthor.name}</p>
        { isQuestionAnswered
          ? (
            <React.Fragment>
              <QuestionOption loggedInUser={loggedInUser} option={question.optionOne} totalAnswers={totalAnswers} />
              <br /><br />
              <QuestionOption loggedInUser={loggedInUser} option={question.optionTwo} totalAnswers={totalAnswers} />
            </React.Fragment>
          )
          : (
            <React.Fragment>
              <button
                onClick={_e => dispatchSaveAnswer(loggedInUser.id, question.id, 'optionOne')}
                style={{ marginRight: 50 }}
              >
                {question.optionOne.text}
              </button>
              <button
                onClick={_e => dispatchSaveAnswer(loggedInUser.id, question.id, 'optionTwo')}
              >
                {question.optionTwo.text}
              </button>
            </React.Fragment>
          )
        }
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);

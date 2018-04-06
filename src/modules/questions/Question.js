import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getIsLoading } from 'modules/app/selectors';
import { getQuestion } from 'modules/questions/selectors';

const mapStateToProps = (state, props) => ({
  isLoading: getIsLoading(state),
  question: getQuestion(state, props.match.params.question_id)
});

class Question extends React.Component {
  render () {
    const { isLoading, question } = this.props;
    return (
      // need to take loading state into account for when loading the URL directly
      !isLoading && !question
        ? <Redirect to='/questions/not-found' />
        : <React.Fragment>
          <h1>Question {question.id}</h1>
          {question.optionOne.text} : {question.optionTwo.text}
        </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(Question);

import React from 'react';
import { connect } from 'react-redux';

import { getLoggedInUserId } from 'modules/login/selectors';
import { saveNewQuestion, updateNewQuestionText } from './actions';
import { getNewQuestion } from './selectors';

const INPUT_SIZE = 50;

class QuestionForm extends React.Component {
  validate (optionOneText, optionTwoText) {
    return (
      optionOneText && optionOneText.length > 0 &&
      optionTwoText && optionTwoText.length > 0 &&
      optionOneText !== optionTwoText
    );
  }

  render () {
    const { dispatchSaveNewQuestion, dispatchUpdateNewQuestionText, loggedInUserId, optionOneText, optionTwoText } = this.props;
    return (
      <React.Fragment>
        <h1>Would You Rather?</h1>
        <div>
          <label>
            Option One<br />
            <input
              onChange={e => dispatchUpdateNewQuestionText('one', e.target.value)}
              required
              size={INPUT_SIZE}
              type='text'
              value={optionOneText || ''}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
          Option Two<br />
            <input
              minLength={1}
              onChange={e => dispatchUpdateNewQuestionText('two', e.target.value)}
              required
              size={INPUT_SIZE}
              type='text'
              value={optionTwoText || ''}
            />
          </label>
        </div>
        <button
          disabled={!this.validate(optionOneText, optionTwoText)}
          onClick={_e => { dispatchSaveNewQuestion(loggedInUserId); }}
        >
          Save
        </button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loggedInUserId: getLoggedInUserId(state),
  optionOneText: getNewQuestion(state).optionOne.text,
  optionTwoText: getNewQuestion(state).optionTwo.text
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSaveNewQuestion: loggedInUserId => dispatch(saveNewQuestion(loggedInUserId)),
  dispatchUpdateNewQuestionText: (option, value) => dispatch(updateNewQuestionText(option, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);

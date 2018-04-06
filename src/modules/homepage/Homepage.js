import React from 'react';
import { connect } from 'react-redux';
import { conciseDateTime } from 'modules/shared/helpers';
import { fetchQuestions } from 'modules/questions/actions';
import { getAnsweredQuestions, getUnansweredQuestions } from 'modules/questions/selectors';
import { getQuestionTypeFilter } from './selectors';
import { setQuestionTypeFilter } from './actions';

const tabStyle = {
  padding: 10,
  backgroundColor: '#93c8ed',
  color: '#fafafa',
  textShadow: '0 0 1px black',
  borderRadius: '5px 5px 0 0',
  marginRight: 2,
  cursor: 'pointer'
};

const activeTabStyle = {
  ...tabStyle,
  backgroundColor: '#578bb0'
};

const panelStyle = {
  backgroundColor: '#e2eff9',
  border: '1px solid #5688ab',
  padding: 10
};

const mapStateToProps = state => ({
  answeredQuestions: getAnsweredQuestions(state),
  questionTypeFilter: getQuestionTypeFilter(state),
  unansweredQuestions: getUnansweredQuestions(state)
});

const mapDispatchToProps = dispatch => ({
  dispatchFetchQuestions: () => dispatch(fetchQuestions()),
  dispatchSetQuestionTypeFilter: questionTypeFilter => dispatch(setQuestionTypeFilter(questionTypeFilter))
});

class Homepage extends React.Component {
  componentWillMount () {
    this.props.dispatchFetchQuestions();
  }

  render () {
    const { answeredQuestions, dispatchSetQuestionTypeFilter, questionTypeFilter, unansweredQuestions } = this.props;

    return (
      <React.Fragment>
        <h1>Questions</h1>
        <ul style={{
          listStyleType: 'none',
          display: 'flex',
          flexDirection: 'row',
          paddingLeft: 0,
          marginBottom: 0
        }}>
          <li
            onClick={() => dispatchSetQuestionTypeFilter('unanswered')}
            style={questionTypeFilter === 'unanswered' ? activeTabStyle : tabStyle}>
            Unanswered
          </li>
          <li
            onClick={() => dispatchSetQuestionTypeFilter('answered')}
            style={questionTypeFilter === 'answered' ? activeTabStyle : tabStyle}>
            Answered
          </li>
        </ul>
        { questionTypeFilter === 'unanswered'
          ? <section style={panelStyle}>
            <h1>Unanswered questions</h1>
            <ul>
              {unansweredQuestions.map(question => {
                return (
                  <li key={question.id}>
                    <span style={{ width: 165, display: 'inline-block' }}>{conciseDateTime(new Date(question.timestamp))}</span>
                    {question.optionOne.text} : {question.optionTwo.text}
                  </li>
                );
              })}
            </ul>
          </section>
          : <section style={panelStyle}>
            <h1>Answered questions</h1>
            <ul>
              {answeredQuestions.map(question => {
                return (
                  <li key={question.id}>
                    <span style={{ width: 165, display: 'inline-block' }}>{conciseDateTime(new Date(question.timestamp))}</span>
                    {question.optionOne.text} : {question.optionTwo.text}
                  </li>
                );
              })}
            </ul>
          </section>
        }
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

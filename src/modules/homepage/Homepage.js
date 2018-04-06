import React from 'react';
import { connect } from 'react-redux';
import { getAnsweredQuestions, getUnansweredQuestions } from 'modules/questions/selectors';
import { getQuestionTypeFilter } from './selectors';
import { setQuestionTypeFilter } from './actions';
import QuestionListItem from 'modules/questions/QuestionListItem';

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
  dispatchSetQuestionTypeFilter: questionTypeFilter => dispatch(setQuestionTypeFilter(questionTypeFilter))
});

class Homepage extends React.Component {
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
              {unansweredQuestions.map(question =>
                <li key={question.id}>
                  <QuestionListItem question={question} />
                </li>
              )}
            </ul>
          </section>
          : <section style={panelStyle}>
            <h1>Answered questions</h1>
            <ul>
              {answeredQuestions.map(question =>
                <li key={question.id}>
                  <QuestionListItem question={question} />
                </li>
              )}
            </ul>
          </section>
        }
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

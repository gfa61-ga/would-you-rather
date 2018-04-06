import { createSelector } from 'reselect';
import { getLoggedInUserId } from 'modules/login/selectors';

const getModuleState = state => state.homepageModule;

export const getQuestionTypeFilter = state => getModuleState(state).questionTypeFilter;

export const getQuestions = state => getModuleState(state).questions;

export const getUnansweredQuestions = createSelector(
  [getQuestions, getLoggedInUserId],
  (questions, userId) => {
    const unansweredQuestions = questions.filter(question => {
      return (
        !question.optionOne.votes.includes(userId) &&
        !question.optionTwo.votes.includes(userId)
      );
    });
    return sortQuestions(unansweredQuestions);
  }
);

export const getAnsweredQuestions = createSelector(
  [getQuestions, getLoggedInUserId],
  (questions, userId) => {
    const answeredQuestions = questions.filter(question => {
      return (
        question.optionOne.votes.includes(userId) ||
        question.optionTwo.votes.includes(userId)
      );
    });
    return sortQuestions(answeredQuestions);
  }
);

function sortQuestions (questions) {
  return questions.sort((questionA, questionB) => questionB.timestamp - questionA.timestamp);
}

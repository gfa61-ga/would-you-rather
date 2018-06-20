import { createSelector } from 'reselect';
import { getLoggedInUserId, getUsers } from 'modules/login/selectors';

const getModuleState = state => state.questionsModule;

export const getQuestion = (state, questionId) => {
  const questions = getQuestions(state);
  // TODO: memoize the following `find`. See:
  // https://github.com/reactjs/reselect#q-how-do-i-create-a-selector-that-takes-an-argument
  // https://github.com/reactjs/reselect#accessing-react-props-in-selectors
  // https://github.com/reactjs/reselect#sharing-selectors-with-props-across-multiple-component-instances
  return questions.find(question => question.id === questionId);
};

export const getNewQuestion = createSelector([getModuleState], moduleState => moduleState.newQuestion);

export const getQuestionAuthor = createSelector(
  [getQuestion, getUsers],
  (question, users) => {
    if (question && question.author) {
      return users.find(user => user.id === question.author);
    }
  }
);

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

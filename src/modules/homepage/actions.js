import { SET_QUESTIONS, SET_QUESTION_TYPE_FILTER } from './constants';
import { _getQuestions } from 'fakeApi/_DATA';

export const fetchQuestions = () => async dispatch => {
  const questions = await _getQuestions();
  if (questions) {
    dispatch(setQuestions(questions));
  } else {
    console.error('Error fetching questions :(', questions);
  }
};

export const setQuestions = questions => ({
  type: SET_QUESTIONS,
  payload: { questions }
});

export const setQuestionTypeFilter = questionTypeFilter => ({
  type: SET_QUESTION_TYPE_FILTER,
  payload: { questionTypeFilter }
});

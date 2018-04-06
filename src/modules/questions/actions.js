import { _getQuestions } from 'fakeApi/_DATA';
import { SET_QUESTIONS } from './constants';

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

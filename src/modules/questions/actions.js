import { SET_QUESTIONS } from './constants';

export const setQuestions = questions => ({
  type: SET_QUESTIONS,
  payload: { questions }
});

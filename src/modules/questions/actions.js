import customHistory from 'modules/app/customHistory';
import { SAVE_NEW_QUESTION, SET_QUESTIONS, UPDATE_NEW_QUESTION_TEXT } from './constants';

export const saveNewQuestion = (userId) => {
  customHistory.push('/');
  return {
    payload: { author: userId },
    type: SAVE_NEW_QUESTION
  };
};

export const setQuestions = questions => ({
  payload: { questions },
  type: SET_QUESTIONS
});

export const updateNewQuestionText = (option, value) => ({
  payload: { option, value },
  type: UPDATE_NEW_QUESTION_TEXT
});

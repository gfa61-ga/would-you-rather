import { generate } from 'shortid';

import customHistory from 'modules/app/customHistory';
import { SAVE_ANSWER, SAVE_NEW_QUESTION, SET_QUESTIONS, UPDATE_NEW_QUESTION_TEXT } from './constants';

export const saveAnswer = (userId, questionId, answer) => ({
  payload: { answer, questionId, userId },
  type: SAVE_ANSWER
});

export const saveNewQuestion = (userId) => {
  customHistory.push('/');
  return {
    payload: { author: userId, questionId: generate() },
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

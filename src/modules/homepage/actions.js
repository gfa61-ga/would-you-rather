import { SET_QUESTION_TYPE_FILTER } from './constants';

export const setQuestionTypeFilter = questionTypeFilter => ({
  type: SET_QUESTION_TYPE_FILTER,
  payload: { questionTypeFilter }
});

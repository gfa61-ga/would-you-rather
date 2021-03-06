import { _getQuestions, _getUsers } from 'fakeApi/_DATA';
import { loginUser, setUsers } from 'modules/login/actions';
import { setQuestions } from 'modules/questions/actions';
import { SET_IS_LOADING } from './constants';

export const initApp = () => async dispatch => {
  const savedLoggedInUserId = JSON.parse(localStorage.getItem('loggedInUserId'));
  let questions;
  let users;
  try {
    [users, questions] = await Promise.all([_getUsers(), _getQuestions()]);
  } catch (error) {
    console.error('Error fetching users or questions :', error);
  }

  dispatch(setUsers(users));
  dispatch(setQuestions(questions));
  dispatch(setIsLoading(false));

  if (savedLoggedInUserId) {
    dispatch(loginUser(savedLoggedInUserId));
  }
};

const setIsLoading = isLoading => ({
  type: SET_IS_LOADING,
  payload: { isLoading }
});

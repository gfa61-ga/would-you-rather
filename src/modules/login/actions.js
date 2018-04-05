import customHistory from 'modules/app/customHistory';
import { LOGIN_USER, SET_IS_LOADING, SET_USERS } from './constants';

export const loginUser = userId => dispatch => {
  localStorage.setItem('loggedInUserId', JSON.stringify(userId));
  dispatch(setLoggedInUser(userId));
  const originalUrl = JSON.parse(localStorage.getItem('originalUrl'));
  const redirectUrl = originalUrl && originalUrl !== '/login' ? originalUrl : '/';
  customHistory.push(redirectUrl);
  localStorage.removeItem('originalUrl');
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem('loggedInUserId');
  dispatch(setLoggedInUser(null));
};

export const setIsLoading = isLoading => ({
  type: SET_IS_LOADING,
  payload: { isLoading }
});

export const setLoggedInUser = userId => ({
  type: LOGIN_USER,
  payload: { userId }
});

export const setUsers = users => ({
  type: SET_USERS,
  payload: {
    users
  }
});

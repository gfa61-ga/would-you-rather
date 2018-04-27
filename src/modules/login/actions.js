import customHistory from 'modules/app/customHistory';
import { SET_LOGGED_IN_USER, SET_USERS } from './constants';

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

export const setLoggedInUser = userId => ({
  type: SET_LOGGED_IN_USER,
  payload: { userId }
});

export const setUsers = users => ({
  type: SET_USERS,
  payload: {
    users
  }
});

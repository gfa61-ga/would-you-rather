import { _getUsers } from 'fakeApi/_DATA';
import { LOGIN_USER, LOGOUT_USER, SET_USERS } from './constants';

export const fetchUsers = () => async (dispatch) => {
  const users = await _getUsers();

  if (users) {
    dispatch(setUsers(users));
  } else {
    console.error('Error fetching users :(', users);
  }
};

export const loginUser = (userId) => ({
  type: LOGIN_USER,
  payload: { userId }
});

export const logoutUser = () => ({
  type: LOGOUT_USER
});

export const setUsers = users => ({
  type: SET_USERS,
  payload: {
    users
  }
});

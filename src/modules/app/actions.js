import { _getUsers } from 'fakeApi/_DATA';
import { loginUser, setIsLoading, setUsers } from 'modules/login/actions';

export const initApp = () => async dispatch => {
  const savedLoggedInUserId = JSON.parse(localStorage.getItem('loggedInUserId'));
  const users = await _getUsers();

  if (users) {
    dispatch(setUsers(users));
  } else {
    console.error('Error fetching users :(', users);
  }
  dispatch(setIsLoading(false));

  if (savedLoggedInUserId) {
    dispatch(loginUser(savedLoggedInUserId));
  }
};

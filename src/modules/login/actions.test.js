import * as actions from './actions';
import * as constants from './constants';

describe('actions', () => {
  test('setLoggedInUser', () => {
    const userId = 'peterPan';
    const expectedAction = {
      type: constants.SET_LOGGED_IN_USER,
      payload: { userId }
    };
    expect(actions.setLoggedInUser(userId)).toEqual(expectedAction);
  });
});

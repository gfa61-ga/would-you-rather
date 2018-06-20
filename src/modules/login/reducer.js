import { List, Record } from 'immutable';
import { SET_LOGGED_IN_USER, SET_USERS } from './constants';

const ModuleStateRecord = Record({
  loggedInUserId: null,
  users: []
});

const initialModuleState = new ModuleStateRecord();

const UserRecord = Record({
  answers: {},
  avatarURL: null,
  id: null,
  name: null,
  questions: []
});

export default function loginReducer (moduleState = initialModuleState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_LOGGED_IN_USER: {
      return moduleState.set('loggedInUserId', action.payload.userId);
    }

    case SET_USERS: {
      return moduleState.set('users', List(Object.values(payload.users).map(user => new UserRecord(user))));
    }

    default:
      return moduleState;
  }
}

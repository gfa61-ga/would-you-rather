import { List, Map, Record } from 'immutable';

import { SAVE_ANSWER, SAVE_NEW_QUESTION } from 'modules/questions/constants';
import { SET_LOGGED_IN_USER, SET_USERS } from './constants';

const ModuleStateRecord = Record({
  loggedInUserId: null,
  users: List()
});

const initialModuleState = new ModuleStateRecord();

const UserRecord = Record({
  answers: Map(),
  avatarURL: null,
  id: null,
  name: null,
  questions: List()
});

export default function loginReducer (moduleState = initialModuleState, action) {
  const { type, payload } = action;

  switch (type) {
    case SAVE_ANSWER: {
      const userIndex = moduleState.users.findIndex(user => user.id === payload.userId);
      return moduleState.updateIn(['users', userIndex, 'answers'], answers => answers.merge({ [payload.questionId]: payload.answer })
      );
    }

    case SAVE_NEW_QUESTION: {
      const userIndex = moduleState.users.findIndex(user => user.id === payload.author);
      return moduleState.updateIn(['users', userIndex, 'questions'], questions => questions.push(payload.questionId));
    }

    case SET_LOGGED_IN_USER: {
      return moduleState.set('loggedInUserId', action.payload.userId);
    }

    case SET_USERS: {
      return moduleState.set('users', List(Object.values(payload.users).map(user => {
        return new UserRecord({
          ...user,
          answers: Map(user.answers),
          questions: List(user.questions)
        });
      })));
    }

    default:
      return moduleState;
  }
}

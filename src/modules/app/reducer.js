import { Record } from 'immutable';
import { SET_IS_LOADING } from './constants';

const ModuleStateRecord = Record({
  isLoading: true
});

const initialModuleState = new ModuleStateRecord();

export default function appReducer (moduleState = initialModuleState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_IS_LOADING: {
      return moduleState.set('isLoading', payload.isLoading);
    }

    default:
      return moduleState;
  }
}

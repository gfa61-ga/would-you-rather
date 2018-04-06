import { Record } from 'immutable';
import { SET_QUESTION_TYPE_FILTER } from './constants';

const ModuleStateRecord = Record({
  questionTypeFilter: 'unanswered'
});

const initialModuleState = new ModuleStateRecord();

export default function homepageReducer (moduleState = initialModuleState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_QUESTION_TYPE_FILTER: {
      return moduleState.set('questionTypeFilter', payload.questionTypeFilter);
    }

    default:
      return moduleState;
  }
}

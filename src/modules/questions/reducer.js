import { fromJS, List, Record } from 'immutable';
import { generate } from 'shortid';

import { capitalizeFirstLetter } from 'modules/shared/helpers';
import { SAVE_NEW_QUESTION, SET_QUESTIONS, UPDATE_NEW_QUESTION_TEXT } from './constants';

const OptionRecord = Record({
  text: null,
  votes: []
});

const QuestionRecord = Record({
  author: null,
  id: null,
  optionOne: new OptionRecord(),
  optionTwo: new OptionRecord(),
  timestamp: null
});

const ModuleStateRecord = Record({
  newQuestion: new QuestionRecord(),
  questions: List()
});

const initialModuleState = new ModuleStateRecord();

export default function homepageReducer (moduleState = initialModuleState, action) {
  const { type, payload } = action;

  switch (type) {
    case SAVE_NEW_QUESTION: {
      return moduleState
        .update('questions', questions => {
          const newQuestion = moduleState.newQuestion.merge({
            author: payload.author,
            id: generate(),
            timestamp: Date.now()
          });
          return questions.push(newQuestion);
        })
        .set('newQuestion', new QuestionRecord());
    }

    case SET_QUESTIONS: {
      return moduleState.set('questions', transformQuestions(payload.questions));
    }

    case UPDATE_NEW_QUESTION_TEXT: {
      return moduleState.setIn(['newQuestion', `option${capitalizeFirstLetter(payload.option)}`, 'text'], payload.value);
    }

    default:
      return moduleState;
  }
}

function transformQuestions (questions) {
  return List(Object.values(questions).map(question => new QuestionRecord({
    ...question,
    optionOne: new OptionRecord(fromJS(question.optionOne)),
    optionTwo: new OptionRecord(fromJS(question.optionTwo))
  })));
}

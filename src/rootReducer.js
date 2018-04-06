import { combineReducers } from 'redux';
import homepageReducer from 'modules/homepage/reducer';
import loginReducer from 'modules/login/reducer';
import questionsReducer from 'modules/questions/reducer';

export default combineReducers({
  homepageModule: homepageReducer,
  loginModule: loginReducer,
  questionsModule: questionsReducer
});

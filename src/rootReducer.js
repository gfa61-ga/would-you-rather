import { combineReducers } from 'redux';
import appReducer from 'modules/app/reducer';
import homepageReducer from 'modules/homepage/reducer';
import loginReducer from 'modules/login/reducer';
import questionsReducer from 'modules/questions/reducer';

export default combineReducers({
  appModule: appReducer,
  homepageModule: homepageReducer,
  loginModule: loginReducer,
  questionsModule: questionsReducer
});

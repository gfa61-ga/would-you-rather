import { combineReducers } from 'redux';
import loginReducer from 'modules/login/reducer';

export default combineReducers({
  loginModule: loginReducer
});

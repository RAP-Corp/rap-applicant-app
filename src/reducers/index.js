import { combineReducers } from 'redux';
import loginReducer from './reducers_login_page';
import registrationReducer from './reducers_registration_page'

const rootReducer = combineReducers({
  login: loginReducer,
  registration: registrationReducer
 });

export default rootReducer;

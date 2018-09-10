import { combineReducers } from 'redux';
import loginReducer from './reducers_login_page'

const rootReducer = combineReducers({ login: loginReducer });

export default rootReducer;

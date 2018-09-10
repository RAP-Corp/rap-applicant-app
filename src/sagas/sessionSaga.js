import { updateProfile } from '../actions/actionCreators';
//import { BrowserRouter } from  'react-router-dom';
import { takeLatest, call, put} from 'redux-saga/effects';
//import { Redirect } from 'react-router-dom';
//import { push } from 'react-router-redux';

function loginApi(authParams) {
  return {
    profileStatus : 'admin',
    username: 'sampleUser',
  }
}

function* loginEffectSaga(action) {
  try{
    const profileStatus = yield(call(loginApi, action.payload))
    //const profileStatus = loginApi(null);
    yield put(updateProfile(profileStatus));
    //yield put(push('/'));
  } catch (e) {
    console.log("the login call failed")
  }
}

export function* loginWatcherSaga() {
  yield takeLatest('LOGIN_WATCHER', loginEffectSaga);
}

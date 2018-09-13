import { updateProfile } from '../actions/actionCreators';
//import { BrowserRouter } from  'react-router-dom';
import { takeLatest, call, put} from 'redux-saga/effects';
//import { Redirect } from 'react-router-dom';
//import { push } from 'react-router-redux';

function loginApi(authParams) {
  // return fetch('http://localhost:3000/user',
  //   {
  //       method: "GET",
  //       headers: {
  //       }
  //   })
  //   .then(response => response.json())
  //   .then(json => console.log(json))
}

function* loginEffectSaga(action) {
  try{
    const response = yield fetch('http://localhost:3000/user')
      .then(response => response.json())
    console.log(response)
    //const profileStatus = yield(call(loginApi, action.payload))
    //console.log(profileStatus);
    yield put(updateProfile(response[0]));
    //yield put(push('/'));
  } catch (e) {
    console.log("the login call failed: "+ e)
  }
}

export function* loginWatcherSaga() {
  yield takeLatest('LOGIN_WATCHER', loginEffectSaga);
}

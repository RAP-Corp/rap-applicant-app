import { updateProfile } from '../actions/actionCreators';
import { takeLatest, call, put} from 'redux-saga/effects';
import { push } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';


function loginApi(authParams) {

}

function* loginEffectSaga(action) {
  try{
    const response = yield fetch('http://localhost:3000/user')
      .then(response => response.json())
    console.log(response)

    for(let i=0;i<response.length; i++) {
      if (response[i].username === (action.payload.username)) {
        yield put(updateProfile(response[i]));
        switch(response[i].profileStatus) {
          case 'admin':
            action.payload.history.push('/admin');
            break;
          case 'hiringManager':
            action.payload.history.push('/hiringManager');
            break;
          case 'applicant':
            action.payload.history.push('/applicant');
            break;
          case 'communications':
            action.payload.history.push('/communications');
            break;
          default:
            debugger;
            break;
        }
      }
    }
    console.log('after push');
    console.log('Wrong Username')
  } catch (e) {
    console.log("the login call failed: "+ e)
  }
}

export function* loginWatcherSaga() {
  yield takeLatest('LOGIN_WATCHER', loginEffectSaga);
}

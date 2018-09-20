import { updateProfile, loginErrorToggle } from '../actions/actionCreators';
import { takeLatest, put} from 'redux-saga/effects';

function* loginEffectSaga(action) {
  try{
    const response = yield fetch('http://localhost:3000/user')
      .then(response => response.json())
    console.log(response)
    let loginErrorBool = true;
    for(let i=0;i<response.length; i++) {
      debugger;
      if (response[i].email === (action.payload.email)) {
        yield put(updateProfile(response[i]));
        switch(response[i].profileStatus) {
          case 'admin':
            action.payload.history.push('/admin');
            loginErrorBool = false;
            break;
          case 'hiringManager':
            action.payload.history.push('/hiringManager');
            loginErrorBool = false;
            break;
          case 'applicant':
            action.payload.history.push('/applicant');
            loginErrorBool = false;
            break;
          case 'communications':
            action.payload.history.push('/communications');
            loginErrorBool = false;
            break;
          default:
            break;
        }
      }
    }
    yield put(loginErrorToggle(loginErrorBool));
  } catch (e) {
    console.log("the login call failed: "+ e)
  }
}

export function* loginWatcherSaga() {
  yield takeLatest('LOGIN_WATCHER', loginEffectSaga);
}

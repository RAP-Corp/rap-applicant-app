import { updateProfile, loginErrorToggle } from '../actions/actionCreators';
import { takeLatest, put} from 'redux-saga/effects';

function* loginEffectSaga(action) {
  try{
    const response = yield fetch('http://localhost:3000/user')
      .then(response => response.json())
    console.log(response)
    let errorBool = true;
    for(let i=0;i<response.length; i++) {
      if (response[i].username === (action.payload.username)) {
        yield put(updateProfile(response[i]));
        switch(response[i].profileStatus) {
          case 'admin':
            action.payload.history.push('/admin');
            errorBool = false;
            break;
          case 'hiringManager':
            action.payload.history.push('/hiringManager');
            errorBool = false;
            break;
          case 'applicant':
            action.payload.history.push('/applicant');
            errorBool = false;
            break;
          case 'communications':
            action.payload.history.push('/communications');
            errorBool = false;
            break;
          default:
            break;
        }
      }
    }
    yield put(loginErrorToggle(errorBool));

    console.log('Wrong Username')
  } catch (e) {
    console.log("the login call failed: "+ e)
  }
}

export function* loginWatcherSaga() {
  yield takeLatest('LOGIN_WATCHER', loginEffectSaga);
}

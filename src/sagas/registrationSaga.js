import { updateProfile } from '../actions/actionCreators';
import { takeLatest, put} from 'redux-saga/effects';

function registerUser(registrationParams){
  return true;
}

function* registrationEffectSaga(action) {
  try{
    if(registerUser(action)){
      let profileObject = {email: action.email, profileStatus: "applicant"}
      yield put(updateProfile(profileObject))
      action.payload.history.push('/applicant');
    }
    console.log(action.payload);
  } catch (e) {
    console.log("the registration call failed: "+ e)
  }
}

export function* registrationWatcherSaga() {
  yield takeLatest('REGISTRATION_WATCHER', registrationEffectSaga);
}

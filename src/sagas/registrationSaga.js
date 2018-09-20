import { updateProfile, registrationErrorMessage } from '../actions/actionCreators';
import { takeLatest, put} from 'redux-saga/effects';

function registerUser(registrationParams){
  return true;
}

function* registrationEffectSaga(action) {
  try{
    if(registerUser(action)){
      let profileObject = {email: action.email, profileStatus: "applicant"}
      yield put(updateProfile(profileObject))
    }
    console.log(action.payload);
    if (action.payload.password === action.payload.passwordConfirm) {
      action.payload.history.push('/applicant');
      yield put(registrationErrorMessage(''));
    }
    else{
      yield put(registrationErrorMessage('passwords do not match'));
    }
  } catch (e) {
    console.log("the registration call failed: "+ e)
  }
}

export function* registrationWatcherSaga() {
  yield takeLatest('REGISTRATION_WATCHER', registrationEffectSaga);
}

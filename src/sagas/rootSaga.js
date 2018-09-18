import { all } from 'redux-saga/effects';
import { loginWatcherSaga } from './sessionSaga';
import { registrationWatcherSaga } from './registrationSaga';

export default function* rootSaga() {
  yield all([
    loginWatcherSaga(),
    registrationWatcherSaga()
  ]);
}

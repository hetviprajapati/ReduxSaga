import {  takeLatest, all } from 'redux-saga/effects';

import {fetchUser} from './displaySaga';
import {loginUser} from './loginSaga';
import {logoutUser} from './logoutSaga';

function* actionWatcher() {
  debugger;
     yield takeLatest('FETCH_REQUEST', fetchUser)
     yield takeLatest('REQUEST_FOR_LOGIN', loginUser)
     yield takeLatest('REQUEST_LOGOUT', logoutUser)
}

export default function* rootSaga() {
   yield all([
      actionWatcher(),
   ]);
}
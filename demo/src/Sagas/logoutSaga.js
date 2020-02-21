import { put } from 'redux-saga/effects'

export function* logoutUser() {
    debugger;
      localStorage.removeItem("token")
      localStorage.removeItem("role")
      yield put({ type: 'LOGOUT_SUCCESSFUL', token: "", role: "" });
}
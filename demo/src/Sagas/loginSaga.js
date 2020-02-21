import { put } from 'redux-saga/effects'
import jwt from 'jwt-decode'

import Login from '../Service/serviceLogin/serviceLogin';

export function* loginUser(data) {
    try {
      let roleData;
      const response = yield Login({ email: data.credential.email, password: data.credential.password });
      roleData = jwt(response.data);
      localStorage.setItem("token",response.data)
      localStorage.setItem("role",roleData.role)
      yield put({ type: 'LOGIN_SUCCESSFUL', token: response.data, role: roleData.role });
    }
    catch (error) {
      if (error.response) {
        alert( error.response.data);
        yield put({ type: 'LOGIN_FAILED', err_msg: error.response.data });
      }
    }
}
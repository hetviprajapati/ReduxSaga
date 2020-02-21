import { put } from 'redux-saga/effects'

export  function* fetchUser() {
    const json = yield fetch('http://localhost:3001/player/get')
        .then(response => response.json() );    
  
    yield put({ type: "FETCH_SUCCESSFUL", data: json, });
}
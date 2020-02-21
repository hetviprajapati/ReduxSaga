import { combineReducers } from 'redux';
import fetch from '../Reducer/fetchReducer';
import login from '../Reducer/loginReducer';

export default combineReducers({ login,fetch })
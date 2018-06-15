import { take, put, call } from 'redux-saga/effects';
import UserService from '../services/userService';
import { REQUEST_USER_INFO, setUserInfo } from '../actions';

export function* login () {
  yield take(REQUEST_USER_INFO);
  const response = yield call(UserService.retrieveSession);
  if (!response.error) {
    yield put(setUserInfo(response.user))
  }
};

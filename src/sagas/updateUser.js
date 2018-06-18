import { takeEvery, call } from 'redux-saga/effects';
import userService from '../services/userService';
import { UPDATE_USER_INFO } from '../actions';

export function* updateUserCollection({ payload }) {
  yield call(userService.updateUser, payload);
}

export function* updateUser() {
  const { payload } = yield takeEvery(UPDATE_USER_INFO, updateUserCollection);
  // yield call(userService.updateUser, payload);
}

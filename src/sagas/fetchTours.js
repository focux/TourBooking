import { take, put, call } from 'redux-saga/effects';
import tourService from '../services/tourService';
import { FETCH_TOURS, setFetchedTours, setFetchRequestReady } from '../actions';

export function* fetchTours() {
  yield take(FETCH_TOURS);
  const response = yield call(tourService.fetchAllTours);
  if (response !== '001') { // Network error
    yield put(setFetchedTours(response));
    yield put(setFetchRequestReady());
  }
};

import { take, put, call } from 'redux-saga/effects';
import BookingService from '../services/bookingService';
import {
  START_FETCHING_BOOKINGS,
  setUserBookings,
  endFetchingBookings
} from '../actions';

export function* fetchBookings() {
  yield take(START_FETCHING_BOOKINGS);
  const response = yield call(BookingService.retrieveBookings);
  yield put(setUserBookings(response.data));
  yield put(endFetchingBookings());
};

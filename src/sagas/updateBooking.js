import { take, call } from 'redux-saga/effects';
import bookingService from '../services/bookingService';
import { UPDATE_BOOKING } from '../actions';

export function* updateBooking() {
  const { payload } = yield take(UPDATE_BOOKING);
  console.log(payload);
  yield call(bookingService.updateBooking, payload.id, payload.newPayment._id);
};

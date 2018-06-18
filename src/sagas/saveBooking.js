import { take, call } from 'redux-saga/effects';
import bookingService from '../services/bookingService';
import paymentService from '../services/paymentService';
import { SAVE_BOOKING_INFO } from '../actions';

export function* saveBooking() {
  const { payload } = yield take(SAVE_BOOKING_INFO);
  console.log(payload, 'EL PAYLOAD');
  const bookingObj = {
    tourId: payload.tourId,
    adults: payload.adults,
    childs: payload.childs
  };
  const { _id } = yield call(bookingService.saveBooking, bookingObj);
  const paymentObj = {
    bookingId: _id,
    paymentId: payload.paymentID,
    payerId: payload.payerID,
    amount: payload.amount
  };
  yield call(paymentService.savePayment, paymentObj)
};

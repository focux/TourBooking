import { take, call } from 'redux-saga/effects';
import bookingService from '../services/bookingService';
import paymentService from '../services/paymentService';
import { SAVE_BOOKING_INFO } from '../actions';

export function* saveBooking() {
  const { payload } = yield take(SAVE_BOOKING_INFO);
  console.log(payload, 'EL PAYLOAD');
  const paymentObj = {
    paymentId: payload.paymentID,
    payerId: payload.payerID,
    amount: payload.amount
  };
  const { _id } = yield call(paymentService.savePayment, paymentObj)
  const bookingObj = {
    payment: [_id],
    tour: payload.tourId,
    adults: payload.adults,
    childs: payload.childs
  };
  yield call(bookingService.saveBooking, bookingObj);
};

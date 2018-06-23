import { take, call, put } from 'redux-saga/effects';
import bookingService from '../services/bookingService';
import paymentService from '../services/paymentService';
import tourService from '../services/tourService';
import { SAVE_BOOKING_INFO, reduceTourSpace } from '../actions';

export function* saveBooking() {
  const { payload } = yield take(SAVE_BOOKING_INFO);
  const totalSpaces = (parseInt(payload.adults) + parseInt(payload.childs || 0));
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
  yield put(reduceTourSpace(payload.tourId, totalSpaces));
  yield call(tourService.reduceSpace, payload.tourId, totalSpaces);
};

export const SAVE_BOOKING_INFO = 'SAVE_BOOKING_INFO';

export const saveBookingInfo = ({
  adults,
  childs,
  tourId,
  paymentID,
  payerID,
  amount
}) => ({
  type: SAVE_BOOKING_INFO,
  payload: {
    adults,
    childs,
    tourId,
    paymentID,
    payerID,
    amount
  }
});

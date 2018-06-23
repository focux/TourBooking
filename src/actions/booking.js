export const SAVE_BOOKING_INFO = 'SAVE_BOOKING_INFO';
export const START_FETCHING_BOOKINGS = 'START_FETCHING_BOOKINGS';
export const SET_USER_BOOKINGS = 'SET_USER_BOOKINGS';
export const END_FETCHING_BOOKINGS = 'END_USER_BOOKINGS';
export const UPDATE_BOOKING = 'UPDATE_BOOKING';

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

export const startFetchingBookings = () => ({
  type: START_FETCHING_BOOKINGS
});

export const setUserBookings = (payload) => ({
  type: SET_USER_BOOKINGS,
  payload
});

export const endFetchingBookings = () => ({
  type: END_FETCHING_BOOKINGS
});

export const updateBooking = (id, newPayment) => ({
  type: UPDATE_BOOKING,
  payload: {
    id,
    newPayment
  }
});

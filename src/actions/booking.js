export const SET_BOOKING_INFO = 'SET_BOOKING_INFO';

export const setBookingInfo = ({
  adults,
  childs
}) => ({
  type: SET_BOOKING_INFO,
  payload: {
    adults,
    childs
  }
});

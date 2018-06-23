import {
  SAVE_BOOKING_INFO,
  START_FETCHING_BOOKINGS,
  SET_USER_BOOKINGS,
  END_FETCHING_BOOKINGS,
  UPDATE_BOOKING
} from '../actions';

const defaultState = {
  data: [],
  status: 'PENDING'
};

const bookingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_BOOKING_INFO:
      return {
        ...state
      };
    case START_FETCHING_BOOKINGS:
      return {
        ...state
      };
    case END_FETCHING_BOOKINGS:
      return {
        ...state,
        status: 'READY'
      };
    case SET_USER_BOOKINGS:
      return {
        ...state,
        data: action.payload
      };
    case UPDATE_BOOKING:
      const newData = state.data.map((booking) => {
        if (booking._id === action.payload.id) {
          console.log('AKI 1', booking)
          console.log('EO', action.payload.newPayment)
          booking.payment = [action.payload.newPayment, ...booking.payment];
          return booking;
        }
        return booking;
      });
      return {
        ...state,
        data: newData
      };
    default:
      return state;
  }
};

export default bookingReducer;

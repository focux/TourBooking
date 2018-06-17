import { SAVE_BOOKING_INFO } from '../actions';

const defaultState = {
  adults: 0,
  childs: 0,
  tourId: '',
  paymentID: '',
  payerID: '',
  amount: ''
};

const bookingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_BOOKING_INFO:
      return {
        ...action.payload
      };
    default:
      return state;
  }
};

export default bookingReducer;

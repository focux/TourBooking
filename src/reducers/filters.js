import moment from 'moment';
import {
  SORT_BY_AMOUNT,
  SORT_BY_DATE,
  SET_FILTER_TEXT,
  SET_START_DATE,
  SET_START_PRICE
} from '../actions';

const defaultState = {
  startPrice: 10000,
  orderBy: 'date',
  text: '',
  startDate: moment().add(1, 'days')
};

const filters = (state = defaultState, action) => {
  switch (action.type) {
    case SET_START_PRICE:
      return {
        ...state,
        startPrice: action.payload.startPrice
      };
    case SET_START_DATE:
      return {
        ...state,
        startDate: action.payload.startDate
      };
    case SET_FILTER_TEXT:
      return {
        ...state,
        text: action.payload.text
      };
    default:
      return state;
  }
};

export default filters;

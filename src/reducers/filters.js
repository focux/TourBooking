import moment from 'moment';

const defaultState = {
  startPrice: 0,
  endPrice: 1000,
  orderBy: 'date',
  text: '',
  startDate: moment(),
  endDate: moment().add(3, 'months')
};

const filters = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_START_PRICE':
      return {
        ...state,
        startPrice: action.startPrice
      };
    case 'SET_END_PRICE':
      return {
        ...state,
        endPrice: action.endPrice
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

export default filters;

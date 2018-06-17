import {
  CREATE_TOUR,
  EDIT_TOUR,
  DELETE_TOUR,
  UPDATE_TOUR_RATE,
  SET_FETCH_REQUEST_READY,
  SET_FETCHED_TOURS,
  REDUCE_TOUR_SPACE
} from '../actions';

const defaultState = {
  status: 'PENDING',
  data: []
};
/* eslint-disable */
const toursReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_TOUR:
      let newState = {...state};
      newState.data = [...newState.data, action.payload.tour];
      return newState;
    case EDIT_TOUR:
      return state.data.map(tour => {
        if (tour.id === action.payload.id) {
          return {
            ...tour,
            ...action.payload.updates
          };
        }
        return tour;
      });
    case DELETE_TOUR:
      return state.data.filter(({ id }) => id !== action.payload.id);
    case UPDATE_TOUR_RATE:
      return state.data.map(tour => {
        if (tour.id === action.payload.id) {
          return {
            ...tour,
            stars: action.payload.newRate
          };
        }
        return tour;
      });
    case SET_FETCH_REQUEST_READY: {
      let newState = {...state};
      newState.status = 'READY';
      return newState;
    }
    case SET_FETCHED_TOURS: {
      let newState = {...state};
      newState.data = action.payload.tours;
      return newState;
    }
    case REDUCE_TOUR_SPACE: {
      return {
        ...state,
        data: state.data.map(tour => {
        if (tour.id === action.payload.id) {
          return {
            ...tour,
            spaces: tour.spaces - 1
          };
        }
        return tour;
      })
    }
    }
    default:
      return state;
  }
};

export default toursReducer;

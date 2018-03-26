const defaultState = [];
const toursReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CREATE_TOUR':
      return [...state, action.tour];
    case 'EDIT_TOUR':
      return state.map(tour => {
        if (tour.id === action.id) {
          return {
            ...tour,
            ...action.updates
          };
        }
        return tour;
      });
    case 'DELETE_TOUR':
      return state.filter(({ id }) => id !== action.id);
    case 'UPDATE_TOUR_RATE':
      return state.map(tour => {
        if (tour.id === action.id) {
          return {
            ...tour,
            stars: action.newRate
          };
        }
        return tour;
      });
    default:
      return state;
  }
};

export default toursReducer;

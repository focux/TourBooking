export const CREATE_TOUR = 'CREATE_TOUR';
export const EDIT_TOUR = 'EDIT_TOUR';
export const DELETE_TOUR = 'DELETE_TOUR';
export const UPDATE_TOUR_RATE = 'UPDATE_TOUR_RATE';
export const FETCH_TOURS = 'FETCH_TOURS';
export const SET_FETCHED_TOURS = 'SET_FETCHED_TOURS';
export const SET_FETCH_REQUEST_READY = 'SET_FETCH_REQUEST_READY';
export const REDUCE_TOUR_SPACE = 'REDUCE_TOUR_SPACE';


export const createTour = tour => ({
  type: CREATE_TOUR,
  payload: { tour }
});

export const editTour = (id, updates) => ({
  type: EDIT_TOUR,
  payload: { id, updates }
});

export const deleteTour = id => ({
  type: DELETE_TOUR,
  payload: { id }
});

export const updateTourRate = (id, newRate) => ({
  type: UPDATE_TOUR_RATE,
  payload: { id, newRate }
});

export const fetchTours = () => ({
  type: FETCH_TOURS
});

export const setFetchedTours = (tours) => ({
  type: SET_FETCHED_TOURS,
  payload: { tours }
});

export const setFetchRequestReady = () => ({
  type: SET_FETCH_REQUEST_READY
});

export const reduceTourSpace = (id) => ({
  type: REDUCE_TOUR_SPACE,
  payload: { id: parseInt(id) }
});

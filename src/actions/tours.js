export const createTour = tour => ({
  type: 'CREATE_TOUR',
  tour
});

export const editTour = (id, updates) => ({
  type: 'EDIT_TOUR',
  id,
  updates
});

export const deleteTour = id => ({
  type: 'DELETE_TOUR',
  id
});

export const updateTourRate = (id, newRate) => ({
  type: 'UPDATE_TOUR_RATE',
  id,
  newRate
});

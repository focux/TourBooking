export const SORT_BY_AMOUNT = 'SORT_BY_AMOUNT';
export const SORT_BY_DATE = 'SORT_BY_DATE';
export const SET_FILTER_TEXT = 'SET_FILTER_TEXT';
export const SET_START_DATE = 'SET_START_DATE';
export const SET_START_PRICE = 'SET_START_PRICE';


export const sortByAmount = () => ({
  type: SORT_BY_AMOUNT
});

export const sortByDate = () => ({
  type: SORT_BY_DATE
});

export const setFilterText = text => ({
  type: SET_FILTER_TEXT,
  payload: { text }
});

export const setStartDate = startDate => ({
  type: SET_START_DATE,
  payload: { startDate }
});

export const setStartPrice = startPrice => ({
  type: SET_START_PRICE,
  payload: { startPrice }
});

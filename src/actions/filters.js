export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

export const setFilterText = text => ({
  type: 'SET_FILTER_TEXT',
  text
});

export const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate
});

export const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate
});

export const setStartPrice = startPrice => ({
  type: 'SET_START_PRICE',
  startPrice
});

export const setEndPrice = endPrice => ({
  type: 'SET_END_PRICE',
  endPrice
});

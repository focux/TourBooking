import moment from 'moment';

const numeral = require('numeral');

export const formatPrice = (price, withSymb) => numeral(price).format(`${withSymb ? '$' : ''}0,0`);

export const displayDate = (currentDate) => {
  const diffDate = currentDate.diff(moment(), 'days', true);
  const diffDateRounded = currentDate.diff(moment(), 'days');
  if (diffDate < 1) {
    return 'less than a day';
  }
  return `in ${diffDateRounded} ${diffDateRounded === 1 ? 'day' : 'days'}`;
};

export const displayNumDate = (currentDate) => moment(currentDate).format('DD/MM/YYYY');

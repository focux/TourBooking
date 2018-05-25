const numeral = require('numeral');

export const formatPrice = (price, withSymb) => numeral(price).format(`${withSymb ? '$' : ''}0,0`);

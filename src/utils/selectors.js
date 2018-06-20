import { createSelector } from 'reselect';
import moment from 'moment';
import { uniqBy } from 'lodash';

export const getTours = createSelector(
  (state) => state.tours.data,
  (state) => state.filters.startDate,
  (state) => state.filters.startPrice,
  (state) => state.filters.text,
  (state) => state.tours.status,
  (tours, startDate, startPrice, text, status) => {
    const selectedTours = tours.filter((tour) => (tour.adultPrice <= startPrice) && moment(tour.departingDate).isAfter(startDate));
    if (text) {
      const textSplited = text.toLowerCase().split(' ');
      if (textSplited.length === 1) {
        return selectedTours.filter((tour) => tour.title.toLowerCase().indexOf(text.toLowerCase()) > -1 || tour.location.toLowerCase().indexOf(text.toLowerCase()) > -1);
      } else {
        console.log('explited', textSplited)
        const k = textSplited.reduce((prevVal, currentVal) => {
          let newArray = []
          selectedTours.forEach((tour) => {
            if (tour.title.toLowerCase().indexOf(currentVal) > -1 || tour.location.toLowerCase().indexOf(currentVal) > -1) {
              console.log('match', tour.title)
              newArray.push(tour);
            }
          });
          return uniqBy([...prevVal, ...newArray], 'id');
        }, []);
        return k;
      }
    }
    return selectedTours;
  }
);

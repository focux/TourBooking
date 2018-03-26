import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import mainTheme from './theme/mainTheme';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { createTour } from './actions/tours';
import './theme/styleGloblal';

const store = configureStore();

const jsx = (
  <ThemeProvider theme={mainTheme}>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </ThemeProvider>
);
const tour = {
  id: '1',
  place: 'Saona Experience',
  description: 'El viaje a isla saona es una exp. inolvidable',
  operator: 'Emilio Tours',
  heroImage: 'Un cover image',
  price: 1200,
  date: '01/2/2018',
  stars: 5,
  availability: 20,
  duration: 1
};

const tour2 = {
  id: '2',
  place: 'Punta Cana Experience',
  description: 'El viaje es una exp. inolvidable',
  operator: 'Harold Tours',
  heroImage: 'Un cover image',
  price: 2300,
  date: '01/2/2018',
  stars: 3,
  availability: 15,
  duration: 2
};

const action = createTour(tour);
const action2 = createTour(tour2);
store.dispatch(action);
store.dispatch(action2);

ReactDOM.render(jsx, document.getElementById('app'));

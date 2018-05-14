import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import mainTheme from './theme/mainTheme';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import './theme/styleGloblal';
import { fetchTours } from './actions';

const store = configureStore();

const jsx = (
  <ThemeProvider theme={mainTheme}>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </ThemeProvider>
);
store.dispatch(fetchTours());
ReactDOM.render(jsx, document.getElementById('app'));

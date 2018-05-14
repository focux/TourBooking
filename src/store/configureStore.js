import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import initSagas from './initSagas';
import toursReducer from '../reducers/tours';
import filtersReducer from '../reducers/filters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reduxSaga = createSagaMiddleware();
const store = () => {
  const configStore = createStore(
    combineReducers({
      tours: toursReducer,
      filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(reduxSaga))
  );
  initSagas(reduxSaga);
  return configStore;
};

export default store;

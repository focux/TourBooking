import * as sagas from '../sagas';

const initSagas = (sagasMiddleware) => {
  Object.values(sagas).forEach(sagasMiddleware.run.bind(sagasMiddleware));
};

export default initSagas;


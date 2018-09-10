import rootSaga from './sagas/rootSaga';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';

const sagaMiddleWare = createSagaMiddleware();

let middleWares = applyMiddleware(sagaMiddleWare);

const store = createStore(
  reducers,
  compose(middleWares)
);

sagaMiddleWare.run(rootSaga);

export default store;

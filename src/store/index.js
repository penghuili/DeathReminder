import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reactotron from '../lib/ReactotronConfig';

import { reducers } from './reducers';
import { sagas } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const enhancer = __DEV__
  ? compose(applyMiddleware(sagaMiddleware), reactotron.createEnhancer())
  : applyMiddleware(sagaMiddleware);

const store = createStore(reducers, enhancer);
sagaMiddleware.run(sagas);

export default store;

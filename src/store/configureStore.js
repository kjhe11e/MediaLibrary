import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

// return the store instance.
// also accepts optional param 'initialState' argument when provided.
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(rootReducer,
      applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};

export default configureStore;

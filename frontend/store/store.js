
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

let middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
const c = logger
middleware = [...middleware, c]
}
const configureStore = (preloadedState = {}) =>
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
  );

export default configureStore;
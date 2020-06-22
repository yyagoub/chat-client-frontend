import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
//import { createLogger } from 'redux-logger';

import Reducers from './Reducers';

// for reducer loggings
//const loggerMiddleware = createLogger();
const initialState = {};

const store = createStore(
  Reducers,
  initialState,
  applyMiddleware(
    thunkMiddleware //, loggerMiddleware
  )
);

//window.store = store;
export default store;

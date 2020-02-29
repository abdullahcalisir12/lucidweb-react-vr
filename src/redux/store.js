import {applyMiddleware, combineReducers, createStore} from "redux";
import reducer from './reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

export default createStore(
  combineReducers({...reducer}),
  {},
  applyMiddleware(logger, thunk, promise)
);
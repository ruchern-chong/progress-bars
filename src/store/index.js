/* istanbul ignore file */
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';

const middleWares = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;

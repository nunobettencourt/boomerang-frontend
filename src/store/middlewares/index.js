import { applyMiddleware } from 'redux';

//import all middlewares
import thunk from 'redux-thunk';
import log from './log';
import api from './api';

//export all the middlewares. ORDER MATTERS!!
const middlewares = [thunk, log, api];

const middlewareEnhancer = applyMiddleware(...middlewares);

export default middlewareEnhancer;

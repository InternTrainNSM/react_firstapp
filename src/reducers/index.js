import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

const reducers = { };

module.exports = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer,
}));

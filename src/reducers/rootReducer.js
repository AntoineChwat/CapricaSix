/**
 * @fileoverview  This is the root reducer of our application
 *
 * @author        Antoine Chwat
 *
 * @namespace     rootReducer
 */
'use strict';

const combineReducers = require('redux').combineReducers;

const mainReducer = require('./mainReducer');
const navigatorReducer = require('./navigatorReducer');

/**
 * We combine our auxilliary reducers here
 *
 * @param   {Object} reducers the reducers we wish to combine
 *
 * @returns {Object} The combination of our reducers
 *
 * @memberof rootReducer
 */
const rootReducer = combineReducers({
  main: mainReducer,
  nav: navigatorReducer
});

module.exports = rootReducer;

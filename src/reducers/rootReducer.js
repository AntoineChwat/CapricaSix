/**
 * @fileoverview  This is the root reducer of our application
 *
 * @author        Antoine Chwat
 *
 * @namespace     rootReducer
 */
'use strict';

const combineReducers = require('redux').combineReducers;

const navigatorReducer = require('./navigatorReducer');
// const stackNavigatorReducer1 = require('./stackNavigatorReducer1');

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
  nav: navigatorReducer
  // stackNav1: stackNavigatorReducer1
});

module.exports = rootReducer;

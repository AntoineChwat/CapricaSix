'use strict';

const createStore = require('redux').createStore;
const applyMiddleware = require('redux').applyMiddleware;

const thunk = require('redux-thunk').default;

const rootReducer = require('./reducers/rootReducer');

const ReactNavigationReduxHelpers = require('react-navigation-redux-helpers');
const createReduxBoundAddListener = ReactNavigationReduxHelpers.createReduxBoundAddListener;
const createReactNavigationReduxMiddleware = ReactNavigationReduxHelpers.createReactNavigationReduxMiddleware;

const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);
const addListener = createReduxBoundAddListener('root');

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, navMiddleware)
);

module.exports = {store, addListener};

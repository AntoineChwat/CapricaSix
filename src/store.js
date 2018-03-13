'use strict';

const createStore = require('redux').createStore;
const applyMiddleware = require('redux').applyMiddleware;

const thunk = require('redux-thunk').default;

const rootReducer = require('./reducers/rootReducer');

// MUST APPLY REACT NAVIGATION MIDDLEWARE

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

module.exports = store;

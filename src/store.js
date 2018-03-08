'use strict';

const createStore = require('redux').createStore;
const applyMiddleware = require('redux').applyMiddleware;

const thunk = require('redux-thunk').default;

const rootReducer = require('./reducers/rootReducer');

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

module.exports = store;

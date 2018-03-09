/**
 * @fileoverview  This is the app container
 *
 * @author        Antoine Chwat
 *
 * @namespace     AppContainer
 */
'use strict';

const React = require('react');

const createReactClass = require('create-react-class');

const ReactRedux = require('react-redux');
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

const store = require('../store');

const App = require('../components/App');

/**
 * This function maps the useful part of our application's state to AppWithNavigationState's props
 *
 * @param    {Object} state the state of our application
 *
 * @returns  {Object} The state of the app navigator
 *
 * @memberof AppContainer
 */
const mapStateToProps = (state) => ({
  tabNav: state.tabNav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

/**
 * The app mapped to the state of the navigator is rendered in this class
 * @class
 *
 * @memberof AppContainer
 */
const AppContainer = createReactClass({
  render() {
    return (
      <Provider store = {store}>
        <AppWithNavigationState/>
      </Provider>
    );
  }
});

module.exports = AppContainer;

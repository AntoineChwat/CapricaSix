/**
 * @fileoverview  This component renders the App Navigators
 *
 * @author        Antoine Chwat
 *
 * @namespace     App
 */

const React = require('react');

const createReactClass = require('create-react-class');

const ReactNavigation = require ('react-navigation');
const addNavigationHelpers = ReactNavigation.addNavigationHelpers;

const ReactNavigationReduxHelpers = require('react-navigation-redux-helpers');
const createReduxBoundAddListener = ReactNavigationReduxHelpers.createReduxBoundAddListener;
const createReactNavigationReduxMiddleware = ReactNavigationReduxHelpers.createReactNavigationReduxMiddleware;

const MainNavigator = require('../utils/MainNavigator');

createReactNavigationReduxMiddleware(
 'root',
 state => state.stackNav,
);
const addListener = createReduxBoundAddListener('root');

const App = createReactClass({

  /**
   * The render returns our app navigator's default view
   *
   * @returns {MainNavigator} Our app's stack navigator
   *
   * @memberof App
   */
  render() {
    return (
      <MainNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.stackNav,
        addListener: addListener
      })} />
    );
  }
});

module.exports = App;

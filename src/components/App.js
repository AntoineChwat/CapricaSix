/**
 * @fileoverview  This component renders the App Navigators
 *
 * @author        Antoine Chwat
 *
 * @namespace     App
 */

const React = require('react');

const createReactClass = require('create-react-class');

const PropTypes = require('prop-types');

const ReactNavigation = require ('react-navigation');
const addNavigationHelpers = ReactNavigation.addNavigationHelpers;

const ReactNavigationReduxHelpers = require('react-navigation-redux-helpers');
const createReduxBoundAddListener = ReactNavigationReduxHelpers.createReduxBoundAddListener;
const createReactNavigationReduxMiddleware = ReactNavigationReduxHelpers.createReactNavigationReduxMiddleware;

const RootNavigator = require('../utils/SideNavigator');
const SplashPageContainer = require('../containers/SplashPageContainer');

createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);
const addListener = createReduxBoundAddListener('root');

const App = createReactClass({
  propTypes: {
    dispatch: PropTypes.func,
    nav: PropTypes.shape(),
    isLoading: PropTypes.bool
  },

  /**
   * The render returns our app navigator's default view
   *
   * @returns {RootNavigator} Our app's tab navigator
   *
   * @memberof App
   */
  render() {
    console.log('isLoading ' + this.props.isLoading);
    return (
      this.props.isLoading ?
        <SplashPageContainer/> :
        <RootNavigator navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener: addListener
        })} />
    );
  }
});

module.exports = App;

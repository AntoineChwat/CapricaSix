/**
 * @fileoverview  This component renders the App Navigators
 *
 * @author        Antoine Chwat
 *
 * @namespace     App
 */

const React = require('react');

const Linking = require('react-native').Linking;
const Platform = require('react-native').Platform;

const NavigationActions = require('react-navigation').NavigationActions;

const store = require('../store');

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

  componentDidMount() {
    if (Platform.OS === 'android') {
      Linking.getInitialURL().then(url => {
        this.routeAction(url);
      });
    } else {
      Linking.addEventListener('url', this.handleOpenURL);
    }
  },

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  },

  handleOpenURL(event) {
    this.routeAction(event.url);
  },

  routeAction(url) {
    var nextRoute = url.split('//')[1];
    console.log('HELLO DAVE: ' + nextRoute);
    store.dispatch(NavigationActions.navigate({routeName: nextRoute}));
  },

  /**
   * The render returns our app navigator's default view
   *
   * @returns {RootNavigator} Our app's tab navigator
   *
   * @memberof App
   */
  render() {
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

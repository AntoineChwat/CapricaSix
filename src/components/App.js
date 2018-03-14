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

const store = require('../store').store;
const addListener = require('../store').addListener;

const createReactClass = require('create-react-class');

const PropTypes = require('prop-types');

const ReactNavigation = require ('react-navigation');
const addNavigationHelpers = ReactNavigation.addNavigationHelpers;

const RootNavigator = require('../utils/SideNavigator');
const SplashPageContainer = require('../containers/SplashPageContainer');
const routeUrl = require('../utils/routeUrl');

const loadData = require('../actions/actions').loadData;

const App = createReactClass({
  propTypes: {
    dispatch: PropTypes.func,
    nav: PropTypes.shape(),
    isLoading: PropTypes.bool
  },

  componentDidMount() {
    store.dispatch(loadData()).then(() => {
      if (Platform.OS === 'android') {
        Linking.getInitialURL().then(url => {
          if (url) {
            routeUrl(url);
          }
        });
      } else {
        Linking.addEventListener('url', this.handleOpenURL);
        Linking.getInitialURL().then((url) => {
          if (url) {
            routeUrl(url);
          }
        });
      }
    });
  },

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  },

  handleOpenURL(event) {
    routeUrl(event.url);
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

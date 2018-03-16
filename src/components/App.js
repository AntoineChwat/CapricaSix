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

/**
 * The application is rendered in this class
 * @class
 * @memberof App
 */
const App = createReactClass({
  propTypes: {
    dispatch: PropTypes.func,
    nav: PropTypes.shape(),
    isLoading: PropTypes.bool
  },

  /**
   * This method starts when the component is mounted, it listens for deep links
   * @memberof App
   */
  componentDidMount() {
    store.dispatch(loadData()).then(() => {
      Linking.getInitialURL().then(url => {
        if (url) {
          routeUrl(url);
        }
      });
      if (Platform.OS === 'ios') {
        Linking.addEventListener('url', this.handleOpenURL);
      }
    });
  },

  /**
   * This method is called right before the component unmounts and it deletes the event listener
   * @memberof App
   */
  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  },

  /**
   * This method is called when iOS detects a link and the app is runiing in the background
   * @param    {Object}    event the event detected by iOS
   * @memberof App
   */
  handleOpenURL(event) {
    routeUrl(event.url);
  },

  /**
   * Here we render our loading screen if the app is loading or our drawer navigator if it is done loading
   * @returns  {ReactElement} Our loading screen or our navigator
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

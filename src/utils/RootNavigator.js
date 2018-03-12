const StackNavigator = require('react-navigation').StackNavigator;

const SplashPageContainer = require('../containers/SplashPageContainer');
const SideNavigator = require('./SideNavigator');

const RootNavigator = StackNavigator({
  SideNavigator: { screen: SideNavigator },
  Splash: { screen: SplashPageContainer }
}, {
  headerMode: 'none',
  initialRouteName: 'Splash'
});

module.exports = RootNavigator;

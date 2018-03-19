const React = require('react');
const ReactNative = require('react-native');
const ScrollView = ReactNative.ScrollView;
const Button = ReactNative.Button;
const PropTypes = require('prop-types');

const NavigationActions = require('react-navigation').NavigationActions;

const connect = require('react-redux').connect;

const DrawerItems = require('react-navigation').DrawerItems;

const DrawerNavigator = require('react-navigation').DrawerNavigator;

const MainNavigator = require('./MainNavigator');
const PageContainer1 = require('../containers/PageContainer1');
const PageContainer2 = require('../containers/PageContainer2');
const PageContainer3 = require('../containers/PageContainer3');
const PageContainer4 = require('../containers/PageContainer4');

const createReactClass = require('create-react-class');

const mapDispatchToProps = function(dispatch) {
  return {
    onItemPressed: function() {
      dispatch(NavigationActions.reset(
        {
          index: 0,
          actions: [
            NavigationActions.navigate({routeName: 'Results'})
          ]
        }
      ));
    }
  };
};

const hiddenDrawerItems = [
  'MainPage'
];

const SideMenu = createReactClass({
  propTypes: {
    items: PropTypes.array,
    onItemPressed: PropTypes.func
  },

  render() {
    const clonedProps = {
        ...this.props,
        items: this.props.items.filter(item => !hiddenDrawerItems.includes(item.key))
      };
      return (
        <ScrollView>
          <DrawerItems {...clonedProps} />
          <Button
            onPress={this.props.onItemPressed}
            color='#48BBEC'
            title='Home'/>
        </ScrollView>
      );
    }
});

const container = connect(
  null,
  mapDispatchToProps
)(SideMenu);

const SideNavigator = DrawerNavigator({
  MainPage: { screen: MainNavigator },
  DrawerItem1: { screen: PageContainer1 },
  DrawerItem2: { screen: PageContainer2 },
  DrawerItem3: { screen: PageContainer3 },
  DrawerItem4: { screen: PageContainer4 }
}, {
  initialRouteName: 'MainPage',
  contentComponent: container
});

module.exports = SideNavigator;

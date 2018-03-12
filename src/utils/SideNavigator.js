const DrawerNavigator = require('react-navigation').DrawerNavigator;

// const PageContainer1 = require('../containers/PageContainer1');
const MainNavigator = require('./MainNavigator');
const PageContainer2 = require('../containers/PageContainer2');
const PageContainer3 = require('../containers/PageContainer3');
const PageContainer4 = require('../containers/PageContainer4');

const SideNavigator = DrawerNavigator({
    DrawerItem1: { screen: MainNavigator },
    DrawerItem2: { screen: PageContainer2 },
    DrawerItem3: { screen: PageContainer3 },
    DrawerItem4: { screen: PageContainer4 }
});

module.exports = SideNavigator;

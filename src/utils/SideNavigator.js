const DrawerNavigator = require('react-navigation').DrawerNavigator;

const PageContainer1 = require('../containers/PageContainer1');
const PageContainer2 = require('../containers/PageContainer2');

const SideNavigator = DrawerNavigator({
    DrawerItem1: { screen: PageContainer1 },
    DrawerItem2: { screen: PageContainer2 }
});

module.exports = SideNavigator;

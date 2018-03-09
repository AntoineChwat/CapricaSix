/**
 * @fileoverview  This is the navigator responsible for switching between pages
 *
 * @author        Antoine Chwat
 *
 * @namespace     SecondaryStackNavigator
 */
'use strict';

const StackNavigator = require('react-navigation').StackNavigator;

const PageContainer3 = require('../containers/PageContainer3');
// const SideNavigator = require('./SideNavigator');
const PageContainer4 = require('../containers/PageContainer4');

/**
 * Create the main navigator
 *
 * @param    {Object} views   the pages in your application
 * @param    {Object} options options allowed by TabNavigator
 *
 * @memberof SecondaryStackNavigator
 */
const SecondaryStackNavigator = StackNavigator({
  Raptor: { screen: PageContainer3 },
  Viper: { screen: PageContainer4 }
}, {
  initialRouteName: 'Raptor'
});

module.exports = SecondaryStackNavigator;

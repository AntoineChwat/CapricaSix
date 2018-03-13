/**
 * @fileoverview  This is the navigator responsible for switching between main pages
 *
 * @author        Antoine Chwat
 *
 * @namespace     MainNavigator
 */
'use strict';

const TabNavigator = require('react-navigation').TabNavigator;

const PrimaryStackNavigator = require('../utils/PrimaryStackNavigator');
const SecondaryStackNavigator = require('../utils/SecondaryStackNavigator');


/**
 * Create the main navigator
 *
 * @param    {Object} views   the pages in your application
 * @param    {Object} options options allowed by navigator
 *
 * @memberof MainNavigator
 */
const MainNavigator = TabNavigator({
  Main: { screen: PrimaryStackNavigator },
  Raptor: { screen: SecondaryStackNavigator }
}, {
  initialRouteName: 'Main'
  // lazy: false,
  // swipeEnabled: true
});

module.exports = MainNavigator;

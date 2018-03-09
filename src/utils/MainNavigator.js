/**
 * @fileoverview  This is the navigator responsible for switching between main pages
 *
 * @author        Antoine Chwat
 *
 * @namespace     MainNavigator
 */
'use strict';

const TabNavigator = require('react-navigation').TabNavigator;

// const MainPageContainer = require('../containers/MainPageContainer');
const TertiaryPageContainer = require('../containers/TertiaryPageContainer');
const PrimaryStackNavigator = require('../utils/PrimaryStackNavigator');

/**
 * Create the main navigator
 *
 * @param    {Object} views   the pages in your application
 * @param    {Object} options options allowed by TabNavigator
 *
 * @memberof MainNavigator
 */
const MainNavigator = TabNavigator({
  Galactica: { screen: PrimaryStackNavigator },
  Raptor: { screen: TertiaryPageContainer }
}, {
  initialRouteName: 'Galactica',
  lazy: false,
  swipeEnabled: true
});

module.exports = MainNavigator;

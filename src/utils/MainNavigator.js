/**
 * @fileoverview  This is the navigator responsible for switching between main pages
 *
 * @author        Antoine Chwat
 *
 * @namespace     MainNavigator
 */
'use strict';

const StackNavigator = require('react-navigation').StackNavigator;

const MainPageContainer = require('../containers/MainPageContainer');
const SecondaryPageContainer = require('../containers/SecondaryPageContainer');

/**
 * Create the main navigator
 *
 * @param    {Object} views   the pages in your application
 * @param    {Object} options options allowed by StackNavigator
 *
 * @memberof MainNavigator
 */
const MainNavigator = StackNavigator({
  Home: { screen: MainPageContainer },
  NotHome: { screen: SecondaryPageContainer }
}, {
  initialRouteName: 'Home'
});

module.exports = MainNavigator;

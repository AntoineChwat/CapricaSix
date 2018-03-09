/**
 * @fileoverview  This is the navigator responsible for switching between pages
 *
 * @author        Antoine Chwat
 *
 * @namespace     PrimaryStackNavigator
 */
'use strict';

const StackNavigator = require('react-navigation').StackNavigator;

const MainPageContainer = require('../containers/MainPageContainer');
const SecondaryPageContainer = require('../containers/SecondaryPageContainer');

/**
 * Create the main navigator
 *
 * @param    {Object} views   the pages in your application
 * @param    {Object} options options allowed by TabNavigator
 *
 * @memberof PrimaryStackNavigator
 */
const PrimaryStackNavigator = StackNavigator({
  Galactica: { screen: MainPageContainer },
  Pegasus: { screen: SecondaryPageContainer }
}, {
  initialRouteName: 'Galactica'
});

module.exports = PrimaryStackNavigator;

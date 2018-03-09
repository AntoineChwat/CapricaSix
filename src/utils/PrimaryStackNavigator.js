/**
 * @fileoverview  This is the navigator responsible for switching between pages
 *
 * @author        Antoine Chwat
 *
 * @namespace     PrimaryStackNavigator
 */
'use strict';

const StackNavigator = require('react-navigation').StackNavigator;

// const PageContainer1 = require('../containers/PageContainer1');
const SideNavigator = require('./SideNavigator');
const PageContainer2 = require('../containers/PageContainer2');

/**
 * Create the main navigator
 *
 * @param    {Object} views   the pages in your application
 * @param    {Object} options options allowed by TabNavigator
 *
 * @memberof PrimaryStackNavigator
 */
const PrimaryStackNavigator = StackNavigator({
  Galactica: { screen: SideNavigator },
  Pegasus: { screen: PageContainer2 }
}, {
  initialRouteName: 'Galactica'
});

module.exports = PrimaryStackNavigator;

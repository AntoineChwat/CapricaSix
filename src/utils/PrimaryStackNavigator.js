/**
 * @fileoverview  This is the navigator responsible for switching between pages
 *
 * @author        Antoine Chwat
 *
 * @namespace     PrimaryStackNavigator
 */
'use strict';

const StackNavigator = require('react-navigation').StackNavigator;

const PageContainer1 = require('../containers/PageContainer1');
const PageContainer2 = require('../containers/PageContainer2');
const MoreResultsContainer = require('../containers/MoreResultsContainer');

/**
 * Create the main navigator
 *
 * @param    {Object} views   the pages in your application
 * @param    {Object} options options allowed by navigator
 *
 * @memberof PrimaryStackNavigator
 */
const PrimaryStackNavigator = StackNavigator({
  Results: { screen: PageContainer1 },
  Property: { screen: PageContainer2 },
  MoreResults: {screen: MoreResultsContainer}
}, {
  initialRouteName: 'Results'
});

module.exports = PrimaryStackNavigator;

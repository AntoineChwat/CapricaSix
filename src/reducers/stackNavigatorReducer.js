/**
 * @fileoverview  This is the reducer linked to the stack navigator
 *
 * @author        Antoine Chwat
 *
 * @namespace     stackNavigatorReducer
 */
'use strict';

const MainNavigator = require('../utils/MainNavigator');

const router = MainNavigator.router;
const mainNavAction = router.getActionForPathAndParams('Home');
const initialNavState = router.getStateForAction(mainNavAction);

/**
 * The navigation reducer updates the navigation state based on the actions it receives
 *
 * @param    {Object} state  the state of the navigation
 * @param    {Object} action a navigation action
 *
 * @returns  {Object} The updated navigation state
 *
 * @memberof stackNavigatorReducer
 */
const stackNavigatorReducer = (state = initialNavState, action) => {
  const nextState = MainNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

module.exports = stackNavigatorReducer;

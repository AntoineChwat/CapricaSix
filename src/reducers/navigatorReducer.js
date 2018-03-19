/**
 * @fileoverview  This is the reducer linked to the tab navigator
 *
 * @author        Antoine Chwat
 *
 * @namespace     navigatorReducer
 */
'use strict';

const MainNavigator = require('../utils/SideNavigator');

const router = MainNavigator.router;
const initialNavState = router.getStateForAction({});

/**
 * The navigation reducer updates the navigation state based on the actions it receives
 *
 * @param    {Object} state  the state of the navigation
 * @param    {Object} action a navigation action
 *
 * @returns  {Object} The updated navigation state
 *
 * @memberof navigatorReducer
 */
const navigatorReducer = (state = initialNavState, action) => {
  const nextState = MainNavigator.router.getStateForAction(action, state);
  console.log(nextState);
  return nextState || state;
};

module.exports = navigatorReducer;

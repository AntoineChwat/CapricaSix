/**
 * @fileoverview This file contains all the actions and thunks of our app
 *
 * @author       Antoine Chwat
 *
 * @namespace    actions
 */
const NavigationActions = require('react-navigation').NavigationActions;


/**
 * Tells our application that the result has been successfully and returns the result
 * @param    {Object} results the results
 * @returns  {Object}         The action to dispatch
 * @memberof actions
 */
const dataLoaded = function(results) {
  return {
    type: 'DATA_LOADED',
    results: results
  };
};

/**
 * This thunk loads data and then dispatches an action if the data loaded correctly
 * @returns  {Promise} Whether our fetch has been fulfilled or not
 * @memberof actions
 */
const loadData = function() {
  return (dispatch) => {
    return fetch('https://api.nestoria.co.uk/api?country=uk&pretty=1&encoding=json&listing_type=buy&action=search_listings&page=1&place_name=London')
      .then(response => response.json())
      .then(json => {
        dispatch(dataLoaded(json.response));
      });
  };
};

/**
 * Tells our application that more results have been loaded and returns the results
 * @param    {Object} results the additional results
 * @returns  {Object}         The action to dispatch
 * @memberof actions
 */
const moreDataLoaded = function(results) {
  console.log('More Data Loaded');
  return {
    type: 'MORE_DATA_LOADED',
    results: results
  };
};

/**
 * This thunk loads additional data and then dispatches an action if the data is loaded correctly
 * @param    {Boolean} chain go to a new property if true
 * @param    {Number}  price the price of the property you are looking for, it acts as an id
 * @memberof actions
 */
const loadMoreData = function(chain, price) {
  return (dispatch, getState) => {
    console.log('Starting fetch');
    fetch('https://api.nestoria.co.uk/api?country=uk&pretty=1&encoding=json&listing_type=buy&action=search_listings&page=1&place_name=Manchester')
      .then(response => {
        console.log('Fetch done');
        return response.json();
      })
      .then(json => {
        console.log('Action dispatched');
        dispatch(moreDataLoaded(json.response));
        dispatch(NavigationActions.navigate({routeName: 'MoreResults' }));
      }).then(function() {
        if (chain) {
          dispatch(goToNewProperty(price));
        }
      }).catch(()=>console.log('Exception'));
  };
};

/**
 * Tells our application to update its item
 * @param    {Object} item the item to return
 * @returns  {Object}      The action to dispatch
 * @memberof actions
 */
const returnItem = function(item) {
  return {
    type: 'RETURN_ITEM',
    item
  };
};

/**
 * Tells our application to update its newItem
 * @param    {Object} item the new item to return
 * @returns  {Object}      The action to dispatch
 * @memberof actions
 */
const returnNewItem = function(item) {
  return {
    type: 'RETURN_NEW_ITEM',
    item
  };
};

/**
 * Check that a property exists and navigate to it if it does (or to an empty property if it does not)
 * @param    {Number} price the price we are trying to match
 * @returns  {Promise}      fulfilled if the property has been found
 * @memberof actions
 */
const goToProperty = function(price) {
  return (dispatch, getState) => {
    var resultFound = false;
    for (var i = 0; i < getState().main.results.listings.length; i++) {
      if (getState().main.results.listings[i].price == price) {
        resultFound = true;
        dispatch(returnItem(getState().main.results.listings[i]));
        break;
      }
    }
    dispatch(NavigationActions.navigate({routeName: 'Property'}));
    if (resultFound) {
      return Promise.resolve();
    }
    return Promise.reject();
  };
};

/**
 * Check that a new property exist and navigate to it if it does (or to an empty property if it does not)
 * @param    {Number} price the price we are trying to match
 * @returns  {Promise}      fulfilled if the property has been found
 * @memberof actions
 */
const goToNewProperty = function(price) {
  return (dispatch, getState) => {
    var resultFound = false;
    for (var i = 0; i < getState().main.moreResults.listings.length; i++) {
      if (getState().main.moreResults.listings[i].price == price) {
        resultFound = true;
        dispatch(returnNewItem(getState().main.moreResults.listings[i]));
        break;
      }
    }
    console.log('Done');
    dispatch(NavigationActions.navigate({routeName: 'NewProperty'}));
    if (resultFound) {
      return Promise.resolve();
    }
    return Promise.reject();
  };
};

const returnCoordinates = function(coordinates) {
  console.log('THERE');
  return {
    type: 'RETURN_COORDINATES',
    coordinates: coordinates
  };
};

module.exports = {
  loadMoreData,
  moreDataLoaded,
  loadData,
  dataLoaded,
  returnItem,
  returnNewItem,
  goToProperty,
  goToNewProperty,
  returnCoordinates
};

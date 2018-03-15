const NavigationActions = require('react-navigation').NavigationActions;

const dataLoaded = function(results) {
  return {
    type: 'DATA_LOADED',
    results: results
  };
};

const loadData = function() {
  return (dispatch) => {
    return fetch('https://api.nestoria.co.uk/api?country=uk&pretty=1&encoding=json&listing_type=buy&action=search_listings&page=1&place_name=London')
      .then(response => response.json())
      .then(json => {
        dispatch(dataLoaded(json.response));
      });
  };
};

const moreDataLoaded = function(results) {
  console.log('More Data Loaded');
  return {
    type: 'MORE_DATA_LOADED',
    results: results
  };
};

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

const returnItem = function(item) {
  return {
    type: 'RETURN_ITEM',
    item
  };
};

const returnNewItem = function(item) {
  return {
    type: 'RETURN_NEW_ITEM',
    item
  };
};

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

module.exports = {
  loadMoreData,
  moreDataLoaded,
  loadData,
  dataLoaded,
  returnItem,
  returnNewItem,
  goToProperty,
  goToNewProperty
};

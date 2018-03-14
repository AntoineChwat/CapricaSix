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
  return {
    type: 'MORE_DATA_LOADED',
    results: results
  };
};

const loadMoreData = function() {
  return (dispatch, getState) => {
    return fetch('https://api.nestoria.co.uk/api?country=uk&pretty=1&encoding=json&listing_type=buy&action=search_listings&page=1&place_name=Manchester')
      .then(response => response.json())
      .then(json => {
        dispatch(moreDataLoaded(json.response));
        dispatch(NavigationActions.navigate({routeName: 'MoreResults' }));
      });
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

const goToProperty = function() {
  return (dispatch, getState) => {
    var resultFound = false;
    for (var i = 0; i < getState().main.results.listings.length; i++) {
      if (getState().main.results.listings[i].price == 1750000) {
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

const goToNewProperty = function() {
  return (dispatch, getState) => {
    var resultFound = false;
    for (var i = 0; i < getState().main.moreResults.listings.length; i++) {
      if (getState().main.moreResults.listings[i].price == 155000) {
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

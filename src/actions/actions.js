const NavigationActions = require('react-navigation').NavigationActions;

const dataLoaded = function(results) {
  // console.log(results);
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
        // dispatch(NavigationActions.navigate({routeName: 'SideNavigator' }));
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
        var resultFound = false;
        for (var i = 0; i < json.response.listings.length; i++) {
          console.log(getState().main.results.listings[i].price);
          if (getState().main.results.listings[i].price == 5750000) {
            resultFound = true;
            dispatch(returnItem(getState().main.results.listings[i]));
            dispatch(NavigationActions.navigate({routeName: 'Property'}));
            dispatch(NavigationActions.navigate({routeName: 'MoreResults' }));
            break;
          }
        }
        if (!resultFound) {
          dispatch(NavigationActions.navigate({routeName: 'Property'}));
        }
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

module.exports = {
  loadMoreData,
  moreDataLoaded,
  loadData,
  dataLoaded,
  returnItem,
  returnNewItem
};

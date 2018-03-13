// const NavigationActions = require('react-navigation').NavigationActions;

const dataLoaded = function(results) {
  return {
    type: 'DATA_LOADED',
    results: results
  };
};

const loadData = function() {
  return (dispatch) => {
    fetch('https://api.nestoria.co.uk/api?country=uk&pretty=1&encoding=json&listing_type=buy&action=search_listings&page=1&place_name=London')
      .then(response => response.json())
      .then(json => {
        console.log(json.response);
        dispatch(dataLoaded(json.response));
        // dispatch(NavigationActions.navigate({routeName: 'SideNavigator' }));
      });
  };
};

const returnItem = function(item) {
  return {
    type: 'RETURN_ITEM',
    item
  };
};

module.exports = {
  loadData,
  dataLoaded,
  returnItem
};

const NavigationActions = require('react-navigation').NavigationActions;

const store = require('../store').store;

const loadMoreData = require('../actions/actions').loadMoreData;

const routeUrl = function(url) {
  var nextRoute = url.split('//')[1];
  if (nextRoute == 'MoreResults') {
    store.dispatch(loadMoreData());
  } else {
    console.log(store.dispatch(NavigationActions.navigate({routeName: nextRoute})));
  }
};

module.exports = routeUrl;

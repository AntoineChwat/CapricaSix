const NavigationActions = require('react-navigation').NavigationActions;

const store = require('../store').store;

const actions = require('../actions/actions');
const loadMoreData = actions.loadMoreData;
const goToProperty = actions.goToProperty;
const goToNewProperty = actions.goToNewProperty;

const routeUrl = function(url) {
  var nextRoute = url.split('//')[1];
  store.dispatch(NavigationActions.reset(
    {
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'Results'})
      ]
    }
  ));
  switch (nextRoute) {
    case 'Property':
      store.dispatch(goToProperty());
      break;
    case 'MoreResults':
    store.dispatch(goToProperty())
      .then(() => {
        store.dispatch(loadMoreData());
      })
      .catch(() => {
        console.log('Exception MOFO');
      });
      break;
    case 'NewProperty':
      store.dispatch(goToProperty())
        .then(() => {
          store.dispatch(loadMoreData());
        }).then(() => {
          store.dispatch(goToNewProperty());
        })
        .catch(() => {
          console.log('Exception MOFO');
        });
        break;
    default:
      store.dispatch(NavigationActions.navigate({routeName: nextRoute}));
  }
};

module.exports = routeUrl;

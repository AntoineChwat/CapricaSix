const NavigationActions = require('react-navigation').NavigationActions;

const store = require('../store').store;

const actions = require('../actions/actions');
const loadMoreData = actions.loadMoreData;
const goToProperty = actions.goToProperty;

const routeUrl = function(url) {
  const relevantData = url.split('//')[1];
  store.dispatch(NavigationActions.reset(
    {
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'Results'})
      ]
    }
  ));
  const splitData = relevantData.split('/');
  const nextRoute = splitData[0];
  switch (nextRoute) {
    case 'property':
      switch (splitData.length) {
        case 2:
          store.dispatch(goToProperty(splitData[1]));
          break;
        case 4:
          store.dispatch(goToProperty(splitData[1]))
            .then(() => {
              if (splitData[2] == 'new') {
                store.dispatch(loadMoreData(true, splitData[3]));
              } else {
                throw '';
              }
            })
            .catch(() => {
              console.log('Exception MOFO');
            });
            break;
          default:
            console.log('Malformed URL');
      }
      break;
    case 'MoreResults':
    store.dispatch(goToProperty())
      .then(() => {
        store.dispatch(loadMoreData(false));
      })
      .catch(() => {
        console.log('Exception MOFO');
      });
      break;
    case 'NewProperty':
      store.dispatch(goToProperty())
        .then(() => {
          store.dispatch(loadMoreData(true));
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

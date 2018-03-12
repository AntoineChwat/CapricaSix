const NavigationActions = require('react-navigation').NavigationActions;

const dataLoaded = function() {
  return {
    type: 'DATA_LOADED',
    text: 'Welcome to my sex dungeon'
  };
};


const loadData = function() {
  const aPromise = new Promise(
    function (resolve, reject) {
      setTimeout(function() {
        resolve();
      }, 3000);
    }
  );
  return (dispatch) => {
    aPromise
    .then(function() {
        dispatch(dataLoaded());
        dispatch(NavigationActions.navigate({routeName: 'SideNavigator' }));
      });
    };
};

module.exports = {
  loadData,
  dataLoaded
};

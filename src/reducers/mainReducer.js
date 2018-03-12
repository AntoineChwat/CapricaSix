const initialState = {
  results: {}
};

const mainReducer = function(state = initialState, action) {
  console.log('Message received!');
  switch (action.type) {
    case 'DATA_LOADED':
      console.log('Updating');
      return (
        Object.assign({}, state, {
          results: action.results
        })
      );
    default:
      console.log('Sorry but I don\'t give a flying fuck');
      return state;
  }
};

module.exports = mainReducer;

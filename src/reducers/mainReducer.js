const initialState = {
  isLoading: true,
  results: {}
};

const mainReducer = function(state = initialState, action) {
  switch (action.type) {
    case 'DATA_LOADED':
      console.log('Updating isLoading');
      return (
        Object.assign({}, state, {
          isLoading: false,
          results: Object.assign({}, action.results)
        })
      );
    default:
      return state;
  }
};

module.exports = mainReducer;

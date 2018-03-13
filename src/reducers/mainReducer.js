const initialState = {
  isLoading: true,
  results: {},
  item: {}
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
    case 'RETURN_ITEM':
      return (
        Object.assign({}, state, {
          item: Object.assign({}, action.item)
        })
      );
    default:
      return state;
  }
};

module.exports = mainReducer;

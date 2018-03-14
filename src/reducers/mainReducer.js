const initialState = {
  isLoading: true,
  results: {},
  item: {},
  moreResults: {},
  newItem: {}
};

const mainReducer = function(state = initialState, action) {
  switch (action.type) {
    case 'DATA_LOADED':
      return (
        Object.assign({}, state, {
          isLoading: false,
          results: Object.assign({}, action.results)
        })
      );
    case 'MORE_DATA_LOADED':
      return (
        Object.assign({}, state, {
          isLoading: false,
          moreResults: Object.assign({}, action.results)
        })
      );
    case 'RETURN_ITEM':
      return (
        Object.assign({}, state, {
          item: Object.assign({}, action.item)
        })
      );
    case 'RETURN_NEW_ITEM':
      return (
        Object.assign({}, state, {
          newItem: Object.assign({}, action.item)
        })
      );
    default:
      return state;
  }
};

module.exports = mainReducer;

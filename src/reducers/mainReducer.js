const initialState = {
  text: ''
};

const mainReducer = function(state = initialState, action) {
  switch (action.type) {
    case 'DATA_LOADED':
      return (
        Object.assign({}, state, {
          text: action.text
        })
      );
    default:
      return state;
  }
};

module.exports = mainReducer;

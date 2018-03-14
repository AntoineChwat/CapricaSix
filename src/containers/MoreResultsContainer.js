const NavigationActions = require('react-navigation').NavigationActions;

const connect = require('react-redux').connect;

const actions = require('../actions/actions');
const returnItem = actions.returnNewItem;
const MoreResults = require('../components/MoreResults');

/**
 * This function maps the useful part of our application's state to our Main Page's props
 *
 * @param    {Object} state the state of our application
 *
 * @returns  {Object} Some parameters
 *
 * @memberof SearchPageContainer
 */
const mapStateToProps = function(state) {
  return {
    results: state.main.moreResults
  };
};

/**
 * This function maps useful actions to Main Page's props
 *
 * @param    {function} dispatch the state of our application
 *
 * @returns  {Object}            A mapping of actions to Main Page's props
 *
 * @memberof SearchPageContainer
 */
const mapDispatchToProps = function(dispatch) {
  return {
    onItemPressed: function(item) {
      dispatch(returnItem(item));
      dispatch(NavigationActions.navigate({routeName: 'NewProperty'}));
    }
  };
};

const MoreResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoreResults);

module.exports = MoreResultsContainer;

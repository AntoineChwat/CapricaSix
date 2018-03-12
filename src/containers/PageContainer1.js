const NavigationActions = require('react-navigation').NavigationActions;

const connect = require('react-redux').connect;

const Page1 = require('../components/Page1');

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
    results: state.main.results
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
    onItemPressed: function() {
      dispatch(NavigationActions.navigate({routeName: 'Pegasus'}));
    }
  };
};

const PageContainer1 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page1);

module.exports = PageContainer1;

const actions = require('../actions/actions');
const loadData = actions.loadData;

const connect = require('react-redux').connect;

const SplashPage = require('../components/SplashPage');

const mapStateToProps = function(state) {
  return {
    nav: state.nav,
    text: state.main.text
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    load: function() {
      dispatch(loadData());
    }
  };
};

const SplashPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashPage);

module.exports = SplashPageContainer;

const NavigationActions = require('react-navigation').NavigationActions;

const connect = require('react-redux').connect;

const Page3 = require('../components/Page3');

const actions = require('../actions/actions');
const returnCoordinates = actions.returnCoordinates;
const returnItem = actions.returnItem;

const camera = require('react-native-camera-module');

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
    latitude: state.main.coordinates.latitude,
    longitude: state.main.coordinates.longitude
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
    navigate: function() {
      dispatch(NavigationActions.navigate({ routeName: 'Viper' }));
    },
    back: function() {
      dispatch(NavigationActions.back());
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position);
        dispatch(returnCoordinates({latitude: position.coords.latitude, longitude: position.coords.longitude}));
      });
    },
    takePicture: function() {
      console.log(camera);
      camera.showImagePicker(response => {
        console.log('Here');
        console.log(response);
        const item = {
          img_url: response.uri
        };
        dispatch(returnItem(item));
        dispatch(NavigationActions.navigate({ routeName: 'Property'}));
      });
    },
    test: function() {
      camera.test(response => {
        console.log(response);
      });
    }
  };
};

const PageContainer3 = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page3);

module.exports = PageContainer3;

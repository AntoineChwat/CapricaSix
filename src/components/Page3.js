/**
 * @fileoverview  This component renders a sample green page
 *
 * @author        Antoine Chwat
 *
 * @namespace     Page3
 */
'use strict';

const React = require('react');

const ReactNative = require('react-native');
const Platform = ReactNative.Platform;
const StyleSheet = ReactNative.StyleSheet;
const Text = ReactNative.Text;
const View = ReactNative.View;
const Button = ReactNative.Button;

const createReactClass = require('create-react-class');

const PropTypes = require('prop-types');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

/**
 * The sample page is rendered in this class
 * @class
 * @memberof Page3
 */
const Page3 = createReactClass({
  propTypes: {
    navigate: PropTypes.func,
    back: PropTypes.func,
    geolocate: PropTypes.func,
    takePicture: PropTypes.func,
    test: PropTypes.func,
    latitude: PropTypes.any,
    longitude: PropTypes.any
  },

  /**
   * The render checks displays the simple page
   * @returns  {ReactElement} A green page with a welcome message
   * @memberof Page3
   */
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Button
          onPress={this.props.navigate}
          color='#48BBEC'
          title='Go'
        />
        <Button
          onPress={this.props.back}
          color='#48BBEC'
          title='Back'
        />
        <Button
          onPress={this.props.geolocate}
          color='#48BBEC'
          title='Geolocate'
        />
        <Text style={styles.instructions}>
          {this.props.latitude}
        </Text>
        <Text style={styles.instructions}>
          {this.props.longitude}
        </Text>
        <Button
          onPress={this.props.takePicture}
          color='#48BBEC'
          title='Photo'
        />
        <Button
          onPress={this.props.test}
          color='#48BBEC'
          title='Test'
        />
      </View>
    );
  }
});
Page3.navigationOptions = {
  title: 'Raptor'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00FF00'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

module.exports = Page3;

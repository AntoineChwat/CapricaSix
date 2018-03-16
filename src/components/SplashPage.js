/**
 * @fileoverview  This component renders a sample white page
 *
 * @author        Antoine Chwat
 *
 * @namespace     SplashPage
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
 * @memberof SplashPage
 */
const SplashPage = createReactClass({
  propTypes: {
    load: PropTypes.func,
    navigate: PropTypes.func,
    results: PropTypes.shape()
  },

  /**
   * The render checks displays the simple page
   * @returns  {ReactElement} A white page with a welcome message
   * @memberof SplashPage
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
          onPress={this.props.load}
          color='#48BBEC'
          title='Load'
        />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
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

module.exports = SplashPage;

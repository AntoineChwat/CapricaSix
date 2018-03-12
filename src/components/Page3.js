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

const Page3 = createReactClass({
  propTypes: {
    navigate: PropTypes.func
  },
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
      </View>
    );
  }
});
Page3.navigationOptions = {
  drawerLabel: 'Drawer Item 1',
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

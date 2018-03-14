'use strict';

const React = require('react');

const ReactNative = require('react-native');
const StyleSheet = ReactNative.StyleSheet;
const Image = ReactNative.Image;
const View = ReactNative.View;
const Text = ReactNative.Text;
const Alert = ReactNative.Alert;

const PropTypes = require('prop-types');

const createReactClass = require('create-react-class');

const NewProperty = createReactClass({
  propTypes: {
    item: PropTypes.object.isRequired
  },

  render: function() {
    const params = this.props.item;
    if (Object.keys(params).length === 0 && params.constructor === Object) {
      Alert.alert(
        'Warning',
        'The property you are looking for was not found',
        [{text: 'OK', onPress: () => {}}]
      );
    }
    var url = params.img_url;
    if (typeof url != 'string' || url =='') {
      url = 'https://www.pixedelic.com/themes/geode/demo/wp-content/uploads/sites/4/2014/04/placeholder4.png';
    }
    var price = params.price_formatted;
    if (typeof price != 'string' || price =='') {
      price = 'Unknown price';
    }
    var title = params.title;
    if (typeof title != 'string' || title =='') {
      title = 'Unknown title';
    }
    var summary = params.summary;
    if (typeof summary != 'string' || summary =='') {
      summary = 'Unknown summary';
    }
    return (
      <View style = {{flex: 1}}>
        <Image
          style = {styles.picture}
          resizeMode = "contain"
          source={{ uri: url }}
        />
        <View style = {styles.textContainer}>
          <View style = {styles.header}>
            <Text style = {styles.title} numberOfLines={1}>
              {title}
            </Text>
            <Text style = {styles.price}>
              {price}
            </Text>
          </View>
          <Text style = {styles.description}>
            {summary}
          </Text>
        </View>
      </View>
    );
  }
});
NewProperty.navigationOptions = {
  title: 'Property'
};

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  textContainer: {
    flex: 1
  },
  header: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  description: {
    flex: 3,
    top: 10
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC',
    top: 5
  },
  title: {
    fontSize: 20,
    color: '#656565',
    top: 5
  }
});

module.exports = NewProperty;

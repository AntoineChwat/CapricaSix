/**
 * @fileoverview  This component renders a list item
 *
 * @author        Antoine Chwat
 *
 * @namespace     ListItem
 */
'use strict';

const React = require('react');

const ReactNative = require('react-native');
const StyleSheet = ReactNative.StyleSheet;
const Image = ReactNative.Image;
const View = ReactNative.View;
const TouchableHighlight = ReactNative.TouchableHighlight;
const Text = ReactNative.Text;

const PropTypes = require('prop-types');

const createReactClass = require('create-react-class');

/**
 * List item is rendered in this class
 * @class
 *
 * @memberof ListItem
 */
const ListItem = createReactClass({
  propTypes: {
    onPressItem: PropTypes.func.isRequired,
    index: PropTypes.number,
    item: PropTypes.object.isRequired
  },

  /**
   * Calls its parent function from its props to handle press
   *
   * @memberof ListItem
   */
  _onPress: function() {
    this.props.onPressItem(this.props.index, this.props.item);
  },
  /**
   * The render checks that values are properly defined and displays a list item
   *
   * @returns  {TouchableHighlight} A touchable list element containing all necessary data
   *
   * @memberof ListItem
   */
  render: function() {
    const self = this;
    var url = self.props.item.img_url;
    if (typeof url != 'string' || url =='') {
      url = 'https://www.pixedelic.com/themes/geode/demo/wp-content/uploads/sites/4/2014/04/placeholder4.png';
    }
    var price = self.props.item.price_formatted;
    if (typeof price != 'string' || price =='') {
      price = 'Unknown price';
    }
    var title = self.props.item.title;
    if (typeof title != 'string' || title =='') {
      title = 'Unknown title';
    }
    return (
      <TouchableHighlight
        onPress={self._onPress}
        underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <Image style={styles.thumb} source={{ uri: url }} />
            <View style={styles.textContainer}>
              <Text style={styles.price}>{price}</Text>
              <Text style={styles.title}
                numberOfLines={1}>{title}</Text>
            </View>
          </View>
          <View style={styles.separator}/>
        </View>
      </TouchableHighlight>
    );
  }
});

const styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
});

module.exports = ListItem;

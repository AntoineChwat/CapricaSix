/**
 * @fileoverview  This component renders search results
 *
 * @author        Antoine Chwat
 *
 * @namespace     Page1
 */
'use strict';

const React = require('react');

const ReactNative = require('react-native');
const FlatList = ReactNative.FlatList;

const PropTypes = require('prop-types');

const createReactClass = require('create-react-class');

const ListItem = require('./ListItem');

/**
 * The search results are rendered in this class
 * @class
 * @memberof Page1
 */
const Page1 = createReactClass({
  propTypes: {
    results: PropTypes.object.isRequired,
    onItemPressed: PropTypes.func.isRequired
  },

  /**
   * Method to extract a unique key from an item at a specific index
   * @param    {Object} item  item to extract key from
   * @param    {Number} index index associated to item
   * @returns  {String}       The extracted key
   * @memberof Page1
   */
  _keyExtractor: function(item, index) {
    return index.toString();
  },

  /**
   * Method to render a list item for each element in the results
   * @param    {Object}       item item taken from the results by the flat list
   * @returns  {ReactElement}      A list item
   * @memberof Page1
   */
  _renderItem: function({item}) {
    const self = this;
    return (
      <ListItem
        item={item}
        onPressItem={self._onPressItem}
      />
    );
  },

  /**
   * Calls a function from its container to handle a touchable highlight press
   * @memberof Page1
   */
  _onPressItem: function(index, item) {
    this.props.onItemPressed(item);
  },

  /**
   * The render displays a flat list which shows all the results returned
   * @returns  {ReactElement} A list of results
   * @memberof Page1
   */
  render: function() {
    const params = this.props.results;
    return (
      <FlatList
        data={params.listings}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    );
  }
});
Page1.navigationOptions = {
  title: 'Results'
};

module.exports = Page1;

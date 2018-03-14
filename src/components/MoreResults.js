'use strict';

const React = require('react');

const ReactNative = require('react-native');
const FlatList = ReactNative.FlatList;

const PropTypes = require('prop-types');

const createReactClass = require('create-react-class');

const ListItem = require('./ListItem');

const MoreResults = createReactClass({
  propTypes: {
    results: PropTypes.object.isRequired,
    onItemPressed: PropTypes.func.isRequired
  },

  /**
   * Method to extract a unique key from an item at a specific index
   *
   * @param    {Object} item  item to extract key from
   * @param    {number} index index associated to item
   *
   * @returns  {string}       The extracted key
   *
   * @memberof MoreResults
   */
  _keyExtractor: function(item, index) {
    return index.toString();
  },

  /**
   * Method to render a list item for each element in the results
   *
   * @param    {Object} item item taken from the results by the flat list
   *
   * @returns  {ListItem}    a list item
   *
   * @memberof MoreResults
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
   *
   * @memberof MoreResults
   */
  _onPressItem: function(index, item) {
    this.props.onItemPressed(item);
  },

  /**
   * The render displays a flat list which shows all the results returned
   *
   * @returns  {FlatList} A list of results
   *
   * @memberof MoreResults
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
MoreResults.navigationOptions = {
  title: 'Results'
};

module.exports = MoreResults;

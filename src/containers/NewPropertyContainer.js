'use strict';

const connect = require('react-redux').connect;

const NewProperty = require('../components/NewProperty');

/**
 * This function maps the useful part of our application's state to NewProperty's props
 *
 * @param    {Object} state the state of our application
 *
 * @returns  {Object} The item that needs to be rendered
 *
 * @memberof NewPropertyContainer
 */
const mapStateToProps = function(state) {
  return {
    item: state.main.newItem
  };
};

const NewPropertyContainer = connect(mapStateToProps)(NewProperty);

module.exports = NewPropertyContainer;

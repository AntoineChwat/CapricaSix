'use strict';

const connect = require('react-redux').connect;

const Page2 = require('../components/Page2');

/**
 * This function maps the useful part of our application's state to Page2' props
 *
 * @param    {Object} state the state of our application
 *
 * @returns  {Object} The item that needs to be rendered
 *
 * @memberof Page2Container
 */
const mapStateToProps = function(state) {
  return {
    item: state.main.item
  };
};

const Page2Container = connect(mapStateToProps)(Page2);

module.exports = Page2Container;

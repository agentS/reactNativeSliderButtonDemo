
'use strict';

var React = require('react-native');
var {
  AppRegistry
} = React;

var SliderButtonDemo = require("./SliderButtonDemo.js");

var reactNativeSliderButtonDemo = React.createClass({
  render: function() {
    return (
      <SliderButtonDemo/>
    );
  }
});

AppRegistry.registerComponent('reactNativeSliderButtonDemo', () => reactNativeSliderButtonDemo);

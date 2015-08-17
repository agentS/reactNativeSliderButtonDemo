"use strict";

var React = require("react-native");
var SliderButton = require("react-native-slider-button");

var styles = require("./styles.js");
var SliderButtonStyle = require("./SliderButtonStyle.js");

var
{
	View
} = React;

module.exports = React.createClass
({
	getInitialState: function()
	{
		return {
			timestamp: Date.now()
		};
	},
	
	onSliderButtonActivated: function()
	{
		alert("You activated the slider button!");
		this.setState({ timestamp: Date.now() });
	},
	
	render: function()
	{
		return (
			<View style={[styles.containerVerticalStretch, styles.paddingTopFirstElement]}>
				<SliderButton key={this.state.timestamp}
					text={"Activate >>>"}
					textAnimated={true}
					stylesheet={SliderButtonStyle}
					minimumValue={0} maximumValue={100} value={0}
					minimumTrackTintColor={"rgba(0,0,0,0)"}
					maximumTrackTintColor={"rgba(0,0,0,0)"}
					onTrigger={this.onSliderButtonActivated}/>
			</View>
		);
	}
});
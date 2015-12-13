"use strict";

var React = require('react');
var ColorStack = require('./colorStack');

var stackList = React.createClass({
	createStacks: function(stack, i){
		return(<ColorStack
			colors={stack.values}
			key={i}
			title={stack.title}
		/>)
	},
	render: function() {
		console.log(this.state);
		return (
			<div className="stackWrapper">
				{this.props.stacksStore.map(this.createStacks)}
			</div>
		);
	}

});

module.exports = stackList;
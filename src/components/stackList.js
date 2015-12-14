"use strict";

var React = require('react');
var ColorStack = require('./colorStack');
var ReactFire = require('reactfire');
var Firebase = require('firebase');

var stackList = React.createClass({
	mixins: [ ReactFire ],
	getInitialState: function() {
		return {
			stacks: [] 
		};
	},
	componentWillMount: function(){
		var fbRef = new Firebase('https://swatchstack.firebaseio.com/swatchStacks/');
		this.bindAsObject(fbRef, 'stacks');
	},
	createStacks: function(stack, i){
		return(<ColorStack
			colors={stack.values}
			key={i}
			title={stack.title}
		/>)
	},
	render: function() {
		return (
			<div className="stack-wrapper">
				{this.state.stacks.map(this.createStacks)}
			</div>
		);
	}

});

module.exports = stackList;
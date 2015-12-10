"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var NewStackForm = require('./newStackForm');
var StackList = require('./stackList');

var App = React.createClass({
	mixins: [ ReactFire ],
	getInitialState: function() {
		return {
			swatchStacks: [] 
		};
	},
	componentWillMount: function(){
		var fbRef = new Firebase('https://swatchstack.firebaseio.com/swatchStacks/');
		this.bindAsObject(fbRef, 'swatchStacks');
	},
	render: function(){
		console.log(this.state);
		return (
			<div className="container">
				<StackList stacksStore={ this.state.swatchStacks } />
			</div>
		);
	}
});




ReactDOM.render(<App />, document.getElementById('app'));
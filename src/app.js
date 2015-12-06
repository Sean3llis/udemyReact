"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
	render: function(){
		return (
			<div className="container">
				<Btn title="test title" />
			</div>
		);
	}
});

var Btn = React.createClass({

	render: function() {
		return (
			<div>
				<button className="btn btn-success">
					{this.props.title} - {this.props.number}
				</button>
			</div>
		);
	}

});

module.exports = Btn;

ReactDOM.render(<App />, document.getElementById('app'));
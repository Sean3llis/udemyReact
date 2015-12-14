"use strict";

var React = require('react');
var Header = require('./header');
var SideNav = require('./sideNav');

var Main = React.createClass({
	render: function() {
		return (
			<div>
				<Header />
				<SideNav />
				{this.props.children}
			</div>
		);
	}
});

module.exports = Main;
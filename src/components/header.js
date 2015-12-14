var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Header = React.createClass({

	render: function() {
		return (
			<div className="center">
				<nav className="header">
					<Link to="/">
						{"{...}"}
					</Link>
				</nav>
			</div>
		);
	}

});

module.exports = Header;
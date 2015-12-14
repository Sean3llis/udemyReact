var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var sideNavLink = React.createClass({

	render: function() {
		return (
			<li>
				<Link activeClassName="active" to={this.props.target} >
					<i className={"fa fa-" + this.props.icon}></i>
				</Link>
			</li>
		);
	}

});

module.exports = sideNavLink;
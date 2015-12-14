var React = require('react');
var SideLink = require('./sideNavLink');

var sideNav = React.createClass({
	getInitialState: function(){
		return {
			links: [
				{ target: 'stacks', icon: 'database' },
				{ target: 'hello', icon: 'crop' }
			]
		};
	},
	createSideLink: function(link, i){
		return <SideLink key={i} target={link.target} icon={link.icon} />
	},
	render: function() {
		return (
			<div id="sidenav">
				<ul>
					{this.state.links.map(this.createSideLink)}
				</ul>
			</div>
		);
	}

});

module.exports = sideNav;
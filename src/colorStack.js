"use strict";

var React = require('react');

var ColorStack = React.createClass({

	render: function() {
		var list = this.props.colors.map(function(hex, i){
			var style = {
				backgroundColor: hex,
				marginTop: "1px"
			};
			if(i < 1 ) style.marginTop = "0px";
			return <div key={i} className="colorChip" style={style}>{hex}</div>
		});
		var stackStyle = {
			padding: "4px"
		};
		return (
			<div className="colorStack" style={stackStyle}>
				{list}
				<div className="colorTitle">
					{this.props.title}
				</div>
			</div>
		);
	}

});

module.exports = ColorStack;
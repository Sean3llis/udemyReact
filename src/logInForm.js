"use strict";

var React = require('react');
var Firebase = require('firebase');

var logInForm = React.createClass({
	handleClick: function(){
		var ref = new Firebase("https://swatchstack.firebaseio.com");
		ref.authWithOAuthPopup("github", function(error, authData) {
		  if (error) {
		    console.log("Login Failed!", error);
		  } else {
		    console.log("Authenticated successfully with payload:", authData);
		  }
		});
	},
	render: function() {
		return (
			<div id="log-in-form">
				<button onClick={this.handleClick} className="btn"><i className="fa fa-github"></i> Log In</button>
			</div>
		);
	}

});

module.exports = logInForm;
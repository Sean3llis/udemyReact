"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var createBrowserHistory = require('history/lib/createBrowserHistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var ReactFire = require('reactfire');
var Firebase = require('firebase');
var NewStackForm = require('./newStackForm');
var StackList = require('./stackList');
var LogInForm = require('./logInForm');

var SwatchStack = React.createClass({
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
			<div className="center">
				<nav className="header"><h1>SwatchStack</h1></nav>
				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}
});


var Hello = React.createClass({

	render: function() {
		return <h1>Hello</h1>;
	}

});

var HelloTwo = React.createClass({

	render: function() {
		return <h4>Hello from Two <i className="fa fa-globe"></i></h4>;
	}

});

var history = createBrowserHistory();

// var routes = (
// 	<Router>
// 		<Route path="/app/" component={App}>
// 			<Route path="1" component={HelloTwo}></Route>
// 			<Route path="test" component={App}></Route>

// 		</Route>

// 	</Router>
// );

var routes = {
  path: '/',
  component: SwatchStack,
  childRoutes: [
    { path: 'hello', component: Hello },
    { path: 'test', component: HelloTwo }
  ]
}


ReactDOM.render(<Router routes={routes} />, document.getElementById('app'));
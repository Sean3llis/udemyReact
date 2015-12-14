var React = require('react');
var ReactRouter = require('react-router');
var createHashHistory = require('history/lib/createHashHistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Main = require('./components/main');
var StackList = require('./components/stackList');


var hello = React.createClass({

	render: function() {
		return (
			<h4>Hellooooooooooo!!!!!!</h4>
		);
	}

});


module.exports = (
	<Router history={new createHashHistory}>
		<Route path="/" component={Main}>
			<Route path="stacks" component={StackList}></Route>
			<Route path="hello" component={hello}></Route>
		</Route>
	</Router>
);
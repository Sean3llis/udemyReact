"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var routes = require('./routes');
var Router = require('react-router');


var NewStackForm = require('./components/newStackForm');
var StackList = require('./components/stackList');
var LogInForm = require('./components/logInForm');

ReactDOM.render(routes, document.getElementById('app'));
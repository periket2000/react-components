var React = require('react');
var ReactDOM = require('react-dom');

document.write("Webpack is doing its thing.");
import LoginForm from './src/forms/login';

ReactDOM.render(<LoginForm/>, document.getElementById('container'));
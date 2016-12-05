var React = require('react');
var ReactDOM = require('react-dom');

import LoginForm from './src/forms/login';

function handleCustom(e) {
    this.setState({login: e.target.value+"sss"});
}

ReactDOM.render(<LoginForm handleLoginChange={handleCustom} debug="true"/>, document.getElementById('container'));
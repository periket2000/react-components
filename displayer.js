var React = require('react');
var ReactDOM = require('react-dom');

import LoginForm from './src/forms/login';

function handleCustom(e) {
    this.setState({login: e.target.value+"sss"});
}

var styles = {
    image_es: {
        border: '1px solid red'
    },
    image_uk: {
        border: '1px solid green'
    }
};

ReactDOM.render(<LoginForm styles={styles} handleLoginChange={handleCustom} debug="true"/>, document.getElementById('container'));
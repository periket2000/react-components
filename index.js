'use strict';

var _simple = require('./lib/buttons/simple');

var _simple2 = _interopRequireDefault(_simple);

var _login = require('./lib/forms/login');

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mybi = {
    SimpleButton: _simple2.default,
    LoginForm: _login2.default
};

module.exports = mybi;

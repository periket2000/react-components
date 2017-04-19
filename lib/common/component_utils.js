'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* Call functions from component with call/apply for setting "this" as the component.
*/
var I18n = {
    load_t: function load_t() {
        for (var i in this.state.languages) {
            var data = require('../' + this.state.i18n_dir + '/' + this.state.languages[i] + '.json');
            if (data) {
                for (var attrname in data) {
                    this.state.i18n[attrname] = data[attrname];
                }
            }
        }
    },
    t: function t(key) {
        return this.state.i18n[this.props.lang !== undefined ? this.props.lang : this.state.lang][key];
    }
};

exports.default = I18n;
//# sourceMappingURL=component_utils.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles.css');

var _styles2 = _interopRequireDefault(_styles);

var _index = require('./index.md');

var _Spain = require('./images/Spain.png');

var _Spain2 = _interopRequireDefault(_Spain);

var _UK = require('./images/UK.png');

var _UK2 = _interopRequireDefault(_UK);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_React$Component) {
  _inherits(LoginForm, _React$Component);

  function LoginForm(props) {
    _classCallCheck(this, LoginForm);

    var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

    _this.state = {
      lang: 'es',
      languages: ['en', 'es'],
      i18n: {
        'en': {},
        'es': {}
      },
      switchUK: function switchUK() {
        this.state.lang = 'en';
      },
      switchES: function switchES() {
        this.state.lang = 'es';
      }
    };

    _this.load_t();
    return _this;
  }
  /*
    componentWillMount() {
      this.load_t();
    }
  */


  _createClass(LoginForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.title = _index.title;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'content-signin' },
        _react2.default.createElement(
          'div',
          { className: 'signinpanel' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-md-7' },
              _react2.default.createElement(
                'div',
                { className: 'signin-info' },
                _react2.default.createElement(
                  'div',
                  { className: 'logopanel' },
                  _react2.default.createElement(
                    'h1',
                    null,
                    _react2.default.createElement(
                      'span',
                      null,
                      '['
                    ),
                    _react2.default.createElement(
                      'label',
                      null,
                      this.t('title')
                    ),
                    _react2.default.createElement(
                      'span',
                      null,
                      ']'
                    )
                  )
                ),
                _react2.default.createElement('div', { className: 'mb20' }),
                _react2.default.createElement(
                  'h5',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    this.t('welcome')
                  )
                ),
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'i',
                      { className: 'fa badge mdl-badge material-icons mr5' },
                      'done'
                    ),
                    ' ',
                    _react2.default.createElement(
                      'label',
                      null,
                      'Fully Responsive Layout'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'i',
                      { className: 'fa badge mdl-badge material-icons mr5' },
                      'done'
                    ),
                    ' ',
                    _react2.default.createElement(
                      'label',
                      null,
                      'HTML5/CSS3 Valid'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'i',
                      { className: 'fa badge mdl-badge material-icons mr5' },
                      'done'
                    ),
                    ' ',
                    _react2.default.createElement(
                      'label',
                      null,
                      'Retina Ready'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'i',
                      { className: 'fa badge mdl-badge material-icons mr5' },
                      'done'
                    ),
                    ' ',
                    _react2.default.createElement(
                      'label',
                      null,
                      'and much more...'
                    )
                  )
                ),
                _react2.default.createElement('div', { className: 'mb20' }),
                _react2.default.createElement('strong', { 'data-bind': 'text: getNotMember()' }),
                ' ',
                _react2.default.createElement(
                  'strong',
                  null,
                  _react2.default.createElement('a', { href: 'signup.html', 'data-bind': 'text: getSignUp()' })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-md-5' },
              _react2.default.createElement(
                'h4',
                { className: 'nomargin' },
                'Sign In'
              ),
              _react2.default.createElement(
                'p',
                { className: 'mt5 mb20' },
                'Login to access your account.'
              ),
              _react2.default.createElement('input', { id: 'login_username', type: 'text', className: 'form-control uname', 'data-bind': 'placeholder: getUsername()' }),
              _react2.default.createElement('input', { id: 'login_password', type: 'password', className: 'form-control pword', 'data-bind': 'placeholder: getPassword()' }),
              _react2.default.createElement(
                'a',
                { href: '' },
                _react2.default.createElement(
                  'small',
                  null,
                  'Forgot Your Password?'
                )
              ),
              _react2.default.createElement(
                'button',
                { id: 'signin_btn', className: 'btn btn-success btn-block' },
                'Sign In'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'signup-footer' },
            _react2.default.createElement(
              'div',
              { className: 'pull-left', 'data-bind': 'text: getCopyright()' },
              '\xA9 2014. All Rights Reserved.'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'a',
                { href: '#', onClick: this.state.switchES },
                _react2.default.createElement('img', { src: _Spain2.default, className: 'images-lang' })
              ),
              _react2.default.createElement(
                'a',
                { href: '#', onClick: this.state.switchUK },
                _react2.default.createElement('img', { src: _UK2.default, className: 'images-lang' })
              )
            )
          )
        )
      );
    }
  }, {
    key: 'load_t',
    value: function load_t() {
      for (var i in this.state.languages) {
        var data = require('./i18n/' + this.state.languages[i] + '.json');
        if (data) {
          for (var attrname in data) {
            this.state.i18n[attrname] = data[attrname];
          }
        }
      }
    }
  }, {
    key: 't',
    value: function t(key) {
      return this.state.i18n[this.state.lang][key];
    }
  }]);

  return LoginForm;
}(_react2.default.Component);

exports.default = LoginForm;
//# sourceMappingURL=index.js.map
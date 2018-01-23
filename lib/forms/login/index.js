'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index.md');

var _Spain = require('./images/Spain.png');

var _Spain2 = _interopRequireDefault(_Spain);

var _UK = require('./images/UK.png');

var _UK2 = _interopRequireDefault(_UK);

var _component_utils = require('../../common/component_utils');

var _component_utils2 = _interopRequireDefault(_component_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_React$Component) {
  _inherits(LoginForm, _React$Component);

  function LoginForm(props) {
    _classCallCheck(this, LoginForm);

    var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

    _this.styles = props.styles || {};

    _this.handleLoginChange = _this.handleLoginChange.bind(_this);
    _this.handlePasswordChange = _this.handlePasswordChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);

    _this.state = {
      lang: 'es',
      languages: ['en', 'es'],
      i18n_dir: 'forms/login/i18n',
      i18n: {
        'en': {},
        'es': {}
      },
      login: '',
      password: '',
      switchUK: function switchUK() {
        _this.setState({ 'lang': 'en' });
      },
      switchES: function switchES() {
        _this.setState({ 'lang': 'es' });
      }
    };

    _this.overwrite(props);

    /* call load_t function setting this as "this" */
    _component_utils2.default.load_t.apply(_this);
    _this.t = _component_utils2.default.t;
    return _this;
  }

  /**
   * Custom behaviour from instantiation
   * <LoginForm handleLoginChange={...} handlePasswordChange={...} />
   * @param props
   */


  _createClass(LoginForm, [{
    key: 'overwrite',
    value: function overwrite(props) {
      if (typeof props.handleLoginChange === 'function') {
        this.handleLoginChange = props.handleLoginChange.bind(this);
      }
      if (typeof props.handlePasswordChange === 'function') {
        this.handlePasswordChange = props.handlePasswordChange.bind(this);
      }
      if (typeof props.handleSubmit === 'function') {
        this.handleSubmit = props.handleSubmit.bind(this);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.title = _index.title;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.debug === 'true') {
        console.dir(this.state);
      }
    }
  }, {
    key: 'handleLoginChange',
    value: function handleLoginChange(e) {
      this.setState({ login: e.target.value });
    }
  }, {
    key: 'handlePasswordChange',
    value: function handlePasswordChange(e) {
      this.setState({ password: e.target.value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      console.log("Login: " + this.state.login);
      console.log("Password: " + this.state.password);
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
                      this.t.call(this, 'title')
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
                    this.t.call(this, 'welcome')
                  )
                ),
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement('i', { className: 'glyphicon glyphicon-ok' }),
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
                    _react2.default.createElement('i', { className: 'glyphicon glyphicon-ok' }),
                    ' ',
                    _react2.default.createElement(
                      'label',
                      null,
                      ' HTML5/CSS3 Valid'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement('i', { className: 'glyphicon glyphicon-ok' }),
                    ' ',
                    _react2.default.createElement(
                      'label',
                      null,
                      ' Retina Ready'
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement('i', { className: 'glyphicon glyphicon-ok' }),
                    ' ',
                    _react2.default.createElement(
                      'label',
                      null,
                      ' and much more...'
                    )
                  )
                ),
                _react2.default.createElement('div', { className: 'mb20' }),
                _react2.default.createElement(
                  'strong',
                  null,
                  'Not a member'
                ),
                ' ',
                _react2.default.createElement(
                  'strong',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: 'signup.html' },
                    'Sign up'
                  )
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
              _react2.default.createElement('input', { id: 'login_username', type: 'text', className: 'form-control uname',
                onChange: this.handleLoginChange,
                value: this.state.login }),
              _react2.default.createElement('input', { id: 'login_password', type: 'password', className: 'form-control pword',
                onChange: this.handlePasswordChange,
                value: this.state.password }),
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
                { onClick: this.handleSubmit, id: 'signin_btn', className: 'btn btn-success btn-block' },
                'Sign In'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'signup-footer' },
            _react2.default.createElement(
              'div',
              { className: 'pull-left' },
              '\xA9 2014. All Rights Reserved.'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'a',
                { href: '#', onClick: this.props.switchES !== undefined ? this.props.switchES : this.state.switchES },
                _react2.default.createElement('img', { src: _Spain2.default, style: this.styles.image_es, className: 'images-lang' })
              ),
              _react2.default.createElement(
                'a',
                { href: '#', onClick: this.props.switchUK !== undefined ? this.props.switchUK : this.state.switchUK },
                _react2.default.createElement('img', { src: _UK2.default, style: this.styles.image_uk, className: 'images-lang' })
              )
            )
          )
        )
      );
    }
  }]);

  return LoginForm;
}(_react2.default.Component);

exports.default = LoginForm;
//# sourceMappingURL=index.js.map
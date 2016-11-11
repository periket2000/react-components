import React, { PropTypes } from 'react';
import s from './styles.css';

import { title, html } from './index.md';

import imageES from './images/Spain.png';
import imageUK from './images/UK.png';

class LoginForm extends React.Component {

  propTypes: {
    'languages': PropTypes.array,
    'lang': PropTypes.string,
    'i18n': PropTypes.object.isRequired,
    'switchES': PropTypes.func.isRequired,
    'switchUK': PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    setProps({
      lang: 'es',
      languages: ['en', 'es'],
      i18n: {
        'en': {},
        'es': {}
      },
      switchUK: function () {
        this.state.lang = 'en';
      },
      switchES: function () {
        this.state.lang = 'es';
      }
    })

    this.state = {
      lang: this.props.lang
    };

    this.load_t();
  }
/*
  componentWillMount() {
    this.load_t();
  }
*/
  componentDidMount() {
    document.title = title;
  }

  render() {
    return (

        <section id="content-signin">

        <div className={'signinpanel'}>

        <div className={'row'}>

        <div className={'col-md-7'}>

        <div className={'signin-info'}>
        <div className={'logopanel'}>
        <h1><span>[</span><label>{this.t('title')}</label><span>]</span></h1>
      </div>

      <div className={'mb20'}></div>

      <h5><strong>{this.t('welcome')}</strong></h5>
      <ul>
      <li><i className={'fa badge mdl-badge material-icons mr5'}>done</i> <label>Fully Responsive Layout</label></li>
      <li><i className={'fa badge mdl-badge material-icons mr5'}>done</i> <label>HTML5/CSS3 Valid</label></li>
      <li><i className={'fa badge mdl-badge material-icons mr5'}>done</i> <label>Retina Ready</label></li>
      <li><i className={'fa badge mdl-badge material-icons mr5'}>done</i> <label>and much more...</label></li>
      </ul>
      <div className={'mb20'}></div>
        <strong data-bind="text: getNotMember()"></strong> <strong><a href="signup.html" data-bind="text: getSignUp()"></a></strong>
      </div>

      </div>

      <div className={'col-md-5'}>

      <h4 className={'nomargin'}>Sign In</h4>
      <p className={'mt5 mb20'}>Login to access your account.</p>

      <input id="login_username" type="text" className={'form-control uname'} data-bind="placeholder: getUsername()" />
      <input id="login_password" type="password" className={'form-control pword'} data-bind="placeholder: getPassword()" />
      <a href=""><small>Forgot Your Password?</small></a>
      <button id="signin_btn" className={'btn btn-success btn-block'}>Sign In</button>
      </div>

      </div>

      <div className={'signup-footer'}>
        <div className={'pull-left'} data-bind="text: getCopyright()">
        &copy; 2014. All Rights Reserved.
      </div>
      <div>
        <a href="#" onClick={this.props.switchES}>
        <img src={imageES} className={'images-lang'}/>
        </a>
        <a href="#" onClick={this.props.switchUK}>
        <img src={imageUK} className={'images-lang'} />
        </a>
      </div>
      </div>

      </div>

      </section>

    );
  }

  load_t() {
    for( var i in this.props.languages ) {
      var data = require('./i18n/' + this.props.languages[i] + '.json');
      if(data) {
        for (var attrname in data) {
          this.props.i18n[attrname] = data[attrname];
        }
      }
    }
  }

  t(key) {
    return this.props.i18n[this.state.lang][key];
  }

}

export default LoginForm;

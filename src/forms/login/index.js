import React, { PropTypes } from 'react';
import { title, html } from './index.md';
import imageES from './images/Spain.png';
import imageUK from './images/UK.png';
import I18n from '../../common/component_utils';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.styles = props.styles || {};

    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      lang: 'es',
      languages: ['en', 'es'],
      i18n_dir: 'forms/login/i18n',
      i18n: {
        'en': {},
        'es': {}
      },
      login: '',
      password: '',
      switchUK: () => {
        this.setState({'lang': 'en'});
      },
      switchES: () => {
        this.setState({'lang': 'es'});
      }
    };

    this.overwrite(props);

    /* call load_t function setting this as "this" */
    I18n.load_t.apply(this);
    this.t = I18n.t;
  }

  /**
   * Custom behaviour from instantiation
   * <LoginForm handleLoginChange={...} handlePasswordChange={...} />
   * @param props
   */
  overwrite(props) {
    if(typeof props.handleLoginChange === 'function') {
      this.handleLoginChange = props.handleLoginChange.bind(this);
    }
    if(typeof props.handlePasswordChange === 'function') {
      this.handlePasswordChange = props.handlePasswordChange.bind(this);
    }
    if(typeof props.handleSubmit === 'function') {
      this.handleSubmit = props.handleSubmit.bind(this);
    }
  }

  componentDidMount() {
    document.title = title;
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.debug === 'true') {
      console.dir(this.state);
    }
  }

  handleLoginChange(e) {
    this.setState({login: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handleSubmit() {
    console.log("Login: " + this.state.login);
    console.log("Password: " + this.state.password);
  }

  render() {

    return (
        <section id="content-signin">

        <div className={'signinpanel'}>

        <div className={'row'}>

        <div className={'col-md-7'}>

        <div className={'signin-info'}>
        <div className={'logopanel'}>
        <h1><span>[</span><label>{this.t.call(this, 'title')}</label><span>]</span></h1>
      </div>

      <div className={'mb20'}></div>

      <h5><strong>{this.t.call(this, 'welcome')}</strong></h5>
      <ul>
      <li><i className={'fa badge mdl-badge material-icons mr5'}>*</i> <label>Fully Responsive Layout</label></li>
      <li><i className={'fa badge mdl-badge material-icons mr5'}>*</i> <label>HTML5/CSS3 Valid</label></li>
      <li><i className={'fa badge mdl-badge material-icons mr5'}>*</i> <label>Retina Ready</label></li>
      <li><i className={'fa badge mdl-badge material-icons mr5'}>*</i> <label>and much more...</label></li>
      </ul>
      <div className={'mb20'}></div>
        <strong>Not a member</strong> <strong><a href="signup.html">Sign up</a></strong>
      </div>

      </div>

      <div className={'col-md-5'}>

      <h4 className={'nomargin'}>Sign In</h4>
      <p className={'mt5 mb20'}>Login to access your account.</p>

      <input id="login_username" type="text" className={'form-control uname'}
             onChange={this.handleLoginChange}
             value={this.state.login} />
      <input id="login_password" type="password" className={'form-control pword'}
             onChange={this.handlePasswordChange}
             value={this.state.password} />
      <a href=""><small>Forgot Your Password?</small></a>
      <button onClick={this.handleSubmit} id="signin_btn" className={'btn btn-success btn-block'}>Sign In</button>
      </div>

      </div>

      <div className={'signup-footer'}>
        <div className={'pull-left'}>
        &copy; 2014. All Rights Reserved.
      </div>
      <div>
        <a href="#" onClick={this.props.switchES !== undefined ? this.props.switchES : this.state.switchES}>
        <img src={imageES} style={this.styles.image_es} className={'images-lang'}/>
        </a>
        <a href="#" onClick={this.props.switchUK !== undefined ? this.props.switchUK : this.state.switchUK}>
        <img src={imageUK} style={this.styles.image_uk} className={'images-lang'} />
        </a>
      </div>
      </div>

      </div>

      </section>

    );
  }
}

export default LoginForm;

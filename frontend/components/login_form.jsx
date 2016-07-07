const React = require('react');
const Link = require('react-router').Link;
const Header = require('../header.jsx');
const Modal = require('react-modal');

const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const ErrorActions = require('../actions/error_actions.js');
const hashHistory = require('react-router').hashHistory;

const LoginForm = React.createClass({

  getInitialState() {
    return {
      username: null,
      password: null,
			email: null,
      errors: []
    };
  },

  componentWillMount() {
    this._handleLogIn();
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this._handleErrors);
    this.sessionListener = SessionStore.addListener(this._handleLogIn);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  _handleLogIn() {
    if (SessionStore.isUserLoggedIn()) {
      this.props.that.onModalClose();
    }
  },

  _handleErrors() {
    this.setState({errors: ErrorStore.typeErrors("login_form")});
  },

	_handleSubmit(e) {
		e.preventDefault();
    let formData = {};
    ErrorActions.clearErrors();
    formData = {
      username: this.state.username,
      password: this.state.password
    };
    SessionActions.logIn(formData);
	},

  _handleGuest(e) {
    e.preventDefault();
    let formData = {};
    ErrorActions.clearErrors();
    formData = {
      username: "Guest",
      password: "Password"
    };
    SessionActions.logIn(formData);
  },

  _usernameChange(e) {
    this.setState({
      username: e.target.value
    });
  },

  _passwordChange(e) {
    this.setState({
      password: e.target.value
    });
  },

  render() {
  	return (
			<div className="login-form-container">
				<form className="login-form-box">
	        <div className="form-text">Please Sign In</div>
					<br/>
            <div className='login-errors'>
              { this.state.errors.map(error => { return <li>{error}</li>;}) }
            </div>
					<div className="login-form">
					  <input
              type="text"
              placeholder="Username"
              value={this.state.username || ""}
              onChange={this._usernameChange}
              className="login-input" />
	          <input
              type="password"
              placeholder="Password"
              value={this.state.password || ""}
              onChange={this._passwordChange}
              className="login-input" />
            <input onClick={this._handleSubmit} className="login-button" type="submit" value="Log In" />
            <input onClick={this._handleGuest} className="login-button" type="submit" value="Log In As Guest" />
					</div>
				</form>
			</div>
		);
	}
});

module.exports = LoginForm;

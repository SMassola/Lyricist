const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const ErrorActions = require('../actions/error_actions.js');
const ErrorStore = require('../stores/error_store');
const SessionStore = require('../stores/session_store');
const hashHistory = require('react-router').hashHistory;

const SignupForm = React.createClass({

  getInitialState() {
    return {
      username: "",
      password: "",
      email: "",
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
    this.sessionListener.remove();
    this.errorListener.remove();
  },

  _handleLogIn() {
    if (SessionStore.isUserLoggedIn()) {
      this.props.that.onModalClose();
    }
  },

	_handleSubmit(e) {
		e.preventDefault();
    ErrorActions.clearErrors();
		let formData = {
			username: this.state.username,
			password: this.state.password,
			email: this.state.email
		};
      SessionActions.signUp(formData);
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

  _handleErrors() {
    this.setState({errors: ErrorStore.typeErrors("signup_form")});
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

  _emailChange(e) {
    this.setState({
      email: e.target.value
    });
  },

	render() {
  	return (
      <div className="login-form-container">
				<form className="login-form-box">
	        <div className="form-text">Please Sign Up</div>
            <div className='signup-errors'>
              {this.state.errors.map(error => { return <li key={error}>{error}</li>;}) }
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
	          <input
              type="text"
              placeholder="Email"
              value={this.state.email || ""}
              onChange={this._emailChange}
              className="login-input" />
            <input onClick={this._handleSubmit} className="login-button" type="submit" value="Sign Up" />
            <input onClick={this._handleGuest} className="login-button" type="submit" value="Log In As Guest" />
					</div>
				</form>
			</div>
		);
	}
});

module.exports = SignupForm;

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

	render() {
  	return (
      <div className="login-form-container">
				<form className="login-form-box">
	        <div className="form-text">Please Sign Up</div>
            <div className='login-errors'>
              {this.state.errors.map(error => { return <li key={error}>{error}</li>;}) }
            </div>
					<div className="login-form">
            <div className="log-info-box-container">
              <img
                className="glyph"
                src="http://res.cloudinary.com/deeucxgdi/image/upload/v1473769566/username_logo_twekkr.png">
              </img>
    				  <input
                type="text"
                placeholder="Username"
                value={this.state.username || ""}
                onChange={this._usernameChange}
                className="login-input" />
            </div>
            <div className="log-info-box-container">
              <img
                className="glyph"
                src="http://res.cloudinary.com/deeucxgdi/image/upload/v1473769577/password_logo_smcbak.png">
              </img>
  	          <input
                type="password"
                placeholder="Password"
                value={this.state.password || ""}
                onChange={this._passwordChange}
                className="login-input" />
            </div>
            <input onClick={this._handleSubmit} className="login-button" type="submit" value="Sign Up" />
            <input onClick={this._handleGuest} className="login-button" type="submit" value="Log In As Guest" />
					</div>
				</form>
			</div>
		);
	}
});

module.exports = SignupForm;

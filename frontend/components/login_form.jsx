const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const hashHistory = require('react-router').hashHistory;

const LoginForm = React.createClass({

  getInitialState() {
    return {
      username: null,
      password: null,
			email: null
    };
  },

  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount() {
    this.sessionListener.remove();
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      hashHistory.push("/");
    }
  },

	handleSubmit(e) {
		e.preventDefault();
		const formData = {
			username: this.state.username,
			password: this.state.password,
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
				<form onSubmit={this.handleSubmit} className="login-form-box">
	        <div className="form-text">Please Sign In</div>
					<br/>
					<div className="login-form">
					  <input
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this._usernameChange}
              className="login-input" />
		          <input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this._passwordChange}
                className="login-input" />
						<input className="login-button" type="submit" value="Log In" />
					</div>
				</form>
			</div>
		);
	}
});

module.exports = LoginForm;

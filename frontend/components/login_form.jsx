const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const hashHistory = require('react-router').hashHistory;

const LoginForm = React.createClass({

  getInitialState() {
    return {
      username: "",
      password: "",
			email: ""
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
	        Log in to Lyricist!
					<br/>
					<div className="login-form">
		        <br />
		        <br />
						<label>Username:
						  <input type="text" value={this.state.username} onChange={this._usernameChange} className="login-input" />
            </label>
		        <br />
		        <br />
						<label> Password:
		          <input type="password" value={this.state.password} onChange={this._passwordChange} className="login-input" />
						</label>
		        <br />
						<input type="submit" value="Log In" />
					</div>
				</form>
			</div>
		);
	}
});

module.exports = LoginForm;

const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const hashHistory = require('react-router').hashHistory;

const SignupForm = React.createClass({

  getInitialState() {
    return {
      username: "",
      password: "",
      email: "",
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
			email: this.state.email
		};
      SessionActions.signUp(formData);
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
			<div className="signup-form-container">
				<form onSubmit={this.handleSubmit} className="signup-form-box">
	        Welcome to Lyricist!
					<br/>
					<div className="signup-form">
		        <br />
		        <br />
						<label>Username:
						  <input type="text" value={this.state.username} onChange={this._usernameChange} className="signup-input" />
            </label>
		        <br />
		        <br />
						<label> Password:
		          <input type="password" value={this.state.password} onChange={this._passwordChange} className="signup-input" />
						</label>
            <br />
            <br />
						<label> Email:
		          <input type="text" value={this.state.email} onChange={this._emailChange} className="signup-input" />
						</label>
		        <br />
						<input type="submit" value="Submit" />
					</div>
				</form>
			</div>
		);
	}
});

module.exports = SignupForm;

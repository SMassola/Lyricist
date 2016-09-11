const React = require('react');

module.exports = React.createClass({

  _handleSignUp() {
    $('button#sign-up-button').click();
  },

  _handleLogIn() {
    $('button#log-in-button').click();
  },

  render() {
    let style = {};
    if (this.props.action === "Annotate") {
      let offset = $(".highlighted").offset().top;
      style = {
        position: "absolute",
        top: offset
      };
    }

    return(
      <div className="login-prompt-container">
        <div className="login-prompt" style={style}>
          <button type="button" className="log-in-button" onClick={this._handleLogIn}>Log In</button>
          <div>or</div>
          <button type="button" className="sign-up-button" onClick={this._handleSignUp}>Sign Up</button>
          <div>to {this.props.action}</div>
        </div>
      </div>);
  }
});

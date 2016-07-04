const React = require('react');
const Modal = require('react-modal');
const ModalStyle = require('./modal_style.js');

const LoginForm = require('./components/login_form.jsx');
const SignupForm = require('./components/signup_form.jsx');
const SessionStore = require('./stores/session_store.js');
const SessionActions = require('./actions/session_actions.js');

const Header = React.createClass({

  getInitialState() {
    return({
      modalOpen: false,
      signIn: false
    });
  },

  _handleClick(bool) {
    this.setState({modalOpen: true, signIn: bool});
  },

  _handleLogout() {
    SessionActions.logOut();
  },

  onModalClose() {
    this.setState({modalOpen: false});
    ModalStyle.content.opacity = 0;
  },

  onModalOpen() {
    ModalStyle.content.opacity = 100;
  },

  currentUser() {
    return SessionStore.currentUser().username;
  },

  isUserLoggedIn() {
    return SessionStore.isUserLoggedIn();
  },

  logInButtons() {
    return (
      <div>
        <button
        className="nav-links"
        id="log-in-button"
        onClick={this._handleClick.bind(this, true)}>
        Log In
      </button>
      <button
        class="nav-links"
        id="sign-up-button"
        onClick={this._handleClick.bind(this, false)}>
        Sign Up
      </button>
    </div>);
  },

  logOutButton() {
    return (
      <div>
        <button
          id="log-out-button"
          onClick={this._handleLogout}>
          Log Out
        </button>
      </div>);
  },


  render() {
    let component = (this.state.signIn) ? <LoginForm /> : <SignupForm />;

    return(
      <div className="navbar">
        <div className="head-user">
          {this.isUserLoggedIn() ? "Logged in as: " + this.currentUser() : ""}
        </div>
        <div className="head-title" onClick={this._redirectHome}>Lyricist</div>
        <div className="head-links">
          {this.isUserLoggedIn() ? this.logOutButton() : this.logInButtons()}
        </div>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          style={ModalStyle}
          onAfterOpen={this.onModalOpen}>
          <div className="modal-header">
            <div>Login</div>
            <button className="exit" onClick={this.onModalClose}>x</button>
          </div>
          {component}
        </Modal>
      </div>
    );
  }
});

module.exports = Header;

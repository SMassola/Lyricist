const React = require('react');
const Modal = require('react-modal');
const ModalStyle = require('./modal_style.js');
const hashHistory = require('react-router').hashHistory;

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

  logInLinks() {
    return (
      <div>
        <button
        className="nav-links"
        id="log-in-button"
        onClick={this._handleClick.bind(this, true)}>
        Log In
      </button>
      <button
        className="nav-links"
        id="sign-up-button"
        onClick={this._handleClick.bind(this, false)}>
        Sign Up
      </button>
    </div>);
  },

  logOutLink() {
    return (
      <div>
        <button
          className="nav-links"
          onClick={this._handleLogout}>
          Log Out
        </button>
      </div>);
  },

  _handleIndex () {
    hashHistory.push("/songs");
  },

  _handleSongForm() {
    hashHistory.push("/songs/new");
  },


  render() {
    let component = (this.state.signIn) ? <LoginForm that={this}/> : <SignupForm that={this}/>;

    return(
      <div className="header-container">
        <div className="header">
          <div className="head-user">
            {this.isUserLoggedIn() ? "Logged in as: " + this.currentUser() : ""}
          </div>
          <div className="head-title" onClick={this._redirectHome}>Lyricist</div>
          <div className="head-links">
            {this.isUserLoggedIn() ? this.logOutLink() : this.logInLinks()}
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
        <div className="navbar">
          <button className="nav-links" onClick={this._handleIndex}>All Songs</button>
          <button className="nav-links" onClick={this._handleSongForm}>Add Song</button>
        </div>
      </div>
    );
  }
});

module.exports = Header;

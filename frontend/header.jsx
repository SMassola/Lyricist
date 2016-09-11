const React = require('react');
const Modal = require('react-modal');
const ModalStyle = require('./modal_style.js');

const hashHistory = require('react-router').hashHistory;
const Link = require('react-router').Link;

const LoginForm = require('./components/login_form.jsx');
const SignupForm = require('./components/signup_form.jsx');
const SessionStore = require('./stores/session_store.js');
const SessionActions = require('./actions/session_actions.js');
const SearchIndex = require('./components/search_index.jsx');

const Header = React.createClass({

  getInitialState() {
    return({
      user: this.currentUser(),
      modalOpen: false,
      signIn: false
    });
  },

  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this._handleUser);
  },

  componentDidUnMount() {
    this.sessionListener.remove();
  },

  _handleUser() {
    this.setState({user: this.currentUser()});
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
          type="button"
          className="log-links"
          id="log-in-button"
          onClick={this._handleClick.bind(this, true)}>
          Log In
        </button>
        <button
          type="button"
          className="log-links"
          id="sign-up-button"
          onClick={this._handleClick.bind(this, false)}>
          Sign Up
        </button>
      </div>
    );
  },

  logOutLink() {
    return (
      <div>
        <button
          className="log-links"
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

  _redirectHome() {
    hashHistory.push("/");
  },

  render() {
    let component = (this.state.signIn) ? <LoginForm that={this}/> : <SignupForm that={this}/>;

    return(
      <div className="header-container">
        <div className="header">
          <SearchIndex />

          <div className="head-title-container">
            <div className="head-title" onClick={this._redirectHome}>Lyricist</div>
          </div>

          <div className="header-logistics">
            <div className="head-user">
              {this.state.user ? "Logged in as: " + this.currentUser() : ""}
            </div>
            <div className="head-links">
              {this.state.user ? this.logOutLink() : this.logInLinks()}
            </div>
          </div>

          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.onModalClose}
            style={ModalStyle}
            onAfterOpen={this.onModalOpen}>
            <div className="modal-header">
              {this.state.signIn ? <div>Login</div> : <div>Register</div>}
              <button className="exit" onClick={this.onModalClose}>x</button>
            </div>
            {component}
          </Modal>
        </div>
        <div className="navbar">
          <button className="nav-links" onClick={this._redirectHome}>Home</button>
          <button className="nav-links" onClick={this._handleIndex}>All Songs</button>
          <button className="nav-links" onClick={this._handleSongForm}>Add Song</button>
        </div>
      </div>
    );
  }
});

module.exports = Header;

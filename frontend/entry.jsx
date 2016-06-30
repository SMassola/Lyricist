const React = require('react');
const ReactDOM = require('react-dom');
const Modal = require('react-modal');

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const Header = require("./header.jsx");

const LoginForm = require("./components/login_form.jsx");

const Search = require('./search.jsx');

const SongActions = require("./actions/song_actions.js");
const SongStore = require("./stores/song_store.js");

const App = React.createClass({
  render() {
    return (
        <div>
          <Header/>
          {this.props.children}
        </div>
    );
  }
});
// <IndexRoute component={LoginForm} />
// <Route path="/songs" component={SongsIndex} />
// <Route path="/songs/new" component={SongForm} />

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Search} />
  </Route>
);

document.addEventListener('DOMContentLoaded', () => {
  Modal.setAppElement(document.getElementById("root"));
  const root = document.getElementById("root");
  ReactDOM.render(<Router history={hashHistory} routes={routes} />, root);
});

window.SongStore = SongStore;
window.SongActions = SongActions;

const React = require('react');
const ReactDOM = require('react-dom');
const Modal = require('react-modal');

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const Header = require("./header.jsx");
const Search = require('./search.jsx');
const SongShow = require('./components/song_show.jsx');
const SongIndex = require('./components/song_index.jsx');
const SongForm = require('./components/song_form.jsx');
const SessionActions = require('./actions/session_actions');

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

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Search} />
    <Route path="songs/new" component={SongForm} />
    <Route path="songs" component={SongIndex} />
    <Route path="songs/:id" component={SongShow} />
  </Route>
);

document.addEventListener('DOMContentLoaded', () => {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }
  Modal.setAppElement(document.getElementById("root"));
  const root = document.getElementById("root");
  ReactDOM.render(
    <Router
      onUpdate={() => window.scrollTo(0,0)}
      history={hashHistory}
      routes={routes} />, root);
});

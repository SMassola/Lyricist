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
    <Route path="songs" component={SongIndex} />
      <Route path="songs/:id" component={SongShow} />
  </Route>
);

document.addEventListener('DOMContentLoaded', () => {
  Modal.setAppElement(document.getElementById("root"));
  const root = document.getElementById("root");
  ReactDOM.render(<Router history={hashHistory} routes={routes} />, root);
});

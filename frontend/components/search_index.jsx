const React = require('react');
const SearchStore = require('../stores/search_store.js');
const SongActions = require('../actions/song_actions.js');
const SearchItem = require('./search_item');
const SongsSearchBox = require('./search_box');

const SearchIndex = React.createClass({

  getInitialState() {
    return {songs: SearchStore.allResults()};
  },

  componentDidMount() {
    SongActions.searchSongs();
    this.listener = SearchStore.addListener(this._onChange);
  },

  _onChange() {
    this.setState({songs: SearchStore.allResults()});
  },

  componentWillUnmount() {
    this.listener.remove();
  },

  render() {
    return (
      <div className="search-container">
        <SongsSearchBox />
        <ul className="songs-search-results">
          {this.state.songs.map(function (song) {
            return <SearchItem key={song.id} song={song} />;
          })}
        </ul>
      </div>
    );
  }
});

module.exports = SearchIndex;

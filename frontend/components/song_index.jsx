const React = require('react');
const SongStore = require('../stores/song_store.js');
const SongActions = require('../actions/song_actions.js');

const SongIndex = React.createClass({

  getInitialState() {
    return {songs: []};
  },

  componentDidMount() {
    this.songListener = SongStore.addListener(this._handleChange);
    SongActions.fetchAllSongs();
  },

  componentWillUnmount() {
    this.songListener.remove();
  },

  _handleChange() {
    const songs = SongStore.allSongs();
    this.setState({ songs: songs ? songs : {} });
  },

  render() {
    let songs = this.state.songs;
    return(
      <div>
        {songs.map((song) => {
          return (
            <div>
              <li key={song.id}>{song.title}</li>
              <li key={song.id}>{song.album}</li>
            </div>);
        })}
      </div>);
  }

});

module.exports = SongIndex;

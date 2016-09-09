const React = require('react');
const SongStore = require('../stores/song_store.js');
const SongActions = require('../actions/song_actions.js');
const SongIndexItem = require("./song_index_item.jsx");

const SongIndex = React.createClass({

  getInitialState() {
    return {songs: SongStore.allSongs()};
  },

  componentDidMount() {
    this.songListener = SongStore.addListener(this._handleChange);
    SongActions.fetchAllSongs();
  },

  componentWillUnmount() {
    this.songListener.remove();
  },

  _handleChange() {
    this.setState({ songs: SongStore.allSongs()});
  },

  render() {
    let songs = this.state.songs;
    return(
      <div className="song-index-container">
        <div className="song-index">
          <div className="song-index-title">Songs To Discover On <span>Lyricist</span></div>
          {songs.map((song) => {
            return(
              <SongIndexItem
                key={song.id}
                songId={song.id}
                title={song.title}
                artist={song.artist.name}
                art={song.image_url}
                albumDescription={song.album.body}/>
              );
          })}
        </div>
      </div>);
  }

});

module.exports = SongIndex;

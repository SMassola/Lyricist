const SongStore = require('./stores/song_store.js');
const SongActions = require('./actions/song_actions');
const IndexAlbumArt = require('./components/index_album_art.jsx');

const React = require('react');

const Search = React.createClass({

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
      <div className="home">
        <header className="splash-container">
          <div className="splash">
            <div className="splash-title">Do You Hear the Difference?</div>
            <div className="splash-caption">Lyricist is a lyrics catalog enabled by you</div>
          </div>
          <div className="search-bar">
            <h1 className="search-area"></h1>
          </div>
        </header>
        <main className="main-page">
          <div className="gallery-title">Fresh On Lyricist</div>
          <div className="gallery-container">
            {songs.map((song) => {
              return(
                <IndexAlbumArt key={song.id} id={song.id} art={song.image_url}/>
                );
            })}
          </div>
        </main>
      </div>);
  }
});

module.exports = Search;

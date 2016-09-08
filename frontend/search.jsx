const SongStore = require('./stores/song_store.js');
const SongActions = require('./actions/song_actions');
const IndexAlbumArt = require('./components/index_album_art.jsx');
const hashHistory = require('react-router').hashHistory;

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

  _handleRedirect(id, e) {
    hashHistory.push(`/songs/${id}`);
  },

  render() {
    let songs = this.state.songs;
    return(
      <div className="home">
        <header className="splash-container">
          <div className="splash">
            <div className="splash-title">Do You Hear the Difference?</div>
            <div className="splash-caption"><span>Lyricist</span> is a lyrics catalog enabled by you</div>
          </div>
          <div className="search-bar">
            <h1 className="search-area"></h1>
          </div>
        </header>
        <main className="main-page">
          <div className="gallery-container">
            <div className="gallery-title">What's Trending On <span>Lyricist</span></div>
            <div className="filler"></div>
            <div className="filler"></div>
            <div className="filler"></div>
            <div className="filler"></div>
          </div>
          <div className="gallery-container">
            {songs.map((song) => {
              return(
                <div onClick={this._handleRedirect.bind(null, song.id)} className="gallery-item tint" key={song.id}>
                  <IndexAlbumArt id={song.id} art={song.image_url}/>
                  <div className="gallery-song-info-container">
                    <div className="gallery-song-title">{song.title}</div>
                    <div className="gallery-song-artist">{song.artist.name}</div>
                    <div className="gallery-song-album">{song.album.name}</div>
                  </div>
                </div>
                );
            })}
          </div>
        </main>
      </div>);
  }
});

module.exports = Search;

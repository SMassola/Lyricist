const React = require('react');
const ReactRouter = require('react-router');

const SongActions = require('../actions/song_actions.js');
const ArtistActions = require('../actions/artist_actions.js');

const ErrorStore = require('../stores/error_store.js');
const SessionStore = require('../stores/session_store.js');
const SongStore = require('../stores/song_store.js');
const hashHistory = ReactRouter.hashHistory;

const SongForm = React.createClass({

  getInitialState() {
    return {
      title: null,
      lyrics: null,
      year: null,
      url: null,
      album_id: null,
      artistName: null,
      albumName: null,
      artist_id: null
    };
  },

  componentDidMount() {
    this.songListener = SongStore.addListener(this._handleChange);
    this.errorListener = ErrorStore.addListener(this._handleErrors);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.songListener.remove();
  },

  _handleChange() {
    hashHistory.push("/songs");
  },

  _handleErrors() {
    this.setState({errors: ErrorStore.typeErrors("login_form")});
  },

  _titleChange(e) {
    this.setState({title: e.target.value});
  },
  _yearChange(e) {
    this.setState({year: e.target.value});
  },
  _lyricsChange(e) {
    this.setState({lyrics: e.target.value});
  },
  _artistNameChange(e) {
    this.setState({artistName: e.target.value});
  },
  _artistDescriptionChange(e) {
    this.setState({artistDescription: e.target.value});
  },
  _albumNameChange(e) {
    this.setState({albumName: e.target.value});
  },
  _albumDescriptionChange(e) {
    this.setState({albumDescription: e.target.value});
  },
  _urlChange(e) {
    this.setState({url: e.target.value});
  },
  _handleSubmit(e) {
    e.preventDefault();
    let artist = {name: this.state.artistName};
    let album = {name: this.state.albumName, artist_id: this.state.artist_id};
    let song = {
      title: this.state.title,
      lyrics: this.state.lyrics,
      year: this.state.year,
      user_id: SessionStore.currentUser()["id"],
      album_id: this.state.album_id,
      image_url: this.state.url
    };
    ArtistActions.createArtistAlbumSong(artist, album, song);
  },

  render() {
    return(
      <div className="song-form-container">
        <form onSubmit={this._handleSubmit}>
          <h1>Add a New Song to the Lyricist Library</h1>
          <input
            type="text"
            placeholder="Title"
            value={this.state.title || ""}
            onChange={this._titleChange}
            className="song-title-input" />
          <input
            type="text"
            placeholder="Year"
            value={this.state.year || ""}
            onChange={this._yearChange}
            className="song-year-input" />
          <textarea onChange={this._lyricsChange}
            className="lyrics-textarea"
            placeholder="Lyrics"
            value={this.state.body}>
          </textarea>
          <input
            type="text"
            placeholder="Artist"
            value={this.state.artistName || ""}
            onChange={this._artistNameChange}
            className="artist-input" />
          <input
            type="text"
            placeholder="Album"
            value={this.state.albumName || ""}
            onChange={this._albumNameChange}
            className="album-input" />
          <input
            type="text"
            placeholder="Image URL (optional)"
            value={this.state.url || ""}
            onChange={this._urlChange}
            className="url-input" />
          <input className="submit-to-lyricist" type="submit" value="Add To Lyricist"/>
        </form>
      </div>
    );
  }
});

module.exports = SongForm;

// <h1>New Annotation</h1>
// <div className="annotation-error-container">
//   {errs.map((error) => {
//     return(<li key={error} style={{marginLeft: "20px"}}>{error}</li>);
//   })}
// </div>
// <div className="annotation-input-fields">
//   <textarea onChange={this._bodyChange}
//     className="annotation-textarea"
//     placeholder="Body"
//     value={this.state.body}>
//   </textarea>
//   <input className="submit-comment" type="submit" value="Add Annotation"/>
// </div>

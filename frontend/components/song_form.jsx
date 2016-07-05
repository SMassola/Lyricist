const React = require('react');
const SongActions = require('../actions/song_actions.js');
const ArtistActions = require('../actions/song_actions.js');
const AlbumActions = require('../actions/song_actions.js');

const ErrorStore = require('../stores/error_store.js');
const ArtistStore = require('../stores/artist_store.js');
const SongStore = require('../stores/artist_store.js');
const AlbumStore = require('../stores/artist_store.js');

const SongForm = React.createClass({

  getInitialState() {
      return {
        title: null,
        lyrics: null,
        year: null,
        user_id: null,
        album_id: null,
        artistName: null,
        albumName: null,
        artist_id: null
      };
  },

  componentWillMount() {
    this._handleLogIn();
  },

  componentDidMount() {
    this.artistListener = ArtistStore.addListener(this._handleChange);
    this.albumListener = AlbumStore.addListener(this._handleChange);
    this.songListener = SongStore.addListener(this._handleChange);
    this.errorListener = ErrorStore.addListener(this._handleErrors);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  _handleChange() {
    // if (successful creation) {
    //   hashHistory.push("/songs");
    // }
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
  _handleSubmit(e) {
    e.preventDefault();
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
          <textarea onChange={this._artistDescriptionChange}
            className="artist-description"
            placeholder="Artist Description"
            value={this.state.artistDescription}>
          </textarea>
          <input
            type="text"
            placeholder="Album"
            value={this.state.year || ""}
            onChange={this._albumNameChange}
            className="album-input" />
          <textarea onChange={this._albumDescriptionChange}
            className="album-Desciption"
            placeholder="Album Description"
            value={this.state.albumDescription}>
          </textarea>
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

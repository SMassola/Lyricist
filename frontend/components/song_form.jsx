const React = require('react');
const ReactRouter = require('react-router');
const LogPrompt = require('./log_prompt');

const SongActions = require('../actions/song_actions.js');
const ArtistActions = require('../actions/artist_actions.js');

const ErrorStore = require('../stores/error_store.js');
const SessionStore = require('../stores/session_store.js');
const SongStore = require('../stores/song_store.js');
const hashHistory = require('react-router').hashHistory;

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
      artist_id: null,
      errors: [],
      image: false,
      currentUser: SessionStore.currentUser().id
    };
  },

  componentDidMount() {
    this.sessionListener = SessionStore.addListener(this._handleUser);
    this.songListener = SongStore.addListener(this._handleRedirect);
    this.errorListener = ErrorStore.addListener(this._handleErrors);
  },

  componentWillUnmount() {
    this.sessionListener.remove();
    this.errorListener.remove();
    this.songListener.remove();
  },

  _handleUser() {
    this.setState({currentUser: SessionStore.currentUser().id});
  },

  _handleRedirect() {
    let song = SongStore.latestAddition();
    if (song) {
      hashHistory.push(`/songs/${song}`);
    }
  },

  _handleErrors() {
    this.setState({errors: ErrorStore.typeErrors("song_form")});
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
  _urlChange(url) {
    this.setState({url: url});
  },

  _handleUpload(e) {
    e.preventDefault();
    window.cloudinary.openUploadWidget(
      window.cloudinary_options,
      (error, images) => {
        if (error === null) {
          let alt_url = images[0].url.slice(0, 49) + "h_300,w_300/" + images[0].url.slice(49);
          this._urlChange(alt_url);
          this.setState({image: alt_url});
        }
      }
    );
  },

  _handleSubmit(e) {
    e.preventDefault();
    let song = {
      title: this.state.title,
      lyrics: this.state.lyrics,
      year: this.state.year,
      user_id: SessionStore.currentUser()["id"],
      album_id: this.state.album_id,
      image_url: this.state.url,
      album_attributes: {name: this.state.albumName, artist_attributes: {name: this.state.artistName}}
    };

    SongActions.createSong(song);
  },

  render() {
    let style = {
      backgroundImage: 'url(' + this.state.image + ')'
    };

    let errs = [];
    if (this.state.errors.length > 0) {
      errs = this.state.errors.shift().split(',');
    }
    return(
      <div className="song-form-container">
        <form className="song-form" onSubmit={this._handleSubmit}>
          <div className="song-form-title">
            <div>Add A Song To <span>Lyricist</span></div>
            <div className="required">* required</div>
            </div>
          <div className="song-form-error-box">
            <div className="song-form-error-container">
              {errs.map((error) => {
                return(<li key={error}>{error}</li>);
              })}
            </div>
          </div>
          <div className="song-form-inputs">
            <div className="song-form-left">

              <div className="smaller-inputs">
                <div>BY *</div>
                <input
                  type="text"
                  placeholder="Artist"
                  value={this.state.artistName || ""}
                  onChange={this._artistNameChange}
                  className="artist-input" />
                <div>TITLE *</div>
                <input
                  type="text"
                  placeholder="Song Title"
                  value={this.state.title || ""}
                  onChange={this._titleChange}
                  className="song-title-input" />
                <div>YEAR *</div>
                <input
                  type="text"
                  placeholder="Year"
                  value={this.state.year || ""}
                  onChange={this._yearChange}
                  className="song-year-input" />
                <div>ALBUM *</div>
                <input
                  type="text"
                  placeholder="Album"
                  value={this.state.albumName || ""}
                  onChange={this._albumNameChange}
                  className="album-input" />
              <div>LYRICS *</div>
              <textarea onChange={this._lyricsChange}
                className="lyrics-textarea"
                value={this.state.body}>
              </textarea>
              {this.state.currentUser ?
                <input className="submit-to-lyricist" type="submit" value="Add To Lyricist"/>
                :  <LogPrompt action="add a song" /> }
            </div>
          </div>
          <div className="song-form-right">
            <div className="image-inputs">
              <div>IMAGE</div>
              {this.state.image ? <div className="image" style={style}></div> : <div className="image"><div>No Image</div></div>}
              <button className="url-input" onClick={this._handleUpload}>Upload Image</button>
            </div>
          </div>
        </div>
        </form>
      </div>
    );
  }
});

module.exports = SongForm;

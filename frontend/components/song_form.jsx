const React = require('react');
const SongActions = require('../actions/song_actions.js');

const ErrorStore = require('../stores/error_store.js');

const SongForm = React.createClass({

  getInitialState() {
      return {
        title: null,
        lyrics: null,
        year: null,
        user_id: null,
        album_id: null,
        artistName: null,
        artistDescription: null,
        albumName: null,
        albumDescription: null,
        artist_id: null
      };

  },

  render() {
    return(
      <div className="song-form-container">
        <form>
          <h1>Add a New Song to the Lyricist Library</h1>
          <input
            type="text"
            placeholder="Title"
            value={this.state.title || ""}
            onChange={this._titleChange}
            className="song-title-input" />
          <input
            type="text"
            placeholder="Artist"
            value={this.state.artistName || ""}
            onChange={this._artistNameChange}
            className="artist-input" />
          <textarea onChange={this._ArtistDescriptionChange}
            className="artist-description"
            placeholder="Artist Description"
            value={this.state.artistDescription}>
          </textarea>
          <input
            type="text"
            placeholder="Album"
            value={this.state.year || ""}
            onChange={this._yearChange}
            className="album-input" />
          <textarea onChange={this._AlbumDescriptionChange}
            className="album-Desciption"
            placeholder="Album Description"
            value={this.state.AlbumDescription}>
          </textarea>
          <textarea onChange={this._lyricsChange}
            className="lyrics-textarea"
            placeholder="Lyrics"
            value={this.state.body}>
          </textarea>
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

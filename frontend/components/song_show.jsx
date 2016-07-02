const React = require('react');
const SongStore = require('../stores/song_store.js');
const SongActions = require('../actions/song_actions.js');
const SongLyricHighlights = require('./song_lyric_highlights.jsx');

const SongShow = React.createClass({
  getInitialState () {
    const potentialSong = SongStore.findSong(this.props.params.id);
    return ({song: potentialSong ? potentialSong : {}});
  },

  componentDidMount () {
    this.songListener = SongStore.addListener(this.handleChange);
    SongActions.fetchSong(parseInt(this.props.params.id));
  },

  componentWillUnmount () {
    this.songListener.remove();
  },

  handleChange () {
    const potentialSong = SongStore.findSong(this.props.params.id);
    this.setState({ song: potentialSong ? potentialSong : {} });
  },

  createAnnotations() {

    let lyrics = this.state.song.lyrics;
    this.lyricsEls = [];
    let annotations = this.state.song.annotations;
    let tracker = 0;
    annotations.forEach((annotation) => {
      this.lyricsEls.push(lyrics.slice(tracker, annotation.start_idx));
      this.lyricsEls.push(
      <a key={annotation.id} onClick={this._handleClick} className="highlighted">
        {lyrics.slice(
        annotation.start_idx,
        annotation.end_idx)}
      </a>);

      tracker = annotation.end_idx;
    });
    this.lyricsEls.push(lyrics.slice(tracker));
  },

  highlight () {
    $('pre.highlight-lyrics').html(this.state.song.lyrics);

    let selection = window.getSelection();
    let start = window.getSelection().anchorOffset;
    let end = window.getSelection().focusOffset;

    let lyrics = this.state.song.lyrics;

    $('pre.highlight-lyrics').html($('pre.highlight-lyrics').html().slice(0,start)
    + '<span className="highlighted" style="background-color: yellow; color:black">'
    + $('pre.highlight-lyrics').html().slice(start,end) + '</span>'
    + $('pre.highlight-lyrics').html().slice(end));

  },

  render () {

    if (this.state.song.lyrics) {
      this.createAnnotations();
    }

    return (
      <div className="page" id="song-container">
        <pre className="ghost-lyrics" onMouseUp={this.highlight}>
          {this.state.song.lyrics}
        </pre>
        <pre className="highlight-lyrics">
          {this.state.song.lyrics}
        </pre>
        <pre className="lyrics">
          <div>{this.lyricsEls}</div>
        </pre>
      </div>
    );
  }
});

module.exports = SongShow;


// this.state.song ?
// <SongLyricHighlights
//   lyrics={this.state.song.lyrics}
//   annotations={this.state.song.annotations}/>}} : <div></div>

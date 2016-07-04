const React = require('react');

const SongStore = require('../stores/song_store.js');
const SessionStore = require('../stores/session_store.js');

const SongActions = require('../actions/song_actions.js');
const AnnotationBody = require('./annotation_body.jsx');
const AnnotationForm = require('./annotation_form.jsx');
const SongDetails = require("./song_details.jsx");
const AlbumArt = require("./album_art.jsx");

const SongShow = React.createClass({
  getInitialState () {
    const potentialSong = SongStore.findSong(this.props.params.id);
    return ({
      song: potentialSong ? potentialSong : {},
      renderForm: false,
      renderAnnotationBody: false,
      currentAnnotation: null,
      errors: []
    });
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

  sortAnnotations(array) {

  let unsorted = true;
  while (unsorted) {
    unsorted = false;

    for (let i = 0; i < array.length-1; i++) {
      if (array[i].start_idx > array[i+1].start_idx) {
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        unsorted = true;
      }
    }
  }
  return array;
  },

  handleAnnotationClick(e) {
    this.setState({
      renderForm: false,
      renderAnnotationBody: true,
      currentAnnotation: e.target.value});
  },

  createAnnotations() {
    let unsortedAnnotations = this.state.song.annotations;
    let annotations = this.sortAnnotations(unsortedAnnotations);
    let lyrics = this.state.song.lyrics;

    this.lyricsEls = [];
    let flagIdx = 0;

    annotations.forEach((annotation) => {
      this.lyricsEls.push(
        lyrics.slice(flagIdx, annotation.start_idx));
      this.lyricsEls.push(
      <span
        className= "annotated annotation-link"
        value={annotation}
        onClick={this.handleAnnotationClick}
        key={annotation.id}>
        {lyrics.slice(annotation.start_idx, annotation.end_idx)}
      </span>);

      flagIdx = annotation.end_idx;
    });

    this.lyricsEls.push(lyrics.slice(flagIdx));
  },

  highlight (e) {
    let idx1 = window.getSelection().anchorOffset;
    let idx2 = window.getSelection().focusOffset;

    idx1 < idx2 ? [this.start, this.end] = [idx1, idx2] : [this.start, this.end] = [idx2, idx1];

    if (this.start - this.end === 0) {
      $('pre.ghost-lyrics').hide();
      let tag = document.elementFromPoint(e.clientX, e.clientY);
      tag.click();
      $('pre.ghost-lyrics').show();
    } else {
      $('pre.highlight-lyrics').html($('pre.highlight-lyrics').html().slice(0,this.start)
      + '<span style="background-color: yellow;">'
      + $('pre.highlight-lyrics').html().slice(this.start,this.end) + '</span>'
      + $('pre.highlight-lyrics').html().slice(this.end));
      this.setState({renderForm: true, renderAnnotationBody: false});
    }
  },

  removeHighlight() {
    $('pre.highlight-lyrics').html(this.state.song.lyrics);
    this.setState({renderForm: false});
  },

  render () {

    if (this.state.song.lyrics) {
      this.createAnnotations();
    }

    return (
      <div className="showpage">
        <div className="show-splash">
          <SongDetails
            title={this.state.song.title}
            artist={this.state.song.artist}
            album={this.state.song.album}
          />
          <AlbumArt art={this.state.song.image_url}/>
        </div>
        <div className="show-content-container">
          <div className="lyrics-container" id="song-container">
            <h3 className="song-lyrics-title">{this.state.song.title}</h3>
            <pre className="ghost-lyrics"
              onMouseUp={this.highlight}
              onMouseDown={this.removeHighlight}>
              {this.state.song.lyrics}
            </pre>

            <pre className="highlight-lyrics">
              {this.state.song.lyrics}
            </pre>

            <pre className="lyrics">
              {this.lyricsEls}
            </pre>
          </div>
          <div>
            {this.state.renderAnnotationBody ?
              <AnnotationBody
                annotation={this.state.currentAnnotation} />
              :<div></div>}

            {this.state.renderForm ?
              <AnnotationForm
                songId={this.state.song.id}
                userId={SessionStore.currentUser().id}
                startIdx={this.start}
                endIdx={this.end} />
              :<div></div>}
            </div>
          </div>
        </div>
    );
  }
});

module.exports = SongShow;

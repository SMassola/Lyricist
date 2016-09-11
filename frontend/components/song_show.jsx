const React = require('react');
const hashHistory = require('react-router').hashHistory;

const AnnotationStore = require('../stores/annotation_store.js');
const CommentStore = require('../stores/comment_store.js');
const SongStore = require('../stores/song_store.js');
const SessionStore = require('../stores/session_store.js');

const SongActions = require('../actions/song_actions.js');

const AnnotationBody = require('./annotation_body.jsx');
const AnnotationForm = require('./annotation_form.jsx');
const SongDetails = require("./song_details.jsx");
const AlbumArt = require("./album_art.jsx");
const SongComments = require("./song_comments.jsx");
const LogPrompt = require("./log_prompt.jsx");

const SongShow = React.createClass({
  getInitialState () {
    let song = SongStore.findSong(this.props.params.id);
    return ({
      song: song ? song : {},
      renderForm: false,
      renderAnnotationBody: false,
      currentAnnotation: null,
      errors: [],
      currentUser: SessionStore.currentUser().id,
    });
  },

  componentWillReceiveProps(nextProps) {
    this.setState({
      song: SongActions.fetchSong(parseInt(nextProps.params.id)),
      renderAnnotationBody: false,
      currentAnnotation: null
    });
  },

  componentDidMount () {
    this.sessionListener = SessionStore.addListener(this._handleUser);
    this.songListener = SongStore.addListener(this._handleChange);
    this.annotationListener = AnnotationStore.addListener(this._handleAnnotationChange);
    this.commentListener = CommentStore.addListener(this._handleCommentChange);
    SongActions.fetchSong(parseInt(this.props.params.id));
  },

  componentWillUnmount () {
    this.sessionListener.remove();
    this.songListener.remove();
    this.annotationListener.remove();
    this.commentListener.remove();
  },

  _handleAnnotationChange() {
    if (this.state.song.annotations.length && !this.state.currentAnnotation) {
      let annotations = this.state.song.annotations;
      let annotation = annotations[annotations.length - 1];

      $('pre.highlight-lyrics').html(this.state.song.lyrics);

      this.setState({
        renderForm: false,
        currentAnnotation: annotation,
        renderAnnotationBody: true
      });
    } else {
      this.setState({
        renderForm: false,
        currentAnnotation: null,
        renderAnnotationBody: false
      });
    }
  },

  _handleUser() {
    this.setState({
      currentUser: SessionStore.currentUser().id
    });
  },

  _handleCommentChange() {
    this.setState({
      song: SongStore.findSong(this.props.params.id)
    });

    if (this.state.currentAnnotation) {
      this.setState({
        currentAnnotation: AnnotationStore.findAnnotation(
          this.state.song,
          this.state.currentAnnotation.id)
      });
    }
  },

  _handleChange () {
    let song = SongStore.findSong(parseInt(this.props.params.id));
    this.setState({ song: song ? song : {} });
    this.setState({ renderForm: false });
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
    this.removeHighlight();
    $('.annotated').removeClass("selected-annotation");
    $(e.target).addClass("selected-annotation");
    this.setState({
      renderForm: false,
      renderAnnotationBody: true,
      currentAnnotation: e.target.value});
  },

  handleAnnotationEnter(e) {
    $(e.target).addClass("selected-annotation");
  },

  handleAnnotationLeave(e) {
    if (this.state.currentAnnotation !== e.target.value) {
      $(e.target).removeClass("selected-annotation");
    }
  },

  createAnnotations() {
    let unsortedAnnotations = this.state.song.annotations;
    let annotations = this.sortAnnotations(unsortedAnnotations);
    let lyrics = this.state.song.lyrics;

    this.lyricsEls = [];
    let flagIdx = 0;

    annotations.forEach((annotation) => {
      let classes;
      if (annotation === this.state.currentAnnotation) {
        classes = "annotated annotation-link selected-annotation";
      } else {
        classes = "annotated annotation-link";
      }
      this.lyricsEls.push(
        lyrics.slice(flagIdx, annotation.start_idx));
      this.lyricsEls.push(
      <span
        id={annotation.id}
        className={classes}
        value={annotation}
        onClick={this.handleAnnotationClick}
        onMouseEnter={this.removeSelection}
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
    window.getSelection().removeAllRanges();
    idx1 < idx2 ? [this.start, this.end] = [idx1, idx2] : [this.start, this.end] = [idx2, idx1];

    if (this.start - this.end !== 0) {
      $('pre.highlight-lyrics').html($('pre.highlight-lyrics').html().slice(0,this.start)
      + '<span class="highlighted" style="background-color: rgba(75, 0, 130, 0.3);">'
      + $('pre.highlight-lyrics').html().slice(this.start, this.end) + '</span>'
      + $('pre.highlight-lyrics').html().slice(this.end));
      $('.annotated').removeClass("selected-annotation");
      this.setState({currentAnnotation: null, renderAnnotationBody: false, renderForm: true});
    }
  },

  removeSelection() {
    if ( document.selection ) {
      document.selection.empty();
    } else if ( window.getSelection ) {
      window.getSelection().removeAllRanges();
    }
  },

  removeHighlight() {
    $('pre.highlight-lyrics').html(this.state.song.lyrics);
    this.setState({renderForm: false});
  },

  render () {
    if (!this.state.song) {
      return null;
    }
    if (this.state.song.lyrics) {
      this.createAnnotations();
    }
    let style = {
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),' +
                       'linear-gradient(180deg, transparent, black),' +
                       'url(' + this.state.song.image_url + ')'
    };

    let form = this.state.currentUser ?
    <AnnotationForm
      lyrics={this.state.song.lyrics}
      songId={this.state.song.id}
      userId={SessionStore.currentUser().id}
      startIdx={this.start}
      endIdx={this.end} /> : <LogPrompt action="Annotate"/>;

    return (
      <div className="showpage">
        <div className="show-splash" style={style}>
          <div className="show-details-container">
            <SongDetails
              title={this.state.song.title}
              artist={this.state.song.artist}
              album={this.state.song.album}
              />
            <AlbumArt art={this.state.song.image_url}/>
          </div>
        </div>
        <div className="show-content-container">
          <div className="song-lyrics-and-comments">
            <div className="lyrics-container" id="song-container">

              <div className="song-lyrics-title">{this.state.song.title} Lyrics</div>

              <pre className="ghost-lyrics"
                onMouseUp={this.highlight}
                onMouseDown={this.removeHighlight}>
                {this.state.song.lyrics}
              </pre>

              <pre className="annotation-lyrics noselect">
                {this.lyricsEls}
              </pre>

              <pre className="highlight-lyrics">
                {this.state.song.lyrics}
              </pre>

            </div>
            <SongComments
              comments={this.state.song.comments}
              songId={this.state.song.id}
              user={this.state.currentUser} />
          </div>

          <div className="float">
            {this.state.renderAnnotationBody ?
              <AnnotationBody
                annotation={this.state.currentAnnotation} /> : ""}
            {this.state.renderForm ? form : ""}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SongShow;

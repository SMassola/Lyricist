const React = require('react');
const SongActions = require('../actions/song_actions.js');
const SongStore = require('../stores/song_store.js');
const AnnotationComments = require('./annotation_comments.jsx');
const Upvotes = require('./upvotes.jsx');

const SessionStore = require('../stores/session_store.js');

const AnnotationBody = React.createClass({

  getInitialState() {
    return({
      annotation: this.props.annotation
    });
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({annotation: nextProps.annotation});
  },

  addAnimation() {
    setTimeout(function() {
      $("div.annotation-body").addClass("animate-timer slider");
    }, 0);
  },

  componentDidMount() {
    this.songListener = SongStore.addListener(this._handleChange);
    this.addAnimation();
  },

  _handleChange() {
    let song = SongStore.findSong(this.props.annotation.song_id);
    let annotation = SongStore.findAnnotation(song, this.props.annotation.id);
    this.setState({ annotation: annotation ? annotation : {} });
  },

  componentWillUnmount() {
    this.songListener.remove();
  },

  render() {
    let offset = $(window).scrollTop();
    if (offset < 425) {
      offset = 425;
    }

    let style = {
      top: offset
    };

    return(
      <div className="annotation-body-container">
        <div className="annotation-body" style={style}>
          <div className="annotator-display bolded">
            {this.state.annotation.username}
          </div>
          <div className="annotation-display">{this.state.annotation.body}</div>
          <AnnotationComments annotation={this.state.annotation} />
        </div>
      </div>
    );
  }
});

module.exports = AnnotationBody;

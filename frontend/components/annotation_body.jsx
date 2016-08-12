const React = require('react');
const AnnotationActions = require('../actions/annotation_actions.js');

const SongStore = require('../stores/song_store.js');
const CommentStore = require('../stores/comment_store.js');
const AnnotationStore = require('../stores/annotation_store.js');
const SessionStore = require('../stores/session_store.js');

const AnnotationComments = require('./annotation_comments.jsx');
const Upvotes = require('./upvotes.jsx');

const AnnotationBody = React.createClass({

  getInitialState() {
    return({
      annotation: this.props.annotation,
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
    this.annotationListener = AnnotationStore.addListener(this._handleChange);
    this.addAnimation();
  },

  componentWillUnmount() {
    this.annotationListener.remove();
  },

  _handleChange() {
    let song = SongStore.findSong(this.props.annotation.song_id);
    let annotation = AnnotationStore.findAnnotation(song, this.props.annotation.id);
    this.setState({ annotation: annotation ? annotation : {} });
  },

  _handleDelete() {
    AnnotationActions.deleteAnnotation(this.state.annotation.id);
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
          <pre className="annotation-display">{this.state.annotation.body}</pre>
          {this.state.annotation.user_id === SessionStore.currentUser()["id"] ?
            <button
              className="delete-annotation"
              onClick={this._handleDelete}>
              DELETE
            </button> : ""}
          <AnnotationComments annotation={this.state.annotation}/>
        </div>
      </div>
    );
  }
});

module.exports = AnnotationBody;

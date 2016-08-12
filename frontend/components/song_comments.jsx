const React = require('react');
const CommentActions = require('../actions/comment_actions.js');

const CommentStore = require('../stores/comment_store.js');
const SessionStore = require('../stores/session_store.js');
const ErrorStore = require('../stores/error_store.js');

const ErrorActions = require('../actions/error_actions.js');

const SongComments = React.createClass({

  getInitialState() {
    return({
      comments: this.props.comments,
      body: "",
      errors: []
    });
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({comments: nextProps.comments});
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this._handleErrors);
  },

  componentWillUnmount() {
    this.errorListener.remove();
  },

  _handleErrors() {
    this.setState({errors: ErrorStore.typeErrors("song_comments_form")});
  },

  _bodyChange(e) {
    e.preventDefault();
    this.setState({body: e.target.value});
  },

  _handleSubmit(e) {
    e.preventDefault();
    const formData = {
      body: this.state.body,
      song_id: this.props.songId
    };
    CommentActions.createSongComment(formData);
    this.setState({body: ""});
  },

  render() {
    let comments = this.state.comments;

    let errs = [];
    if (this.state.errors.length > 0) {
      errs = this.state.errors.shift().split(',');
    }

    if (!this.props.comments) {
      return null;
    }
    return(
    <div className="song-comment-form-and-display">
      <form onSubmit={this._handleSubmit} className="song-comment-form">
        <div className="song-comment-form-title">Leave A Comment</div>
        <div className="error-box">
          <div className="song-comments-error-container">
            {errs.map((error) => {
              return(<li key={error} style={{marginLeft: "20px"}}>{error}</li>);
            })}
          </div>
        </div>
        <div className="song-comment-input-fields">
          <textarea onChange={this._bodyChange}
            className="song-comment-textarea"
            placeholder="Add A Comment Here..."
            value={this.state.body}>
          </textarea>
        </div>
        <input
          className="submit-song-comment"
          type="submit"
          value="Add Comment"/>
      </form>
      <div className="song-comments-container">
        {comments.map((comment) => {
          return(
            <div key={comment.id} className="song-comment-details-container">
              <div className="song-commenter" key={1}>
                 {comment.username}
              </div>
              <div className="song-comment" key={2}>{comment.body}</div>
            </div>);
          })}
        </div>
    </div>);
  }
});

module.exports = SongComments;

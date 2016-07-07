const React = require('react');
const SongActions = require('../actions/song_actions.js');
const SessionStore = require('../stores/session_store.js');

const SongComments = React.createClass({

  getInitialState() {
    return({
      body: "",
    });
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
    SongActions.createSongComment(formData);
    this.setState({body: ""});
  },

  render() {
    let comments = this.props.comments;

    if (!this.props.comments) {
      return null;
    }
    return(
    <div className="song-comment-form-and-display">
      <form onSubmit={this._handleSubmit} className="song-comment-form">
        <h3 className="song-comment-form-title">Comments</h3>
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
                 {comment.username} commented:
              </div>
              <div className="song-comment" key={2}>{comment.body}</div>
            </div>);
          })}
        </div>
    </div>);
  }
});

module.exports = SongComments;

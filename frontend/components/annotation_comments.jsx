const React = require('react');
const SongActions = require('../actions/song_actions.js');

const ErrorStore = require('../stores/error_store');
const ErrorActions = require('../actions/error_actions.js');

const AnnotationComments = React.createClass({

  getInitialState() {
    return({
      body: "",
      errors: []
    });
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this._handleErrors);
  },

  componentWillUnmount() {
    this.errorListener.remove();
  },

  _handleErrors() {
    this.setState({errors: ErrorStore.typeErrors("annotation_comments_form")});
  },

  _bodyChange(e) {
    e.preventDefault();
    this.setState({body: e.target.value});
  },

  _handleSubmit(e) {
    e.preventDefault();

    const formData = {
      body: this.state.body,
      annotation_id: this.props.annotation.id
    };
    SongActions.createAnnotationComment(formData);
    this.setState({body: ""});
  },

  render() {
    let comments = this.props.annotation.comments;

    let errs = [];
    if (this.state.errors.length > 0) {
      errs = this.state.errors.shift().split(',');
    }

    if (!comments) {
      return null;
    }

    return(
    <div className="annotation-comment-form-and-display">
      <form onSubmit={this._handleSubmit} className="annotation-comment-form">
        <h3 className="annotation-comment-form-title">Comments</h3>
        <div className="error-box">
          <div className="annotation-comments-error-container">
            {errs.map((error) => {
              return(<li key={error} style={{marginLeft: "20px"}}>{error}</li>);
            })}
          </div>
        </div>
        <div className="annotation-comment-input-fields">
          <textarea onChange={this._bodyChange}
            className="annotation-comment-textarea"
            placeholder="Add A Comment Here..."
            value={this.state.body}>
          </textarea>
        </div>
        <input
          className="submit-annotation-comment"
          type="submit"
          value="Add Comment"/>
      </form>
      <div className="annotation-comments-container">
        {comments.map((comment) => {
          return(
            <div key={comment.id} className="annotation-comment-details-container">
              <div className="annotation-commenter" key={1}>
                 {comment.username}
              </div>
              <div className="annotation-comment" key={2}>{comment.body}</div>
            </div>);
          })}
        </div>
    </div>);
  }
});

module.exports = AnnotationComments;

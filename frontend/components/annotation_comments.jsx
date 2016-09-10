const React = require('react');
const LogPrompt = require('./log_prompt');

const CommentActions = require('../actions/comment_actions.js');

const ErrorStore = require('../stores/error_store');
const ErrorActions = require('../actions/error_actions.js');

const AnnotationComments = React.createClass({

  getInitialState() {
    return({
      comments: this.props.annotation.comments,
      body: "",
      errors: []
    });
  },

  componentWillReceiveProps(nextProps) {
    this.setState({comments: nextProps.annotation.comments});
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
    CommentActions.createAnnotationComment(formData);
    this.setState({body: ""});
  },

  render() {
    let comments = this.state.comments;

    let errs = [];
    if (this.state.errors.length > 0) {
      errs = this.state.errors.shift().split(',');
    }

    if (!comments) {
      return null;
    }

    return(
    <div className="annotation-comment-form-and-display">
      <form className="annotation-comment-form">
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
            placeholder="Write A Comment..."
            value={this.state.body}>
          </textarea>
        </div>
        {this.props.user ? <input
          className="submit-annotation-comment"
          type="submit"
          value="Submit"
          onClick={this._handleSubmit} /> : <LogPrompt action="Comment" />}
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

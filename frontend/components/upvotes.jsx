const React = require('react');
const UpvoteActions = require('../actions/upvote_actions.js');
const UpvoteStore = require('../stores/upvote_store.js');
const SongStore = require('../stores/song_store.js');
const SessionStore = require('../stores/session_store.js');
const ErrorStore = require('../stores/error_store.js');
const ErrorActions = require('../actions/error_actions.js');

const Upvotes = React.createClass({

  getInitialState() {
    return({
      voteCount: this.props.annotation.upvotes.reduce((prev, curr) => prev.value + curr.value, 0)
    });
  },

  componentDidMount() {
    this.upvoteListener = UpvoteStore.addListener(this._handleChange);
    this.setState({voteCount: this.props.annotation.upvotes});
  },

  _handleChange() {
    let count = this.props.annotation.upvotes.reduce((prev, curr) => prev.value + curr.value, 0);
    this.setState({voteCount: count});
  },

  _handleUpvote() {
    let vote = UpvoteStore.findUpvote(
      SessionStore.currentUser()["id"],
      this.props.annotation
    );
    let upvote;
    if (vote) {
      UpvoteActions.destroyAnnotationUpvote(vote);
    } else {
      upvote = {
        annotation_id: this.props.annotation.id,
        value: 1
      };
      UpvoteActions.createAnnotationUpvote(upvote);
    }
  },

  _handleDownvote() {
    let vote = UpvoteStore.findUpvote(
      SessionStore.currentUser()["id"],
      this.props.annotation
    );
    let upvote;
    if (vote) {
      upvote = {
        id: vote.id,
        annotation_id: this.props.annotation.id,
      };
      UpvoteActions.destroyAnnotationUpvote(upvote);
    } else {
      upvote = {
        annotation_id: this.props.annotation.id,
        value: -1
      };
      UpvoteActions.createAnnotationUpvote(upvote);
    }
  },

  _Upvote() {

    let data = {annotation_id: this.props.annotation.id, value: 1};
    let currentUser = SessionStore.currentUser();
    if (currentUser) {
      const currentUserUpvotes = currentUser.upvoted_annotations;

      if (currentUserUpvotes.indexOf(this.props.annotation.id) !== -1) {
        UpvoteActions.destroyAnnotationUpvote(data);
      } else {
        UpvoteActions.createAnnotationUpvote(data);
      }
    }
  },

  _Downvote() {
    let data = {annotation_id: this.props.annotation.id, value: -1};
    let currentUser = SessionStore.currentUser();
    if (currentUser) {
      const currentUserUpvotes = currentUser.upvoted_annotations;

      if (currentUserUpvotes.indexOf(this.props.annotation.id) !== -1) {
        UpvoteActions.destroyAnnotationUpvote(data);
      } else {
        UpvoteActions.createAnnotationUpvote(data);
      }
    }
  },


  render() {
    if (!this.props.annotation) {
      return;
    } else {
      return(
        <div>
          <div onClick={this._handleUpvote}>Upvote</div>
          {this.state.voteCount}
          <div onClick={this._handleDownvote}>Downvote</div>
        </div>
      );
    }
  }
});

module.exports = Upvotes;

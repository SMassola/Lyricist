const UpvoteApiUtil = require('../util/upvote_api_util');
const UpvoteConstants = require('../constants/upvote_constants');
const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorActions = require('../actions/error_actions');

module.exports = {

  createAnnotationUpvote(upvote) {
    UpvoteApiUtil.createAnnotationUpvote(
      upvote,
      this.receiveUpvote
    );
  },

  destroyAnnotationUpvote(upvote) {
    UpvoteApiUtil.destroyAnnotationUpvote(
      upvote,
      this.destroyUpvote
    );
  },

  receiveUpvote(upvote) {
    AppDispatcher.dispatch({
      upvote: upvote,
      actionType: UpvoteConstants.CREATED_UPVOTE
    });
  },

  destroyUpvote(upvote) {
    AppDispatcher.dispatch({
      upvote: upvote,
      actionType: UpvoteConstants.DESTROYED_UPVOTE
    });
  }
};

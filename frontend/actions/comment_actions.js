const CommentApiUtil = require('../util/comment_api_util.js');
const CommentConstants = require('../constants/comment_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const ErrorActions = require('./error_actions.js');

const CommentActions = {

  createSongComment(comment) {
    CommentApiUtil.createSongComment(
      comment,
      this.receiveSongComment,
      ErrorActions.setErrors.bind(null, 'song_comments_form')
    );
  },

  receiveSongComment(comment) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.SONG_COMMENT_RECEIVED,
      comment: comment
    });
  },

  createAnnotationComment(comment) {
    CommentApiUtil.createAnnotationComment(
      comment,
      this.receiveAnnotationComment,
      ErrorActions.setErrors.bind(null, 'annotation_comments_form')
    );
  },

  receiveAnnotationComment(comment) {
    AppDispatcher.dispatch({
      actionType: CommentConstants.ANNOTATION_COMMENT_RECEIVED,
      comment: comment
    });
  },
};

module.exports = CommentActions;

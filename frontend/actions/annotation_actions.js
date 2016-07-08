const AnnotationApiUtil = require('../util/annotation_api_util.js');
const AnnotationConstants = require('../constants/annotation_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const ErrorActions = require('./error_actions.js');

const AnnotationActions = {

  createAnnotationComment(comment) {
    AnnotationApiUtil.createAnnotationComment(
      comment,
      this.receiveAnnotationComment
    );
  },

  receiveAnnotationComment(comment) {
    AppDispatcher.dispatch({
      actionType: AnnotationConstants.ANNOTATION_COMMENT_RECEIVED,
      comment: comment
    });
  },
};

module.exports = AnnotationActions;

const AnnotationApiUtil = require('../util/annotation_api_util.js');
const AnnotationConstants = require('../constants/annotation_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const ErrorActions = require('./error_actions.js');

const AnnotationActions = {
  createAnnotation(annotation) {
    AnnotationApiUtil.createAnnotation(
      annotation,
      this.receiveAnnotation,
      ErrorActions.setErrors.bind(null, 'creating_annotation'));
  },

  receiveAnnotation(annotation) {
    AppDispatcher.dispatch({
      actionType: AnnotationConstants.ANNOTATION_RECEIVED,
      annotation: annotation
    });
  },

  deleteAnnotation(id) {
    AnnotationApiUtil.deleteAnnotation(
      id,
      this.removeAnnotation
    );
  },

  removeAnnotation(annotation) {
    AppDispatcher.dispatch({
      actionType: AnnotationConstants.ANNOTATION_REMOVED,
      annotaiton: annotation
    });
  }
};

module.exports = AnnotationActions;

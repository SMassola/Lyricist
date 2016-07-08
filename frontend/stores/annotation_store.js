const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const AnnotationConstants = require('../constants/song_constants.js');
const AnnotationActions = require('../actions/song_actions');
const SongStore = require('./song_store.js');
const AnnotationStore = new Store(AppDispatcher);

let _annotations = {};

AnnotationStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case AnnotationConstants.ANNOTATION_COMMENT_RECEIVED:
      addAnnotationComment(payload.comment);
      AnnotationStore.__emitChange();
      break;
  }
};

function addAnnotationComment(comment) {
  AnnotationStore.findAnnotation(comment.commentable_id).comments.push(comment);
}

module.exports = AnnotationStore;

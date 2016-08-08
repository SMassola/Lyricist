const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const AnnotationConstants = require('../constants/song_constants.js');
const AnnotationActions = require('../actions/song_actions');
const SongStore = require('./song_store');

const AnnotationStore = new Store(AppDispatcher);

AnnotationStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case AnnotationConstants.ANNOTATION_RECEIVED:
      addAnnotation(payload.annotation);
      AnnotationStore.__emitChange();
      break;
  }
};

function addAnnotation(annotation) {
  SongStore.findSong(annotation.song_id).annotations.push(annotation);
}

module.exports = AnnotationStore;

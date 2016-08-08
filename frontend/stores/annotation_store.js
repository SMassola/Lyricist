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

AnnotationStore.findAnnotation = function(song, id) {
  for (let i = 0 ; i < song.annotations.length ; i++) {
    if (song.annotations[i].id === id) {
      return song.annotations[i];
    }
  }
};

function addAnnotation(annotation) {
  SongStore.findSong(annotation.song_id).annotations.push(annotation);
}

module.exports = AnnotationStore;

const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const AnnotationConstants = require('../constants/annotation_constants.js');
const AnnotationActions = require('../actions/annotation_actions');
const SongStore = require('./song_store');

const AnnotationStore = new Store(AppDispatcher);

let _annotations = {};

AnnotationStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case AnnotationConstants.ANNOTATION_RECEIVED:
      addAnnotation(payload.annotation);
      AnnotationStore.__emitChange();
      break;
    case AnnotationConstants.ANNOTATION_REMOVED:
      removeAnnotation(payload.annotaiton);
      AnnotationStore.__emitChange();
      break;
  }
};

AnnotationStore.all = function() {
  return Object.keys(_annotations).map(id => {
      return _annotations[id];
    });
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

function ObjectIndex(song, annotation) {
  for(let i = 0 ; i < song.annotations.length ; i++) {
    if (song.annotations[i].id === annotation.id) {
      return i;
    }
  }
  return -1;
}

function removeAnnotation(annotation) {
  let song = SongStore.findSong(annotation.song_id);
  let annotationIndex = ObjectIndex(song, annotation);
  song.annotations.splice(annotationIndex, 1);
}

module.exports = AnnotationStore;

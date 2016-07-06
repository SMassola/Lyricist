const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const SongConstants = require('../constants/song_constants.js');
const SongActions = require('../actions/song_actions');

const SongStore = new Store(AppDispatcher);

let _songs = {};
let _annotations = {};

SongStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case SongConstants.SONGS_RECEIVED:
      resetAllSongs(payload.songs);
      SongStore.__emitChange();
      break;
    case SongConstants.SONG_RECEIVED:
      setSong(payload.song);
      SongStore.__emitChange();
      break;
    case SongConstants.ANNOTATION_RECEIVED:
      // setSong(SongActions.fetchSong(payload.annotation.song_id));
      addAnnotation(payload.annotation);
      SongStore.__emitChange();
  }
};

SongStore.allAnnotations = function() {
  let annotations = [];

  Object.keys(_annotations).forEach((key) => {
    annotations.push(_annotations[key]);
  });

  return annotations;
};


SongStore.allSongs = function() {
  let songs = [];

  Object.keys(_songs).forEach((key) => {
    songs.push(_songs[key]);
  });

  return songs;
};

SongStore.findSong = function(id) {
  console.log(_songs);
  return _songs[id];
};

SongStore.findAnnotation = function(id) {
  return _annotations[id];
};

function resetAllSongs(songs) {
  _songs = {};

  songs.forEach((song) => {
    _songs[song.id] = song;
  });
}

function resetAllAnnotations(annotations) {
  _annotations = {};

  annotations.forEach((annotation) => {
    _annotations[annotation.id] = annotation;
  });
}

function setSong(song) {
  _songs[song.id] = song;
}

function addAnnotation(annotation) {
  _annotations[annotation.id] = annotation;

  console.log(_songs);
}

module.exports = SongStore;

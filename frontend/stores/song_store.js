const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const SongConstants = require('../constants/song_constants.js');
const SongActions = require('../actions/song_actions');

const SongStore = new Store(AppDispatcher);

let _songs = {};

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
      addAnnotation(payload.annotation);
      SongStore.__emitChange();
      break;
    case SongConstants.SONG_COMMENT_RECEIVED:
      addSongComment(payload.comment);
      SongStore.__emitChange();
      break;
  }
};

SongStore.allSongs = function() {
  let songs = [];

  Object.keys(_songs).forEach((key) => {
    songs.push(_songs[key]);
  });

  return songs;
};

SongStore.findSong = function(id) {
  return _songs[id];
};

function resetAllSongs(songs) {
  _songs = {};

  songs.forEach((song) => {
    _songs[song.id] = song;
  });
}

function setSong(song) {
  _songs[song.id] = song;
}

function addAnnotation(annotation) {
  SongStore.findSong(annotation.song_id).annotations.push(annotation);
}

function addSongComment(comment) {
  SongStore.findSong(comment.commentable_id).comments.push(comment);
}

module.exports = SongStore;

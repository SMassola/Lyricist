const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const SongConstants = require('../constants/song_constants.js');
const SongActions = require('../actions/song_actions');
const UpvoteConstants = require('../constants/upvote_constants');

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
    case SongConstants.ANNOTATION_COMMENT_RECEIVED:
      addAnnotationComment(payload.comment);
      SongStore.__emitChange();
      break;
    case UpvoteConstants.DESTROYED_UPVOTE:
      destroyUpvote(payload.upvote.annotationId, payload.upvote.userId);
      SongStore.__emitChange();
      break;
    case UpvoteConstants.CREATED_UPVOTE:
      createUpvote(payload.upvote.annotationId, payload.upvote.userId);
      SongStore.__emitChange();
      break;
  }
};

function createUpvote(annotationId, userId) {
  let annotation = SongStore.searchForAnnotation(annotationId);
  annotation.upvote_users.push(parseInt(userId));
}

function destroyUpvote(annotationId, userId) {
  let annotation = SongStore.searchForAnnotation(annotationId);
  let userIdx = annotation.upvote_users.indexOf(parseInt(userId));
  annotation.upvote_users.splice(userIdx, 1);
}

SongStore.searchForAnnotation = function(annotationId) {
  let annotation;
  let songs = SongStore.allSongs();
  for (let i = 0; i < songs.length ; i++) {
    for (let j = 0; j < songs[i].annotations.length; j++)
      if (songs[i].annotations[j].id === annotationId) {
        return songs[i].annotations[j];
      }
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

SongStore.findAnnotation = function(song, id) {
  for (let i = 0 ; i < song.annotations.length ; i++) {
    if (song.annotations[i].id === id) {
      return song.annotations[i];
    }
  }
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

function addAnnotationComment(comment) {
  let annotation = SongStore.findAnnotation(SongStore.findSong(comment.commentable.song_id), comment.commentable_id);
  annotation.comments.push(comment);
}

module.exports = SongStore;

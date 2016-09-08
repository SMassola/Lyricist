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
  }
};

SongStore.allSongs = function() {
  return Object.keys(_songs).map(id => {
    return _songs[id];
  });
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

module.exports = SongStore;

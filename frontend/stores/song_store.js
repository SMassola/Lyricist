const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const SongConstants = require('../constants/session_constants');

const SongStore = new Store(AppDispatcher);

let _songs = {};

SongStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case SongConstants.SONGS_RECEIVED:
      resetAllSongs(payload.songs);
      SongStore.__emitChange();
      break;
  }
};

SongStore.all = function() {
  let songs = [];

  Object.keys(_songs).forEach((key) => {
    songs.push(_songs[key]);
  });

  return songs;
};

function resetAllSongs(songs) {
  _songs = {};

  songs.forEach((song) => {
    _songs[song.id] = song;
  });
}

module.exports = SongStore;

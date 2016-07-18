const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const SongConstants = require('../constants/song_constants.js');
const SongActions = require('../actions/song_actions');
const UpvoteConstants = require('../constants/upvote_constants');

const SearchStore = new Store(AppDispatcher);

let _results = {};

SearchStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case SongConstants.SONGS_SEARCHED:
      resetAllResults(payload.songs);
      SearchStore.__emitChange();
      break;
  }
};

function resetAllResults(songs) {
  _results = {};
  songs.forEach((song) => {
    _results[song.id] = song;
  });
}

SearchStore.allResults = function() {
  let results = [];
  Object.keys(_results).forEach((key) => {
    results.push(_results[key]);
  });

  return results;
};

module.exports = SearchStore;

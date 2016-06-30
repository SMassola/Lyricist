const SongApiUtil = require('../util/song_api_util.js');
const SongConstants = require('../constants/song_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');

const SongActions = {
  fetchAllSongs() {
    SongApiUtil.fetchAllSongs(this.receiveAllSongs);
  },

  receiveAllSongs(songs) {
    AppDispatcher.dispatch({
      actionType: SongConstants.RECEIVED_SONGS,
      songs: songs
    });
  }
};

module.exports = SongActions;

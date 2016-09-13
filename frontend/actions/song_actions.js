const SongApiUtil = require('../util/song_api_util.js');
const SongConstants = require('../constants/song_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const ErrorActions = require('./error_actions.js');

const SongActions = {

  searchSongs(data={}) {
    SongApiUtil.searchSongs(data, this.receiveResults);
  },

  receiveResults(songs) {
    AppDispatcher.dispatch({
      actionType: SongConstants.SONGS_SEARCHED,
      songs: songs
    });
  },

  fetchAllSongs() {
    SongApiUtil.fetchAllSongs(this.receiveAllSongs);
  },

  receiveAllSongs(songs) {
    AppDispatcher.dispatch({
      actionType: SongConstants.SONGS_RECEIVED,
      songs: songs
    });
  },

  fetchSong(id) {
    SongApiUtil.fetchSong(id, this.receiveSong);
  },

  receiveSong(song) {
    AppDispatcher.dispatch({
      actionType: SongConstants.SONG_RECEIVED,
        song: song
    });
  },

  createSong(song) {
    SongApiUtil.createSong(
      song,
      SongActions.addSong,
      ErrorActions.setErrors.bind(null, 'song_form')
    );
  },

  addSong(song) {
    AppDispatcher.dispatch({
      actionType: SongConstants.SONG_ADDED,
        song: song
    });
  }
};


module.exports = SongActions;

const AlbumApiUtil = require('../util/album_api_util.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');

const SongActions = require('./song_actions.js');
const ErrorActions = require('./error_actions.js');

const AlbumActions = {

  createAlbumSong(album, song) {
    AlbumApiUtil.createAlbumSong(
      album,
      song,
      SongActions.createSong,
      ErrorActions.setErrors.bind(null, 'creating_album')
    );
  },
};

module.exports = AlbumActions;

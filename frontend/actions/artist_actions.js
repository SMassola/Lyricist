const ArtistApiUtil = require('../util/artist_api_util.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');

const AlbumActions = require('./album_actions.js');
const ErrorActions = require('./error_actions.js');

const ArtistActions = {
  createArtistAlbumSong(artist, album, song) {
    ArtistApiUtil.createArtistAlbumSong(
      artist,
      album,
      song,
      AlbumActions.createAlbumSong,
      ErrorActions.setErrors.bind(null, 'creating_artist')
    );
  }
};

module.exports = ArtistActions;

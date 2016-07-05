const ArtistApiUtil = require('../util/song_api_util.js');
const ArtistConstants = require('../constants/song_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const ErrorActions = require('./error_actions.js');

const ArtistActions = {

  createArtist(artist) {
    ArtistApiUtil.createArtist(
      artist,
      this.receiveArtist,
      ErrorActions.setErrors.bind(null, 'creating_artist')
    );
  },

  receiveArtist(artist) {
    AppDispatcher.dispatcher({
      actionType: ArtistConstants.ARTIST_RECEIVED,
      artist: artist
    });
  }
};

module.exports = ArtistActions;

const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const ArtistConstants = require('../constants/song_constants.js');

const ArtistStore = new Store(AppDispatcher);

let _artists = {};

ArtistStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case ArtistConstants.ARTIST_RECEIVED:
      setArtist(payload.artist);
      ArtistStore.__emitChange();
      break;
  }
};

function setArtist(artist) {
  _artists[artist.id] = artist;
}


module.exports = ArtistStore;

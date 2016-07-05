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

// SongStore.allAnnotations = function() {
//   let annotations = [];
//
//   Object.keys(_annotations).forEach((key) => {
//     annotations.push(_annotations[key]);
//   });
//
//   return annotations;
// };
//
//
// SongStore.allSongs = function() {
//   let songs = [];
//
//   Object.keys(_songs).forEach((key) => {
//     songs.push(_songs[key]);
//   });
//
//   return songs;
// };
//
// SongStore.findSong = function(id) {
//   return _songs[id];
// };
//
// SongStore.findAnnotation = function(id) {
//   return _annotations[id];
// };
//
// function resetAllSongs(songs) {
//   _songs = {};
//
//   songs.forEach((song) => {
//     _songs[song.id] = song;
//   });
// }
//
// function resetAllAnnotations(annotations) {
//   _annotations = {};
//
//   annotations.forEach((annotation) => {
//     _annotations[annotation.id] = annotation;
//   });
// }

function setArtist(artist) {
  _artists[artist.id] = artist;
}


module.exports = ArtistStore;

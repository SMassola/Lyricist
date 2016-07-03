const SongApiUtil = require('../util/song_api_util.js');
const SongConstants = require('../constants/song_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');

const SongActions = {
  fetchAllSongs() {
    SongApiUtil.fetchAllSongs(this.receiveAllSongs);
  },

  fetchSong(id) {
    SongApiUtil.fetchSong(id, this.receiveSong);
  },

  receiveAllSongs(songs) {
    AppDispatcher.dispatch({
      actionType: SongConstants.SONGS_RECEIVED,
      songs: songs
    });
  },

  receiveSong(song) {
    AppDispatcher.dispatch({
      actionType: SongConstants.SONG_RECEIVED,
      song: song
    });
  },

  // fetchAllSongAnnotations(songId) {
  //   SongApiUtil.fetchAllSongAnnotations(songId, this.receiveAllAnnotations);
  // },
  //
  // receiveAllAnnotations(annotations) {
  //   AppDispatcher.dispatch({
  //     actionType: SongConstants.ANNOTATIONS_RECEIVED,
  //     annotations: annotations
  //   });
  // },

  createAnnotation(annotation) {
    SongApiUtil.createAnnotation(annotation, this.receiveAnnotation);
  },

  receiveAnnotation(annotation) {
    AppDispatcher.dispatch({
    actionType: SongConstants.ANNOTATION_RECEIVED,
    annotation: annotation
  });
},
};


module.exports = SongActions;

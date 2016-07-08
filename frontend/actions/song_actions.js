const SongApiUtil = require('../util/song_api_util.js');
const SongConstants = require('../constants/song_constants.js');
const AppDispatcher = require('../dispatcher/dispatcher.js');
const ErrorActions = require('./error_actions.js');

const SongActions = {

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

  createAnnotation(annotation) {
    SongApiUtil.createAnnotation(
      annotation,
      this.receiveAnnotation,
      ErrorActions.setErrors.bind(null, 'creating_annotation'));
  },

  receiveAnnotation(annotation) {
    AppDispatcher.dispatch({
      actionType: SongConstants.ANNOTATION_RECEIVED,
      annotation: annotation
    });
  },

  createSong(song) {
    SongApiUtil.createSong(
      song,
      SongActions.receiveSong,
      ErrorActions.setErrors.bind(null, 'song_form')
    );
  },

  createSongComment(comment) {
    SongApiUtil.createSongComment(
      comment,
      this.receiveSongComment,
      ErrorActions.setErrors.bind(null, 'song_comments_form')
    );
  },

  receiveSongComment(comment) {
    AppDispatcher.dispatch({
      actionType: SongConstants.SONG_COMMENT_RECEIVED,
      comment: comment
    });
  },

  createAnnotationComment(comment) {
    SongApiUtil.createAnnotationComment(
      comment,
      this.receiveAnnotationComment,
      ErrorActions.setErrors.bind(null, 'annotation_comments_form')
    );
  },

  receiveAnnotationComment(comment) {
    AppDispatcher.dispatch({
      actionType: SongConstants.ANNOTATION_COMMENT_RECEIVED,
      comment: comment
    });
  },
};


module.exports = SongActions;

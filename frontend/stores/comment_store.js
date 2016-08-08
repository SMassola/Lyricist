const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;

const AnnotationStore = require('./annotation_store.js');
const SongStore = require('./song_store.js');

const CommentConstants = require('../constants/comment_constants.js');
const CommentActions = require('../actions/comment_actions');
const UpvoteConstants = require('../constants/upvote_constants');

const CommentStore = new Store(AppDispatcher);

CommentStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case CommentConstants.SONG_COMMENT_RECEIVED:
      addSongComment(payload.comment);
      CommentStore.__emitChange();
      break;
    case CommentConstants.ANNOTATION_COMMENT_RECEIVED:
      addAnnotationComment(payload.comment);
      CommentStore.__emitChange();
      break;
  }
};

function addSongComment(comment) {
  SongStore.findSong(comment.commentable_id).comments.push(comment);
}

function addAnnotationComment(comment) {
  let annotation = AnnotationStore.findAnnotation(
    SongStore.findSong(comment.commentable.song_id),
    comment.commentable_id
  );
  annotation.comments.push(comment);
}

module.exports = CommentStore;

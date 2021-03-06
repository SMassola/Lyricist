const CommentApiUtil = {

createSongComment(comment, successCB, errorCB) {
  $.ajax({
    url: `api/songs/${comment.song_id}/comments`,
    type: "POST",
    data: {comment: comment},
    success: function(resp) {
      successCB(resp);
    },
    error(resp) {
      let errors = resp.responseJSON;
      errorCB(errors);
    }
  });
},

createAnnotationComment(comment, successCB, errorCB) {
  $.ajax({
    url: `api/annotations/${comment.annotation_id}/comments`,
    type: "POST",
    data: {comment: comment},
    success: function(resp) {
      successCB(resp);
    },
    error(resp) {
      let errors = resp.responseJSON;
      errorCB(errors);
    }
  });
}
};

module.exports = CommentApiUtil;

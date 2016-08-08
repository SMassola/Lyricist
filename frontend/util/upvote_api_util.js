const UpvoteApiUtil = {

  destroyAnnotationUpvote(upvote, successCB) {
    $.ajax({
      url: `api/upvotes/${upvote.id}`,
      type: "DELETE",
      data: {upvote: upvote},
      success: function(resp) {
        successCB(resp);
      }
    });
  },

  createAnnotationUpvote(upvote, successCB) {
    $.ajax({
      url: `api/upvotes`,
      type: "POST",
      data: {upvote: upvote},
      success: function(resp) {
        successCB(resp);
      }
    });
  }
};

module.exports = UpvoteApiUtil;

const AnnotationApiUtil = {
  createAnnotation(annotation, successCB, errorCB) {
    $.ajax({
      url: `api/songs/${annotation.song_id}/annotations`,
      type: "POST",
      data: {annotation: annotation},
      success: function(resp) {
        successCB(resp);
      },
      error(resp) {
        let errors = resp.responseJSON;
        errorCB(errors);
      }
    });
  },
};

module.exports = AnnotationApiUtil;

const SongApiUtil = {
  fetchAllSongs(callback) {
    $.ajax({
      url: "api/songs",
      method: "GET",
      success: function(resp) {
        callback(resp);
      }
    });
  },

  fetchSong(id, callback) {
    $.ajax({
      url: `api/songs/${id}`,
      method: "GET",
      success: function(resp) {
        callback(resp);
      }
    });
  },

  // fetchAllSongAnnotations(id, callback) {
  //   $.ajax({
  //     url: `api/songs/${id}`,
  //     type: "GET",
  //     success: function(resp) {
  //       callback(resp.annotations);
  //     }
  //   });
  // },

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
  }
};

module.exports = SongApiUtil;

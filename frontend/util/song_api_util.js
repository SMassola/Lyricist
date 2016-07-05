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

  createSong(song, successCB, errorCB) {
    $.ajax({
      url: `api/songs`,
      type: "POST",
      data: {song: song},
      success: function(resp) {
        successCB(resp);
      },
      error: function(resp) {
        let errors = resp.responseJSON;
        errorCB(errors);
      }
    });
  },

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

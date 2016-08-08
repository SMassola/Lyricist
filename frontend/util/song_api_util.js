const SongApiUtil = {

  searchSongs(data={}, callback) {
    $.ajax({
      url: "api/songs/results",
      method: "GET",
      data: data,
      success: function(resp) {
        callback(resp);
      }
    });
  },

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
  }
};

module.exports = SongApiUtil;

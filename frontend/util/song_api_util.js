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

  fetchAllSongAnnotations(id, callback) {
    $.ajax({
      url: `api/songs/${id}`,
      type: "GET",
      success: function(resp) {
        callback(resp.annotations);
      }
    });
  }
};

module.exports = SongApiUtil;

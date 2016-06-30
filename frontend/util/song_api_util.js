const SongApiUtil = {
  fetchAllSongs(callback) {
    $.ajax({
      url: "api/songs",
      method: "GET",
      success: function(resp) {
        callback(resp);
      }
    });
  }
};

module.exports = SongApiUtil;

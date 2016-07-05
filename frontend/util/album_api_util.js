const AlbumApiUtil = {
  createAlbumSong(album, song, successCB, errorCB) {
    $.ajax({
      url: `api/albums`,
      type: "POST",
      data: {album: album},
      success: function(resp) {
        song["album_id"] = resp["id"];
        successCB(song);
      },

      error(resp) {
        let errors = resp.responseJSON;
        errorCB(errors);
      }
    });
  }
};

module.exports = AlbumApiUtil;

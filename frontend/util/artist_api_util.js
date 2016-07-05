const ArtistApiUtil = {
  createArtistAlbumSong(artist, album, song, successCB, errorCB) {
    $.ajax({
      url: `api/artists`,
      type: "POST",
      data: {artist: artist},
      success: function(resp) {
        album["artist_id"] = resp["id"];
        successCB(album, song);
      },

      error(resp) {
        let errors = resp.responseJSON;
        errorCB(errors);
      }
    });
  }
};

module.exports = ArtistApiUtil;

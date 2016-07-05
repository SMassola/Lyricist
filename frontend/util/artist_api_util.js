const ArtistApiUtil = {
  createAristAlbumSong(artist, successCB, errorCB) {
    $.ajax({
      url: `api/artists`,
      type: "POST",
      data: {arist: artist},
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

module.exports = ArtistApiUtil;

const React = require('react');

module.exports = React.createClass({
  render() {
    if (this.props.album && this.props.artist) {
      return(
        <div className="song-details-container">
          <div className="song-title">{this.props.title}</div>
          <div className="song-artist">{this.props.artist.name}</div>
          <div className="song-album">A track off the album <span>{this.props.album.name}</span></div>
        </div>);
    } else {
      return null;
    }
  }
});

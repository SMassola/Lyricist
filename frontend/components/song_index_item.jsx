const React = require('react');
const AlbumArt = require('./album_art.jsx');
const hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({

  _handleClick(e) {
    hashHistory.push(`/songs/${this.props.songId}`);
  },

  render() {

    return(
      <button className="song-item-details-container" onClick={this._handleClick}>
        <div className="song-item-details">
          <div className="song-item-title">{this.props.title}</div>
          <div className="song-item-artist">{this.props.artist}</div>
        </div>
      </button>
    );
  }
});


// <div className="clip-art">
//   <img src={this.props.art}/>
// </div>

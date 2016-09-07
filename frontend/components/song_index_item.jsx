const React = require('react');
const AlbumArt = require('./album_art.jsx');
const hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({

  getInitialState() {
    return(
      {hovering: false}
    );
  },

  _handleClick(e) {
    hashHistory.push(`/songs/${this.props.songId}`);
  },

  _handleEnter(e) {
    this.setState({hovering: true});
  },
  _handleExit(e) {
    this.setState({hovering: false});
  },

  render() {

    return(
      <div>
        <button className="song-item-details-container"
          onClick={this._handleClick}
          onMouseEnter={this._handleEnter}
          onMouseLeave={this._handleExit}>
          <div className="song-item-details">
            <div className="song-item-title">{this.props.title}</div>
            <div className="song-item-artist">{this.props.artist}</div>
          </div>
        </button>
      </div>
    );
  }
});



// {this.state.hovering ?
//   <div className="album-details">
//     <div className="clip-art-container">
//       <img src={this.props.art}/>
//     </div>
//   </div>
//   : ""}

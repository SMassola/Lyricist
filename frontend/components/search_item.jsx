const React = require('react');
const hashHistory = require('react-router').hashHistory;
const SongActions = require('../actions/song_actions.js');

const SearchItem = React.createClass({

  _handleClick(e) {
    hashHistory.push(`/songs/${this.props.song.id}`);

    $('input.search-box').val("");
    SongActions.searchSongs({query: ""});
  },

  render() {
    return (
      <li onClick={this._handleClick}
          key={this.props.song.id}
          className="search-index-item">
        <div>{this.props.song.title} - {this.props.song.artist.name}</div>
        <div></div>
      </li>
    );
  }
});

module.exports = SearchItem;

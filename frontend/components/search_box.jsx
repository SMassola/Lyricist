const React = require('react');
const SongActions = require('../actions/song_actions.js');

const SongsSearchBox = React.createClass({

  _onInput(e) {
    SongActions.searchSongs({query: e.target.value});
  },

  render() {
    return (
        <input
          className="search-box"
          onInput={this._onInput}
          placeholder="Search by song or lyrics"/>
    );
  }
});

module.exports = SongsSearchBox;

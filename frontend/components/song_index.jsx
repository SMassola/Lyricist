const React = require('react');
const SongStore = require('../stores/song_store.js');
const SongActions = require('../actions/song_actions.js');

const SongIndex = React.createClass({

  getInitialState() {
    return {songs: {}};
  },

  render() {
    return(<div>Hello from the song_index</div>);
  }

});

module.exports = SongIndex;

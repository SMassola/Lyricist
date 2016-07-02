const React = require('react');
const SongStore = require('../stores/song_store.js');
const SongActions = require('../actions/song_actions.js');

const SongLyricHighlights = React.createClass({

  componentDidMount() {

    // const annotationsArr = this.props.annotations.sort().reverse();
    //

    // });

  },

  sortAnnotations() {
    let indexes = [];
    // const sortedAnnotations = this.props.annotations.sort().reverse();
    this.props.annotations.forEach((annotation) => {
      indexes.push([annotation.start_idx, annotation.end_idx]);
    });
    indexes = indexes.sort();
    console.log(indexes);

    indexes.forEach((start, end) => {
      $('pre').html($('pre').html().slice(0,start) +
      '<a style="background-color: yellow">' +
      $('pre').html().slice(start,end) +
      '</a>' + $('pre').html().slice(end));
    });
  },

  render () {
    if (this.props.annotations) {
      this.sortAnnotations();
      return <pre className="highlights">{this.props.lyrics}</pre>;
    } else {
      return null;
    }
  }
});

module.exports = SongLyricHighlights;

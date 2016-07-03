const React = require('react');
const SongActions = require('../actions/song_actions.js');


const AnnotationForm = React.createClass({

  getInitialState: function() {
    return {
      body: "",
      user_id: this.props.userId,
      song_id: this.props.songId,
      start_idx: this.props.startIdx,
      end_idx: this.props.endIdx
    };
  },

  _bodyChange(e) {
    e.preventDefault();
    this.setState({body: e.target.value});
  },

  _handleSubmit() {
    SongActions.createAnnotation(this.state);
  },

  render() {
    return(
      <div className="annotation-form-container">
        <form className="annotation-form" onSubmit={this._handleSubmit}>
          <h1>New Annotation</h1>
          <div className="annotation error-container"></div>
          <textarea onChange={this._bodyChange}
            className="annotation-textarea"
            placeholder="Body"
            value={this.state.body}>
          </textarea>
          <input type="submit" value="Create Annotation"/>
        </form>
      </div>
    );
  }
});

module.exports = AnnotationForm;

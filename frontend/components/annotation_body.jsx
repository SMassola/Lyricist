const React = require('react');
const SongActions = require('../actions/song_actions.js');

const AnnotationBody = React.createClass({

  render() {
    let offset = $(window).scrollTop();
    if (offset < 425) {
      offset = 425;
    }

    let style = {
      top: offset
    };

    return(
      <div className="annotation-body-container">
        <div className="annotation-body shadow" style={style}>
          <div className="annotator-display bolded">
            Annotation By: {this.props.annotation.user_id}
          </div>
          <div className="annotation-display">{this.props.annotation.body}</div>
          <form className="annotation-comment-form">
            <div className="comment error-container"></div>
            <textarea onChange={this._bodyChange}
              className="annotation-comment-textarea"
              placeholder="Add Comment">
            </textarea>
            <input type="submit" value="Add Comment"/>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = AnnotationBody;

const React = require('react');
const AnnotationActions = require('../actions/annotation_actions.js');

const ErrorStore = require('../stores/error_store.js');
const AnnotationForm = React.createClass({

  getInitialState: function() {
    return {
      body: "",
      user_id: this.props.userId,
      song_id: this.props.songId,
      start_idx: this.props.startIdx,
      end_idx: this.props.endIdx,
      errors: []
    };
  },

  addAnimation() {
    setTimeout(function() {
      $("form.annotation-form").addClass("animate-timer slider");
    }, 0);
  },

  _handleErrors() {
    this.setState({errors: ErrorStore.typeErrors("creating_annotation")});
  },

  componentDidMount () {
    this.errorListener = ErrorStore.addListener(this._handleErrors);
    this.addAnimation();
  },

  componentWillUnmount () {
    this.errorListener.remove();
  },

  _bodyChange(e) {
    e.preventDefault();
    this.setState({body: e.target.value});
  },

  _handleSubmit(e) {
    e.preventDefault();
    let AnnotationInput = {};
    AnnotationInput = {
      body: this.state.body,
      user_id: this.state.user_id,
      song_id: this.state.song_id,
      start_idx: this.state.start_idx,
      end_idx: this.state.end_idx
    };
    $('pre.highlight-lyrics').html(this.props.lyrics);
    AnnotationActions.createAnnotation(AnnotationInput);
  },

  render() {

    let offset = $(window).scrollTop();
    if (offset < 425) {
      offset = 425;
    }
    let style = {
      top: offset
    };

    let errs = [];
    if (this.state.errors.length > 0) {
      errs = this.state.errors.shift().split(',');
    }

    return(
      <div className="annotation-form-container">
        <form className="annotation-form" style={style} onSubmit={this._handleSubmit}>
          <div className="annotation-error-container">
            {errs.map((error) => {
              return(<li key={error} style={{marginLeft: "20px"}}>{error}</li>);
            })}
          </div>
          <div className="annotation-input-fields">
            <textarea onChange={this._bodyChange}
              className="annotation-textarea"
              placeholder="Share Your Thoughts..."
              value={this.state.body}>
            </textarea>
            <input className="submit-annotation" type="submit" value="Annotate"/>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = AnnotationForm;

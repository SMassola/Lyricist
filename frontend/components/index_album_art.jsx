const React = require('react');
const hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({

  _handleRedirect() {
    hashHistory.push(`/songs/${this.props.id}`);
  },

  render() {
    if (this.props.art) {
      return(
        <div className="home-album-art-container tint" onClick={this._handleRedirect}>
          <figure className="home-album-art">
            <img src={this.props.art}/>
          </figure>
        </div>);
    } else {
      return null;
    }
  }
});

const React = require('react');

module.exports = React.createClass({
  render() {
    if (this.props.art) {
      return(
        <div className="album-art-container">
          <div className="album-art"><img src={this.props.art}/></div>
        </div>);
    } else {
      return null;
    }
  }
});

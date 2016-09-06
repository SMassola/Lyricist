const React = require('react');

module.exports = React.createClass({

  render() {
    if (this.props.art) {
      let style={
        backgroundImage:
                         'linear-gradient(180deg, transparent 0%, black 80%),' +
                         'url(' + this.props.art + ')'
       };
      return(
        <div className="home-album-art-container">
          <div className="home-album-art" style={style}>
          </div>
        </div>);
    } else {
      return null;
    }
  }
});

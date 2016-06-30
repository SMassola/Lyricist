const React = require('react');

const Search = React.createClass({

  render() {
    return(
      <div>
        <header className="splash-container">
          <div className="splash">
            <h2>Lyricist</h2>
            <p>Annotate Your Songs</p>
          </div>
          <div className="search-bar">
            <h1>Search Bar</h1>
          </div>
        </header>
        <main className="main-page">
          <h2>Popular Songs</h2>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Culpa facilis, labore debitis nesciunt ipsam odio corporis
             architecto reiciendis voluptas ab quibusdam ratione rerum
             tempore voluptatibus libero cumque dignissimos vero hic!</p>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Culpa facilis, labore debitis nesciunt ipsam odio corporis
             architecto reiciendis voluptas ab quibusdam ratione rerum
             tempore voluptatibus libero cumque dignissimos vero hic!</p>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Culpa facilis, labore debitis nesciunt ipsam odio corporis
             architecto reiciendis voluptas ab quibusdam ratione rerum
             tempore voluptatibus libero cumque dignissimos vero hic!</p>
        </main>
      </div>);
  }
});

module.exports = Search;

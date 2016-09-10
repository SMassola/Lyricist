module.exports = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)',
    zIndex            : '5'
  },
  content : {
    color                      : 'black',
    position                   : 'absolute',
    transform                  : 'translate(-150px,-250px)',
    width                      : '300px',
    height                     : '500px',
    top                        : '50%',
    left                       : '50%',
    backgroundColor            : '#2F2F2F',
    border                     : '0.5px solid black',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '5px',
    outline                    : 'none',
    padding                    : '0px',
    opacity                    : '0',
    transition                 : 'opacity 1s',
    display                    : 'flex',
    flexDirection              : 'column',
  }

};

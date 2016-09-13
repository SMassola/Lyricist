module.exports = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)',
    zIndex            : '5',
    display           : 'flex',
    justifyContent    : 'center',
    alignItems        : 'center'
  },
  content : {
    color                      : 'black',
    position                   : 'relative',
    transform                  : 'translate(0px, 0px)',
    width                      : '350px',
    height                     : '350px',
    top                        : '0%',
    left                       : '0%',
    backgroundColor            : 'white',
    border                     : 'none',
    background                 : 'white',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : 'none',
    outline                    : 'none',
    padding                    : '0px',
    opacity                    : '0',
    transition                 : 'opacity 1s',
    boxShadow                  : '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  }

};

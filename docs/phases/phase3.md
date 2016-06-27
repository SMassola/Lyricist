# Phase 3: Comments (2 days)

## Rails
### Models
* Songs

### Controllers
* Api::SongsController (create, index, show, destroy, update)

### Views
* songs/index.json.jbuilder
* songs/show.json.jbuilder

## Flux
### Views (React Components)
* SongsIndex
  - SongIndexItem
* SongForm
* SearchIndex

### Stores
* Comment

### Actions
* ApiActions.receiveAllSongs -> triggered by ApiUtil
* ApiActions.receiveSingleSong
* ApiActions.deleteSong
* SongActions.fetchAllSongs -> triggers ApiUtil
* SongActions.fetchSingleSong
* SongActions.createSong
* SongActions.editSong
* SongActions.destroySong

### ApiUtil
* ApiUtil.fetchAllSongs
* ApiUtil.fetchSingleSong
* ApiUtil.createSong
* ApiUtil.editSong
* ApiUtil.destroySong

## Gems/Libraries

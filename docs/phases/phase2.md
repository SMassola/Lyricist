# Phase 2: Flux Architecture and Song CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* SongsIndex
  - SongsIndexItem
* SongForm

### Stores
* Song

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
* Flux Dispatcher (npm)
* Twitter Bootstrap

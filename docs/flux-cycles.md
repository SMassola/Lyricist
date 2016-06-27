# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Songs Cycles

### Songs API Request Actions

* `fetchAllSongs`
  0. invoked from `SongsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/songs` is called.
  0. `receiveAllSongs` is set as the callback.

* `createSong`
  0. invoked from new song button `onClick`
  0. `POST /api/songs` is called.
  0. `receiveSingleSong` is set as the callback.

* `fetchSingleSong`
  0. invoked from `SongDetail` `didMount`/`willReceiveProps`
  0. `GET /api/songs/:id` is called.
  0. `receiveSingleSong` is set as the callback.

* `updateSong`
  0. invoked from `SongForm` `onSubmit`
  0. `PATCH /api/songs/:id` is called.
  0. `receiveSingleSong` is set as the callback.

* `destroySong`
  0. invoked from delete song button `onClick`
  0. `DELETE /api/songs/:id` is called.
  0. `removeSong` is set as the callback.

### Songs API Response Actions

* `receiveAllSongs`
  0. invoked from an API callback.
  0. `Song` store updates `_songs` and emits change.

* `receiveSingleSong`
  0. invoked from an API callback.
  0. `Song` store updates `_songs[id]` and emits change.

* `removeSong`
  0. invoked from an API callback.
  0. `Song` store removes `_songs[id]` and emits change.

### Store Listeners

* `SongsIndex` component listens to `Song` store.
* `SongDetail` component listens to `Song` store.


## Comment Cycles

### Comments API Request Actions

* `fetchAllComments`
  0. invoked from `CommentsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/songs/:id/comments` is called.
  0. `receiveAllComments` is set as the callback.

* `createComment`
  0. invoked from new comment button `onClick`
  0. `POST /api/songs/:id/comments/:id` is called.
  0. `receiveSingleComment` is set as the callback.

* `fetchSingleComment`
  0. invoked from `CommentDetail` `didMount`/`willReceiveProps`
  0. `GET /api/songs/:id/comments/:id` is called.
  0. `receiveSingleComment` is set as the callback.

* `updateComment`
  0. invoked from `CommentForm` `onSubmit`
  0. `POST /api/songs/:id/comments/:id` is called.
  0. `receiveSingleComment` is set as the callback.

* `destroyComment`
  0. invoked from delete comment button `onClick`
  0. `DELETE /api/songs/:id/comments/:id` is called.
  0. `removeComment` is set as the callback.

### Comments API Response Actions

* `receiveAllComments`
  0. invoked from an API callback.
  0. `Comment` store updates `_comments` and emits change.

* `receiveSingleComment`
  0. invoked from an API callback.
  0. `Comment` store updates `_comments[id]` and emits change.

* `removeNotebook`
  0. invoked from an API callback.
  0. `Comments` store removes `_comments[id]` and emits change.

### Store Listeners

* `CommentsIndex` component listens to `Comments` store.


## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `SongSearchBar` `onChange` when there is text
  0. `GET /api/songs` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `SongSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.

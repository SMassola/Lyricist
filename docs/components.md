## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * SongsIndex
    * Search
    * SongForm
  * **SongItem**
    * SongLyrics
    * SongDetails
    * SongAnnotations
    * Upvotes
    * SongCommentsIndex
    * SongComments


## Routes

* **component:** `App` **path:** `/`
  * **component:** `SongsIndex` **path:** index
  * **component:** `SongItem` **path:** `songs/:songId`
    * **component:** `SongLyrics` **path:** `songs/:songId`
    * **component:** `SongDetails` **path:** `songs/:songId`
    * **component:** `SongAnnotations` **path:** `songs/:songId`
    * **component:** `SongCommentsIndex` **path:** `songs/:songId`
    * **component:** `SongCommentItem` **path:** `songs/:songId`

For Routes that have no `songId`, `SongsIndex` will render all
songs.

## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * **Home**
    * Search
    * About
    * SongIndex
  * **SongsIndex**
    * SongIndexItem
    * Search
  * **SongForm**
  * **SongItem**
    * SongLyrics
    * SongDetails
    * **Annotation**
      * AnnotationBody
      * AnnotationUpvotes
      * CommentsIndex
        * CommentsIndexItem
        * CommentForm




## Routes

* **component:** `App` **path:** `/`
  * **component:** `Home` **path:** index
  * **component:** `SongsIndex` **path:** `songs`
  * **component:** `SongForm` **path:** `songs/new`
  * **component:** `SongItem` **path:** `songs/:songId`
    * **component:** `Annotations` **path:** `:annotationId`

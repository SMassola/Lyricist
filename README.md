# Lyricist

[Lyricist][heroku]
[heroku]: http://www.lyricist.us/

![preview]
[preview]:	./app/assets/images/Homepage.png


## Description
Lyricist is a full-stack web application that enables users to annotate song lyrics, comment on songs and annotations,
add songs to the library and search for songs by lyrics or song title.

![gallery]
[gallery]: ./app/assets/images/Gallery.png
Lyricist Gallery

![index]
[index]: ./app/assets/images/Song_Index.png
Lyricist Song Index

## Implementation
To render song annotations and the current user highlight on lyrics, Lyricist utilizes three overlapping lyrics layers - the ghost-lyrics
layer, the high-lyrics layer, and the annotation-lyrics layer.

```javascript
<pre className="ghost-lyrics"
  onMouseUp={this.highlight}
  onMouseDown={this.removeHighlight}>
  {this.state.song.lyrics}
</pre>

<pre className="highlight-lyrics">
  {this.state.song.lyrics}
</pre>

<pre className="annotation-lyrics">
  {this.lyricsEls}
</pre>
```

![add_annotation]
[add_annotation]:	./app/assets/images/Add_Annotation.png

The ghost-lyrics layer is a transparent layer that lives overtop of both the highlight-lyrics layer and the annotation-lyrics layer.
It acts as the user selected layer and remains as is even as annotations are added to the database.

The annotation-lyrics layer holds all the annotations that have been added to the song lyrics, highlighted in blue.

![annotation]
[annotation]: ./app/assets/images/Song_Annotation.png

The highlight-lyrics layer shows the current user selection.

![add_comment]
[add_comment]: ./app/assets/images/Annotation_Comments.png

```javascript
createAnnotations() {
  let unsortedAnnotations = this.state.song.annotations;
  let annotations = this.sortAnnotations(unsortedAnnotations);
  let lyrics = this.state.song.lyrics;

  this.lyricsEls = [];
  let flagIdx = 0;

  annotations.forEach((annotation) => {
    this.lyricsEls.push(
      lyrics.slice(flagIdx, annotation.start_idx));
    this.lyricsEls.push(
    <span
      className= "annotated annotation-link"
      value={annotation}
      onClick={this.handleAnnotationClick}
      key={annotation.id}>
      {lyrics.slice(annotation.start_idx, annotation.end_idx)}
    </span>);

    flagIdx = annotation.end_idx;
  });

  this.lyricsEls.push(lyrics.slice(flagIdx));
}
```

Upon log in, users are able to contribute to Lyricist.

![modal]
[modal]: ./app/assets/images/Modal.png
Sign Up Modal

![log]
[log]: ./app/assets/images/Log_Prompt.png
User Log In Prompt

Users can add songs, add annotations to lyrics, add comments to songs or add comments to annotations.

![Annotation_Ex]
[Annotation_Ex]: ./app/assets/images/Annotation_Ex.png
Song Annotation

![Annotation_Comment]
[Annotation_Comment]: ./app/assets/images/Annotation_Comments.png
Annotation Comment

![form]
[form]: ./app/assets/images/Song_Form.png
Song Form

## Technologies Used
Lyricist is built using the following technologies

- [X] React Framework
- [X] Rails Framework
- [X] JavaScript
- [X] jQuery
- [X] Ruby
- [X] HTML
- [X] CSS

## Features
Lyricist is a clone of Genius built with React on the frontend and Rails on the backend

- [x] Create accounts
- [x] Create sessions
- [x] Demo User
- [x] Add songs
- [x] Annotate Lyrics
- [x] Comment on annotations
- [x] Comment on songs
- [x] Search for songs

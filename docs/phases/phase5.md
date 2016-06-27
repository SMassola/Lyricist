# Phase 5: Annotations and Garbage Collection

## Rails
### Models
* Annotations

### Controllers
* Api::AnnotationsController (create, destroy, index, show, update)

### Views
* reminders/index.json.jbuilder

## Flux
### Views (React Components)
* AnnotationIndex
  - AnnotationIndexItem
* AnnotationShow
* AnnotationForm

### Stores
* Annotation

### Actions
* ApiActions.receiveAllAnnotations -> triggered by ApiUtil
* ApiActions.receiveSingleAnnotation
* ApiActions.deleteAnnotation
* AnnotationActions.fetchAllAnnotations -> triggers ApiUtil
* AnnotationActions.fetchSingleAnnotation
* AnnotationActions.createAnnotation
* AnnotationActions.updateAnnotation
* AnnotationActions.destroyAnnotation

### ApiUtil
* ApiUtil.fetchAllAnnotations
* ApiUtil.fetchSingleAnnotation
* ApiUtil.createAnnotation
* ApiUtil.updateAnnotation
* ApiUtil.destroyAnnotation

## Gems/Libraries

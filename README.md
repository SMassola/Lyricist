# FresherNote

[Heroku link][heroku] **Note:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Lyricist is a web application inspired by Genius using Ruby on Rails as the framework and React as the frontend interface. By the end
week 9, this app will at minimum satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](docs/production_readme.md) -- you'll write this later)
- [ ] Tracks
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Annotations
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Comments
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Upvotes
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day, W1 Tu 6pm)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Songs and Comments Model, API, and basic APIUtil (1.5 days, W1 Th 12pm)

**Objective:** Songs can be created, read, edited and destroyed through
the API.

- [ ] create `Song` model and `Comment` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for songs (`SongsController`)
- [ ] jBuilder views for notes
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days, W1 F 6pm)

**Objective:** Songs and Comments can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each song component, building out the flux loop as needed.
  - [ ] `SongssIndex`
  - [ ] `SongIndexItem`
  - [ ] `SongForm`
- [ ] save Song to the DB when the form loses focus or is left idle
  after editing.

### Phase 4: Start Styling (0.5 days, W2 M 12pm)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Annotations (1 day, W2 Tu 12pm)

**Objective:** Annotations belong to Songs, and can be viewed by Songs.

- [ ] create `Annotation` model
- build out API, Flux loop, and components for:
  - [ ] Annotations CRUD
  - [ ] adding annotations to song lyrics
- Use CSS to style new views

Phase 3 adds organization to the Songs. Annotations belong to a Song,
which has its own `Show` view.

### Phase 6: Upvotes (1 days, W2 Th 12pm)

**Objective:** Upvotes can be added to annotations.

- [ ] create `Upvotes` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching upvotes for annotations
  - [ ] adding upvotes to annotations
- [ ] Style new elements

### Phase 7: Allow Complex Styling in Songs (0.5 days, W2 Th 6pm)

**objective:** Enable complex styling of notes.

- [ ] Integrate `react-quill` (based on Quill.js).
- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Style the new Quill elements.

### Phase 8: Styling Cleanup and Seeding (1 day, W2 F 6pm)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Tags
- [ ] Lyricist IQ
- [ ] Notifications
- [ ] Multiple sessions

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md

# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Songs

- `GET /api/songs`
  - Songs index/search
- `POST /api/songs`
- `GET /api/songs/:id`
- `PATCH /api/songs/:id`
- `DELETE /api/songs/:id`

### Annotations

- `GET /api/songs/:id/annotations`
- `POST /api/songs/song:id/annotations`
- `GET /api/songs/song:id/annotations/:id`
- `PATCH /api/songs/song:id/annotations:id`
- `POST /api/songs/song:id/annotations/:id`
- `DELETE /api/songs/:song_id/annotations/:id`

### Comments

- `GET /api/songs/song:id/comments`
- `POST /api/songs/song:id/comments`
- `GET /api/songs/song:id/comments/:id`
- `PATCH /api/songs/song:id/comments/:id`
- `DELETE /api/songs/song:id/comments/:id`

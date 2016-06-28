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

- `GET /api/annotations`
- `POST /api/annotations/:id`
- `GET /api/annotations/:id`
- `PATCH /api/annotations:id`
- `POST /api/annotations/:id`
- `DELETE /api/annotations/:id`

### Comments

- `POST /api/comments`
- `DELETE /api/comments/:id`

### Upvotes

- `POST /api/comments/:id/upvote`
- `POST /api/annotations/:id/upvote`

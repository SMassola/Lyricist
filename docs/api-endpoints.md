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
- `POST /api/songs/:id/comments`
- `GET /api/songs/:id/comments`
- `GET /api/songs/:id/comments/:id`
- `DELETE /api/songs/:id/comments/:id`
- `GET /api/songs/:id/annotations/:id`
- `GET /api/songs/:id/annotations`
- `POST /api/songs/:id/annotations/:id`
- `GET /api/songs/:id/annotations/:id`
- `PATCH /api/songs/:id/annotations:id`
- `POST /api/songs/:id/annotations/:id`
- `GET /api/songs/:id/annotations/:id/comments`
- `GET /api/songs/:id/annotations/:id/comments/:id`
- `DELETE /api/songs/:id/annotations/:id/comments/:id`
- `PUT /api/songs/:id/annotations/:id/upvote`
- `PUT /api/songs/:id/comments/:id/upvote`

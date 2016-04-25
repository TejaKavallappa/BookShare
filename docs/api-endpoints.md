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

### Books

- `GET /api/books`
  - Books index/search
  - accepts `title` or `author` query param to list books
  - accepts pagination params (if I get there)
- `POST /api/books`
- `GET /api/books/:id`
- `PATCH /api/books/:id`
- `DELETE /api/books/:id`

### Borrowings

- `GET /api/borrowings`
- `POST /api/borrowings`
- `GET /api/borrowings/:id`
- `PATCH /api/borrowings/:id`

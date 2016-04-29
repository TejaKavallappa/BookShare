# BookShare

[Heroku link][heroku] **NB:**

[heroku]: https://bookshares.herokuapp.com

## Minimum Viable Product

BookSpace/BookShare is a web application inspired by Goodreads, and built using Ruby on Rails and React.js.
BookShare allows users to lend/borrow books to/from other users. BookSpace/BookShare has the following features:

- [ ] Create new user account
- [ ] Log in/ Log out, 1 - 2 guest/demo logins
- [ ] Create read, edit, and delete books
- [ ] View user's shelf and request to borrow user's book(s)
- [ ] Approve or reject borrow requests

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 day)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/log in pages
- [ ] blank landing page after log in

### Phase 2: Books Model, API, and basic APIUtil (0.5 day)

**Objective:** Books can be created, read, edited and destroyed through
the API.

- [ ] create `Book` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for books (`BooksController`)
- [ ] jBuilder views for books
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1 day)

**Objective:** Books can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each book component, building out the flux loop as needed.
  - [ ] `BooksIndex`
  - [ ] `BookIndexItem`
  - [ ] `BookForm`

### Phase 4: Start Styling (1 day)

**Objective:** Existing pages (including signup/log in) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Borrowings (1 day)

**Objective:** Borrowings is the join table linking books, their owner_id,
the borrower_id (maybe null), and the request status which has one of four
possible values [1: pending_request, 2: approved_request, 3: borrowed, 4:with owner]

- [ ] create `Borrowings` model
- build out API, Flux loop, and components for:
  - [ ] Borrowings CRUD
  - [ ] A current_user who is not the owner can request books
  - [ ] The owner can approve or reject pending requests
  - [ ] If request approved, owner can send book to requester(sets request_status to 3)
- Use CSS to style new views [This will very likely take extra time]

### Phase 6: Populate database and create navbar(1 day)

**Objective:** Make API requests to https://openlibrary.org/ to obtain seed data for the web application

- [ ] Obtain API key
- [ ] Configure web API requests to obtain book data[covers, descriptions, etc]
- [ ] Create navbar comprising Log in/Log out and a homepage button
- [ ] Create footer

### Phase 7: Allow Complex Styling (1.5 days)

**objective:** Enable complex styling of BookShare.

- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Style the new Quill elements.
- [ ] Add favicon

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.
- [ ] Ensure quick page-loads and seamless navigation

### Bonus Features (TBD)
- [ ] Add tags to books, make books searchable by tags
- [ ] List users books by borrowed, lent, and currently held books
- [ ] Rate popularity of books based on requests and borrows
- [ ] Custom 404 page
- [ ] Add friends
- [ ] Allow users to view multiple requests for the same book(if any)
- [ ] Search through friends' shelves for books
- [ ] Pagination / infinite scroll for Books Index
- [ ] View friends/users within a geographic radius[maps]

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
<!-- [phase-three]: ./docs/phases/phase3.md -->
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md

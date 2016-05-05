# BookShare

[BookShare][heroku]

[heroku]: https://bookshares.herokuapp.com

## Minimum Viable Product

BookSpace/BookShare is a web application inspired by Goodreads, and built using Ruby on Rails and React.js.
BookShare allows users to lend/borrow books to/from other users. BookSpace/BookShare has the following features:

- [x] Create new user account
- [x] Log in/ Log out, 1 - 2 guest/demo logins
- [x] Create read, edit, and delete books
- [x] View user's shelf and request to borrow user's book(s)
- [x] Approve or reject borrow requests

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

- [x] create new project
- [x] create `User` model
- [x] authentication
- [x] user signup/log in pages
- [x] blank landing page after log in

### Phase 2: Books Model, API, and basic APIUtil (0.5 day)

**Objective:** Books can be created, read, edited and destroyed through
the API.

- [x] create `Book` model
- [x] seed the database with a small amount of test data
- [x] CRUD API for books (`BooksController`)
- [x] jBuilder views for books
- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1 day)

**Objective:** Books can be created, read, edited and destroyed with the
user interface.

- [x] setup the flux loop with skeleton files
- [x] setup React Router
- implement each book component, building out the flux loop as needed.
  - [x] `BooksIndex`
  - [x] `BookIndexItem`
  - [x] `BookForm`

### Phase 4: Start Styling (1 day)

**Objective:** Existing pages (including signup/log in) will look good.

- [x] create a basic style guide
- [x] position elements on the page
- [x] add basic colors & styles

### Phase 5: Set up navbar and footer(0.5 day)

**Objective:** Set up navbar and footer

- [x] Create navbar comprising Log in/Log out and a homepage button
- [x] Create footer

### Phase 6: Borrowings (1 day)

**Objective:** Borrowings is the join table linking books, their owner_id,
the borrower_id (maybe null), and the request status which has one of four
possible values [1: pending_request, 2: approved_request, 3: borrowed, 4:with owner]

- [x] create `Borrowings` model
- build out API, Flux loop, and components for:
  - [x] Borrowings CRUD
  - [x] A current_user who is not the owner can request books
  - [x] The owner can approve or reject pending requests
- Use CSS to style new views [This will very likely take extra time]

### Phase 7: Populate database (1 day)

**Objective:** Make API requests to https://openlibrary.org/ to obtain seed data for the web application

- [ ] Obtain API key
- [ ] Configure web API requests to obtain book data[covers, descriptions, etc]

### Phase 8: Following  (1 day)

**objective:** Enable users to follow other users. Following is a join table that links two user id's

- [ ] Followings CRUD
- [ ] A current_user can follow other users
- [ ] A user can view followed users' books, and request to borrow them.

### Phase 9: Allow Complex Styling (1.5 days)

**objective:** Enable complex styling of BookShare.

- [ ] Use Rails helpers to sanitize HTML before rendering.
- [x] Add favicon
- [ ] Add modals to login/signup and edit/view forms

### Phase 10: Styling Cleanup and Seeding (1 day)

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

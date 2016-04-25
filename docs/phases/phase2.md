# Phase 2: Flux Architecture and Book CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* BooksIndex
  - BooksIndexItem
* BookForm

### Stores
* Book

### Actions
* ServerActions.receiveAllBooks -> triggered by ApiUtil
* ServerActions.receiveSingleBook
* ServerActions.deleteBook
* ClientActions.fetchAllBooks -> triggers ApiUtil
* ClientActions.fetchSingleBook
* ClientActions.createBook
* ClientActions.editBook
* ClientActions.destroyBook

### ApiUtil
* ApiUtil.fetchAllBooks
* ApiUtil.fetchSingleBook
* ApiUtil.createBook
* ApiUtil.editBook
* ApiUtil.destroyBook

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap

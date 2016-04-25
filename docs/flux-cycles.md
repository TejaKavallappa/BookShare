# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Book Cycles

### Books API Request Actions

* `fetchAllBooks`
  0. invoked from `BooksIndex` `didMount`/`willReceiveProps`
  0. `GET /api/books` is called.
  0. `receiveAllBooks` is set as the callback.

* `createBook`
  0. invoked from new book button `onClick`
  0. `POST /api/books` is called.
  0. `receiveSingleBook` is set as the callback.

* `fetchSingleBook`
  0. invoked from `BookDetail` `didMount`/`willReceiveProps`
  0. `GET /api/books/:id` is called.
  0. `receiveSingleBook` is set as the callback.

* `updateBook`
  0. invoked from `BookForm` `onSubmit`
  0. `POST /api/books` is called.
  0. `receiveSingleBook` is set as the callback.

* `destroyBook`
  0. invoked from delete book button `onClick`
  0. `DELETE /api/books/:id` is called.
  0. `removeBook` is set as the callback.

### Books API Response Actions

* `receiveAllBooks`
  0. invoked from an API callback.
  0. `Book` store updates `_books` and emits change.

* `receiveSingleBook`
  0. invoked from an API callback.
  0. `Book` store updates `_books[id]` and emits change.

* `removeBook`
  0. invoked from an API callback.
  0. `Book` store removes `_books[id]` and emits change.

### Store Listeners

* `BooksIndex` component listens to `Book` store.
* `BookDetail` component listens to `Book` store.


## Borrow Cyclesbook# Borrows API Request Actions

* `fetchAllBorrows`
  0. invoked from `BorrowsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/Borrows` is called.
  0. `receiveAllBorrows` is set as the callback.

* `createBorrow`
  0. invoked from new Borrow button `onClick`
  0. `POST /api/Borrows` is called.
  0. `receiveSingleBorrow` is set as the callback.

* `fetchSingleBorrow`
  0. invoked from `BorrowDetail` `didMount`/`willReceiveProps`
  0. `GET /api/Borrows/:id` is called.
  0. `receiveSingleBorrow` is set as the callback.

* `updateBorrow`
  0. invoked from `BorrowForm` `onSubmit`
  0. `POST /api/Borrows` is called.
  0. `receiveSingleBorrow` is set as the callback.

### Borrows API Response Actions

* `receiveAllBorrows`
  0. invoked from an API callback.
  0. `Borrow` store updates `_Borrows` and emits change.

* `receiveSingleBorrow`
  0. invoked from an API callback.
  0. `Borrow` store updates `_Borrows[id]` and emits change.

* `removeBorrow`
  0. invoked from an API callback.
  0. `Borrow` store removes `_Borrows[id]` and emits change.

### Store Listeners

* `BorrowsIndex` component listens to `Borrow` store.

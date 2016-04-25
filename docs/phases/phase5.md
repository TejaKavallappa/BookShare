# Phase 5: Borrowings

## Rails
### Models
* Borrowings

### Controllers
* Api::BorrowingsController (create, update)

### Views
* borrowings/index.json.jbuilder

## Flux
### Views (React Components)
* BorrowingsIndex
  - BorrowingIndexItem
* BorrowingShow
* BorrowingForm

### Stores
* Borrowing

### Actions
* ServerActions.receiveAllBorrowings -> triggered by ApiUtil
* ServerActions.receiveSingleBorrowing
* ServerActions.deleteBorrowing
* ClientActions.fetchAllBorrowings -> triggers ApiUtil
* ClientActions.fetchSingleBorrowing
* ClientActions.createBorrowing
* ClientActions.updateBorrowing

### ApiUtil
* ApiUtil.fetchAllBorrowings
* ApiUtil.fetchSingleBorrowing
* ApiUtil.createBorrowing
* ApiUtil.updateBorrowing

## Gems/Libraries

var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;

var BookStore = new Store(AppDispatcher);
var _books = {};

var receiveAllBooks = function(books){
  _books = {};
  //Check if books is not an empty object
  if (Object.keys(books).length){
  books.forEach(function(book) {
    _books[book.id] = book;
  });}
};

BookStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case "BOOKS_RECEIVED":
      receiveAllBooks(payload.books);
      break;
    case "BOOK_RECEIVED":
      receiveSingleBook(payload.book);
      break;
    case "BOOK_REMOVED":
      removeBook(payload.book);
      break;
  }
  this.__emitChange();
};


var receiveSingleBook = function(book){
  _books[book.id] = book;
};

var removeBook = function(book){
  delete _books[book.id];
};

BookStore.all = function(){
  var books = [];
  for(var id in _books){
    books.push(_books[id]);
  }
  return books;
};

BookStore.find = function(id){
  return _books[id];
};

BookStore.tempBorrow = function(id){
  // When a user borrows a book from a modal-view
  // the database gets updated but not the bookstore.
  _books[id].borrow_status = "pending";
};

module.exports = BookStore;

var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;

var BookStore = new Store(AppDispatcher);
var _books = {};

BookStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case "BOOKS_RECEIVED":
      this.receiveAllBooks(payload.books);
      break;
    case "BOOK_RECEIVED":
      this.receiveSingleBook(payload.book);
      break;
    case "BOOK_REMOVED":
      this.removeBook(payload.book);
      break;
  }
  this.__emitChange();
};

var receiveAllBooks = function(books){
  _books = {};
  books.forEach(function(book) {
    _books[book.id] = book;
  });
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

module.exports = BookStore;

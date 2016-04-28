var AppDispatcher = require('../dispatcher/dispatcher');
var ApiUtil = require('../util/api_util');

var ServerActions = {
  fetchAllBooks: function(books){
    AppDispatcher.dispatch({
      actionType: "BOOKS_RECEIVED",
      books: books
    });
  },
  getSingleBook: function(book){
    AppDispatcher.dispatch({
      actionType: "BOOK_RECEIVED",
      book: book
    });
  },
  removeBook: function(book){
    AppDispatcher.dispatch({
      actionType: "BOOK_REMOVED",
      book: book
    });
  }

};
module.exports = ServerActions;

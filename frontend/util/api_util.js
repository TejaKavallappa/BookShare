var AppDispatcher = require('../dispatcher/dispatcher');
var ServerActions = require('../actions/server_actions');

var ApiUtil = {
  fetchUserBooks: function(id){
    $.ajax({
      url: '/api/books/',
      type: 'GET',
      data: {userId: parseInt(id)},
      success: function(userBooks){
        ServerActions.fetchAllBooks(userBooks);
      }
    });
  },

  fetchAllBooks: function(){
    $.ajax({
      url: '/api/books',
      type: 'GET',
      success: function(books){
        ServerActions.fetchAllBooks(books);
      }
    });
  },
  getSingleBook: function(id){
    $.ajax({
      url: '/api/books/'+id,
      type: 'GET',
      success: function(book){
        ServerActions.getSingleBook(book);
      }
    });
  },
  removeBook: function(id){
    $.ajax({
      url: '/api/books/'+id,
      type: 'DELETE',
      success: function(book){
        ServerActions.removeBook(book);
      }
    });
  },
  addBook: function(bookData){
    $.ajax({
      url: "/api/books/",
      type: 'POST',
      data: {book: bookData},
      success: function(newBook){
        ServerActions.getSingleBook(newBook);
      }
    });
  },
  updateBook: function(bookData){
    $.ajax({
      url: "api/books/"+bookData.id,
      type: 'PATCH',
      data: {book: bookData},
      success: function(updatedBook){
        ServerActions.getSingleBook(updatedBook);
      }
    });
  }

};

module.exports = ApiUtil;

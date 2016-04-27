var AppDispatcher = require('../dispatcher/dispatcher');
var ServerActions = require('../actions/server_actions');

var ApiUtil = {
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
  }

};

module.exports = ApiUtil;

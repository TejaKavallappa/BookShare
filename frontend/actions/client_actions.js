var ApiUtil = require('../util/api_util');

var ClientActions = {
  fetchUserBooks: function(id){
    //If no params given, then fetch current user's books
    if (!id){
      id = 0;
    }
    ApiUtil.fetchUserBooks(id);
  },
  fetchAllBooks: function(){
    ApiUtil.fetchAllBooks();
  },
  getSingleBook: function(id){
    ApiUtil.getSingleBook(id);
  },
  removeBook: function(id){
    ApiUtil.removeBook(id);
  },
  addBook: function(book){
    ApiUtil.addBook(book);
  },
  updateBook: function(book){
    ApiUtil.updateBook(book);
  }
};

module.exports = ClientActions;

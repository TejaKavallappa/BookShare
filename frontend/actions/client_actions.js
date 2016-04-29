var ApiUtil = require('../util/api_util');

var ClientActions = {
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

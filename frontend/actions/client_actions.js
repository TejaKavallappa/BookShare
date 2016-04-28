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
  }
};

module.exports = ClientActions;

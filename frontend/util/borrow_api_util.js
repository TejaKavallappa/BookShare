var AppDispatcher = require('../dispatcher/dispatcher');

var BorrowApiUtil = {
  requestBook: function(borrow, success, error){
    console.log("In borrow api util");
    $.ajax({
      url: '/api/borrowings',
      type: 'POST',
      data: {borrowings: borrow},
      success: success,
      error: error
    });
  },
  // fetchCurrentUser: function(success, error){
  //   $.ajax({
  //     url: '/api/session',
  //     success: success,
  //     type: 'GET',
  //     error: error
  //   });
  // },
  // post: function(options){
  //   $.ajax({
  //     type: 'POST',
  //     url: options.url,
  //     data: {user: options.user},
  //     success: options.success,
  //     error: options.error
  //   });
  // },
  // logout: function(success, error){
  //   $.ajax({
  //     url: '/api/session',
  //     success: success,
  //     type: 'DELETE',
  //     error: error
  //   });
  // }
};

module.exports = BorrowApiUtil;
window.BorrowApiUtil = BorrowApiUtil;

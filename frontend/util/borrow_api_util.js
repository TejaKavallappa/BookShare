var AppDispatcher = require('../dispatcher/dispatcher');

var BorrowApiUtil = {
  requestBook: function(borrow, success, error){
    $.ajax({
      url: '/api/borrowings',
      type: 'POST',
      data: {borrowings: borrow},
      success: success,
      error: error
    });
  },
  //request_status: approved, borrowed, rejected
  approveBook: function(borrow, success, error){
    $.ajax({
      url: '/api/borrowing/'+ borrow.id,
      type: 'PATCH',
      data: {borrowings: borrow},
      success: success,
      error: error
    });
  },
  fetchBorrowsByOwner: function(success, error){
    $.ajax({
      url: '/api/borrowings/',
      type: 'GET',
      success: success,
      error: error
    });
  },
  fetchBorrowsByBorrower: function(borrowerId, success, error){
    $.ajax({
      url: '/api/borrowings/',
      type: 'GET',
      data: {borrowerId: borrowerId},//params
      success: success,
      error: error
    });
  }

};

module.exports = BorrowApiUtil;
window.BorrowApiUtil = BorrowApiUtil;

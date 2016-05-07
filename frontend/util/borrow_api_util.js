var AppDispatcher = require('../dispatcher/dispatcher');

var BorrowApiUtil = {
  requestBook: function(borrow, success, error){
    $.ajax({
      url: '/api/borrowings',
      type: 'POST',
      data: {borrow: borrow},
      success: success,
      error: error
    });
  },
  //request_status: requested, borrowed
  approveBorrow: function(borrow, success, error){
    $.ajax({
      url: '/api/borrowings/'+ borrow.id,
      type: 'PATCH',
      data: {borrow: borrow},
      success: success,
      error: error
    });
  },

  rejectBorrow: function(borrowId, success, error){
    //Called when a borrow request is rejected or when a book is returned
    $.ajax({
      url: '/api/borrowings/'+ borrowId,
      type: 'DELETE',
      success: success,
      error: error
    });
  },

  fetchBorrowsByOwner: function(success, error){
    $.ajax({
      url: '/api/borrowings/',
      type: 'GET',
      data: {asker: "owner"},
      success: success,
      error: error
    });
  },
  fetchBorrowsByBorrower: function(success, error){
    $.ajax({
      url: '/api/borrowings/',
      type: 'GET',
      data: {asker: "borrower"},//params
      success: success,
      error: error
    });
  }

};

module.exports = BorrowApiUtil;

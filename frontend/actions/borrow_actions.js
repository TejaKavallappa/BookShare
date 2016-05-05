var AppDispatcher = require('../dispatcher/dispatcher');
var BorrowApiUtil = require('../util/borrow_api_util');
var hashHistory = require('react-router').hashHistory;

var BorrowActions = {

  requestBook: function(borrow){
    BorrowApiUtil.requestBook(borrow, BorrowActions.receiveRequest,
      BorrowActions.handleError);
  },

  approveRequest: function(borrow){
    BorrowApiUtil.approveBorrow(borrow, BorrowActions.approvedBorrow,
      BorrowActions.handleError);
  },

  rejectRequest: function(borrowId){
    BorrowApiUtil.rejectBorrow(borrowId, BorrowActions.rejectedBorrow,
    BorrowActions.handleError);
  },

  fetchBorrowsByOwner: function(){
    BorrowApiUtil.fetchBorrowsByOwner(BorrowActions.receivedOwnerBorrows,
      BorrowActions.handleError);
  },

  fetchBorrowsByBorrower: function(){
    BorrowApiUtil.fetchBorrowsByBorrower(BorrowActions.receivedBorrowerBorrows,
       BorrowActions.handleError);
  },
  receivedOwnerBorrows: function(borrows){
    AppDispatcher.dispatch({
      actionType: "BORROWS_RECEIVED",
      borrows: borrows
    });
  },
  receivedBorrowerBorrows: function(borrows){
    AppDispatcher.dispatch({
      actionType: "BORROW_REQUESTS_MADE_RECEIVED",
      borrows: borrows
    });
  },
  approvedBorrow: function(borrow){
    //Remove the request from the store as it has been approvedBorrow
    //Send a notification to borrower that it has been accepted
    AppDispatcher.dispatch({
      actionType: "BORROW_REMOVED",
      borrow: borrow
    });
  },
  rejectedBorrow: function(borrow){
    AppDispatcher.dispatch({
      actionType: "BORROW_REMOVED",
      borrow: borrow
    });
  },
  receiveRequest: function(borrow){
    AppDispatcher.dispatch({
      actionType: "BORROW_RECEIVED",
      borrow: borrow
    });
  },

  handleError: function(error){
    
    AppDispatcher.dispatch({
      actionType: "ERROR",
      errors: error.responseJSON.errors
    });
  }
};

module.exports = BorrowActions;
window.BorrowActions = BorrowActions;

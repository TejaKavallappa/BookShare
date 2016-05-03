var AppDispatcher = require('../dispatcher/dispatcher');
var BorrowApiUtil = require('../util/borrow_api_util');
var hashHistory = require('react-router').hashHistory;

var BorrowActions = {

  requestBook: function(borrow){
    BorrowApiUtil.requestBook(borrow, BorrowActions.receiveRequest,
      BorrowActions.handleError);
  },

  approveBook: function(borrow){
    BorrowApiUtil.approveBook(borrow, BorrowActions.approvedBorrow,
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
      actionType: "BORROW_RECEIVED",
      borrows: borrows
    });
  },
  approvedBorrow: function(){},
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

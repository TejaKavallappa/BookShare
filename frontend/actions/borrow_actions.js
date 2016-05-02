var AppDispatcher = require('../dispatcher/dispatcher');
var BorrowApiUtil = require('../util/borrow_api_util');
var hashHistory = require('react-router').hashHistory;

var BorrowActions = {
  requestBook: function(borrow){
    console.log("In borrow actions");
    // var borrow = {
    //   owner_id: 1,
    //   borrower_id: 2,
    //   book_id: 2,
    //   request_status: "pending"};
    BorrowApiUtil.requestBook(borrow, BorrowActions.receiveRequest,
      BorrowActions.handleError);
  },
  // fetchAllUsers: function(){
  //   UserApiUtil.fetchAllUsers(
  //     UserActions.receiveAllUsers, UserActions.handleError);
  // },
  // fetchCurrentUser: function(){
  //   UserApiUtil.fetchCurrentUser(
  //     UserActions.receiveCurrentUser, UserActions.handleError);
  // },
  // login: function(user){
  //   UserApiUtil.post({
  //     url: "/api/session",
  //     user: user,
  //     success: UserActions.receiveCurrentUser,
  //     error: UserActions.handleError
  //   });
  // },
  // signup: function(user){
  //   UserApiUtil.post({
  //     url: "/api/users",
  //     user: user,
  //     success: UserActions.receiveCurrentUser,
  //     error: UserActions.handleError
  //   });
  // },
  // logout: function(){
  //   UserApiUtil.logout(
  //     UserActions.removeCurrentUser, UserActions.handleLogoutError);
  // },
  // receiveCurrentUser: function(user){
  //   if (user.username){
  //   AppDispatcher.dispatch({
  //     actionType: "LOGIN",
  //     user: user
  //     });
  //   }
  // },
  // receiveAllUsers: function(users){
  //   AppDispatcher.dispatch({
  //     actionType: "USERS",
  //     users: users
  //   });
  // },
  // removeCurrentUser: function(){
  //   AppDispatcher.dispatch({
  //     actionType: "LOGOUT"
  //   });
  //   hashHistory.push("/");
  // },
  //
  // handleLogoutError: function(error){
  //   UserActions.handleError(error);
  //   hashHistory.push("/");
  //
  // },
  receiveRequest: function(){
    console.log("In receive request");
  },
  handleError: function(error){
    console.log("Request not successful");
    // AppDispatcher.dispatch({
    //   actionType: "ERROR",
    //   errors: error.responseJSON.errors
    // });
  }
};

module.exports = BorrowActions;
window.UserActions = BorrowActions;

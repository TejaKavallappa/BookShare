var AppDispatcher = require('../dispatcher/dispatcher');
var UserApiUtil = require('../util/user_api_util');

var UserActions = {
  fetchCurrentUser: function(){
    UserApiUtil.fetchCurrentUser(UserActions.receiveCurrentUser, UserActions.handleError);
  },
  login: function(user){
    UserApiUtil.post({
      url: "/api/session",
      user: user,
      success: UserActions.receiveCurrentUser,
      error: UserActions.handleError
    });
  },
  signup: function(user){
    UserApiUtil.post({
      url: "/api/users",
      user: user,
      success: UserActions.receiveCurrentUser,
      error: UserActions.handleError
    });
  },
  logout: function(){
    UserApiUtil.logout(UserActions.removeCurrentUser, UserActions.handleError);
  },
  receiveCurrentUser: function(user){
    AppDispatcher.dispatch({
      actionType: "LOGIN",
      user: user
    });
  },
  removeCurrentUser: function(){
    AppDispatcher.dispatch({
      actionType: "LOGOUT"
    });
  },
  handleError: function(error){
    AppDispatcher.dispatch({
      actionType: "ERROR",
      errors: error.responseJSON.errors
    });
  }
};

module.exports = UserActions;
window.UserActions = UserActions;

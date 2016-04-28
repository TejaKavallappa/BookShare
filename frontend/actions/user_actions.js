var AppDispatcher = require('../dispatcher/dispatcher');
var UserApiUtil = require('../util/user_api_util');
var hashHistory = require('react-router').hashHistory;

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
    UserApiUtil.logout(UserActions.removeCurrentUser, UserActions.handleLogoutError);
  },
  receiveCurrentUser: function(user){
    if (user.username){
    AppDispatcher.dispatch({
      actionType: "LOGIN",
      user: user
      });
    }
  },
  removeCurrentUser: function(){
    AppDispatcher.dispatch({
      actionType: "LOGOUT"
    });
    hashHistory.push("/");
  },

  handleLogoutError: function(error){
    UserActions.handleError(error);
    hashHistory.push("/");

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

var AppDispatcher = require('../dispatcher/dispatcher');

var UserApiUtil = {
  fetchCurrentUser: function(success, error){
    $.ajax({
      url: '/api/session',
      success: success,
      type: 'GET',
      error: error
    });
  },
  post: function(options){
    $.ajax({
      type: 'POST',
      url: options.url,
      data: {user: options.user},
      success: options.success,
      error: options.success
    });
  },
  logout: function(success, error){
    $.ajax({
      url: '/api/session',
      success: success,
      type: 'DELETE',
      error: error
    });
  }
};

module.exports = UserApiUtil;
window.UserApiUtil = UserApiUtil;

var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;

var UserStore = new Store(AppDispatcher);
var _currentUser, _errors;

UserStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case("LOGIN"):
      UserStore.login(payload.user);
      break;
    case("LOGOUT"):
      UserStore.logout();
      break;
    case("ERROR"):
      console.log("In the user store");
      UserStore.setErrors(payload.errors);
      break;
  }
  this.__emitChange();
};

UserStore.login = function(user){
  _currentUser = user;
  _errors = null;
};

UserStore.currentUser = function(){
  if (_currentUser){
    return $.extend({}, _currentUser);
  }
};

UserStore.logout = function(){
  _currentUser = null;
  _errors = null;
};

UserStore.setErrors = function(errors){
  _errors = errors;
};

UserStore.errors = function(){
  if(_errors){
    return [].slice.call(_errors);
  }
};
module.exports = UserStore;

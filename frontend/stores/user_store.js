var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;

var UserStore = new Store(AppDispatcher);
var _currentUser, _errors, _allUsers;

UserStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case("USERS"):
      receiveAllUsers(payload.users);
      break;
    case("LOGIN"):
      login(payload.user);
      break;
    case("LOGOUT"):
      logout();
      break;
    case("ERROR"):
      setErrors(payload.errors);
      break;
  }
  this.__emitChange();
};

var login = function(user){
  _currentUser = user;
  _errors = null;
};

var logout = function(){
  _currentUser = null;
  _errors = null;
};

var setErrors = function(errors){
  _errors = errors;
};

var receiveAllUsers = function(users){
  _allUsers = {};
  users.forEach(function(user) {
    _allUsers[user.id] = user;
  });
};

UserStore.currentUser = function(){
  if (_currentUser){
    return $.extend({}, _currentUser);
  }
};

UserStore.errors = function(){
  if(_errors){
    return [].slice.call(_errors);
  }
};

UserStore.allUsers = function(){
  var users = [];
  for(var id in _allUsers){
    users.push(_allUsers[id]);
  }
  return users;
};

UserStore.findUser = function(id){
  if (_allUsers){
    return _allUsers[id];
  }
};

window.us = UserStore;
module.exports = UserStore;

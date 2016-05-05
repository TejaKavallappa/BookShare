var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;

var BorrowStore = new Store(AppDispatcher);
var _borrows = {};
var _madeBorrows = {};


BorrowStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case "BORROWS_RECEIVED":
      receiveAllBorrows(payload.borrows);
      break;
    case "BORROW_RECEIVED":
      receiveSingleBorrow(payload.borrow);
      break;
    case "BORROW_REMOVED":
      removeBorrow(payload.borrow);
      break;
    case "BORROW_REQUESTS_MADE_RECEIVED":
      receiveRequestedBorrows(payload.borrows);
      break;
  }
  this.__emitChange();
};

var receiveAllBorrows = function(borrows){
  _borrows = {};
  borrows.forEach(function(borrow) {
    _borrows[borrow.id] = borrow;
  });
};

var receiveRequestedBorrows = function(borrows){
  _madeBorrows = {};
  borrows.forEach(function(borrow){
    _madeBorrows[borrow.id] = borrow;
  });
};

var receiveSingleBorrow = function(borrow){
  _borrows[borrow.id] = borrow;
};

var removeBorrow = function(borrow){
  delete _borrows[borrow.id];
  delete _madeBorrows[borrow.id];
};

BorrowStore.all = function(){
  var borrows = [];
  for(var id in _borrows){
    borrows.push(_borrows[id]);
  }
  return borrows;
};

BorrowStore.madeAll = function(){
  var borrows = [];
  for(var id in _madeBorrows){
    borrows.push(_madeBorrows[id]);
  }
  return borrows;
};

BorrowStore.find = function(id){
  return _borrows[id];
};

module.exports = BorrowStore;

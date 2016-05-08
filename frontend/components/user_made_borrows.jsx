var React = require('react');
//react router
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
//actions
var ClientActions = require('../actions/client_actions');
var UserActions = require('../actions/user_actions');
var BorrowActions = require('../actions/borrow_actions');
//stores
var BorrowStore = require('../stores/borrow_store');
var UserStore = require('../stores/user_store');
//mixins
var CurrentUserMixin = require('../mixins/current_user_state');

var UserMadeBorrows = React.createClass({
  mixins: [CurrentUserMixin],

  getInitialState: function(){
    return {borrows: []};
  },

  componentWillMount: function(){
    this.borrowsListener = BorrowStore.addListener(this.setBorrows);
    BorrowActions.fetchBorrowsByBorrower();
  },

  componentWillUpdate: function(){
    if (!UserStore.currentUser()){
      hashHistory.push("/");
    }
  },

  componentWillUnmount: function(){
      this.borrowsListener.remove();
  },

  setBorrows: function(){
    this.setState({borrows: BorrowStore.madeAll()});
  },

  cancelRequest: function(borrow){
    //Send a notification to the borrower
    BorrowActions.rejectRequest(borrow.id);
  },

  render: function(){
    if (!this.state.borrows){
      return (<div>
        <i class="fa fa-spinner fa-pulse fa-3x fa-fw margin-bottom"></i>
    <span class="sr-only">Loading...</span></div>);
    }
    var self = this;
    var buttonVal = function(borrow){
      if (borrow.borrowing_status === 'pending'){
        return 'Cancel';
      }
      else{
        return 'Return';
      }
    };
    return (<div className="requests-made">

      <h2>Status of your requests</h2>

      {this.state.borrows.map(function(borrow){
        return (<div key={borrow.id} className="borrow-item">
        <button className="btn" onClick={self.cancelRequest.bind(self,borrow)}>
          {buttonVal(borrow)}</button>
        <img src={borrow.book.image_url} alt={borrow.book.title} />
          <ul>
          <li><h3>{borrow.owner.username}</h3></li>
          <li>{borrow.book.title}</li>
          <li>{borrow.book.author}</li>
          <li><b>Request status: </b>
          {borrow.borrowing_status.charAt(0).toUpperCase() +
              borrow.borrowing_status.slice(1)}</li>
          </ul>
        </div>);

      })}
    </div>);
  }
});

module.exports = UserMadeBorrows;

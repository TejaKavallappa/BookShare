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

var UserBorrows = React.createClass({
  mixins: [CurrentUserMixin],

  getInitialState: function(){
    return {borrows: []};
  },

  componentWillMount: function(){
    this.borrowsListener = BorrowStore.addListener(this.setBorrows);
    BorrowActions.fetchBorrowsByOwner();
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
    this.setState({borrows: BorrowStore.all()});
  },

  approveRequest: function(borrow){
    var req = {id: borrow.id,
      owner_id: UserStore.currentUser(),
      borrower_id: borrow.borrower.borrower_id,
      request_status: 'borrowed',
      book_id: borrow.book.book_id};
    BorrowActions.approveRequest(req);
  },

  rejectRequest: function(borrow){
    //Send a notification to the borrower
    BorrowActions.rejectRequest(borrow.id);
  },

  render: function(){
    if (!this.state.borrows){
      return (<div className='request-page'>
        <i class="fa fa-spinner fa-pulse fa-3x fa-fw margin-bottom"></i>
    <span class="sr-only">Loading...</span></div>);
    }
    var self = this;
    if(BorrowStore.all().length === 0){
      return (<div className='request-page'>No pending borrow requests!</div>);
    }
    return (<div className='request-page'>
      <h2>Your borrow requests</h2>
      {this.state.borrows.map(function(borrow){
        return (<div key={borrow.id} className="borrow-item">
        <img src={borrow.book.image_url} alt={borrow.book.title} />
          {borrow.borrower.username}&nbsp;
          {borrow.book.title}&nbsp;
          {borrow.book.author}&nbsp;
          <button onClick={self.approveRequest.bind(self,borrow)}>
            Approve</button>&nbsp;
          <button onClick={self.rejectRequest.bind(self,borrow)}>
            Reject</button>
        </div>);

      })}
    </div>);
  }
});

module.exports = UserBorrows;

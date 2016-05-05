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

  // approveRequest: function(borrow){
  //   var req = {id: borrow.id,
  //     owner_id: UserStore.currentUser(),
  //     borrower_id: borrow.borrower.borrower_id,
  //     request_status: 'borrowed',
  //     book_id: borrow.book.book_id};
  //   BorrowActions.approveRequest(req);
  // },
  //
  // rejectRequest: function(borrow){
  //   //Send a notification to the borrower
  //   BorrowActions.rejectRequest(borrow.id);
  // },

  // if(BorrowStore.all().length === 0){
  //   return (<div>No pending borrow requests!</div>);
  // }
  render: function(){
    if (!this.state.borrows){
      return (<div>
        <i class="fa fa-spinner fa-pulse fa-3x fa-fw margin-bottom"></i>
    <span class="sr-only">Loading...</span></div>);
    }
    var self = this;
    return (<div>

      <h2>Status of your requests</h2>

      {this.state.borrows.map(function(borrow){
        return (<div key={borrow.id} className="borrow-item">
        <img src={borrow.book.image_url} alt={borrow.book.title} />
          {borrow.owner.username}&nbsp;
          {borrow.book.title}&nbsp;
          {borrow.book.author}&nbsp;
        </div>);

      })}
    </div>);
  }
});



module.exports = UserMadeBorrows;

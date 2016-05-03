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

  render: function(){
    if (!this.state.borrows){
      return <div>Loading</div>;
    }
    return (<div>
      <h2>Your borrow requests</h2>
      {this.state.borrows.map(function(borrow){
        return (<div key={borrow.id} className="borrow-item">
        <img src={borrow.book.image_url} alt={borrow.book.title} />
          {borrow.borrower.username}&nbsp;
          {borrow.book.title}&nbsp;
          {borrow.book.author}&nbsp;
          <button onClick={this.approveRequest}>Approve</button>&nbsp;
          <button onClick={this.rejectRequest}>Reject</button>
        </div>);

      })}
    </div>);
  }
});

module.exports = UserBorrows;

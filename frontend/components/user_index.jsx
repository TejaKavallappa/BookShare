var React = require('react');
//react router
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
//actions
var ClientActions = require('../actions/client_actions');
var UserActions = require('../actions/user_actions');
//stores
var UserStore = require('../stores/user_store');
//components
var BookIndexItem = require('./book_index_item');
var BookIndex = require('./book_index');
var BookStore = require('../stores/book_store');
var BookForm = require('./book_form');

var Users = React.createClass({
  getInitialState: function(){
    return ({users: []});
  },
  componentWillMount: function(){
    this.usersListener = UserStore.addListener(this._onChange);
    UserActions.fetchAllUsers();
  },
  componentWillUnmount: function(){
    this.usersListener.remove();
  },
  _onChange: function(){
    this.setState({users: UserStore.allUsers()});
  },

  render: function(){
    if (!this.state.users){
      return (<div>Loading users...</div>);
    }
    var self = this;
      return (<div className="users-page">
        <ul className="books-index">
          {
            self.state.users.map(function(user){
                return (
                  <li key={user.id}>
                    <h4>{user.username}</h4>
                  </li>);
            })
          }
        </ul>
      </div>);
  }
});

module.exports = Users;

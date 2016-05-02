var React = require('react');
//react router
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
var Link = ReactRouter.Link;
//actions
var ClientActions = require('../actions/client_actions');
var UserActions = require('../actions/user_actions');
//stores
var UserStore = require('../stores/user_store');
//components

var UsersIndex = React.createClass({
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
    var displayUsers = function(user){
      // self.state.users.map(function(user){
          if (user.id === UserStore.currentUser().id){
            return (<li key={user.id}>
              <Link to={ "/"}>
                <h4>{ user.username.charAt(0).toUpperCase() +
                    user.username.slice(1) }</h4>
                </Link>
            </li>);
          }else {
          
          return (
            <li key={user.id}>
              <Link to={ "users/" + user.id }>
                <h4>{ user.username.charAt(0).toUpperCase() +
                    user.username.slice(1) }</h4>
                </Link>
            </li>);
          }
      // });
    };//displayUsers
      return (<div className="users-page">
        <ul className="users-index">
          {self.state.users.map(function(user){
              return displayUsers(user);
            })
          }

        </ul>
      </div>);
  }
});//UsersIndex
module.exports = UsersIndex;

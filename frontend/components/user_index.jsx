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

  displayUsers: function(user){
    var link = user.id === UserStore.currentUser().id ? "/" : "users/"+user.id;

    if (user.id === UserStore.currentUser().id){
      return (<li key={user.id} className="user-item">
        <Link to={ "/"}>
          <h4>{ user.username.charAt(0).toUpperCase() +
              user.username.slice(1) }</h4>
          </Link>
      </li>);
    }
    else {
      return (<li key={user.id} className="user-item">
          <Link to={ "users/" + user.id }>
            <h4>{ user.username.charAt(0).toUpperCase() +
                user.username.slice(1) }</h4>
            </Link>
        </li>);
      }
  },

  render: function(){

    if (!this.state.users){
      return (<div><i class="fa fa-spinner fa-pulse fa-3x fa-fw margin-bottom"></i>
    <span class="sr-only">Loading...</span></div>);

    }

    var self = this;

      return (<div id="slideout-users">
      <i className="hamburger"></i>
      <p>Friends</p>
      <div id="slideout-inner">
        <ul className="users-index">
          {self.state.users.map(function(user){
              return self.displayUsers(user);
            })
          }
        </ul>
        </div>
      </div>);
  }
});//UsersIndex
module.exports = UsersIndex;

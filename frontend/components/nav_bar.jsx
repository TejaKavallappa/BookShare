//React
var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
var Link = require('react-router').Link;
//Components
var LoginForm = require('./login_form');
var CurrentUserState = require('../mixins/current_user_state');
//actions
var UserActions = require('../actions/user_actions');

var NavBar = React.createClass({
  mixins: [CurrentUserState],

  logout: function(event){
    event.preventDefault();
    UserActions.logout();
    hashHistory.push("/");
  },
  guestLogin: function(){
    UserActions.login({username: "alice", password: "bookshares"});
  },
  render: function(){
    var self = this;
    var display = function() {
      //If user logged in then display sign out button
      if (self.state.currentUser){
        return (
          <ul className="header-list">
          <li>Hi, {self.state.currentUser.username}</li>
          <li onClick={self.logout}>Sign Out</li>
          </ul>);
      }
      else{
        return (<ul className="header-list">
          <li><a href="#/login">Log In</a></li>
          <li><a href="#/signup">Sign Up</a></li>
          <li><a href="#" onClick={self.guestLogin}>Demo User</a></li>
        </ul>);
      }
    };
    return (
      <div>
        <header className="header">
          <div className="header-logo">
            <Link to={ "/" }>
             <h1>BookShare</h1>
            </Link>
            </div>
          <nav className="header-nav">
            {display()}
          </nav>
        </header>
      </div>
    );
  }
});
module.exports = NavBar;

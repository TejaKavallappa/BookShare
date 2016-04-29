//React
var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
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
  },

  render: function(){
    var self = this;
    var display = function() {
      //If user logged in then display sign out button
      if (self.state.currentUser){
        return (
          <ul>
          <li onClick={self.logout}><button >Sign Out</button></li>
          </ul>);
      }
      else{
        return (<ul>
          <li><a href="#/login">Log In</a></li>
          <li><a href="#/signup">Sign Up</a></li>
          <li><a href="#">Demo User</a></li>
        </ul>);
      }
    };
    return (
      <div>
        <header className="header">
          <a href="/">
            <div className="left-nav"> <h1>BookShare</h1> </div>
          </a>
          <nav className="nav-bar">
            {display()}
          </nav>
        </header>
      </div>
    );
  }
});
module.exports = NavBar;

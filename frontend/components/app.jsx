//React
var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
//Components
var LoginForm = require('./login_form');
var CurrentUserState = require('../mixins/current_user_state');
var NavBar = require('./nav_bar');
//actions
var UserActions = require('../actions/user_actions');


var App = React.createClass({
  mixins: [CurrentUserState],

  render: function(){
    return (<div>
        <NavBar/>
        {this.props.children}
      </div>
    );//return
  }//render
});
module.exports = App;

// <header className="header">
//   <a href="/">
//     <div className="left-nav"> <h1>BookShare</h1> </div>
//   </a>
//   <nav className="nav-bar">
//     {display()}
//   </nav>
// </header>

// logout: function(event){
//   event.preventDefault();
//   UserActions.logout();
// },
//
// render: function(){
//   var self = this;
//   var display = function() {
//     if (self.state.currentUser){
//       return (<ul>
//         <li onClick={self.logout}><button >Sign Out</button></li>
//       </ul>);
//     }
//     else{
//       return (<ul>
//         <li><a href="#/login">Log In</a></li>
//         <li><a href="#/signup">Sign Up</a></li>
//         <li><a href="#">Demo User</a></li>
//       </ul>);
//     }
//   };

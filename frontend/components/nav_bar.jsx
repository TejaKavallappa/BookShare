//React
var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
var Link = require('react-router').Link;
var Modal = require('react-modal');
//Components
var LoginForm = require('./login_form');
var CurrentUserState = require('../mixins/current_user_state');
//actions
var UserActions = require('../actions/user_actions');

var modalStyle = {
  overlay: {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    position        : 'fixed',
    top             : '150px',
    left            : '150px',
    right           : '150px',
    bottom          : '100px',
    border          : '1px solid #ccc',
    borderRadius    : '20px',
    padding         : '20px',
    height          : '300px',
    width           : '400px',
    margin          : '0 auto'
  }
};

var NavBar = React.createClass({
  mixins: [CurrentUserState],

  getInitialState: function(){
    return ({loginModalOpen: false, signupModalOpen: false});
  },

  closeLoginModal: function(){
    this.setState({ loginModalOpen: false });
  },
  closeSignupModal: function(){
    this.setState({ signupModalOpen: false });
  },

  openLoginModal: function(){
    this.setState({ loginModalOpen: true });
  },

  openSignupModal: function(){
    this.setState({ signupModalOpen: true });
  },

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

            <li> <a href="#" >
              Hi, {self.state.currentUser.username}
            </a>
            </li>

          <li> <a href="#/requests"> Requests</a></li>
          <li><a href="#/request-status">Requests Made</a></li>
          <li onClick={self.logout}>Sign Out</li>
          </ul>);
      }
      else{
        return (<ul className="header-list">

          <Modal
            isOpen={self.state.loginModalOpen}
            onRequestClose={self.closeLoginModal}
            style={modalStyle}>
            <LoginForm authAction="login"/>
          </Modal>

          <Modal
            isOpen={self.state.signupModalOpen}
            onRequestClose={self.closeSignupModal}
            style={modalStyle}>
            <LoginForm authAction="signup"/>
          </Modal>

          <li onClick={self.openLoginModal}>Log In</li>
          <li onClick={self.openSignupModal}>Sign Up</li>
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

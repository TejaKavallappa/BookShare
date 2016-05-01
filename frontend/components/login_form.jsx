//react
var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

//actions
var UserActions = require('../actions/user_actions');
//mixin
var CurrentUserState = require('../mixins/current_user_state');
//stores
var UserStore = require('../stores/user_store');

var BookIndex = require('./book_index');
var LoginForm = React.createClass({

  mixins: [CurrentUserState],

  handleSubmit: function(event){
    event.preventDefault();
    UserActions[this.props.routes[1].path]({
      username: this.state.username,
      password: this.state.password
    });
  },
  componentDidUpdate: function(){
    if (this.state.currentUser){
      // hashHistory.push("books");
      hashHistory.push("/");
    }
  },
  logout: function(event){
    event.preventDefault();
    UserActions.logout();
  },

  usernameChange: function(event){
    this.state.username = event.target.value;
  },
  passwordChange: function(event){
    this.state.password = event.target.value;
  },

  errors: function(){
    if (!this.state.userErrors){
      return;
    }
    var err = this.state.userErrors;
    return (
      <ul>
        {Object.keys(err).map(function(key, i) {
          return (<li key={i}> {err[key]} </li>);
        })
      }
      </ul>
    );
  },

  form: function(){
    //If already logged in do not do anything
    if (this.state.currentUser){
      return;
    }
    var self = this;
    var insertButton = function(){
      var loginAction = self.props.routes[1].path;
      if (loginAction === "login"){
        return (<button value={loginAction} type="submit">
          Log In
        </button>);
      } else {
        return (<button value={loginAction} type="submit">
          Sign Up
        </button>);
      }
    };
    // this.props.location.pathname
    return (
      <div id="login-form">
      <form onSubmit={this.handleSubmit} >

        <section >

          <label>Username&nbsp;
          <input type="text" onChange={this.usernameChange}></input><br/>
          </label>
          <br/>
          <label>
            Password&nbsp;
          <input type="password" onChange={this.passwordChange}></input><br/>
          </label>

        </section>

        <br/>
          {insertButton()}
      </form>
      </div>
    );//return
  },//form
  render: function(){

    var self = this;
    var showBooks = function() {
      if (self.state.currentUser){
        return <BookIndex/>;
      }
    };

    return (<div id='login-form'>
    {this.form()}
    {this.errors()}
    {showBooks()}
  </div>);

  }
});

module.exports = LoginForm;

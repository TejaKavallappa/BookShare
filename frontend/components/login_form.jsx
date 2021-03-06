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

var LoginForm = React.createClass({

  mixins: [CurrentUserState],

  handleSubmit: function(event){
    event.preventDefault();
    UserActions[this.props.authAction]({
      username: this.state.username,
      password: this.state.password
    });
  },
  componentDidUpdate: function(){
    if (this.state.currentUser){
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
    return (<div className="error">
      <ul>
        {Object.keys(err).map(function(key, i) {
          return (<li key={i}> {err[key]} </li>);
        })
      }
      </ul>
      </div>
    );
  },

  form: function(){
    //If already logged in do not do anything
    if (this.state.currentUser){
      return;
    }
    var self = this;
    var insertButton = function(){
      var loginAction = self.props.authAction;
      if (loginAction === "login"){
        return (<button className="btn" value={loginAction} type="submit">
          Log In
        </button>);
      } else {
        return (<button className="btn" value={loginAction} type="submit">
          Sign Up
        </button>);
      }
    };

    return (
      <div className="login-form">
        <h1>BookShare</h1>
        <form onSubmit={this.handleSubmit} >
          <input
            placeholder="Username"
            type="text"
            onChange={this.usernameChange}>
          </input>
          <br/>

          <input
            placeholder="Password"
            type="password"
            onChange={this.passwordChange}>
          </input>
          <br/>

          {insertButton()}
      </form>
      </div>
    );//return
  },//form

  render: function(){
    return (<div id='login-panel'>
      {this.form()}
      {this.errors()}
    </div>);

  }
});


module.exports = LoginForm;

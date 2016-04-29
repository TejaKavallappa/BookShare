var React = require('react');

var UserActions = require('../actions/user_actions');
var CurrentUserState = require('../mixins/current_user_state');

var LoginForm = React.createClass({

  mixins: [CurrentUserState],

  handleSubmit: function(event){
    event.preventDefault();
    UserActions[this.props.routes[1].path]({
      username: this.state.username,
      password: this.state.password
    });
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
  greeting: function(){
		if (!this.state.currentUser) {
			return;
		}
		return (
			<div>
				<h2>Hi, {this.state.currentUser.username}!</h2>
				<input type="submit" value="logout" onClick={this.logout}/>
			</div>
		);
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
      <form onSubmit={this.handleSubmit}>

        <section>

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
    return (<div id='login-form'>
      {this.greeting()}
      {this.form()}
      {this.errors()}
    </div>);
  }
});

module.exports = LoginForm;

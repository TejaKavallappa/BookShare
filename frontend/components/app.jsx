//React
var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

//Components
var LoginForm = require('./login_form');
var CurrentUserState = require('../mixins/current_user_state');
var NavBar = require('./nav_bar');
var Footer = require('./footer');
//actions
var UserActions = require('../actions/user_actions');


var App = React.createClass({
  mixins: [CurrentUserState],

  render: function(){
    return (<div className="app">
        <NavBar/>
        {this.props.children}
        <Footer/>
      </div>);//return
  }//render
});
module.exports = App;

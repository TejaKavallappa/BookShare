var React = require('react');
var UserActions = require('../actions/user_actions');
//stores
var UserStore = require('../stores/user_store');
//components
var Splash = require('./splash');
var Home = require('./home');

var AuthPermit = React.createClass({
  getInitialState: function(){
    return ({currentUser: {}});
  },
  componentDidMount: function(){
    this.userListener = UserStore.addListener(this.getLoggedInUser);
    UserActions.fetchCurrentUser();
  },
  componentWillUnmount: function(){
    this.userListener.remove();
  },
  getLoggedInUser: function(){
    this.setState({currentUser: UserStore.currentUser()});
  },
  render: function(){
    if(UserStore.currentUser()){
      return <Home/>;
    }
    else{
      return<Splash/>;
    }
  }
});

module.exports = AuthPermit;

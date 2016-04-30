var React = require('react');
var UserActions = require('../actions/user_actions');
//stores
var UserStore = require('../stores/user_store');
//components
var Splash = require('./splash');
var BookIndex = require('./book_index');


var AuthPermit = React.createClass({
  render: function(){
    if(UserStore.currentUser()){
      return (<div><BookIndex/></div>);
    }
    else{
    return(<div><Splash/></div>);}
  }
});

module.exports = AuthPermit;

var React = require('react');
//react router
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
//actions
var ClientActions = require('../actions/client_actions');
var UserActions = require('../actions/user_actions');
//stores
var UserStore = require('../stores/user_store');
//components
var BookIndexItem = require('./book_index_item');
var BookIndex = require('./book_index');
var BookStore = require('../stores/book_store');
var BookForm = require('./book_form');
var UsersIndex = require('./user_index');
var UserBooks = require('./user_book_index');

var Home = React.createClass({
  render: function(){
    var self = this;

      return (<div className="home-page">
      <div><UserBooks/></div>

      {this.props.children}
      </div>);
  }
});


module.exports = Home;

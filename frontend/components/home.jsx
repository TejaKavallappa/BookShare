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
var UserBooks = require('./user_book_index');

var Home = React.createClass({
  render: function(){

      return (<div>
          <div className="books-list"><UserBooks/></div>

          {this.props.children}
        </div>);
  }
});
module.exports = Home;

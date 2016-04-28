//React
var React = require('react');
var ReactDOM = require('react-dom');
//Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
//Components
var BookIndex = require('./components/book_index');
var BookDetail = require('./components/book_detail');
var LoginForm = require('./components/login_form');
var CurrentUserState = require('./mixins/current_user_state');



var App = React.createClass({
  mixins: [CurrentUserState],
  render: function(){
    var self = this;
    var display = function() {
      if (self.state.currentUser){
        return self.props.children;
      }
    };
    return (
      <div>
        <header><h1>BookShare</h1></header>
          <LoginForm/>
          {display()}
      </div>
    );
  }
});

var Router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={BookIndex}/>
      <Route path="/api/books" component={BookIndex}/>
      <Route path="/api/books/:bookId" component={BookDetail}/>
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('root');
  ReactDOM.render(Router, root);
});

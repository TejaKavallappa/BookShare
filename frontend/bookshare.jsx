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
var App = require('./components/app');

var Routerr = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="login" component={LoginForm}/>
      <Route path="signup" component={LoginForm}/>

      <Route path="books" component={BookIndex}>
        <Route path=":bookId" component={BookDetail}/>
      </Route>

    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('root');
  ReactDOM.render(Routerr, root);
});

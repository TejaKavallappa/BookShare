//React
var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');
//Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
//Components
var AuthPermit = require('./components/auth_permit');
var BookIndex = require('./components/book_index');
var UserBooks = require('./components/user_book_index');
var BookDetail = require('./components/book_detail');
var UserBookDetail = require('./components/user_book_detail');
var BookEdit = require('./components/book_edit');
var LoginForm = require('./components/login_form');
var CurrentUserState = require('./mixins/current_user_state');
var UserActions = require('./actions/user_actions');
var App = require('./components/app');

var Routerr = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={AuthPermit}/>
        <Route path="login" component={LoginForm}/>
        <Route path="signup" component={LoginForm}/>

        <Route path="users/:userId" component={UserBooks}>
          <Route path=":bookId" component={UserBookDetail}/>
        </Route>

        <Route path="books" component={BookIndex}>
          <Route path=":bookId" component={BookDetail}/>
          <Route path=":bookId/edit" component={BookEdit}/>
        </Route>

    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('root');
  // Modal.setAppElement(document.body);
  ReactDOM.render(Routerr, root);
});

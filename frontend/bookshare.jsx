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
//actions
var UserActions = require('./actions/user_actions');
//Components
var AuthPermit = require('./components/auth_permit');
var UserBooks = require('./components/user_book_index');
var UserBorrows = require('./components/user_borrows');
var UserMadeBorrows = require('./components/user_made_borrows');
var App = require('./components/app');

var Routerr = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={AuthPermit}/>

        <Route path="requests" component={UserBorrows}/>
        <Route path="request-status" component={UserMadeBorrows}/>
        <Route path="users/:userId" component={UserBooks}/>

    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('root');
  Modal.setAppElement(document.body);
  ReactDOM.render(Routerr, root);
});

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
var UserBookIndexItem = require('./user_book_index_item');
var BookStore = require('../stores/book_store');
var BookForm = require('./book_form');
var UsersIndex = require('./user_index');
var CurrentUserMixin = require('../mixins/current_user_state');

var UserBooks = React.createClass({
  mixins: [CurrentUserMixin],

  getInitialState: function(){
    var user = 0;
    if (this.props.params){
      user = this.props.params.userId;
    }
    return {books: [], displayUser: user};
  },

  componentWillMount: function(){
    this.userBooksListener = BookStore.addListener(this.getUserBooks);
    this.userStoreListener = UserStore.addListener(this.setDisplayUser);

    ClientActions.fetchUserBooks(this.state.displayUser);
  },

  componentWillReceiveProps: function(newProps){
    if (newProps.params !== this.props.params){
      this.setState({displayUser: newProps.params.userId});
      ClientActions.fetchUserBooks(newProps.params.userId);
    }
  },

  componentWillUpdate: function(){
    if (!UserStore.currentUser()){
      hashHistory.push("/");
    }
  },

  componentWillUnmount: function(){
      this.userStoreListener.remove();
      this.userBooksListener.remove();
  },

  setDisplayUser: function(){
    if (this.state.displayUser === 0 && UserStore.currentUser()){
      this.setState({displayUser: UserStore.currentUser().id});
    }
  },

  getUserBooks: function(){
    this.setState({books: BookStore.all()});
  },

  render: function(){

    if(!this.state.books){
      return (<div>Loading</div>);
    }

    var self = this;

    var owner = function(){
      if (UserStore.findUser(self.state.displayUser)){
        var name = UserStore.findUser(self.state.displayUser).username;
        name = name.charAt(0).toUpperCase()+ name.slice(1);
        return (<h2>{name + "'s books'"}</h2>);
      }
      else {
          return (<h2>
            Fetching user..
          </h2>);
        }//else
    }; //owner


    // {this.displayForm()}
      return (<div className="book-index">

      {this.props.children}
      <div className="users-list"><UsersIndex/></div>
        <ul className="books-index">
          {owner()}
          {
            self.state.books.map(function(book){
                return (
                  <div key={book.id}>
                    <UserBookIndexItem
                      userId={self.state.displayUser}
                      book={book}/>
                  </div>);
            })
          }
        </ul>
      </div>);
  }
});

module.exports = UserBooks;

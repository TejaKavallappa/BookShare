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
//mixins
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

  displayForm: function(){
    if(UserStore.currentUser()){
      return <BookForm/>;
    }
    else{
      return (<button  className="bk-button" onClick={this.addBook}>
        Add a new book to my collection!
      </button>);
    }
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
        return (<h2>{name + "'s books"}</h2>);
      }
      else {

        return (<div>
          <i class="fa fa-spinner fa-pulse fa-3x fa-fw margin-bottom"></i>
      <span class="sr-only">Loading...</span></div>);
          // return (<h2>
          //   Fetching user..
          // </h2>);
        }//else
    }; //owner


    // {this.displayForm()}
      return (<div className="home-page">
      <div className="book-index">
      {owner()}
      {this.props.children}
        <ul className="books-index">
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
      </div>
      <div className="users-list"><UsersIndex/></div>

      </div>);
  }
});

module.exports = UserBooks;

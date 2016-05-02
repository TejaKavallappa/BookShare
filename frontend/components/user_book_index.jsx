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

var UserBooks = React.createClass({

  getInitialState: function(){
    var userId = 0;
    if (this.props.params){
      userId = this.props.params.userId;
    }
    return {books: [], currentUser: {}, userId: userId};
  },


  componentWillReceiveProps: function(newProps){
    if (newProps.params !== this.props.params){
      this.state.userId = newProps.params.userId;
      this.fromPropsListener = BookStore.addListener(this.getUserBooks);
      ClientActions.fetchUserBooks(this.state.userId);
    }
  },
  componentWillMount: function(){
    this.userBooksListener = BookStore.addListener(this.getUserBooks);
    ClientActions.fetchUserBooks(this.state.userId);
  },

  componentWillUnmount: function(){
    if(this.userBooksListener){
      this.userBooksListener.remove();
    }
    if (this.fromPropsListener){
      this.fromPropsListener.remove();
    }
  },

  _onChange: function(newProps){
    this.setState({userId: newProps.params.userId});
  },

  getUser: function(){
    this.setState({currentUser: UserStore.currentUser()});
  },

  getUserBooks: function(){
    this.setState({books: BookStore.all()});
  },

  requestBook: function(){
    this.setState({showForm: true});
  },
  

  render: function(){
    if(this.state.userId !== 0 && !UserStore.findUser(this.state.userId)){
      return <div>couldn't find userId</div>;
    }

    if (!this.state.books || !UserStore.currentUser()){
      return (<div>there are no books in my state</div>);
      //Insert loading icon here
    }

    var self = this;
    var owner = function(){
      if (self.state.userId === 0){
        var name = UserStore.currentUser().username;
        name = name.charAt(0).toUpperCase()+ name.slice(1);
        return (<h2>{name + "'s books'"}</h2>);
      }
      else {
          return (<h2>
            {UserStore.findUser(self.state.userId).username + "'s books"}
          </h2>);
        }//else
    }; //owner


    // {this.displayForm()}
      return (<div className="book-index">

      {this.props.children}
      {owner()}
        <ul className="books-index">
          {
            self.state.books.map(function(book){
                return (
                  <div key={book.id}>
                    <UserBookIndexItem
                      userId={self.props.params.userId}
                      book={book}/>
                  </div>);
            })
          }
        </ul>
        <div><UsersIndex/></div>
      </div>);
  }
});

module.exports = UserBooks;

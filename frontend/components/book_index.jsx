var React = require('react');
//react router
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
//actions
var ClientActions = require('../actions/client_actions');
//components
var BookIndexItem = require('./book_index_item');
var BookStore = require('../stores/book_store');
var BookForm = require('./book_form');
var CurrentUserState = require('../mixins/current_user_state');

var Books = React.createClass({
  mixins: [CurrentUserState],

  getInitialState: function(){
    return {books: [], showForm: false};
  },

  componentDidMount: function(){
    this.bookListener = BookStore.addListener(this.getBooks);
    ClientActions.fetchAllBooks();
  },

  componentWillUnmount: function(){
    this.bookListener.remove();
  },

  getBooks: function(){
    this.setState({books: BookStore.all()});
  },
  addBook: function(){
    this.setState({showForm: true});
  },
  displayForm: function(){
    
    if(this.state.showForm){
      return <BookForm/>;
    }
    else{
      return (<button  className="bk-button" onClick={this.addBook}>
        Add a new book to my collection!
      </button>);
    }
  },

  render: function(){
    if (!this.state.books){
      return (<div>Loading</div>);
    }
    // if(this.state.currentUser){
      return (<div className="book-index">
      {this.displayForm()}
      {this.props.children}
        <ul>
          {
            this.state.books.map(function(book){
            return (
              <div key={book.id}>
                <BookIndexItem book={book}/>
              </div>);
          })
        }
        </ul>
      </div>);
  }
});

module.exports = Books;

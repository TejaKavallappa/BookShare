var React = require('react');
//actions
var ClientActions = require('../actions/client_actions');
//components
var BookIndexItem = require('./book_index_item');
var BookStore = require('../stores/book_store');
var BookForm = require('./book_form');

var Books = React.createClass({
  getInitialState: function(){
    return {books: []};
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

  render: function(){
    if (!this.state.books){
      return (<div>Loading</div>);
    }
    return (<div className="book-index">
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
      {this.props.children}
      <BookForm />
    </div>);
  }
});

module.exports = Books;

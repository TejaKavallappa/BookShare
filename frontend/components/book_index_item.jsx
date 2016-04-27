var React = require('react');
var hashHistory = require('react-router').hashHistory;

var ClientActions = require('../actions/client_actions');
var BookIndex = require('./book_index');
var BookStore = require('../stores/book_store');

var Book = React.createClass({

  editBook: function(event){
    event.preventDefault();
    var url = "/api/books/"+this.props.book.id;
    hashHistory.push(url);
  },
  deleteBook: function(event){
    event.preventDefault();
    ClientActions.removeBook(this.props.book.id);
  },
  render: function(){
    var book = this.props.book;
    //In the edit form add facility to let user upload an images
    return (
      <li>
          // <img src={book.image_url} alt={book.title} style="width:150px"/>
          <Link to={ "/api/books/" + book.id.toString() }> {book.title} </Link>
          <button onClick={this.editBook}>Edit</button>
          <button onClick={this.deleteBook}>Delete</button>
    </li>
  ); //return
  }
});

module.exports = Book;

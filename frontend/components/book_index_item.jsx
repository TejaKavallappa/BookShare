var React = require('react');
var hashHistory = require('react-router').hashHistory;
var Link = require('react-router').Link;

var ClientActions = require('../actions/client_actions');
var BookIndex = require('./book_index');
var BookStore = require('../stores/book_store');

var Book = React.createClass({

  editBook: function(event){
    event.preventDefault();
    var url = "/books/"+this.props.book.id+"/edit";
    hashHistory.push(url);
  },
  deleteBook: function(event){
    event.preventDefault();
    ClientActions.removeBook(this.props.book.id);
  },
  render: function(){
    var book = this.props.book;
    return (
      <div className='book-detail-item'>
      <li>
          <Link to={ "/books/" + book.id.toString() }>
           <img src={book.image_url} alt={book.title} />
           </Link>
           
           <h3>{book.title}</h3>

          <button
            onClick={this.editBook}
            className="bk-button"
            bookId={book.id}>Edit</button>
          <button
            onClick={this.deleteBook}
            className="bk-button">Delete</button>
    </li>
    </div>
  ); //return
  }
});

module.exports = Book;

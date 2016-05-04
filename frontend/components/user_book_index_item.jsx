//react
var React = require('react');
var hashHistory = require('react-router').hashHistory;
var Link = require('react-router').Link;
//actions
var ClientActions = require('../actions/client_actions');
var BorrowActions = require('../actions/borrow_actions');
//components
var BookIndex = require('./book_index');
//stores
var BookStore = require('../stores/book_store');
var UserStore = require('../stores/user_store');

var UserBook = React.createClass({
  getInitialState: function(){
    return ({disabled: false});
  },
  requestBook: function(event){
    // event.target.disabled = true;
    // this.disabled = true;
    this.setState({disabled: true});
    var borrow = {
      borrower_id: UserStore.currentUser().id,
      owner_id: this.props.book.owner_id,
      book_id: this.props.book.id,
      request_status: "pending"
    };
    BorrowActions.requestBook(borrow);
  },
  editBook: function(event){
    event.preventDefault();
    var url = "/books/"+this.props.book.id+"/edit";
    hashHistory.push(url);
  },
  deleteBook: function(event){
    event.preventDefault();
    ClientActions.removeBook(this.props.book.id);
  },
  displayButton: function(book){
    if (UserStore.currentUser().id == book.owner_id){
      return (<div><button
        onClick={this.editBook}
        className="bk-button"
        bookId={book.id}>Edit</button>
      <button
        onClick={this.deleteBook}
        className="bk-button">Delete
      </button></div>);
    }
    else{
      return(<div><button
        disabled={this.state.disabled}
        onClick={this.requestBook}
        className="bk-button"
        bookId={book.id}>Borrow
      </button></div>);
    }
  },

  render: function(){
    var book = this.props.book;
    return (
      <div className='book-detail-item'>
      <li>

      <Link to={ "/users/" + book.owner_id + "/" + book.id.toString() }>
       <img src={book.image_url} alt={book.title} />
      </Link>

       <h3>{book.title}</h3>

       {this.displayButton(book)}
    </li>
    </div>
  ); //return
  }
});

module.exports = UserBook;

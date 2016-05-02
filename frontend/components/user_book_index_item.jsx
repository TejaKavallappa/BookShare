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

  requestBook: function(event){
    event.preventDefault();
    var borrow = {
      borrower_id: UserStore.currentUser(),
      owner_id: this.props.book.owner_id,
      book_id: this.props.book.id,
      request: "pending"
    };
    BorrowActions.requestBook(borrow);
  },


  render: function(){
    var book = this.props.book;
    return (
      <div className='book-detail-item'>
      <li>
          <Link to={ "/users/" + this.props.userId + "/" + book.id.toString() }>
           <img src={book.image_url} alt={book.title} />
           </Link>

           <h3>{book.title}</h3>

             <button
               onClick={this.requestBook}
               className="bk-button"
               bookId={book.id}>Borrow
             </button>


    </li>
    </div>
  ); //return
  }
});

module.exports = UserBook;

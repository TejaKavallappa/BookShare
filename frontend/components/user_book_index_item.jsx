//react
var React = require('react');
var hashHistory = require('react-router').hashHistory;
var Link = require('react-router').Link;
var Modal = require('react-modal');
//actions
var ClientActions = require('../actions/client_actions');
var BorrowActions = require('../actions/borrow_actions');
//components
var EditForm = require('./book_edit');
var ViewBookDetail = require('./view_book_detail');
//stores
var BookStore = require('../stores/book_store');
var UserStore = require('../stores/user_store');

var modalStyle = {
  overlay: {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    position        : 'fixed',
    top             : '50px',
    left            : '150px',
    right           : '150px',
    bottom          : '100px',
    border          : '1px solid #ccc',
    borderRadius    : '20px',
    padding         : '20px',
    height          : '300px',
    width           : '400px',
    margin          : '0 auto'
  }
};


var UserBook = React.createClass({

  getInitialState: function(){
    return ({disabled: false, editModalOpen: false, viewModalOpen: false});
  },

  closeEditModal: function(){
    this.setState({ editModalOpen: false });
  },

  openEditModal: function(){
    this.setState({ editModalOpen: true });
  },

  closeViewModal: function(){
    this.setState({ viewModalOpen: false });
  },

  openViewModal: function(){
    this.setState({ viewModalOpen: true });
  },

  requestBook: function(event){
    this.setState({disabled: true});
    var borrow = {
      borrower_id: UserStore.currentUser().id,
      owner_id: this.props.book.owner_id,
      book_id: this.props.book.id,
      request_status: "pending"
    };
    BorrowActions.requestBook(borrow);
  },

  deleteBook: function(event){
    event.preventDefault();
    ClientActions.removeBook(this.props.book.id);
  },

  displayButton: function(book){
    if (UserStore.currentUser().id == book.owner_id){
      return (<div className="edit-delete">

        <Modal
          isOpen={this.state.editModalOpen}
          onRequestClose={this.closeEditModal}
          style={modalStyle}>
          <EditForm bookId={book.id} onSubmit={this.closeEditModal}/>
        </Modal>

        <button
        onClick={this.openEditModal}
        className="bk-button"
        bookId={book.id}>Edit</button>
        <button
        onClick={this.deleteBook}
        className="bk-button">Delete
        </button></div>);
    }
    else{
      if (book.borrow_status === "pending"){
        this.state.disabled = true;
      }
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
    var title = book.title;
    if (book.title.length > 25){
      title = title.substring(0,22) + "...";
    }
    return (
      <div className='book-detail-item'>

        <Modal
          isOpen={this.state.viewModalOpen}
          onRequestClose={this.closeViewModal}
          style={modalStyle}>
          <ViewBookDetail book={book}
            onEditClick={this.closeViewModal}/>
        </Modal>


       <img src={book.image_url} alt={book.title} onClick={this.openViewModal}
         bookId={book.id}/>
       <section className="caption">
         <h3>{title}</h3>
         {this.displayButton(book)}
       </section>

    </div>
  ); //return
  }
});


module.exports = UserBook;

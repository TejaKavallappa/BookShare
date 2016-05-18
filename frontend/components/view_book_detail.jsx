var React = require('react');
var hashHistory = require('react-router').hashHistory;
var Modal = require('react-modal');
//actions
var ClientActions = require('../actions/client_actions');
var BorrowActions = require('../actions/borrow_actions');
//component
var EditForm = require('./book_edit');
//stores
var BookStore = require('../stores/book_store');
var UserStore = require('../stores/user_store');
//mixin
var CurrentUserState = require('../mixins/current_user_state');

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
    height          : '400px',
    width           : '400px',
    margin          : '0 auto'
  }
};

var ViewBookDetail = React.createClass({

  getInitialState: function(){
    return ({editModalOpen: false, disabled: false});
  },

  closeEditModal: function(){
    this.props.onEditClick();
    this.setState({ editModalOpen: false });
  },

  openEditModal: function(){
    this.setState({ editModalOpen: true });
  },

  deleteBook: function(event){
    event.preventDefault();
    ClientActions.removeBook(this.props.book.id);
  },

  requestBook: function(event){

    var borrow = {
      borrower_id: UserStore.currentUser().id,
      owner_id: this.props.book.owner_id,
      book_id: this.props.book.id,
      request_status: "pending"
    };
    BorrowActions.requestBook(borrow);
    BookStore.tempBorrow(this.props.book.id);
    this.setState({disabled: true});
  },


  render: function(){
    var book = this.props.book;
    var self = this;

    if (!book){
      return (<div>
        <i class="fa fa-spinner fa-pulse fa-3x fa-fw margin-bottom"></i>
    <span class="sr-only">Loading...</span></div>);

    }

    var display = function() {
      // If viewer is the owner then allow to edit/delete book
        if (UserStore.currentUser().id == book.owner_id){
        return (<div>
          <button className="btn" onClick={self.openEditModal}
            bookId={book.id}>Edit</button>
          <button className="btn" onClick={self.deleteBook}>Delete</button>
        </div>);
      }
        else{
          // if book has been borrowed, disable the button and change text\
          if(self.props.book.borrow_status === 'pending' ||
            self.props.book.borrow_status === 'borrowed'){
            return(<button
              className="btn"
              disabled={true}
              bookId={book.id}>
              Borrowed
            </button>);
          }
          else
          {
          return(<div><button
            className="btn"
            disabled={self.state.disabled}
            onClick={self.requestBook}>
            Borrow
          </button></div>);
        }
      }
    };

    //In the edit form add facility to let user upload an images
    return (
         <div className="book">

           <Modal
             isOpen={this.state.editModalOpen}
             onRequestClose={this.closeEditModal}
             style={modalStyle}>
             <EditForm bookId={book.id} onSubmit={this.closeEditModal}/>
           </Modal>

            <h3> {book.title} </h3><br/>
            <h4>by {book.author}</h4><br/>
            <p>{book.description ? book.description : ""}</p><br/>
            {display()}
          </div>
      );
  }//render
});

module.exports = ViewBookDetail;

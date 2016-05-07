// DEPRECATED
var React = require('react');
var hashHistory = require('react-router').hashHistory;
//actions
var ClientActions = require('../actions/client_actions');
//stores
var BookStore = require('../stores/book_store');
//mixin
var CurrentUserState = require('../mixins/current_user_state');

var BookDetail = React.createClass({

  getInitialState: function(){
    return {book: BookStore.find(this.props.bookId)};
  },

  componentDidMount: function(){
    this.bookListener = BookStore.addListener(this._onChange);
    ClientActions.getSingleBook(parseInt(this.props.bookId));
  },

  componentWillUnmount: function(){
    this.bookListener.remove();
  },

  componentWillReceiveProps: function(newProps){
    ClientActions.getSingleBook(parseInt(newProps.bookId));
  },

  _onChange: function(){
    this.setState(this.getStateFromStore);
  },

  getStateFromStore: function(){
    this.setState({book: BookStore.find(this.props.bookId)});
  },

  editBook: function(event){
    event.preventDefault();
    var url = "/api/books/"+this.props.bookId;
    hashHistory.push(url);
  },

  deleteBook: function(event){
    event.preventDefault();
    ClientActions.removeBook(this.props.bookId);
  },
  render: function(){
    var book = this.state.book;
    var self = this;

    if (!book){
      return (<div>
        <i class="fa fa-spinner fa-pulse fa-3x fa-fw margin-bottom"></i>
    <span class="sr-only">Loading...</span></div>);

    }

    var display = function() {
        return (<div>
          <button className="btn" onClick={self.editBook}>Edit</button>
          <button className="btn" onClick={self.deleteBook}>Delete</button>
        </div>
      );
    };

    //In the edit form add facility to let user upload an images
    return (
         <div className="book">
            <h3> {book.title} </h3>
            <h4>{book.author}</h4>
            <p>{book.description ? book.description : ""}</p>
          </div>
      );
  }//render
});
// {display()}

module.exports = BookDetail;

var React = require('react');
var hashHistory = require('react-router').hashHistory;
//actions
var ClientActions = require('../actions/client_actions');
//component
var BookIndex = require('./book_index');
//stores
var BookStore = require('../stores/book_store');
//mixin
var CurrentUserState = require('../mixins/current_user_state');

var BookDetail = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function(){
    return {book: BookStore.find(this.props.params.bookId)};
  },

  componentDidMount: function(){
    this.bookListener = BookStore.addListener(this._onChange);
    ClientActions.getSingleBook(parseInt(this.props.params.bookId));
  },

  componentWillUnmount: function(){
    this.bookListener.remove();
  },

  componentWillReceiveProps: function(newProps){
    ClientActions.getSingleBook(parseInt(newProps.params.bookId));
  },

  _onChange: function(){
    this.setState(this.getStateFromStore);
  },

  getStateFromStore: function(){
    this.setState({book: BookStore.find(this.props.params.bookId)});
  },

  editBook: function(event){
    event.preventDefault();
    var url = "/api/books/"+this.props.params.bookId;
    hashHistory.push(url);
  },

  deleteBook: function(event){
    event.preventDefault();
    ClientActions.removeBook(this.props.params.bookId);
  },
  render: function(){
    var book = this.state.book;
    var self = this;

    if (!book){
      return <div>Loading...</div>;
    }

    var display = function() {
      if (self.state.currentUser === self.state.book.owner_id){
        return (<div>
          <button onClick={self.editBook}>Edit</button>
        <button onClick={self.deleteBook}>Delete</button>
        </div>
      );
      }
    };
    //In the edit form add facility to let user upload an images
    return (
         <div className="book">
            <h3> {book.title} </h3>
            <h4>{book.author}</h4>
            <p>{book.description ? book.description : ""}</p>
            {display()}
          </div>
      );
  }//render
});

module.exports = BookDetail;

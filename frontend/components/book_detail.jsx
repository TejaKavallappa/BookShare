var React = require('react');
var hashHistory = require('react-router').hashHistory;

var ClientActions = require('../actions/client_actions');
var BookIndex = require('./book_index');
var BookStore = require('../stores/book_store');

var BookDetail = React.createClass({
  getInitialState: function(){
    return {book: BookStore.find(this.props.params.bookId)};
  },
  componentDidMount: function(){
    this.bookListener = BookStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.bookListener.remove();
  },
  componentWillReceiveProps: function(newProps){
    ClientActions.getBook(parseInt(newProps.params.bookId));
  },
  _onChange: function(){
    this.setState(this.getStateFromStore);
  },
  getStateFromStore: function(){
    this.setState({book: BookStore.find(this.props.params.bookid)});
  },
  render: function(){
    var book = this.state.book;
    //In the edit form add facility to let user upload an images
    return (
         <div id="book">
            <h3> {book.title} </h3>
            <h4>{book.author}</h4>

            <p>{book.description ? book.description : ""}</p>

          </div>
      );
  }//render
});

// <img src={book.image_url} alt={book.title} style={{width: '250px'}}/>
module.exports = BookDetail;

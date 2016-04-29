var React = require('react');
var hashHistory = require('react-router').hashHistory;
//actions
var ClientActions = require('../actions/client_actions');
//mixin
var CurrentUserState = require('../mixins/current_user_state');
//stores
var BookStore = require('../stores/book_store');
var BookForm = React.createClass({
  mixins: [CurrentUserState],

  getInitialState: function(){
    var bookToEdit = BookStore.find(this.props.params.bookId);
    if (bookToEdit){
     return({author: bookToEdit.author,
                id: bookToEdit.id,
                title: bookToEdit.title,
                description: bookToEdit.description,
                image_url: bookToEdit.image_url});
    }
  },

  componentDidMount: function(){
    this.bookListener = BookStore.addListener(this.handleChange);
    ClientActions.getSingleBook(this.props.params.bookId);
  },
  componentWillUnmount: function(){
    this.bookListener.remove();
  },
  handleChange: function(){
    var bookToEdit = BookStore.find(this.props.params.bookId);
    if (bookToEdit){
     this.setState({author: bookToEdit.author,
                title: bookToEdit.title,
                description: bookToEdit.description,
                image_url: bookToEdit.image_url});
    }
  },

  authorChange: function(event){
    this.setState({author: event.target.value});
  },

  titleChange: function(event){
    this.setState({title: event.target.value});
  },

  descriptionChange: function(event){
    this.setState({description: event.target.value});
  },

  handleSubmit: function(event){
    event.preventDefault();
    //Remove this logic
    var ownerId = this.state.currentUser? this.state.currentUser.id : 1;
    var postData = {
      id: this.state.id,
      author: this.state.author,
      title: this.state.title,
      description: this.state.description,
      owner_id: ownerId
    };
    ClientActions.updateBook(postData);
    hashHistory.push("/books");
  },

  render: function(){
    return (<div className="book-form">
      <h3>Edit Book</h3>
      <form onSubmit={this.handleSubmit}>

        <label>Title
        <input
          type="text"
          value={this.state.title}
          onChange={this.titleChange}/>
        </label>
        <br></br>
        <label>Author
        <input
          type="text"
          value={this.state.author}
          onChange={this.authorChange}/>
        </label>
        <br></br>
        <label>Description
        <textarea
          value={this.state.description}
          onChange={this.descriptionChange}/>
        </label>
        <br></br>
        <input type="submit" value="Update Book!"/>
      </form>
    </div>);
  },

});
module.exports = BookForm;

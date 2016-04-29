var React = require('react');
//actions
var ClientActions = require('../actions/client_actions');
//mixin
var CurrentUserState = require('../mixins/current_user_state');

var BookForm = React.createClass({
  mixins: [CurrentUserState],

  getInitialState: function(){
    return ({
      author: "",
      title: "",
      description: "",
      image_url: ""
    });
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
      author: this.state.author,
      title: this.state.title,
      description: this.state.description,
      owner_id: ownerId
    };
    ClientActions.addBook(postData);
    this.setState({
      author: "",
      title: "",
      description: "",
      image_url: ""
    });
  },

  render: function(){
    return (<div id="new-book">
      <h3>New Book</h3>
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
        <input type="submit" value="Add New Book!"/>
      </form>
    </div>);
  },

});
module.exports = BookForm;

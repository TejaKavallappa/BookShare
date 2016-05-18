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
    this.props.onSubmit();
    this.setState({
      author: "",
      title: "",
      description: "",
      image_url: ""
    });
  },

  render: function(){
    return (<div className="book-form">
      <form onSubmit={this.handleSubmit}>

        <input
          placeholder="Title"
          type="text"
          value={this.state.title}
          onChange={this.titleChange}/>
        <br/>

        <input
          placeholder="Author"
          type="text"
          value={this.state.author}
          onChange={this.authorChange}/>
        <br/>

        <textarea
          placeholder="Description"
          value={this.state.description}
          onChange={this.descriptionChange || ""}/>
        <br/>


        <input type="submit" className="btn" value="Add New Book!"/>
        <br/>
      </form>
    </div>);
  },

});
module.exports = BookForm;

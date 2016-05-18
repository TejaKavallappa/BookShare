var React = require('react');
var Modal = require('react-modal');
//react router
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
//actions
var ClientActions = require('../actions/client_actions');
var UserActions = require('../actions/user_actions');
//stores
var UserStore = require('../stores/user_store');
//components
var UserBookIndexItem = require('./user_book_index_item');
var BookStore = require('../stores/book_store');
var BookForm = require('./book_form');
var UsersIndex = require('./user_index');
//mixins
var CurrentUserMixin = require('../mixins/current_user_state');

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

var UserBooks = React.createClass({
  mixins: [CurrentUserMixin],

  closeCreateModal: function(){
    this.setState({ createModalOpen: false });
  },

  openCreateModal: function(){
    this.setState({ createModalOpen: true });
  },

  getInitialState: function(){
    var user = 0;
    if (this.props.params){
      user = this.props.params.userId;
    }
    return {books: [], displayUser: user, createModalOpen: false};
  },

  componentWillMount: function(){
    this.userBooksListener = BookStore.addListener(this.getUserBooks);
    this.userStoreListener = UserStore.addListener(this.setDisplayUser);

    ClientActions.fetchUserBooks(this.state.displayUser);
  },

  componentWillReceiveProps: function(newProps){
    if (newProps.params !== this.props.params){
      this.setState({displayUser: newProps.params.userId});
      ClientActions.fetchUserBooks(newProps.params.userId);
    }
  },

  componentWillUpdate: function(){
    if (!UserStore.currentUser()){
      hashHistory.push("/");
    }
  },

  componentWillUnmount: function(){
      this.userStoreListener.remove();
      this.userBooksListener.remove();
  },

  setDisplayUser: function(){
    if (this.state.displayUser === 0 && UserStore.currentUser()){
      this.setState({displayUser: UserStore.currentUser().id});
    }
  },

  getUserBooks: function(){
    this.setState({books: BookStore.all()});
  },

  displayForm: function(){
    if(UserStore.currentUser() &&
      this.state.displayUser === UserStore.currentUser().id &&
      this.state.books){
      return <div>
        <Modal
          isOpen={this.state.createModalOpen}
          onRequestClose={this.closeCreateModal}
          style={modalStyle}>
          <BookForm onSubmit={this.closeCreateModal}/>
        </Modal>
        <button
          onClick={this.openCreateModal} className="new-book">
          New Book
        </button>

      </div>;
    }//if
  },

  owner: function(){
    if (UserStore.findUser(this.state.displayUser)){
      var name = UserStore.findUser(this.state.displayUser).username;
      name = name.charAt(0).toUpperCase()+ name.slice(1);
      return (<h2>{name + "'s books"}</h2>);
    }
    else {
      return (<div>
        <i class="fa fa-spinner fa-pulse fa-3x fa-fw margin-bottom"></i>
        <span class="sr-only">Loading...</span></div>);
        }//else
      }, //owner

  render: function(){

    if(!this.state.books){
      return (<div>Loading</div>);
    }
    var self = this;
      return (<div className="home-page">
      <UsersIndex/>
      <div className="book-index">
        {this.displayForm()}
        {this.owner()}
        {this.props.children}
        <ul className="books-index">
          {
            self.state.books.map(function(book){
                return (
                  <div key={book.id}>
                    <UserBookIndexItem
                      userId={self.state.displayUser}
                      book={book}/>
                  </div>);
            })
          }
        </ul>

      </div>
      </div>);
  }
});

module.exports = UserBooks;

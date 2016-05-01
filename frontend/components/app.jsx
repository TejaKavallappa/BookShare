//React
var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
// var Modal = require('react-modal');
//Components
var LoginForm = require('./login_form');
var CurrentUserState = require('../mixins/current_user_state');
var NavBar = require('./nav_bar');
//actions
var UserActions = require('../actions/user_actions');
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

var App = React.createClass({
  mixins: [CurrentUserState],
  // getInitialState: function(){
  //   return ({modalOpen: false});
  // },
  // closeModal: function(){
  //   this.setState({ modalOpen: false });
  // },
  // openModal: function(){
  //   this.setState({ modalOpen: true });
  // },
  render: function(){
    return (<div>
        <NavBar/>
        {this.props.children}
      </div>);//return
  }//render
});
module.exports = App;

//   <Modal
//     isOpen={this.state.modalOpen}
//     onRequestClose={this.closeModal}
//     style={modalStyle}>
//
//   </Modal>
// <LoginForm/>

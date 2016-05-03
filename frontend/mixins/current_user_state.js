var UserStore = require('../stores/user_store');
var UserActions = require('../actions/user_actions');

var CurrentUserState = {
  getInitialState: function(){
    return {
      currentUser: UserStore.currentUser(),
      userErrors: UserStore.errors()};
  },
  componentWillMount: function(){
    this.userListener = UserStore.addListener(this.updateUser);
    if (!this.state.currentUser){
      UserActions.fetchCurrentUser();
    }
  },
  componentWillUnmount: function(){
    this.userListener.remove();
  },
  updateUser: function(){
    this.setState({
      currentUser: UserStore.currentUser(),
      userErrors: UserStore.errors()
    });
  }
};

module.exports = CurrentUserState;

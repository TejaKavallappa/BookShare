var UserStore = require('../stores/user_store');
var UserActions = require('../actions/user_actions');

var CurrentUserState = {
  getInitialState: function(){
    return {
      currentUser: UserStore.currentUser(),
      errors: UserStore.errors()};
  },
  componentDidMount: function(){
    UserStore.addListener(this.updateUser);
    if (!this.state.currentUser){
      UserActions.fetchCurrentUser();
    }
  },
  updateUser: function(){
    this.setState({
      currentUser: UserStore.currentUser(),
      errors: UserStore.errors()});
  }
};

module.exports = CurrentUserState;

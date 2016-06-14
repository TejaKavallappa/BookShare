var React = require('react');

var Splash = React.createClass({
  render: function(){
    return(<div className="splash">
    <div className="about">
    <p>Welcome to BookShare!<br/>
      A community for users to share books.<br/></p>
    <p className="sub-title">
    Showcase your personal book collection and borrow your friends books.
    <br/></p>
    </div>
    </div>);}

});

module.exports = Splash;

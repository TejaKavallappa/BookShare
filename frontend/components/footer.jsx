//React
var React = require('react');

var Footer = React.createClass({
  render: function(){
    return (<footer>
      <a href="https://github.com/TejaKavallappa/BookShare"
        target="_blank" alt="Link to Teja's github">
      <i className="github-icon">
        &nbsp;
      </i>
      </a>
    </footer>);
  }
});
module.exports = Footer;

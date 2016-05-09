//React
var React = require('react');

var Footer = React.createClass({
  render: function(){
    return (<footer>
      <address>
        <a href="mailto:tejakavallappa@gmail.com">
        Teja Kavallappa
        </a>
      </address>
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

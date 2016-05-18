var React = require('react');

var Home = React.createClass({
  render: function() {
    if (this.props.categories.length === 0) {
      return false;
    }

    return (
      <div>
        <h2>主頁</h2>
      </div>
    );
  }
});

module.exports = Home;

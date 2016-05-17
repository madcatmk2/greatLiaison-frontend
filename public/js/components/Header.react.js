var $ = require('jquery');
var React = require('react');
var Link = require('react-router').Link;
var GllAPIUtils = require('../utils/GllAPIUtils');

var Header = React.createClass({

  render: function() {
    var categories = this.props.categories.map(function(category) {
      return (
        <li key={category.categoryId}>
          <Link to={"/category/" + category.categoryId}>
            {category.categoryName}
          </Link>
        </li>
      );
    });

    return (
      <div>
        <h1>G&amp;L 皮膚護理產品系列</h1>
        <ul>
          <li><Link to="/">主頁</Link></li>
          {categories}
          <li><Link to="/cart">購物車</Link></li>
        </ul>
        <hr/>
      </div>
    );
  }
});

module.exports = Header;

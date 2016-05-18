var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({

  render: function() {
    if (this.props.categories.length === 0) {
      return false;
    }

    var categories = this.props.categories.map(function(category) {
      return (
        <li key={category.categoryId}>
          <Link
            to={"/category/" + category.categoryId}
            activeStyle={{ fontWeight: 'bold' }}
          >
            {category.categoryName}
          </Link>
        </li>
      );
    });

    var cartString = '購物車';
    if (this.props.cart.length > 0) {
      cartString += '(' + this.props.cart.length + '件物品)';
    }

    return (
      <div>
        <h1>G&amp;L 皮膚護理產品系列</h1>
        <ul>
          <li>
            <Link to="/" activeStyle={{ fontWeight: 'bold' }}>
              主頁
            </Link>
          </li>
          {categories}
          <li>
            <Link to="/cart" activeStyle={{ fontWeight: 'bold' }}>
              {cartString}
            </Link>
          </li>
        </ul>
        <hr/>
      </div>
    );
  }
});

module.exports = Header;

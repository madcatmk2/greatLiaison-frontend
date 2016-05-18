var React = require('react');
var Link = require('react-router').Link;

var ProductInCategory = React.createClass({
  render: function() {
    var product = this.props.product;

    return (
      <li style={{margin: '20px'}}>
        <Link to={"/product/" + product._id}>
          <img src={"/images/" + product.sku + ".jpg"} />
        </Link>
        <Link to={"/product/" + product._id}>
          <span style={{display: "block"}}>{product.name}</span>
        </Link>
        <span>{product.sku}</span>
        <span style={{display: "block"}}>{product.size}</span>
        <span style={{display: "block"}}>{product.origin}製造</span>
      </li>
    );
  }
});

module.exports = ProductInCategory;

var React = require('react');
var ProductInCategory = require('./ProductInCategory.react');
var ProductStore = require('../stores/ProductStore');

function getCategoryProductsFromStore(categoryId) {
  return {
    products: ProductStore.getProductsByCategory(categoryId)
  };
};

var Category = React.createClass({

  getInitialState: function() {
    return getCategoryProductsFromStore(this.props.params.categoryId);
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState(getCategoryProductsFromStore(nextProps.params.categoryId));
  },

  render: function() {
    if (!this.state.products) {
      return false;
    }

    var productEntries = this.state.products.map(function(product) {
      return <ProductInCategory key={product._id} product={product} /> ;
    });

    return (
      <div>
        <h3>{this.props.categories[this.props.params.categoryId]}</h3>
        <ul>
          {productEntries}
        </ul>
      </div>
    );
  }
});

module.exports = Category;

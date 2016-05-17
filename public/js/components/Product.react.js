var $ = require('jquery');
var React = require('react');
var ProductStore = require('../stores/ProductStore');

function getProductFromStore(id) {
  return {
    product: ProductStore.getProduct(id)
  };
};

var Product = React.createClass({

  getInitialState: function() {
    return getProductFromStore(this.props.params.productId);
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState(getProductFromStore(nextProps.params.productId));
  },

  loadDescription: function() {
    return { __html: this.state.product.description };
  },

  render: function() {
    if (!this.state.product) {
      return false;
    }

    return (
      <div>
        <img src={"/images/" + this.state.product.sku + ".jpg"} />
        <h3>{this.state.product.name}</h3>
        <h3>{this.state.product.englishName}</h3>
        <span dangerouslySetInnerHTML={this.loadDescription()} />
        <ul>
          <li>產品編號: {this.state.product.sku}</li>
          <li>容量: {this.state.product.size}</li>
          <li>製造地: {this.state.product.origin}</li>
          <li>價錢: {this.state.product.fullPrice}</li>
          <li>用法: {this.state.product.instructions}</li>
        </ul>
      </div>
    );
  }
});

module.exports = Product;

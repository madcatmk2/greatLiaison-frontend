var _ = require('underscore');
var React = require('react');

var ProductStore = require('../stores/ProductStore');
var GllAPIUtils = require('../utils/GllAPIUtils');

function getProductFromStore(id) {
  return {
    product: ProductStore.getProduct(id),
    quantity: 1
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

    var options = _.range(1, 11).map(function(i) {
      return <option key={i} value={i}>{i}</option>;
    });

    return (
      <div>
        <img src={'/images/' + this.state.product.sku + '.jpg'} />
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
        <select
          name='quantity'
          defaultValue={this.state.quantity}
          onChange={this._onChangeQuantity}
        >
          {options}
        </select>
        <div onClick={this._onClickAdd} style={
          {
            backgroundColor: '#f90',
            color: '#fff',
            cursor: 'hand',
            width: '100px',
            height: '30px',
            marginTop: '10px'
          }
        }>
          加入購物車
        </div>
      </div>
    );
  },


  /*
   * Event handlers
   */
  _onChangeQuantity: function(event) {
    this.setState({ quantity: event.target.value });
  },

  _onClickAdd: function() {
    GllAPIUtils.addItemToCart({
      productId: this.props.params.productId,
      quantity: parseInt(this.state.quantity)
    });
  }

});

module.exports = Product;

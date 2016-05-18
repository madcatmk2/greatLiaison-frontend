var React = require('react');
var Link = require('react-router').Link;
var ProductStore = require('../stores/ProductStore');
var GllAPIUtils = require('../utils/GllAPIUtils');

var ShoppingCartItem = React.createClass({
  getInitialState: function() {
    return {
      product: ProductStore.getProduct(this.props.item.productId),
      quantity: this.props.item.quantity
    };
  },

  render: function() {
    if (!this.state.product) {
      return false;
    }

    var wrapLink = function(src) {
      return (
        <Link
          to={"/product/" + this.state.product._id}
          style={
            {
              textDecoration: 'none',
              color: '#000'
            }
          }>
          {src}
        </Link>
      );
    }.bind(this);

    return (
      <div style={
        {
          display: 'inline-block',
          margin: '10px'
        }
      } >
        {wrapLink(<img src={'/images/' + this.state.product.sku + '.jpg'} />)}
        {wrapLink(<h3>{this.state.product.name}</h3>)}
        {wrapLink(<h4>{this.state.product.englishName}</h4>)}
        <p>數目:</p>
        <input
          type="text"
          value={this.state.quantity}
          onChange={this._onChangeQuantity}
        />
        <span onClick={this._updateItemInCart} style={
          {
            backgroundColor: '#999',
            color: '#fff',
            cursor: 'hand',
            width: '80px',
            marginLeft: '10px'
          }
        }>更改</span>
        <div onClick={this._removeItem} style={
          {
            backgroundColor: '#999',
            color: '#fff',
            cursor: 'hand',
            width: '100px',
            marginTop: '10px'
          }
        }>
          刪除
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

  _updateItemInCart: function() {
    GllAPIUtils.updateItemInCart({
      productId: this.props.item.productId,
      quantity: parseInt(this.state.quantity)
    });
  },

  _removeItem: function() {
    GllAPIUtils.removeItemFromCart(this.props.item);
  }

});

module.exports = ShoppingCartItem;

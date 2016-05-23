var React = require('react');
var GllAPIUtils = require('../utils/GllAPIUtils');
var GllAppUtils = require('../utils/GllAppUtils');
var ShoppingCartItem = require('./ShoppingCartItem.react');

var ShoppingCart = React.createClass({

  render: function() {
    var cart = this.props.cart.map(function(item) {
      return <ShoppingCartItem key={item.productId} item={item} /> ;
    });

    if (cart.length === 0) {
      cart = '你的購物車沒有任何產品';
    }

    return (
      <div>
        <h2>購物車</h2>
        <div>{cart}</div>
        <div>
          總數: ${this.props.cartSubTotal}
        </div>
        <div onClick={this._onClickCheckout} style={
          {
            backgroundColor: '#0c0',
            color: '#fff',
            cursor: 'hand',
            width: '80px',
            height: '30px',
            marginTop: '20px'
          }
        }>
          結帳
        </div>
        <div onClick={this._onClickClear} style={
          {
            backgroundColor: '#999',
            color: '#fff',
            cursor: 'hand',
            width: '80px',
            height: '30px',
            marginTop: '20px'
          }
        }>
          清除購物車
        </div>
      </div>
    );
  },

  /**
   * Event handler for 'change' events
   */
  _onClickCheckout: function() {
    GllAppUtils.startCheckout();
  },

  _onClickClear: function() {
    GllAPIUtils.removeAllFromCart();
  }

});

module.exports = ShoppingCart;

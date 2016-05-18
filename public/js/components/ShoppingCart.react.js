var React = require('react');
var CartStore = require('../stores/CartStore');
var ShoppingCartItem = require('./ShoppingCartItem.react');
var GllAPIUtils = require('../utils/GllAPIUtils');

function getStateFromStores() {
  return {
    cart: CartStore.getShoppingCart()
  };
};

var ShoppingCart = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  render: function() {
    if (!this.state.cart) {
      return false;
    }

    var cart = this.state.cart.map(function(item) {
      return <ShoppingCartItem key={item.productId} item={item} /> ;
    });

    if (cart.length === 0) {
      cart = '你的購物車沒有任何產品';
    }

    return (
      <div>
        <h2>購物車</h2>
        <div>{cart}</div>
        <div onClick={this.onClickCheckout} style={
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
  _onChange: function() {
    this.setState(getStateFromStores());
  },

  _onClickClear: function() {
    GllAPIUtils.removeAllFromCart();
  }

});

module.exports = ShoppingCart;

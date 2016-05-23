var browserHistory = require('react-router').browserHistory;

module.exports = {

  /*
   * Shopping Cart
   */
  startCheckout: function() {
    browserHistory.push('/checkout');
  },

  returnToCart: function() {
    browserHistory.push('/cart');
  }

};

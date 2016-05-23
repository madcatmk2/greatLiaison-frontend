var $ = require('jquery');
var browserHistory = require('react-router').browserHistory;
var APIConfig = require('../constants/GllAppConstants').APIConfig;
var GllProductActionCreators = require('../actions/GllProductActionCreators');
var GllCartActionCreators = require('../actions/GllCartActionCreators');

function _httpRequest(options, cb) {
  $.ajax({
    method: options.method || 'GET',
    url: options.url,
    data: options.data || null,
    xhrFields: {
      withCredentials: true
    },
    dataType: 'json',
    success: cb,
    error: function(xhr, status, err) {
      console.log('Error: ' + xhr.responseText);
      console.error(options.url, status, err.toString());
    }
  });
}

module.exports = {

  initData: function() {
    this.getAllProducts();
    this.getAllCategories();
    this.getShoppingCart();
  },

  /*
   * Products & categories
   */
  getAllProducts: function() {
    var options = {
      method: 'GET',
      url: APIConfig.host + '/api/products'
    };

    _httpRequest(options, function(data) {
      GllProductActionCreators.receiveAllProducts(data.products);
    });
  },

  getAllCategories: function() {
    var options = {
      method: 'GET',
      url: APIConfig.host + '/api/products/categories'
    };

    _httpRequest(options, function(data) {
      GllProductActionCreators.receiveAllCategories(data.categories);
    });
  },

  /*
   * Shopping cart
   */
  getShoppingCart: function() {
    var options = {
      method: 'GET',
      url: APIConfig.host + '/api/cart'
    };

    _httpRequest(options, function(data) {
      GllCartActionCreators.updateCart(data.cart);
    });
  },

  addItemToCart: function(item) {
    var options = {
      method: 'POST',
      url: APIConfig.host + '/api/cart',
      data: item,
    };

    _httpRequest(options, function(data) {
      GllCartActionCreators.updateCart(data.cart);
      browserHistory.push('/cart');
    });
  },

  removeItemFromCart: function(item) {
    var options = {
      method: 'DELETE',
      url: APIConfig.host + '/api/cart/' + item.productId
    };

    _httpRequest(options, function(data) {
      GllCartActionCreators.updateCart(data.cart);
    });
  },

  updateItemInCart: function(item) {
    var options = {
      method: 'PUT',
      url: APIConfig.host + '/api/cart/' + item.productId,
      data: {
        quantity: item.quantity
      }
    };

    _httpRequest(options, function(data) {
      GllCartActionCreators.updateCart(data.cart);
    });
  },

  removeAllFromCart: function() {
    var options = {
      method: 'DELETE',
      url: APIConfig.host + '/api/cart'
    };

    _httpRequest(options, function(data) {
      GllCartActionCreators.updateCart(data.cart);
    });
  },

  /*
   * Checkout process
   */
  completeCheckout: function(details) {
    var options = {
      method: 'POST',
      url: APIConfig.host + '/api/orders',
      data: details,
    };

    _httpRequest(options, function(data) {
      if (data) {
        if (data.redirectURL) {
          window.location.replace(data.redirectURL);
        } else {
          this.getShoppingCart();
          browserHistory.push('/ordersuccess?orderNumber=' + data.orderNumber);
        }
      }
    }.bind(this));
  }

};

var _ = require('underscore');
var GllAppDispatcher = require('../dispatcher/GllAppDispatcher');
var GllAPIUtils = require('../utils/GllAPIUtils');
var ActionTypes = require('../constants/GllAppConstants').ActionTypes;
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';

var _cart = {};

function _addToCart(newItem) {
  var matchingItem = _cart[newItem.productId];
  if (!matchingItem) {
    _cart[newItem.productId] = newItem;
  } else {
    console.error("Item already exists in cart");
  }
}

function _loadCart(cart) {
  _cart = {};
  for (var id in cart) {
    _addToCart(cart[id]);
  }
}

var CartStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(cb) {
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener: function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },

  getShoppingCart: function() {
    var results = [];

    for (var id in _cart) {
      results.push(_cart[id]);
    }

    return results;
  }

});

CartStore.dispatchToken = GllAppDispatcher.register(function(action) {

  switch(action.type) {
    case ActionTypes.UPDATE_CART:
      _loadCart(action.cart);
      CartStore.emitChange();
      break;

    default:
      // do nothing
  }

});

module.exports = CartStore;

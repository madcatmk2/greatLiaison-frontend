var _ = require('underscore');
var GllAppDispatcher = require('../dispatcher/GllAppDispatcher');
var GllAPIUtils = require('../utils/GllAPIUtils');
var ActionTypes = require('../constants/GllAppConstants').ActionTypes;
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';

var _products = {};
var _categories = {};

function _addProducts(newProducts) {
  _.map(newProducts, function(product, id) {
    if (!_products[id]) {
      _products[id] = product;
    }
  });
}

function _addCategories(newCategories) {
  _.map(newCategories, function(category, id) {
    if (!_categories[id]) {
      _categories[id] = category;
    }
  });
}

var ProductStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(cb) {
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener: function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },

  getProduct: function(productId) {
    return _products[productId];
  },

  getAllProducts: function() {
    var productsList = [];
    for (var id in _products) {
      productsList.push(_products[id]);
    }
    return productsList;
  },

  getAllCategories: function() {
    var categoryList = [];
    for (var id in _categories) {
      categoryList.push(_categories[id]);
    }
    return categoryList;
  },

  getProductsByCategory: function(categoryId) {
    var results = [];
    for (var id in _products) {
      if (_products[id].categoryId === categoryId) {
        results.push(_products[id]);
      }
    }
    return results;
  }

});

ProductStore.dispatchToken = GllAppDispatcher.register(function(action) {

  switch(action.type) {

    case ActionTypes.RECEIVE_PRODUCTS:
      _addProducts(action.products);
      ProductStore.emitChange();
      break;

    case ActionTypes.RECEIVE_CATEGORIES:
      _addCategories(action.categories);
      ProductStore.emitChange();
      break;

    default:
      // do nothing
  }

});

module.exports = ProductStore;

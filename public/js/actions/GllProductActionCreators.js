var GllAppDispatcher = require('../dispatcher/GllAppDispatcher');
var ActionTypes = require('../constants/GllAppConstants').ActionTypes;

module.exports = {

  receiveAllProducts: function(products) {
    GllAppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_PRODUCTS,
      products: products
    });
  },

  receiveAllCategories: function(categories) {
    GllAppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_CATEGORIES,
      categories: categories
    });
  }

};

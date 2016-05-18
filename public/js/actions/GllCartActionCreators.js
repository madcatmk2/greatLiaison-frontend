var GllAppDispatcher = require('../dispatcher/GllAppDispatcher');
var ActionTypes = require('../constants/GllAppConstants').ActionTypes;

module.exports = {

  updateCart: function(cart) {
    GllAppDispatcher.dispatch({
      type: ActionTypes.UPDATE_CART,
      cart: cart
    });
  },

};

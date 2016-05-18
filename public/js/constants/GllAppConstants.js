var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({

    // Products & categories
    RECEIVE_CATEGORIES: null,
    RECEIVE_PRODUCTS: null,

    // Shopping cart
    UPDATE_CART: null

  }),

  APIConfig: {
    host: 'http://localhost:8080'
  }

};

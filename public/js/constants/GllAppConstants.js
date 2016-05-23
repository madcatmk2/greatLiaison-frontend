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
    host: process.env.NODE_ENV === 'development' ?
      'http://localhost:8080' : 'http://108.218.104.23:8080'
  }

};

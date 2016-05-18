var keyMirror = require('keymirror');
var domain, port;

if (process.env.NODE_ENV === 'production') {
  domain = '108.218.104.23';
  port = '8082';
} else {
  domain = 'localhost';
  port = '8080';
}

var host = 'http://' + domain + ':' + port;

module.exports = {

  ActionTypes: keyMirror({

    // Products & categories
    RECEIVE_CATEGORIES: null,
    RECEIVE_PRODUCTS: null,

    // Shopping cart
    UPDATE_CART: null

  }),

  APIConfig: {
    host: host
  }

};

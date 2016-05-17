var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    RECEIVE_CATEGORIES: null,
    RECEIVE_PRODUCTS: null
  }),

  APIConfig: {
    host: 'http://localhost:8080'
  }

};

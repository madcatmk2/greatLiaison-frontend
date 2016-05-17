var $ = require('jquery');
var APIConfig = require('../constants/GllAppConstants').APIConfig;
var GllProductActionCreators = require('../actions/GllProductActionCreators');

function _httpRequest(options, cb) {
  $.ajax({
    method: options.method,
    url: options.url,
    success: cb,
    error: function(xhr, status, err) {
      console.error(url, status, err.toString());
    }
  });
}

module.exports = {

  initData: function() {
    this.getAllProducts();
    this.getAllCategories();
  },

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
  }

  // createMessage: function(message, threadName) {
  //   // simulate writing to a database
  //   var rawMessages = JSON.parse(localStorage.getItem('messages'));
  //   var timestamp = Date.now();
  //   var id = 'm_' + timestamp;
  //   var threadID = message.threadID || ('t_' + Date.now());
  //   var createdMessage = {
  //     id: id,
  //     threadID: threadID,
  //     threadName: threadName,
  //     authorName: message.authorName,
  //     text: message.text,
  //     timestamp: timestamp
  //   };
  //   rawMessages.push(createdMessage);
  //   localStorage.setItem('messages', JSON.stringify(rawMessages));

  //   // simulate success callback
  //   setTimeout(function() {
  //     ChatServerActionCreators.receiveCreatedMessage(createdMessage);
  //   }, 0);
  // }

};

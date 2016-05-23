var React = require('react');
var GllAPIUtils = require('../utils/GllAPIUtils');

// Need to trigger the cart to be cleared

var OrderSuccess = React.createClass({
  componentDidMount: function() {
    GllAPIUtils.getShoppingCart();
  },

  render: function() {
    var orderNumber = this.props.location.query.orderNumber;

    if (!orderNumber) {
      return (
        <div>錯誤: 沒有帳單號碼</div>
      );
    } else {
      return (
        <div>
          <h2>購買成功!</h2>
          <p>你的帳單號碼是: {orderNumber}</p>
        </div>
      );
    }
  }

});

module.exports = OrderSuccess;

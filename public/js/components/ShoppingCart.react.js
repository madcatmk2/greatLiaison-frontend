var $ = require('jquery');
var React = require('react');

var ShoppingCart = React.createClass({

  getInitialState: function() {
    return {
      count: 0
    }
  },

  loadCart: function(newProductId) {
    this.setState({ count: this.state.count + 1 });
  //   var url = 'http://localhost:8080/api/products/'
  //     + (newProductId ? newProductId : this.props.params.productId);

  //   $.ajax({
  //     url: url,
  //     dataType: 'json',
  //     cache: false,
  //     success: function(data) {
  //       this.setState({
  //         product: data.product
  //       });
  //     }.bind(this),
  //     error: function(xhr, status, err) {
  //       console.error(url, status, err.toString());
  //     }.bind(this)
  //   });
  },

  componentWillMount: function() {
    this.loadCart();
  },

  componentWillReceiveProps: function() {
    this.loadCart();
  },

  render: function() {
    return (
      <div>
        Shopping Cart: {this.state.count}
      </div>
    );
  }
});

module.exports = ShoppingCart;


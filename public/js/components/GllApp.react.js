var assign = require('object-assign');
var React = require('react');
var Header = require('./Header.react');
var ProductStore = require('../stores/ProductStore');
var CartStore = require('../stores/CartStore');

function getProductStateFromStore() {
  return {
    categories: ProductStore.getAllCategories()
  };
}

function getCartStateFromStore() {
  return {
    cart: CartStore.getShoppingCart(),
    cartSubTotal: CartStore.getSubTotal()
  };
}

var GllApp = React.createClass({

  getInitialState: function() {
    return assign(getProductStateFromStore(), getCartStateFromStore());
  },

  componentDidMount: function() {
    ProductStore.addChangeListener(this._onChangeProduct);
    CartStore.addChangeListener(this._onChangeCart);
  },

  componentWillUnmount: function() {
    ProductStore.removeChangeListener(this._onChangeProduct);
    CartStore.removeChangeListener(this._onChangeCart);
  },

  render: function() {
    return (
      <div>
        <Header categories={this.state.categories} cart={this.state.cart} />

        {this.props.children && React.cloneElement(this.props.children, {
          categories: this.state.categories,
          cart: this.state.cart,
          cartSubTotal: this.state.cartSubTotal
        })}

      </div>
    );
  },

  /**
   * Event handler for 'change' events
   */
  _onChangeProduct: function() {
    this.setState(getProductStateFromStore());
  },

  _onChangeCart: function() {
    this.setState(getCartStateFromStore());
  }

});

module.exports = GllApp;

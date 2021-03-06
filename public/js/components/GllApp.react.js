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
    cart: CartStore.getShoppingCart()
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
    if (!this.state.categories || !this.state.cart) {
      return false;
    }

    return (
      <div>
        <Header categories={this.state.categories} cart={this.state.cart} />

        {this.props.children && React.cloneElement(this.props.children, {
          categories: this.state.categories,
          cart: this.state.cart,
          cartSubTotal: CartStore.getSubTotal()
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

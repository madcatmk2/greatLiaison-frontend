var React = require('react');
var Header = require('./Header.react');
var ProductStore = require('../stores/ProductStore');

function getStateFromStores() {
  return {
    categories: ProductStore.getAllCategories()
  };
};

var GllApp = React.createClass({

  getInitialState: function() {
    return getStateFromStores();
  },

  componentDidMount: function() {
    ProductStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ProductStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        <Header categories={this.state.categories} />

        {this.props.children && React.cloneElement(this.props.children, {
          categories: this.state.categories
        })}

      </div>
    );
  },

  /**
   * Event handler for 'change' events
   */
  _onChange: function() {
    this.setState(getStateFromStores());
  }
});

module.exports = GllApp;

import $ from 'jquery'
import React from 'react'
import Header from './Header'

export default React.createClass({
  getInitialState() {
    return {
      gll: {}
    }
  },

  loadProducts() {
    const url = '/api/products';
    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({gll: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount() {
    this.loadProducts();
  },

  render() {
    return (
      <div>
        <Header />
        {this.props.children && React.cloneElement(this.props.children, {
          gll: this.state.gll
        })}
      </div>
    );
  }
});

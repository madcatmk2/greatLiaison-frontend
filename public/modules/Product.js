import $ from 'jquery'
import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      product: {}
    }
  },

  loadProduct(newProductId) {
    var url = 'http://localhost:8080/api/products/'
      + (newProductId ? newProductId : this.props.params.productId);

    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({
          product: data.product
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });
  },

  componentWillMount() {
    this.loadProduct();
  },

  componentWillReceiveProps(nextProps) {
    let newProductId = nextProps.params.productId;

    if (this.state.product._id != newProductId) {
      this.loadProduct(newProductId);
    }
  },

  loadDescription() {
    return { __html: this.state.product.description };
  },

  render() {
    if (!this.state.product) {
      return false;
    }

    return (
      <div>
        <img src={"/images/" + this.state.product.sku + ".jpg" } />
        <h3>{this.state.product.name}</h3>
        <h3>{this.state.product.englishName}</h3>
        <span dangerouslySetInnerHTML={this.loadDescription()} />
        <ul>
          <li>產品編號: {this.state.product.sku}</li>
          <li>容量: {this.state.product.size}</li>
          <li>製造地: {this.state.product.origin}</li>
          <li>價錢: {this.state.product.fullPrice}</li>
          <li>用法: {this.state.product.instructions}</li>
        </ul>
      </div>
    );
  }
});

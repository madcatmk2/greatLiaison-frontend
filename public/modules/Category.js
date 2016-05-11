import $ from 'jquery'
import React from 'react'
import ProductInCategory from './ProductInCategory'

export default React.createClass({
  getInitialState() {
    return {
      category: {},
      categoryId: ''
    }
  },

  loadCategory(newCategoryId) {
    var url = 'http://localhost:8080/api/products/categories/'
      + (newCategoryId ? newCategoryId : this.props.params.categoryId);

    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({
          products: data.products,
          categoryId: newCategoryId,
          categoryName: data.categoryName
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });
  },

  componentWillMount() {
    this.loadCategory();
  },

  componentWillReceiveProps(nextProps) {
    let newCategoryId = nextProps.params.categoryId;

    if (this.state.categoryId != newCategoryId) {
      this.loadCategory(newCategoryId);
    }
  },

  render() {
    if (!this.state.products) {
      return false;
    }

    var productEntries = this.state.products.map(function(product) {
      return <ProductInCategory key={product._id} product={product} /> ;
    });

    return (
      <div>
        <h3>{this.state.category.name}</h3>
        <ul>
          {productEntries}
        </ul>
      </div>
    );
  }
});

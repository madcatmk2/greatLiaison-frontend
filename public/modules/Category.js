import $ from 'jquery'
import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      category: {}
    }
  },

  loadCategory(newCategory) {
    var url = '/api/categories/' + (newCategory ? newCategory : this.props.params.categoryName);

    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({
          category: data,
          categoryName: newCategory
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
    let newCategory = nextProps.params.categoryName;

    if (this.state.categoryName != newCategory) {
      this.loadCategory(newCategory);
    }
  },

  render() {
    if (!this.state.category.products) {
      return false;
    }

    var productEntries = this.state.category.products.map(function(product) {
      return (
        <li key={product._id} style={{margin: '20px'}}>
          <img src={"/images/" + product.image} />
          <span style={{display: "block"}}>{product.name}</span>
          <span style={{display: "block"}}>{product.size}</span>
          <span style={{display: "block"}}>{product.origin}製造</span>
        </li>
      );
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
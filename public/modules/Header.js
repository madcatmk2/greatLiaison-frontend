import $ from 'jquery'
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getInitialState() {
    return {
      categories: [],
    }
  },

  loadCategories() {
    var url = 'http://localhost:8080/api/products/categories';

    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({ categories: data.categories });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });
  },

  componentWillMount() {
    this.loadCategories();
  },

  render() {
    if (!this.state.categories) {
      return false;
    }

    var categories = this.state.categories.map(function(category) {
      return (
        <li key={category.categoryId}>
          <Link to={"/category/" + category.categoryId}>
            {category.categoryName}
          </Link>
        </li>
      );
    });

    return (
      <div>
        <h1>G&amp;L 皮膚護理產品系列</h1>
        <ul>
          <li><Link to="/">主頁</Link></li>
          {categories}
        </ul>
        <hr/>
      </div>
    );
  }
});

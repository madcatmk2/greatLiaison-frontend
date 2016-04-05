import React from 'react'

export default React.createClass({
  render() {
    if (!this.props.gll || !this.props.gll.products)
    {
      return false;
    }

    var productEntries = this.props.gll.products.map(function(product) {
      return (
        <li key={product._id} style={{margin: '20px'}}>
          <img src={"images/" + product.image} />
          <span style={{display: "block"}}>{product.name}</span>
          <span>{product.category}</span>
        </li>
      );
    });
    return (
      <ul>
        {productEntries}
      </ul>
    );
  }
});

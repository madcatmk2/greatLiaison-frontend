import React from 'react'

export default React.createClass({
  render() {
    let { _id, image, name, size, origin } = this.props.product;

    return (
      <li style={{margin: '20px'}}>
        <img src={"/images/" + image} />
        <span style={{display: "block"}}>{name}</span>
        <span style={{display: "block"}}>{size}</span>
        <span style={{display: "block"}}>{origin}製造</span>
      </li>
    );
  }
});

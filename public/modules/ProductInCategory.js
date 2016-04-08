import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    let { _id, image, name, size, origin } = this.props.product;

    return (
      <li style={{margin: '20px'}}>
        <Link to={"/product/" + _id}><img src={"/images/" + image} /></Link>
        <Link to={"/product/" + _id}><span style={{display: "block"}}>{name}</span></Link>
        <span style={{display: "block"}}>{size}</span>
        <span style={{display: "block"}}>{origin}製造</span>
      </li>
    );
  }
});

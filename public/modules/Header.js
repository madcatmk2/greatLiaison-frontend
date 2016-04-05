import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>G&amp;L website</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gll">G&amp;L</Link></li>
          <li>Novolo</li>
          <li>G&amp;L Homme</li>
          <li>Glyso-derm</li>
        </ul>
        <hr/>
      </div>
    );
  }
});

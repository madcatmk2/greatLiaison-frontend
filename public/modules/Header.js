import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>G&amp;L 皮膚護理產品系列</h1>
        <ul>
          <li><Link to="/">主頁</Link></li>
          <li><Link to="/category/cleansing">潔膚系列</Link></li>
          <li><Link to="/category/toning">鎖水爽膚系列</Link></li>
          <li><Link to="/category/eyecare">護眼系列</Link></li>
          <li><Link to="/category/skincare">護膚系列</Link></li>
          <li><Link to="/category/essence">精華系列</Link></li>
          <li><Link to="/category/specialcare">特別護理系列</Link></li>
          <li><Link to="/category/sunblock">防曬系列</Link></li>
          <li><Link to="/category/whitening">美白護理系列</Link></li>
          <li><Link to="/category/homme">Homme男士護理系列</Link></li>
          <li><Link to="/category/glysoderm">Glyso-derm系列</Link></li>
        </ul>
        <hr/>
      </div>
    );
  }
});

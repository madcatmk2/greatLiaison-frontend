'use strict';

var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

export class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>G&amp;L website</h1>
        <ul>
          <li>G&amp;L</li>
          <li>Novolo</li>
          <li>G&amp;L Homme</li>
          <li>Glyso-derm</li>
        </ul>
        <hr/>
      </div>
    );
  }
}

export class ProductList extends React.Component {
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
}

export class GreatLiaisonApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {gll: {}};
  }

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
  }

  componentDidMount() {
    this.loadProducts();
  }

  render() {
    return (
      <div>
        <Header />
        <ProductList gll={this.state.gll} />
      </div>
    );
  }
}

ReactDOM.render(
  <GreatLiaisonApp />,
  document.getElementById('container')
);

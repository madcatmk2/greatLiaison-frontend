var React = require('react');
var ReactDOM = require('react-dom');
var reactrouter = require('react-router');
var Router = reactrouter.Router;
var Route = reactrouter.Route;
var browserHistory = reactrouter.browserHistory;
var IndexRoute = reactrouter.IndexRoute;

var Checkout = require('./components/Checkout.react');
var GllApp = require('./components/GllApp.react');
var Home = require('./components/Home.react');
var Category = require('./components/Category.react');
var Product = require('./components/Product.react');
var ShoppingCart = require('./components/ShoppingCart.react');
var GllAPIUtils = require('./utils/GllAPIUtils');

window.React = React; // export for http://fb.me/react-devtools
GllAPIUtils.initData();

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={GllApp}>
      <IndexRoute component={Home}/>
      <Route path='category/:categoryId' component={Category}/>
      <Route path='product/:productId' component={Product}/>
      <Route path='cart' component={ShoppingCart}/>
      <Route path='checkout' component={Checkout}/>
    </Route>
  </Router>,
  document.getElementById('app')
);

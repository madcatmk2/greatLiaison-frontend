import React from 'react'
import { render } from 'react-dom'
import GllApp from './modules/GllApp'
import Home from './modules/Home'
import ProductList from './modules/ProductList'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

render((
  <Router history={browserHistory}>
    <Route path="/" component={GllApp}>
      <IndexRoute component={Home}/>

      <Route path="/gll" component={ProductList}/>
    </Route>
  </Router>
), document.getElementById('app'))

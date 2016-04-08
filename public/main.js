import React from 'react'
import { render } from 'react-dom'
import GllApp from './modules/GllApp'
import Home from './modules/Home'
import Category from './modules/Category'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

render((
  <Router history={browserHistory}>
    <Route path="/" component={GllApp}>
      <IndexRoute component={Home}/>
      <Route path="/category/:categoryName" component={Category}/>

    </Route>
  </Router>
), document.getElementById('app'))

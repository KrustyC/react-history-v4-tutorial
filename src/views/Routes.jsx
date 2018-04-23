import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './scenes/home'
import Docs from './scenes/docs'
import NotFound from './scenes/not-found'

const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/docs" component={Docs} />
    <Route path="*" component={NotFound} />
  </Switch>
)

export default AppRoutes

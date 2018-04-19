import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './scenes/home'
import Basic from './scenes/basic'
import Auth from './scenes/auth'
import NotFound from './scenes/not-found'

const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/basic" component={Basic} />
    <Route path="/auth" component={Auth} />
    <Route path="*" component={NotFound} />
  </Switch>
)

export default AppRoutes

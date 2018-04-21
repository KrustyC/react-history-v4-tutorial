import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { PrivateRoute } from 'routes-templates'

import Auth from './scenes/auth'
import Basic from './scenes/basic'
import Home from './scenes/home'
import NotFound from './scenes/not-found'
import Private from './scenes/private'

const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/basic" component={Basic} />
    <PrivateRoute path="/private" component={Private} />
    <Route path="/auth" component={Auth} />
    <Route path="*" component={NotFound} />
  </Switch>
)

export default AppRoutes

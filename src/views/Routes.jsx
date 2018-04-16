import React from 'react'
import { Switch } from 'react-router-dom'

import { PublicRoute } from 'routes-templates'
import { EmptyLayout } from 'layouts'

import BasicRoutes from './scenes/basic'
import NotFound from './scenes/not-found'

const AppRoutes = () => (
  <Switch>
    <BasicRoutes />
    <PublicRoute layout={EmptyLayout} component={NotFound} />
  </Switch>
)

export default AppRoutes

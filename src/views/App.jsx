import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import { PublicRoute } from 'routes-templates'
import { EmptyLayout } from 'layouts'

import BasicRoutes from './scenes/basic'
import NotFound from './scenes/not-found'

const App = () => (
  <Router basename={process.env.BASE_URL}>
    <Switch>
      <BasicRoutes />
      <PublicRoute layout={EmptyLayout} component={NotFound} />
    </Switch>
  </Router>
)

export default App

import React from 'react'
import { Route, Switch } from 'react-router-dom'

import DefaultLayout from '../layouts/DefaultLayout'

import Home from '../scenes/home'
import History from '../scenes/history'
import Links from '../scenes/links'
import NotFound from '../scenes/not-found'

const AppRoutes = () => (
  <Switch>
    <DefaultLayout exact path="/" component={Home} />
    <DefaultLayout exact path="/history" component={History} />
    <DefaultLayout exact path="/links" component={Links} />
    <Route path="*" component={NotFound} />
  </Switch>
)

export default AppRoutes

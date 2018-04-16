import React from 'react'
import { Switch } from 'react-router-dom'

import Home from './home'
import History from './history'
import Links from './links'

import { DefaultLayout } from 'layouts'
import { PublicRoute } from 'routes-templates'

export default () => (
  <Switch>
    <PublicRoute exact path="/" layout={DefaultLayout} component={Home} />
    <PublicRoute path="/history" layout={DefaultLayout} component={History} />
    <PublicRoute path="/links" layout={DefaultLayout} component={Links} />
  </Switch>
)

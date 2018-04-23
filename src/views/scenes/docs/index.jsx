import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import { PrivateRoute } from 'routes-templates'

import Auth from './auth'
import Basic from './basic'
import Nested from './nested'
import Private from './private'

const Docs = ({ match }) => (
  <Switch>
    <Route path={`${match.path}/auth`} component={Auth} />
    <Route path={`${match.path}/basic`} component={Basic} />
    <Route path={`${match.path}/nested`} component={Nested} />
    <PrivateRoute path={`${match.path}/private`} component={Private} />
  </Switch>
)

Docs.propTypes = {
  match: PropTypes.object.isRequired
}

export default Docs

import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Link, Route } from 'react-router-dom'

import { DefaultLayout } from 'layouts'
import { PrivateRoute } from 'routes-templates'
import { P, LinksContainer } from 'components'

import Login from './login'
import Private from './private'


const Auth = ({ match }) => (
  <DefaultLayout>
    <section>
      <P align="center">
        This page contain the basic stuff (might need to be renamed)
        <br />
        Just click one the Link below to checkout either link or history tutorial
      </P>
      <LinksContainer align="center">
        <Link className="btn btn-primary btn-lg" to={`${match.path}/public`}>Public</Link>
        <Link className="btn btn-lg" to={`${match.path}/private`}>Private</Link>
      </LinksContainer>
    </section>
    <Switch>
      <Route path={`${match.path}/public`} component={Login} />
      <PrivateRoute path={`${match.path}/private`} component={Private} />
    </Switch>
  </DefaultLayout>
)

Auth.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired
  }).isRequired
}

export default Auth

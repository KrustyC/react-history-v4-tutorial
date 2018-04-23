import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'

import { EmptyLayout } from 'layouts'

import AuthContainer from './style'
import Login from './login'

const Auth = ({ match }) => (
  <EmptyLayout>
    <AuthContainer>
      <Switch>
        <Route path={`${match.path}/login`} component={Login} />
        <Redirect to={`${match.path}/login`} />
      </Switch>
    </AuthContainer>
  </EmptyLayout>
)

Auth.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired
  }).isRequired
}

export default Auth

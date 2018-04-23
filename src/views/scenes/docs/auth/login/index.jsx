import React from 'react'
import { AuthConsumer } from 'contexts'

import Login from './Login'


export default props => (
  <AuthConsumer>
    {({ login, isAuthenticated }) => (
      <Login {...props} isAuthenticated={isAuthenticated} login={login} />
    )}
  </AuthConsumer>
)

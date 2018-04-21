import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { authService } from 'services'

const PrivateRoute = ({ component: ViewComponent, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      authService.isAuthenticated ? (
        <ViewComponent {...props} />
      ) : (
        <Redirect to={{ pathname: '/auth/login', state: { from: props.location } }} />
      )
    )
    }
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
  location: PropTypes.object
}

PrivateRoute.defaultProps = {
  location: {}
}

export default PrivateRoute

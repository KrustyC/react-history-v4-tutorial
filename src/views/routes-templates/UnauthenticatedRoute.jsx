import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { authService } from 'services'

const UnauthenticatedRoute = ({ component: ViewComponent, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      !authService.isAuthenticated ? (
        <ViewComponent {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    )
    }
  />
)

UnauthenticatedRoute.propTypes = {
  component: PropTypes.any.isRequired,
  location: PropTypes.object
}

UnauthenticatedRoute.defaultProps = {
  location: {}
}

export default UnauthenticatedRoute

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'


const PublicRoute = ({ component: ViewComponent, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <ViewComponent {...props} />
      </Layout>
    )}
  />
)

PublicRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.instanceOf(Component)
  ]).isRequired,
  layout: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.instanceOf(Component)
  ]).isRequired
}

export default PublicRoute

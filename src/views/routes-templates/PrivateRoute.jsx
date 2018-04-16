import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

export default class PrivateRoute extends Component {
  static propTypes = {
    component: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.instanceOf(Component)
    ]).isRequired,
    layout: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.instanceOf(Component)
    ]).isRequired
  }

  componentWillMount() {
    console.log('Am I authenticated?')
    // this.props.history.push('/login')
  }

  render() {
    const { component: ViewComponent, layout: Layout, ...rest } = this.props

    return (
      <Route
        {...rest}
        render={props => (
          <Layout>
            <ViewComponent {...props} />
          </Layout>
        )}
      />
    )
  }
}

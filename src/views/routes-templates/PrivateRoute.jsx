import React, { Component } from 'react'
import { Route } from 'react-router-dom'

export default class PrivateRoute extends Component {
  componentWillMount() {
    console.log('Am I authenticated?')
    // this.props.history.push('/login')
  }

  render() {
    return (
      <Route {...this.props} />
    )
  }
}

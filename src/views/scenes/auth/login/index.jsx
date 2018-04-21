import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import { authService } from 'services'

import { Button, Form, Title, Message } from './style'

export default class Login extends Component {
  static propTypes = {
    location: PropTypes.object
  }

  static defaultProps = {
    location: {}
  }

  state = {
    email: null,
    password: null,
    redirectToReferrer: false
  }

  onChange = ({ target: { name, value } }) => this.setState({ [name]: value })

  onLogin = () => {
    const { email, password } = this.state

    authService.login(email, password).then(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return <Redirect to={from} />
    }

    return (
      <Fragment>
        <Form>
          <Title>Login</Title>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Insert an email..."
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Insert a password..."
              onChange={this.onChange}
            />
          </div>
          <Button className="btn" onClick={this.onLogin}>Login</Button>
          <Message>This login is fake so you can provide whatever you want</Message>
        </Form>
      </Fragment>
    )
  }
}

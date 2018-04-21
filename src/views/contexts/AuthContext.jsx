import React, { Component } from 'react'
import PropTypes from 'prop-types'

const AuthContext = React.createContext()

const AuthConsumer = AuthContext.Consumer

class AuthProvider extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  state = {
    user: null,
    isAuthenticated: false
  }

  login = async (email, password) => {
    // here there should be the api call
    const fakeApiRequest = userEmail => (
      new Promise((resolve) => {
        const user = { email: userEmail, username: 'random' }
        setTimeout(() => resolve(user), 100)
      })
    )

    const user = await fakeApiRequest(email, password)
    this.setState({ isAuthenticated: true, user })
  }

  logout = () => {
    this.setState({ user: null, isAuthenticated: false })
  }

  render() {
    const { user, isAuthenticated } = this.state
    const { login, logout } = this
    const context = {
      user,
      isAuthenticated,
      login,
      logout
    }
    return (
      <AuthContext.Provider value={context}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export { AuthProvider, AuthConsumer }

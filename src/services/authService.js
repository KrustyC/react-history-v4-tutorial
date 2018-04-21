const authService = {
  isAuthenticated: false,
  login() {
    this.isAuthenticated = true
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 100)
    })
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

export default authService

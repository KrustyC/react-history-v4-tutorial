import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from 'contexts'

import theme from './themes'
import AppRoutes from './Routes'

const App = () => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <Router basename={process.env.BASE_URL}>
        <AppRoutes />
      </Router>
    </AuthProvider>
  </ThemeProvider>
)

export default App

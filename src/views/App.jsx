import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import AppRoutes from './Routes'

const App = () => (
  <Router basename={process.env.BASE_URL}>
    <AppRoutes />
  </Router>
)

export default App

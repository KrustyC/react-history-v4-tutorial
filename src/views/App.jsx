import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppRoutes from './routes'

const App = () => (
  <BrowserRouter basename={process.env.BASE_URL}>
    <AppRoutes />
  </BrowserRouter>
)

export default App

import React from 'react'
import { Link } from 'react-router-dom'
import { EmptyLayout } from 'layouts'

import Container from './style'

export default () => (
  <EmptyLayout>
    <Container>
      Ops! This page does not exist, but just click the button below to be redirect to the home page
      <Link to="/" className="btn btn-primary">Click Me :)</Link>
    </Container>
  </EmptyLayout>
)

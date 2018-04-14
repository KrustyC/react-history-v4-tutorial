import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ButtonBack = styled(Link)`
  margin-top: 20px;
`

export default () => (
  <Container>
    Ops! This page does not exist, but just click the button below to be redirect to the home page..
    <ButtonBack to="/" className="btn btn-primary">Click Me :)</ButtonBack>
  </Container>
)

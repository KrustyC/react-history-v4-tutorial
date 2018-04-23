import React from 'react'
import styled from 'styled-components'

const Icon = styled.i`
  width: 64px;
  text-align: center;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`

export default () => (
  <Icon >
    <Img src="/assets/images/react-logo.png" />
  </Icon>
)


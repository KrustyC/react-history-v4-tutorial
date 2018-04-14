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
    <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"/>
  </Icon>
)


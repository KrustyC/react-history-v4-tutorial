import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: ${props => (props.mt || '20px')};
  margin-bottom: ${props => (props.mb || '0px')};
`

export default props => (
  <Wrapper {...props}>
    <div className="divider" />
  </Wrapper>
)

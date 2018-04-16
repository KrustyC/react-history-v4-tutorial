import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  min-height: '100vh';
`

const EmptyLayout = ({ children }) => (
  <Container>
    {children}
  </Container>
)

EmptyLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.array,
    PropTypes.instanceOf(React.Component)
  ]).isRequired
}

export default EmptyLayout

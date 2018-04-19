import React from 'react'
import PropTypes from 'prop-types'

import { MainContainer } from 'components'

const EmptyLayout = ({ children }) => (
  <MainContainer>
    {children}
  </MainContainer>
)

EmptyLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.array,
    PropTypes.instanceOf(React.Component)
  ]).isRequired
}

export default EmptyLayout

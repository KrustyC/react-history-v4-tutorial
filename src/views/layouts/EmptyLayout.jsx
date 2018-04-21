import React from 'react'
import PropTypes from 'prop-types'

import { MainContainer } from 'components'

const EmptyLayout = ({ children }) => (
  <MainContainer>
    {children}
  </MainContainer>
)

EmptyLayout.propTypes = {
  children: PropTypes.any.isRequired
}

export default EmptyLayout

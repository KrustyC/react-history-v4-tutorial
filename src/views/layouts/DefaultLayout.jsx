import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { MainContainer, Navbar } from 'components'

const Content = styled.div`
  margin: 0;
  padding: 50px;
`

const Column = styled.div`
  min-height: 100%;
`

const DefaultLayout = ({ children }) => (
  <MainContainer>
    <Navbar />
    <Content className="columns">
      <Column className="column col-2" />
      <Column className="column col-8" >
        {children}
      </Column>
      <Column className="column col-2" />
    </Content>
  </MainContainer>
)

DefaultLayout.propTypes = {
  children: PropTypes.any.isRequired
}

export default DefaultLayout

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

import { Navbar } from 'components'

const Content = styled.div`
  margin: 0;
  padding: 50px;
`

const Column = styled.div`
  min-height: 100%;
`

const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <Fragment>
        <Navbar />
        <Content className="columns">
          <Column className="column col-2" />
          <Column className="column col-8" >
            <Component {...matchProps} />
          </Column>
          <Column className="column col-2" />
        </Content>
      </Fragment>
    )}
  />
)

DefaultLayout.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.instanceOf(React.Component)
  ]).isRequired
}

export default DefaultLayout

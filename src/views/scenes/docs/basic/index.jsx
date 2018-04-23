import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Link, Route } from 'react-router-dom'

import { DefaultLayout } from 'layouts'
import { P, LinksContainer } from 'components'

import History from './history'
import Links from './links'


const Basic = ({ match }) => (
  <DefaultLayout>
    <section>
      <P align="center">
        This page contain the basic stuff (might need to be renamed)
        <br />
        Just click one the Link below to checkout either link or history tutorial
      </P>
      <LinksContainer align="center">
        <Link className="btn btn-primary btn-lg" to={`${match.path}/history`}>History</Link>
        <Link className="btn btn-lg" to={`${match.path}/links`}>Links</Link>
      </LinksContainer>
    </section>
    <section>
      <Switch>
        <Route path={`${match.path}/history`} component={History} />
        <Route path={`${match.path}/links`} component={Links} />
      </Switch>
    </section>
  </DefaultLayout>
)

Basic.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired
  }).isRequired
}

export default Basic

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LinksContainer = styled.div`
  displaY: flex;
  justify-content: space-between;
`

export default class History extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  }

  onNavigate = ({ target: { name } }) => {
    this.props.history.push(`/${name}`)
  }

  render() {
    return (
      <div>
        <h1>
          History <small className="label">yarn add history</small>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis ligula
          scelerisque, accumsan eros at, sodales nibh. Mauris nec tellus quis massa auctor
          pellentesque. Ut vitae leo sit amet nunc viverra pharetra. Ut sem diam, cursus sit amet
          accumsan eu, fermentum ac enim. Nunc mattis nisl est, ut fermentum orci tincidunt at.
          Vivamus tristique, libero sed malesuada mattis, ex ipsum blandit augue, quis venenatis
        </p>
        <section>
          <h3>Example buttons </h3>
          <LinksContainer>
            <button className="btn btn-primary" name="home" onClick={this.onNavigate}>
              Home
            </button>
            <button className="btn btn-primary" name="history" onClick={this.onNavigate}>
              This Page
            </button>
            <button className="btn btn-primary" name="not-existsing" onClick={this.onNavigate}>
              Not Existsing
            </button>
          </LinksContainer>
        </section>
      </div>
    )
  }
}

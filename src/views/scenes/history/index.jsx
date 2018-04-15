import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { P, LinksContainer, Highlights, Divider } from 'components'
import { goBackSnippet, navigateSnippet } from './snippets'

console.log(Divider)

export default class History extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
      goBack: PropTypes.func.isRequired
    }).isRequired
  }

  onNavigate = ({ target: { name } }) => this.props.history.push(`/${name}`)

  onGoBack = () => this.props.history.goBack()

  render() {
    return (
      <div>
        <h1>History API</h1>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis ligula
          scelerisque, accumsan eros at, sodales nibh. Mauris nec tellus quis massa auctor
          pellentesque. Ut vitae leo sit amet nunc viverra pharetra. Ut sem diam, cursus sit amet
          accumsan eu, fermentum ac enim. Nunc mattis nisl est, ut fermentum orci tincidunt at.
          Vivamus tristique, libero sed malesuada mattis, ex ipsum blandit augue, quis venenatis
        </P>
        <section>
          <h2><small className="label">push()</small></h2>
          <P mt>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis ligula
            scelerisque, accumsan eros at, sodales nibh. Mauris nec tellus quis massa auctor
            pellentesque. Ut vitae leo sit amet nunc viverra pharetra. Ut sem diam, cursus sit amet
            accumsan eu, fermentum ac enim. Nunc mattis nisl est, ut fermentum orci tincidunt at.
            Vivamus tristique, libero sed malesuada mattis, ex ipsum blandit augue, quis venenatis
          </P>
          <LinksContainer className="btn-grooup">
            <button className="btn" name="" onClick={this.onNavigate}>
              go to home
            </button>
            <button className="btn btn-primary" name="history" onClick={this.onNavigate}>
              stay here
            </button>
            <button className="btn btn-error" name="not-existsing" onClick={this.onNavigate}>
              go to not found page
            </button>
          </LinksContainer>
          <Highlights>{navigateSnippet}</Highlights>
        </section>
        <Divider mt="20px" mb="20px" />
        <section>
          <h2><small className="label">goBack()</small></h2>
          <P mt>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis ligula
            scelerisque, accumsan eros at, sodales nibh. Mauris nec tellus quis massa auctor
            pellentesque. Ut vitae leo sit amet nunc viverra pharetra. Ut sem diam, cursus sit amet
            accumsan eu, fermentum ac enim. Nunc mattis nisl est, ut fermentum orci tincidunt at.
            Vivamus tristique, libero sed malesuada mattis, ex ipsum blandit augue, quis venenatis
          </P>
          <LinksContainer>
            <button className="btn" name="home" onClick={this.onGoBack}>
              go back
            </button>
          </LinksContainer>
          <Highlights>{goBackSnippet}</Highlights>
        </section>
      </div>
    )
  }
}

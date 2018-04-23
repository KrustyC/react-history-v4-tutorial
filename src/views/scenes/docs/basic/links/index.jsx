import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { P, LinksContainer } from 'components'

export default () => (
  <Fragment>
    <h1>Links</h1>
    <P>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis ligula
      scelerisque, accumsan eros at, sodales nibh. Mauris nec tellus quis massa auctor
      pellentesque. Ut vitae leo sit amet nunc viverra pharetra. Ut sem diam, cursus sit amet
      accumsan eu, fermentum ac enim. Nunc mattis nisl est, ut fermentum orci tincidunt at.
      Vivamus tristique, libero sed malesuada mattis, ex ipsum blandit augue, quis venenatis
    </P>
    <section>
      <h2>Internal Links</h2>
      <LinksContainer>
        <Link className="btn btn-link" to="/home">
          go to home
        </Link>
        <Link className="btn btn-link" to="/links">
          stay here
        </Link>
        <Link className="btn btn-link" to="/not-found">
          go to not found page
        </Link>
      </LinksContainer>
      <P mt>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis ligula
        scelerisque, accumsan eros at, sodales nibh. Mauris nec tellus quis massa auctor
        pellentesque. Ut vitae leo sit amet nunc viverra pharetra. Ut sem diam, cursus sit amet
        accumsan eu, fermentum ac enim. Nunc mattis nisl est, ut fermentum orci tincidunt at.
        Vivamus tristique, libero sed malesuada mattis, ex ipsum blandit augue, quis venenatis
      </P>
    </section>
    <section>
      <h2>External Links</h2>
      <LinksContainer>
        <a
          className="btn btn-link"
          href="https://github.com/KrustyC/react-history-v4-tutorial"
          rel="noopener noreferrer"
          target="_blank"
        >
          This repo
        </a>
        <a
          className="btn btn-link"
          href="https://picturepan2.github.io/spectre/elements.html#buttons"
          rel="noopener noreferrer"
          target="_blank"
        >
          Spectre.css
        </a>
      </LinksContainer>
      <P mt>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis ligula
        scelerisque, accumsan eros at, sodales nibh. Mauris nec tellus quis massa auctor
        pellentesque. Ut vitae leo sit amet nunc viverra pharetra. Ut sem diam, cursus sit amet
        accumsan eu, fermentum ac enim. Nunc mattis nisl est, ut fermentum orci tincidunt at.
        Vivamus tristique, libero sed malesuada mattis, ex ipsum blandit augue, quis venenatis
      </P>
    </section>
  </Fragment>
)


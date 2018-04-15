import React from 'react'
import PropTypes from 'prop-types'
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light'
import jsx from 'react-syntax-highlighter/languages/prism/jsx'
import { prism } from 'react-syntax-highlighter/styles/prism'

registerLanguage('jsx', jsx)

const Highlights = ({ children }) => (
  <div style={{ marginTop: '25px' }}>
    <SyntaxHighlighter
      language="jsx"
      style={prism}
    >
      {children}
    </SyntaxHighlighter>
  </div>
)

Highlights.propTypes = {
  children: PropTypes.string.isRequired
}

export default Highlights

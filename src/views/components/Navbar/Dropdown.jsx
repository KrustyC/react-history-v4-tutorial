import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledDropdown = styled.div`
  .menu {
    position: absolute;
    display: ${({ open }) => (open ? 'block' : 'none')};
  }
`

export default class Dropdown extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  state = {
    open: false
  }

  onToggle = () => this.setState({ open: !this.state.open })

  render() {
    return (
      <StyledDropdown open={this.state.open}>
        <button className="btn btn-link" onClick={this.onToggle}>
          Docs
        </button>
        <ul className="menu">
          { React.Children.map(this.props.children, link => (<li>{link}</li>))}
        </ul>
      </StyledDropdown>
    )
  }
}

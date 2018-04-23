import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import { ifProp } from 'styled-tools'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
`

const StyledDropdown = styled.div`
  .menu {
    position: absolute;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    opacity: 0;
    display: none;
    animation: ${fadeIn} .4s ease-in-out;
    ${ifProp('open', css`
      display: block;
      opacity: 1;
    `)}
  }
`

export default class Dropdown extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      open: false
    }

    this.dropdownRef = React.createRef()
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false)
  }

  onToggle = () => this.setState({ open: !this.state.open })

  handleClick = (e) => {
    e.preventDefault()

    if (this.dropdownRef.current.contains(e.target)) {
      return
    }

    // user is clicking outside
    this.setState({ open: false })
  }

  render() {
    return (
      <StyledDropdown open={this.state.open} innerRef={this.dropdownRef}>
        <button className="btn btn-link" onClick={this.onToggle}>
          Docs <i className="icon icon-arrow-down" />
        </button>
        <ul className="menu">
          {React.Children.map(this.props.children, link => (<li>{link}</li>))}
        </ul>
      </StyledDropdown>
    )
  }
}

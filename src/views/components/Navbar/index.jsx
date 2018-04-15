import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from './Logo'


const Header = styled.header`
  height: 64px;
  padding-left: 19%;
  padding-right: 19%;
  background: white;
  border-bottom: 1px solid #ecf0f1;
`

const Navbar = () => (
  <Header className="navbar">
    <section className="navbar-section">
      <Link to="/" className="btn btn-link">Home</Link>
      <Link to="/links" className="btn btn-link">Links</Link>
      <Link to="/history" className="btn btn-link">History</Link>
    </section>
    <section className="navbar-center">
      <Logo />
    </section>
    <section className="navbar-section">
      <a
        href="https://github.com/KrustyC/react-history-v4-tutorial"
        className="btn btn-primary"
        rel="noopener noreferrer"
        target="_blank"
      >
        GitHub
      </a>
    </section>
  </Header>
)

export default Navbar

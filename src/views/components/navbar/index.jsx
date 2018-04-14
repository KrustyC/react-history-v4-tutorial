import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from './Logo'


const Header = styled.header`
  height: 64px;
  padding-left: 50px;
  padding-right: 50px;
  background: white;
  border-bottom: 1px solid #ecf0f1;
`

const Navbar = () => (
  <Header className="navbar">
    <section className="navbar-section">
      <Link to="/" className="btn btn-link">Home</Link>
      <Link to="/history" className="btn btn-link">Dashboard</Link>
      <Link to="/not-existing" className="btn btn-link">Not Existing</Link>
    </section>
    <section className="navbar-center">
      <Logo />
    </section>
    <section className="navbar-section">
      <Link to="#" className="btn btn-primary">GitHub</Link>
    </section>
  </Header>
)

export default Navbar

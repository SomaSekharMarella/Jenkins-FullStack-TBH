import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{
      background: "#515d8fff",
      padding: "15px",
      display: "flex",
      justifyContent: "center",
      gap: "20px"
    }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
      <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
      <Link to="/team" style={{ color: "white", textDecoration: "none" }}>Team</Link>
      <Link to="/events" style={{ color: "white", textDecoration: "none" }}>Events</Link>
      <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact Us</Link>
    </nav>
  )
}

export default Navbar

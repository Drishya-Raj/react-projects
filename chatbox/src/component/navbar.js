import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>CHATAPP</li>
          <Link to="/table">
            <li>USER DETAILS</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
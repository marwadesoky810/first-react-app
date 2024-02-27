import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function NavBar() {

    return (

        <div>
           <nav className="navbar navbar-expand-lg navbar-light py-4">
      <div className="container">
        <Link className="navbar-brand text-white fw-bolder fs-2" to='/about'>START FRAMEWORK</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-uppercase text-white fw-bold me-3 " aria-current="page" to='/about'>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase text-white fw-bold me-3" to='/portfolio'>Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase text-white fw-bold me-3" to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        </div>

    )
}